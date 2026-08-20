import { FiArrowRight, FiClock } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';


export default function Hero({ openAuth}) {

  const navigate = useNavigate();
  return (
    <section className="relative pt-16 pb-24 px-4 overflow-hidden bg-[#FDFBF9] dark:bg-[#0A0A0C] transition-colors duration-300">
      
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FF5733]/15 dark:bg-[#FF5733]/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-6">
          Retros your team <br className="hidden sm:inline" />
          will look <span className="text-gray-400 dark:text-neutral-500 font-normal">forward to</span>
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-600 dark:text-neutral-400 leading-relaxed mb-8">
          Run the retro together on one live board, from the first icebreaker to the last vote. 
          Templates, timers, anonymous surveys, and action items keep the meeting moving seamlessly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
          <button 
            onClick={openAuth}
            className="w-full sm:w-auto bg-gray-900 dark:bg-[#FF5733] hover:bg-gray-800 dark:hover:bg-[#e04826] text-white font-medium px-7 py-3.5 rounded-full transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:scale-105 cursor-pointer text-sm"
          >
            <span>Start free retro</span>
            <FiArrowRight />
          </button>

          {/* <button 
            onClick={openDemo}
            className="w-full sm:w-auto bg-white dark:bg-neutral-800/80 border border-gray-200 dark:border-neutral-700/80 hover:border-gray-300 text-gray-800 dark:text-white font-medium px-6 py-3.5 rounded-full transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:bg-gray-50 dark:hover:bg-neutral-700 cursor-pointer text-sm backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>Try the live demo</span>
          </button> */}

          <button onClick={() => navigate('/board')}>
  Try the live demo
</button>
        </div>

        <div className="relative max-w-4xl mx-auto pt-4">
          
          <div className="animate-float bg-white dark:bg-[#141417] border border-gray-200 dark:border-neutral-800 rounded-2xl shadow-2xl p-4 sm:p-6 text-left relative z-20 max-w-2xl mx-auto backdrop-blur-md">
            
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-neutral-800 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                <span className="text-xs font-semibold text-gray-800 dark:text-neutral-200 ml-2">Sprint 24 Retro</span>
              </div>
              <span className="flex items-center gap-1 text-[11px] font-medium text-gray-500 dark:text-neutral-400 bg-gray-100 dark:bg-neutral-800 px-2.5 py-1 rounded-full">
                <FiClock size={12} /> 04:15
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              
              <div className="p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-100 dark:border-emerald-900/30">
                <div className="font-bold text-emerald-700 dark:text-emerald-400 mb-2">Went Well 4</div>
                <div className="p-3 bg-white dark:bg-[#1E1E22] rounded-lg text-gray-800 dark:text-neutral-200 shadow-sm border border-emerald-100 dark:border-neutral-800">
                  Checkout latency dropped after the promo fix
                </div>
              </div>

              <div className="p-3 rounded-xl bg-amber-50/50 dark:bg-amber-950/10 border border-amber-100 dark:border-amber-900/30">
                <div className="font-bold text-amber-700 dark:text-amber-400 mb-2">To Improve 4</div>
                <div className="p-3 bg-white dark:bg-[#1E1E22] rounded-lg text-gray-800 dark:text-neutral-200 shadow-sm border border-amber-100 dark:border-neutral-800">
                  Release notes landed too late for CS
                </div>
              </div>

            </div>
          </div>

          <div className="animate-float-reverse hidden md:block absolute -left-6 top-10 z-10 bg-white dark:bg-[#18181B] border border-gray-200 dark:border-neutral-800 rounded-xl p-3 shadow-xl text-left w-48">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-[11px] font-bold text-gray-800 dark:text-neutral-200">Classic Sprint</span>
            </div>
            <div className="h-1.5 w-full bg-gray-100 dark:bg-neutral-800 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-emerald-500"></div>
            </div>
          </div>

          <div className="animate-float hidden md:block absolute -right-6 top-16 z-10 bg-white dark:bg-[#18181B] border border-gray-200 dark:border-neutral-800 rounded-xl p-3 shadow-xl text-left w-52">
            <div className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 mb-1">T Microsoft Teams</div>
            <div className="text-[10px] text-gray-500 dark:text-neutral-400 leading-tight">
              Start a retro from any channel, chat, or meeting.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}