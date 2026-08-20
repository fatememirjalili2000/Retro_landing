import { Link } from 'react-router-dom';

export default function Navbar({ darkMode, setDarkMode, openAuth }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#FDFBF9]/80 dark:bg-[#0A0A0C]/80 border-b border-gray-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#FF5733] rounded-lg flex items-center justify-center text-white font-bold text-lg">
            H
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">
            HeyRetro
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-neutral-400">
          <button 
            onClick={() => scrollToSection('features')} 
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Contact
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-neutral-300 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors text-sm"
            aria-label="Toggle Theme"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          <button
            onClick={() => openAuth('login')}
            className="text-sm font-medium text-gray-600 dark:text-neutral-300 hover:text-gray-900 dark:hover:text-white transition-colors hidden sm:block"
          >
            Log In
          </button>

          <button
            onClick={() => openAuth('signup')}
            className="bg-[#FF5733] hover:bg-[#e04826] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-sm"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}