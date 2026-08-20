
import   { useState } from 'react';
import { FiX, FiMessageSquare } from 'react-icons/fi';

export default function AuthModal({ type = 'signup', onClose }) {
  const [isLogin, setIsLogin] = useState(type === 'login');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 max-w-md w-full shadow-2xl relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 dark:hover:text-white transition"
        >
          <FiX size={20} />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-6">
          <div className="text-[#FF5733] bg-[#FF5733]/10 p-2 rounded-xl">
            <FiMessageSquare className="w-6 h-6 fill-current" />
          </div>
          <span className="text-xl font-bold dark:text-white">HeyRetro</span>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {isLogin ? 'Welcome back' : 'Start your free retro'}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
          {isLogin ? 'Enter your credentials to access your workspaces.' : 'No credit card required. Free forever for small teams.'}
        </p>

        {/* Form Inputs */}
        <form onSubmit={(e) => { e.preventDefault(); alert(isLogin ? 'Logged in!' : 'Account created!'); onClose(); }} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Work Email</label>
              <input 
                type="email" 
                required 
                placeholder="you@company.com" 
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5733]"
              />
            </div>
          )}
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input 
              type="email" 
              required 
              placeholder="name@domain.com" 
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5733]"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
            <input 
              type="password" 
              required 
              placeholder="••••••••" 
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5733]"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#FF5733] hover:bg-[#e04826] text-white font-semibold py-3 rounded-xl transition text-sm shadow-md mt-2"
          >
            {isLogin ? 'Log in' : 'Create free account'}
          </button>
        </form>

        {/* Footer Toggle */}
        <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="text-[#FF5733] font-semibold hover:underline"
          >
            {isLogin ? 'Sign up' : 'Log in'}
          </button>
        </div>

      </div>
    </div>
  );
}