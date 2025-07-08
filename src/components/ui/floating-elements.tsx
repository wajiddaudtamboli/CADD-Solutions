
import React from 'react';
import { motion } from 'framer-motion';

export const FloatingOrb = ({ 
  size = 'md', 
  color = 'amber', 
  position = 'top-right',
  delay = 0 
}: {
  size?: 'sm' | 'md' | 'lg';
  color?: 'amber' | 'orange' | 'blue' | 'purple';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  delay?: number;
}) => {
  const sizeClasses = {
    sm: 'w-32 h-32 lg:w-48 lg:h-48',
    md: 'w-48 h-48 lg:w-64 lg:h-64',
    lg: 'w-64 h-64 lg:w-96 lg:h-96'
  };

  const colorClasses = {
    amber: 'bg-gradient-to-br from-amber-300/30 to-orange-400/20',
    orange: 'bg-gradient-to-br from-orange-300/30 to-red-400/20',
    blue: 'bg-gradient-to-br from-blue-300/30 to-cyan-400/20',
    purple: 'bg-gradient-to-br from-purple-300/30 to-pink-400/20'
  };

  const positionClasses = {
    'top-left': '-top-16 -left-16 lg:-top-24 lg:-left-24',
    'top-right': '-top-16 -right-16 lg:-top-24 lg:-right-24',
    'bottom-left': '-bottom-16 -left-16 lg:-bottom-24 lg:-left-24',
    'bottom-right': '-bottom-16 -right-16 lg:-bottom-24 lg:-right-24'
  };

  return (
    <motion.div
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]} ${colorClasses[color]} rounded-full blur-3xl pointer-events-none`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
    />
  );
};

export const ParticleField = ({ count = 50 }: { count?: number }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-amber-400/40 to-orange-400/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export const GridPattern = () => (
  <div 
    className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" 
    style={{
      backgroundImage: `
        linear-gradient(rgba(245, 158, 11, 0.3) 1px, transparent 1px),
        linear-gradient(90deg, rgba(245, 158, 11, 0.3) 1px, transparent 1px)
      `,
      backgroundSize: '60px 60px'
    }}
  />
);

export const EnhancedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Main gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-transparent to-orange-50/30 dark:from-amber-900/10 dark:to-orange-900/5" />
    
    {/* Animated shapes */}
    <motion.div
      className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/5 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    
    <motion.div
      className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-gradient-to-br from-green-400/10 to-teal-400/5 rounded-full blur-3xl"
      animate={{
        scale: [1.2, 1, 1.2],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }}
    />
  </div>
);
