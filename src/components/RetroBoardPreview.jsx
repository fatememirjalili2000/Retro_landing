import { FiThumbsUp, FiMessageSquare, FiPlus,  } from 'react-icons/fi';

export default function RetroBoardPreview() {
  return (
    <section id="preview" className="pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* کادر شبه‌نرم‌افزاری بورد رترو */}
        <div className="bg-slate-900 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800 space-y-6">
          
          {/* هدر بورد */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800 text-white">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 font-bold text-sm text-slate-300">Sprint 42 Retrospective — Mad / Sad / Glad</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-xs bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-3 py-1 rounded-full font-mono">
                ⏱ 04:15 Remaining
              </span>
              <button className="bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1">
                <FiPlus /> Add Card
              </button>
            </div>
          </div>

          {/* ستون‌های رترو */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* ستون ۱: Glad */}
            <div className="bg-slate-800/60 rounded-2xl p-4 border border-slate-700/60 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-emerald-400 flex items-center gap-2">
                  <span>😊</span> Glad (What went well)
                </h4>
                <span className="text-xs text-slate-400 font-mono">3 cards</span>
              </div>

              <div className="bg-emerald-900/30 border border-emerald-500/30 p-4 rounded-xl text-slate-200 text-sm space-y-3">
                <p>The new deployment pipeline reduced release time by 40%!</p>
                <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-emerald-500/20">
                  <span className="font-medium text-emerald-300">@Alex</span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-emerald-400 font-bold"><FiThumbsUp /> 8</span>
                    <span className="flex items-center gap-1"><FiMessageSquare /> 2</span>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-900/30 border border-emerald-500/30 p-4 rounded-xl text-slate-200 text-sm space-y-3">
                <p>Great collaboration between Frontend and Design team on UI specs.</p>
                <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-emerald-500/20">
                  <span className="font-medium text-emerald-300">@Sara</span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-emerald-400 font-bold"><FiThumbsUp /> 5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ستون ۲: Sad */}
            <div className="bg-slate-800/60 rounded-2xl p-4 border border-slate-700/60 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-amber-400 flex items-center gap-2">
                  <span>😔</span> Sad (What didn't go well)
                </h4>
                <span className="text-xs text-slate-400 font-mono">2 cards</span>
              </div>

              <div className="bg-amber-900/30 border border-amber-500/30 p-4 rounded-xl text-slate-200 text-sm space-y-3">
                <p>API documentation was outdated, causing integration blockers in Day 3.</p>
                <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-amber-500/20">
                  <span className="font-medium text-amber-300">@Mehdi</span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-amber-400 font-bold"><FiThumbsUp /> 12</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ستون ۳: Action Items */}
            <div className="bg-slate-800/60 rounded-2xl p-4 border border-slate-700/60 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-indigo-400 flex items-center gap-2">
                  <span>🚀</span> Action Items
                </h4>
                <span className="text-xs text-slate-400 font-mono">1 item</span>
              </div>

              <div className="bg-indigo-900/30 border border-indigo-500/30 p-4 rounded-xl text-slate-200 text-sm space-y-3">
                <p className="font-semibold text-white">Automate OpenAPI docs generation during CI build.</p>
                <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-indigo-500/20">
                  <span className="bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded">Assignee: @DevOps</span>
                  <span className="text-emerald-400 font-bold">Export to Jira</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}