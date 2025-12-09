import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  variant?: 'default' | 'elevated' | 'outlined';
  hoverEffect?: boolean;
  className?: string;
  delay?: number;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  icon: Icon,
  variant = 'default',
  hoverEffect = true,
  className = '',
  delay = 0,
}) => {
  const baseStyles = 'rounded-xl p-6 md:p-8 transition-all duration-300';

  const variantStyles = {
    default: 'bg-white',
    elevated: 'bg-white shadow-md',
    outlined: 'bg-fundal-principal border-2 border-fundal-secundar',
  };

  const hoverStyles = hoverEffect ? 'hover:shadow-lg hover:-translate-y-1 cursor-pointer' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`}
    >
      {Icon && (
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-fundal-secundar text-primar">
          <Icon className="w-6 h-6" />
        </div>
      )}
      <h3 className="text-2xl font-medium mb-3 text-text-principal font-titlu">{title}</h3>
      <p className="text-text-secundar leading-relaxed-custom">{description}</p>
    </motion.div>
  );
};
