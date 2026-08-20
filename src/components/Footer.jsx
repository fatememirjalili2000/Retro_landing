import React from 'react';
import { FiSmile } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-lg font-black">
              <FiSmile />
            </div>
            <span className="text-xl font-black text-white">HeyRetro</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <a href="#" className="hover:text-white transition-colors">Agile Guides</a>
          </div>
        </div>

        <div className="text-center md:text-left border-t border-slate-900 pt-8 text-xs text-slate-500">
          © 2026 HeyRetro Clone. Designed & Built for React & Tailwind Portfolio.
        </div>

      </div>
    </footer>
  );
}