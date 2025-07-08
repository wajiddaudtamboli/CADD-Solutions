
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface EnhancedCardProps extends Omit<HTMLMotionProps<"div">, "onAnimationStart" | "onAnimationEnd"> {
  children: React.ReactNode;
  hover?: boolean;
  gradient?: boolean;
  glowing?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const EnhancedCard = React.forwardRef<HTMLDivElement, EnhancedCardProps>(
  ({ className, children, hover = true, gradient = false, glowing = false, size = 'md', ...props }, ref) => {
    const sizeClasses = {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8'
    };

    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "rounded-2xl border transition-all duration-300",
          gradient 
            ? "bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-700/90" 
            : "bg-white/80 dark:bg-gray-800/80",
          "backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50",
          hover && "hover:shadow-elegant-lg hover:border-amber-200 dark:hover:border-amber-600",
          glowing && "shadow-elegant hover:shadow-amber-500/25 dark:hover:shadow-amber-400/25",
          "shadow-elegant",
          sizeClasses[size],
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
        className={cn("flex flex-col space-y-2 mb-4", className)}
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
        className={cn("", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

EnhancedCardContent.displayName = "EnhancedCardContent";
