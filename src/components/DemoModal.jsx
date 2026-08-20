import { FiX } from 'react-icons/fi';

export default function DemoModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-6 md:p-8 max-w-2xl w-full shadow-2xl relative">
        
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 dark:hover:text-white transition"
        >
          <FiX size={20} />
        </button>

        <div className="flex items-center gap-2 mb-4">
          <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Live Demo Session
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Sprint 24 Retrospective Demo
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
          This is an interactive preview. Members of your team can add cards and vote in real time.
        </p>

        {/* Demo Board Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 rounded-2xl">
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">Went Well (4)</span>
            <div className="mt-2 p-3 bg-white dark:bg-gray-800 rounded-xl text-xs text-gray-700 dark:text-gray-200 shadow-sm border border-emerald-100 dark:border-emerald-900/30">
              Checkout latency dropped after the promo fix 🎉
            </div>
          </div>

          <div className="p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-2xl">
            <span className="text-xs font-bold text-amber-700 dark:text-amber-400">To Improve (2)</span>
            <div className="mt-2 p-3 bg-white dark:bg-gray-800 rounded-xl text-xs text-gray-700 dark:text-gray-200 shadow-sm border border-amber-100 dark:border-amber-900/30">
              Release notes landed too late for CS team.
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <button 
            onClick={onClose} 
            className="px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
          >
            Close preview
          </button>
        </div>

      </div>
    </div>
  );
}