import { FiMessageSquare } from 'react-icons/fi';
import { FaXTwitter, FaLinkedin } from 'react-icons/fa6';

export default function Contact() {
  const ContactSections = [
    {
      title: "Product",
      links: [
        "Features", "Online retrospectives", "Retrospective templates",
        "Retrospective board", "Remote retrospectives", "Anonymous retrospectives",
        "Engineering retrospectives", "Product team retrospectives",
        "Run your first retrospective", "Microsoft Teams retrospectives",
        "Jira retrospective workflow", "Pricing", "FAQ", "Log in", "Sign up"
      ]
    },
    {
      title: "Templates",
      links: [
        "Classic Sprint Retro", "Start / Stop / Continue", "Sailboat",
        "4Ls", "Mountain Climber", "Browse all templates"
      ]
    },
    {
      title: "Resources",
      links: [
        "This or That questions for work", "Meeting check-in questions",
        "What is a Retrospective?", "Retros That Ship Changes Instead of Notes",
        "AI-Focused Retrospectives for Team AI Working Agreements", "Read the blog"
      ]
    },
    {
      title: "Free tools",
      links: [
        "Ice breaker games", "Do You Agree questions", "Hilarious icebreaker questions",
        "Team name generator", "Sprint capacity calculator", "Sprint velocity calculator",
        "Planning poker", "Browse all free tools", "Compare retrospective tools"
      ]
    },
    {
      title: "Comparisons",
      links: [
        "HeyRetro vs Parabol", "HeyRetro vs EasyRetro", "HeyRetro vs TeamRetro",
        "HeyRetro vs Metro Retro", "HeyRetro vs Neatro"
      ]
    }
  ];

  return (
    <section  id="contact" className="relative pt-12 pb-16 px-4 bg-[#FDFBF9] border-t border-gray-200/60 text-gray-600">
      {/* Dot Pattern Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply"
        style={{
          backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Top Orange CTA Banner */}
        <div className="bg-[#FF5733] text-white rounded-3xl p-8 md:p-12 mb-20 shadow-lg relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Ready to run retros your team actually looks forward to?
            </h3>
            <p className="text-white/80 text-sm">
              Pick a template, invite the team, and turn the leading cards into one owned action.
            </p>
          </div>
          <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition whitespace-nowrap text-sm shadow-sm">
            Start free retro
          </button>
        </div>

        {/* Contact Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16 text-xs">
          
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-1.5 font-bold text-gray-900 text-base mb-4">
              <span className="text-[#FF5733] bg-[#FF5733]/10 p-1 rounded-md">
                <FiMessageSquare className="w-4 h-4 fill-current" />
              </span>
              <span>HeyRetro</span>
            </div>
            <p className="text-gray-500 leading-relaxed mb-6">
              Real-time retrospectives for teams that want every sprint to be better than the last.
            </p>
            
            <div className="font-semibold text-gray-900 mb-2">Company</div>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
              <li><a href="#" className="hover:text-gray-900">Terms</a></li>
              <li><a href="#" className="hover:text-gray-900">LLMs.txt</a></li>
            </ul>
          </div>

          {/* Dynamic Link Columns */}
          {ContactSections.map((section, idx) => (
            <div key={idx} className="col-span-1">
              <h4 className="font-semibold text-gray-900 mb-4">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-gray-200/60 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div>
            © 2026 HeyRetro
          </div>

          <div className="flex items-center gap-4 text-gray-500">
            <a href="#" className="hover:text-gray-900 transition"><FaXTwitter size={15} /></a>
            <a href="#" className="hover:text-gray-900 transition"><FaLinkedin size={15} /></a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-600">Privacy</a>
            <a href="#" className="hover:text-gray-600">Terms</a>
          </div>
        </div>

      </div>
    </section>
  );
}