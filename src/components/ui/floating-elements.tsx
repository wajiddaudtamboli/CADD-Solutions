
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
    sm: 'w-32 h-32',
    md: 'w-64 h-64',
    lg: 'w-96 h-96'
  };

  const colorClasses = {
    amber: 'bg-amber-300/20',
    orange: 'bg-orange-300/20',
    blue: 'bg-blue-300/20',
    purple: 'bg-purple-300/20'
  };

  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0'
  };

  return (
    <motion.div
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]} ${colorClasses[color]} rounded-full blur-3xl pointer-events-none`}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 4,
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
          className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export const GridPattern = () => (
  <div 
    className="absolute inset-0 opacity-5 dark:opacity-10" 
    style={{
      backgroundImage: `
        linear-gradient(rgba(245, 158, 11, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px)
      `,
      backgroundSize: '40px 40px'
    }}
  />
);
