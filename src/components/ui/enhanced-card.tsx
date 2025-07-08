
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface EnhancedCardProps extends Omit<HTMLMotionProps<"div">, "onAnimationStart" | "onAnimationEnd"> {
  children: React.ReactNode;
  hover?: boolean;
  gradient?: boolean;
  glowing?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'glass' | 'elevated';
}

export const EnhancedCard = React.forwardRef<HTMLDivElement, EnhancedCardProps>(
  ({ className, children, hover = true, gradient = false, glowing = false, size = 'md', variant = 'default', ...props }, ref) => {
    const sizeClasses = {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8'
    };

    const variantClasses = {
      default: "bg-white/90 dark:bg-gray-800/90 border border-gray-200/50 dark:border-gray-700/50",
      glass: "bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-white/20 dark:border-gray-700/20",
      elevated: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl"
    };

    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { y: -8, scale: 1.02 } : undefined}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={cn(
          "rounded-2xl lg:rounded-3xl transition-all duration-500",
          variantClasses[variant],
          gradient && "bg-gradient-to-br from-white/95 via-gray-50/90 to-white/95 dark:from-gray-800/95 dark:via-gray-700/90 dark:to-gray-800/95",
          hover && "hover:shadow-2xl hover:shadow-amber-500/10 dark:hover:shadow-amber-400/5",
          glowing && "shadow-lg hover:shadow-amber-500/20 dark:hover:shadow-amber-400/10",
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
  centered?: boolean;
}

export const EnhancedCardHeader = React.forwardRef<HTMLDivElement, EnhancedCardHeaderProps>(
  ({ className, children, centered = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col space-y-3 mb-6",
          centered && "text-center items-center",
          className
        )}
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
        className={cn("space-y-4", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

EnhancedCardContent.displayName = "EnhancedCardContent";

interface IconContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  color?: 'default' | 'amber' | 'blue' | 'green' | 'purple';
}

export const IconContainer = React.forwardRef<HTMLDivElement, IconContainerProps>(
  ({ className, children, size = 'md', color = 'default', ...props }, ref) => {
    const sizeClasses = {
      sm: 'w-12 h-12',
      md: 'w-16 h-16',
      lg: 'w-20 h-20'
    };

    const colorClasses = {
      default: 'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 text-gray-600 dark:text-gray-300',
      amber: 'bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/25',
      blue: 'bg-gradient-to-br from-blue-500 to-cyan-600 text-white shadow-lg shadow-blue-500/25',
      green: 'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/25',
      purple: 'bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/25'
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl flex items-center justify-center mb-6 transition-all duration-300",
          sizeClasses[size],
          colorClasses[color],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

IconContainer.displayName = "IconContainer";
