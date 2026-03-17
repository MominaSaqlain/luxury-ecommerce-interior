import { motion } from "framer-motion"
import Navbar from "../../components/layout/Navbar"
import AnnouncementBar from "../../components/layout/AnnouncementBar"
import Footer from "../../components/layout/Footer"

function Login() {
  return (
    <div className="bg-gradient-to-br from-softCream to-beige/50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <AnnouncementBar />
      <Navbar />
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-gold/20 p-8 lg:p-10"
        >
          <div className="text-center mb-10">
            <h1 className="font-serif text-4xl lg:text-5xl font-light text-forestGreen mb-4 bg-gradient-to-r from-gold via-beige/50 bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <p className="text-forestGreen/70">
              Sign in to your MUQA'S INTERIORS account
            </p>
          </div>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-forestGreen/80 mb-2">Email Address</label>
              <input 
                type="email" 
                className="w-full px-4 py-4 bg-white/30 border border-beige/30 rounded-2xl text-forestGreen placeholder-forestGreen/50 focus:ring-3 focus:ring-gold/30 focus:border-gold/50 transition-all duration-400 shadow-inner hover:shadow-lg"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-forestGreen/80 mb-2">Password</label>
              <div className="relative">
                <input 
                  type="password" 
                  className="w-full px-4 py-4 bg-white/30 border border-beige/30 rounded-2xl text-forestGreen placeholder-forestGreen/50 focus:ring-3 focus:ring-gold/30 focus:border-gold/50 transition-all duration-400 pr-12 shadow-inner hover:shadow-lg"
                  placeholder="••••••••"
                />
                <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <svg className="w-5 h-5 text-forestGreen/50 hover:text-forestGreen transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-beige/30 text-gold focus:ring-gold" />
                <span className="ml-2 text-sm text-forestGreen/70">Remember me</span>
              </label>
              <a href="#" className="text-sm font-medium text-gold hover:text-gold/80 transition-colors">
                Forgot Password?
              </a>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-gold to-beige text-forestGreen py-5 px-6 rounded-2xl font-serif font-semibold text-lg uppercase tracking-wide shadow-xl hover:shadow-glow hover:shadow-2xl ring-2 ring-gold/30 hover:ring-gold/50 transition-all duration-500 flex items-center justify-center gap-2"
            >
              Sign In
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14" />
              </svg>
            </motion.button>
          </form>
          
          <div className="mt-8 text-center space-y-4">
            <p className="text-forestGreen/60">
              Don't have an account?{' '}
              <a href="#" className="font-medium text-gold hover:text-gold/80 transition-colors">Create one now</a>
            </p>
            <div className="flex items-center justify-center gap-3 pt-6 border-t border-beige/30">
              <p className="text-xs text-forestGreen/50 uppercase tracking-wider">Or continue with</p>
            </div>
            <div className="flex gap-4">
              <button className="flex-1 bg-white/30 p-3 rounded-xl border border-gold/20 hover:bg-white/50 transition-all duration-300 shadow-md hover:shadow-glow">
                <svg className="w-5 h-5 mx-auto text-forestGreen" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.8 1 4.07 3.54 2.27 6.32l4.67 3.65c.88-2.43 3.03-4.2 5.56-4.2 1.33 0 2.55.41 3.56 1.11l-1.06.81c-.6-.52-1.34-.83-2.16-.83-.97 0-1.81.49-2.34 1.24L12 5.38z"/>
                </svg>
              </button>
              <button className="flex-1 bg-white/30 p-3 rounded-xl border border-gold/20 hover:bg-white/50 transition-all duration-300 shadow-md hover:shadow-glow">
                <svg className="w-5 h-5 mx-auto text-forestGreen" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.08 4.82a1.6 1.6 0 00-1.62-.54L15.09 5l-.77-2.73A1.6 1.6 0 0012.47 1H4.92a1.6 1.6 0 00-1.59 1.29l-.71 2.53a1.6 1.6 0 00.54 1.62l8.22 4.73a1.6 1.6 0 001.57 0l8.22-4.73zM21 11.49a1.6 1.6 0 00-1.28-1.56l-9.29-2.15-.98-3.47a1.6 1.6 0 00-1.57-.81H5.99a1.6 1.6 0 00-1.59 1.29l-.71 2.53a1.6 1.6 0 00.54 1.62l2.11.73v9.35a1.6 1.6 0 001.59 1.6h11a1.6 1.6 0 001.59-1.6v-9.35l2.11-.73z"/>
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

export default Login

