import { FiSun, FiMoon } from 'react-icons/fi';

export default function Navbar({ darkMode, setDarkMode, openAuth }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-[#0A0A0C]/80 border-b border-gray-200/50 dark:border-neutral-800/80 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-7 h-7 bg-[#FF5733] rounded-lg flex items-center justify-center text-white font-bold text-sm">
            H
          </div>
          <span className="font-bold text-lg text-gray-900 dark:text-white tracking-tight">HeyRetro</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-neutral-300">
          <a href="#features" className="hover:text-gray-900 dark:hover:text-white transition-colors">Features</a>
          <a href="#phases" className="hover:text-gray-900 dark:hover:text-white transition-colors">Phases</a>
          <a href="#pricing" className="hover:text-gray-900 dark:hover:text-white transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          <button 
            onClick={() => openAuth('login')}
            className="text-sm font-medium text-gray-700 dark:text-neutral-200 hover:text-gray-900 dark:hover:text-white px-3 py-1.5"
          >
            Log in
          </button>

          <button 
            onClick={() => openAuth('signup')}
            className="text-sm font-medium bg-gray-900 dark:bg-neutral-800 hover:bg-gray-800 dark:hover:bg-neutral-700 text-white px-4 py-1.5 rounded-full border border-transparent dark:border-neutral-700 transition-all"
          >
            Sign up
          </button>
        </div>

      </div>
    </header>
  );
}