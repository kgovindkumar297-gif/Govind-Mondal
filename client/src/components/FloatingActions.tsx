import { MessageCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export function FloatingActions() {
  const whatsappNumber = "8434586868"; // From context
  const phoneNumber = "8434586868"; // From context

  return (
    <>
      <motion.a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg shadow-green-500/20 cursor-pointer"
      >
        <MessageCircle size={24} fill="currentColor" />
      </motion.a>

      <motion.a
        href={`tel:${phoneNumber}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 left-6 z-40 bg-primary hover:bg-primary/90 text-white p-4 rounded-full shadow-lg shadow-primary/20 cursor-pointer"
      >
        <Phone size={24} fill="currentColor" />
      </motion.a>
    </>
  );
}
