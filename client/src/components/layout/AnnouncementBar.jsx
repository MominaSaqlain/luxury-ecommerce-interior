import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Link } from "react-router-dom"

function AnnouncementBar() {
  const [isClosed, setIsClosed] = useState(false)

  return (
    <AnimatePresence>
      {!isClosed && (
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          className="bg-charcoal text-white px-4 py-2 text-center text-xs font-medium tracking-wide"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-center relative">
            <span>
              Transform your space today. <Link to="/style-quiz" className="underline hover:text-primary-200 ml-1">Take our Style Quiz →</Link>
            </span>
            <button
              onClick={() => setIsClosed(true)}
              className="absolute right-0 text-primary-300 hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AnnouncementBar

