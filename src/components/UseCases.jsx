import { FiArrowRight } from 'react-icons/fi';

export default function UseCases() {
  const items = [
    {
      title: "Sprint retrospective",
      description: "Review the sprint and choose one experiment for the next."
    },
    {
      title: "First retrospective",
      description: "Start with a simple agenda, clear ground rules, and a balanced format."
    },
    {
      title: "Remote retrospectives",
      description: "Give everyone space to contribute across calls, cameras, and time zones."
    },
    {
      title: "Anonymous retrospectives",
      description: "Use anonymous surveys to lower contribution pressure, then make follow-through visible."
    },
    {
      title: "Engineering retrospectives",
      description: "Inspect delivery, quality, reliability, dependencies, and technical ownership together."
    },
    {
      title: "Product team retrospectives",
      description: "Connect discovery, decisions, delivery, launch, and customer learning."
    }
  ];

  return (
    <section className="relative py-24 px-4 bg-[#FDFBF9]">
      {/* Dot Pattern Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply"
        style={{
          backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 leading-tight">
            Run a retrospective shaped for the conversation this team needs today.
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            The four-phase workflow stays familiar. Change the prompts to fit the conversation.
          </p>
        </div>

        {/* 6-Card Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-between transition-shadow hover:shadow-md cursor-pointer group"
            >
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-500 group-hover:gap-2.5 transition-all">
                <span>Explore</span>
                <FiArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}