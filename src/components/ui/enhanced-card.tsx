
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface EnhancedCardProps extends Omit<HTMLMotionProps<"div">, "onAnimationStart" | "onAnimationEnd"> {
  children: React.ReactNode;
  hover?: boolean;
  gradient?: boolean;
  shadow?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export const EnhancedCard = React.forwardRef<HTMLDivElement, EnhancedCardProps>(
  ({ className, children, hover = true, gradient = false, shadow = 'lg', ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "rounded-2xl border transition-all duration-300",
          gradient 
            ? "bg-gradient-to-br from-white/80 to-amber-50/80 dark:from-gray-800/80 dark:to-gray-700/80" 
            : "bg-white/80 dark:bg-gray-800/80",
          "backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50",
          hover && "hover:shadow-2xl hover:border-amber-200 dark:hover:border-amber-600",
          shadow === 'sm' && "shadow-sm",
          shadow === 'md' && "shadow-md",
          shadow === 'lg' && "shadow-lg",
          shadow === 'xl' && "shadow-xl",
          shadow === '2xl' && "shadow-2xl",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

EnhancedCard.displayName = "EnhancedCard";

interface EnhancedCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const EnhancedCardHeader = React.forwardRef<HTMLDivElement, EnhancedCardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col space-y-1.5 p-6", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

EnhancedCardHeader.displayName = "EnhancedCardHeader";

interface EnhancedCardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const EnhancedCardContent = React.forwardRef<HTMLDivElement, EnhancedCardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("p-6 pt-0", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

EnhancedCardContent.displayName = "EnhancedCardContent";
