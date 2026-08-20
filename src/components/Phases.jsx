import { FiMessageSquare, FiCheckSquare, FiCrosshair, FiList } from 'react-icons/fi';

export default function Phases() {
  // تعریف داده‌ها به صورت مجزا برای جلوگیری از کثیف شدن JSX و تکرار کد
  const phasesData = [
    {
      id: '01',
      title: 'Collect',
      description: 'Give everyone quiet writing time for specific observations.',
      icon: <FiMessageSquare className="w-5 h-5" />
    },
    {
      id: '02',
      title: 'Vote',
      description: "Use the vote to give the team's limited meeting time to one priority.",
      icon: <FiCheckSquare className="w-5 h-5" />
    },
    {
      id: '03',
      title: 'Focus',
      description: 'Bring related evidence together, discuss causes, and shape one practical change.',
      icon: <FiCrosshair className="w-5 h-5" />
    },
    {
      id: '04',
      title: 'Wrap-up',
      description: 'Record the action and leave the board with a visible next step.',
      icon: <FiList className="w-5 h-5" />
    }
  ];

  return (
    <section id="phases" className="relative py-24 px-4 border-t border-gray-200/60 bg-[#FDFBF9]">
      {/* 
        الگوی نقطه‌ای پس‌زمینه (Dot Pattern)
        این بخش دقیقاً همان حس بک‌گراند تصویرت را تداعی می‌کند.
      */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply"
        style={{
          backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Four phases keep the retro moving.
          </h2>
          <p className="text-gray-500 text-lg">
            HeyRetro moves the conversation through four phases and ends the board with a visible action.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {phasesData.map((phase) => (
            <div 
              key={phase.id} 
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col h-full transition-shadow hover:shadow-md"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="text-[#FF5733]">
                  {phase.icon}
                </div>
                <span className="text-gray-400 text-sm font-medium font-mono">
                  {phase.id}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {phase.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}