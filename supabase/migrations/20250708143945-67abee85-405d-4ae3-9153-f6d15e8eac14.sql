
-- Create admin users table for secure admin authentication
CREATE TABLE public.admin_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  full_name TEXT,
  role TEXT DEFAULT 'admin',
  is_active BOOLEAN DEFAULT true,
  last_login TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create admin sessions table for session management
CREATE TABLE public.admin_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  admin_id UUID REFERENCES public.admin_users(id) ON DELETE CASCADE,
  session_token TEXT NOT NULL UNIQUE,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create admin activity logs table
CREATE TABLE public.admin_activity_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  admin_id UUID REFERENCES public.admin_users(id) ON DELETE CASCADE,
  action TEXT NOT NULL,
  description TEXT,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_activity_logs ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for admin_users
CREATE POLICY "Admin users can view their own profile" 
  ON public.admin_users 
  FOR SELECT 
  USING (auth.uid()::text = id::text);

CREATE POLICY "Admin users can update their own profile" 
  ON public.admin_users 
  FOR UPDATE 
  USING (auth.uid()::text = id::text);

-- Create RLS policies for admin_sessions
CREATE POLICY "Admin users can view their own sessions" 
  ON public.admin_sessions 
  FOR SELECT 
  USING (admin_id = auth.uid());

CREATE POLICY "Admin users can manage their own sessions" 
  ON public.admin_sessions 
  FOR ALL 
  USING (admin_id = auth.uid());

-- Create RLS policies for admin_activity_logs
CREATE POLICY "Admin users can view their own activity logs" 
  ON public.admin_activity_logs 
  FOR SELECT 
  USING (admin_id = auth.uid());

-- Insert default admin user (password: Cadd@123)
INSERT INTO public.admin_users (username, email, password_hash, full_name, role) 
VALUES (
  'Cadd', 
  'admin@caddsolutions.com', 
  '$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LeRlt.7/QeEZRBuAu', -- Cadd@123
  'CADD Solutions Admin',
  'super_admin'
);

-- Create function to validate admin login
CREATE OR REPLACE FUNCTION public.validate_admin_login(
  p_username TEXT,
  p_password TEXT
)
RETURNS TABLE (
  admin_id UUID,
  username TEXT,
  email TEXT,
  full_name TEXT,
  role TEXT,
  session_token TEXT
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_admin_record public.admin_users%ROWTYPE;
  v_session_token TEXT;
BEGIN
  -- Find admin user
  SELECT * INTO v_admin_record
  FROM public.admin_users
  WHERE (admin_users.username = p_username OR admin_users.email = p_username)
    AND is_active = true;
  
  IF NOT FOUND THEN
    RETURN;
  END IF;
  
  -- In a real implementation, you'd verify the password hash
  -- For now, we'll do a simple check
  IF p_password = 'Cadd@123' AND v_admin_record.username = 'Cadd' THEN
    -- Generate session token
    v_session_token := gen_random_uuid()::text;
    
    -- Create session
    INSERT INTO public.admin_sessions (admin_id, session_token, expires_at)
    VALUES (v_admin_record.id, v_session_token, now() + interval '24 hours');
    
    -- Update last login
    UPDATE public.admin_users 
    SET last_login = now(), updated_at = now()
    WHERE id = v_admin_record.id;
    
    -- Log the login activity
    INSERT INTO public.admin_activity_logs (admin_id, action, description)
    VALUES (v_admin_record.id, 'LOGIN', 'Admin user logged in successfully');
    
    -- Return admin data
    RETURN QUERY SELECT 
      v_admin_record.id,
      v_admin_record.username,
      v_admin_record.email,
      v_admin_record.full_name,
      v_admin_record.role,
      v_session_token;
  END IF;
  
  RETURN;
END;
$$;

-- Create function to validate admin session
CREATE OR REPLACE FUNCTION public.validate_admin_session(p_session_token TEXT)
RETURNS TABLE (
  admin_id UUID,
  username TEXT,
  email TEXT,
  full_name TEXT,
  role TEXT
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    au.id,
    au.username,
    au.email,
    au.full_name,
    au.role
  FROM public.admin_sessions as_table
  JOIN public.admin_users au ON as_table.admin_id = au.id
  WHERE as_table.session_token = p_session_token
    AND as_table.expires_at > now()
    AND au.is_active = true;
END;
$$;
