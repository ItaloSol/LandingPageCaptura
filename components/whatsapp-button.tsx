"use client";

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { generateWhatsAppLink } from '@/lib/whatsapp';

export default function WhatsappButton() {
  return (
    <motion.a
      href={generateWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1.5
      }}
    >
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  );
}