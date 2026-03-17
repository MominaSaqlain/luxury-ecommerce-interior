import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children, title = '' }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[1000] flex items-center justify-center p-6 lg:p-12 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.7, opacity: 0 }}
          className="relative max-w-4xl w-full max-h-[90vh] overflow-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 max-w-6xl mx-auto lg:mx-0"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-3xl shadow-xl flex items-center justify-center text-charcoal hover:bg-red-500 hover:text-white transition-all duration-300 z-10 border-4 border-white"
            onClick={onClose}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>

          {/* Header */}
          {title && (
            <div className="p-8 lg:p-12 border-b border-gray-100">
              <h2 className="font-serif text-3xl lg:text-4xl font-light text-charcoal">{title}</h2>
            </div>
          )}

          {/* Content */}
          <div className="p-8 lg:p-12 max-h-[70vh] overflow-auto">
            {children}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;

