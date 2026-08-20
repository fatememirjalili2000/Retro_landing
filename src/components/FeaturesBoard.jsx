
import featureImg1 from '../assets/images/1.png';
import featureImg2 from '../assets/images/2.png';
import featureImg3 from '../assets/images/3.png';

export default function FeaturesBoard() {
  const features = [
    {
      id: 1,
      title: "Invite the team with one link",
      description: "Share the board link. Teammates can open it as guests, and a display name is optional.",
      image: featureImg1
    },
    {
      id: 2,
      title: "Guide the session on one board",
      description: "Use live presence, grouping, voting, surveys, phases, and a built-in timer in the same session.",
      image: featureImg2
    },
    {
      id: 3,
      title: "Keep the action on the board",
      description: "Create an action during Focus, link it to the chosen topics, and carry it into Wrap-up on the same board.",
      image: featureImg3
    }
  ];

  return (
    <section  id="features" className="relative py-20 px-4 bg-[#FDFBF9]">
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply"
        style={{
          backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-12">
          Everything stays on the board.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] flex flex-col h-full"
            >
              <div className="w-full h-56 sm:h-64 bg-gray-100 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-center pointer-events-none"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}