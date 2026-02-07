import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  alignment?: 'left' | 'center';
}

export function SectionHeader({ title, subtitle, alignment = 'center' }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
      >
        {subtitle}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold font-display"
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={`h-1 w-20 bg-gradient-to-r from-primary to-purple-600 mt-4 rounded-full ${alignment === 'center' ? 'mx-auto' : ''}`}
      />
    </div>
  );
}
