import { FiCheck } from 'react-icons/fi';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
          Choose a plan based on how <br/> many boards and teams your <br/> organization needs each month.
        </h2>
        
        <div className="flex items-center justify-center gap-4 mt-8 relative">
          <span className="text-sm font-medium">Monthly</span>
          <div className="w-12 h-7 bg-[#111827] rounded-full flex items-center px-1 justify-end cursor-pointer">
            <div className="w-5 h-5 bg-white rounded-full"></div>
          </div>
          <span className="text-sm font-medium">Yearly</span>
          
          <div className="absolute -top-6 right-[40%] text-[#FF5733] font-handwriting text-sm rotate-[-10deg]">
            ↙ Save ~25%
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-stretch">
        
        <div className="bg-white rounded-3xl p-8 border border-gray-200">
          <h3 className="text-xl font-bold mb-2">Free</h3>
          <p className="text-sm text-gray-500 mb-6">For solo facilitators kicking the tires.</p>
          <div className="text-4xl font-bold mb-1">$0 <span className="text-base text-gray-500 font-normal">/month</span></div>
          <p className="text-xs text-gray-400 mb-8">Forever free</p>
          <ul className="space-y-4 text-sm text-gray-700">
            <li className="flex items-center gap-2"><div className="text-[#FF5733] bg-[#FF5733]/10 rounded-full p-0.5"><FiCheck size={12}/></div> 1 board per month</li>
            <li className="flex items-center gap-2"><div className="text-[#FF5733] bg-[#FF5733]/10 rounded-full p-0.5"><FiCheck size={12}/></div> Anonymous surveys</li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-gray-200">
          <h3 className="text-xl font-bold mb-2">Team</h3>
          <p className="text-sm text-gray-500 mb-6">For a single squad starting their retro habit.</p>
          <div className="text-4xl font-bold mb-1">$14 <span className="text-base text-gray-500 font-normal">/month</span></div>
          <p className="text-xs text-gray-400 mb-8">Billed yearly</p>
          <ul className="space-y-4 text-sm text-gray-700">
            <li className="flex items-center gap-2"><div className="text-[#FF5733] bg-[#FF5733]/10 rounded-full p-0.5"><FiCheck size={12}/></div> 2 teams</li>
            <li className="flex items-center gap-2"><div className="text-[#FF5733] bg-[#FF5733]/10 rounded-full p-0.5"><FiCheck size={12}/></div> 5 boards per month</li>
          </ul>
        </div>

        <div className="bg-[#111827] text-white rounded-3xl p-8 border border-gray-800 relative transform md:-translate-y-4 shadow-xl">
          <div className="absolute top-6 right-6 bg-[#FF5733] text-white text-xs font-bold px-2 py-1 rounded">Most popular</div>
          <h3 className="text-xl font-bold mb-2">Team Pro</h3>
          <p className="text-sm text-gray-400 mb-6">For growing orgs running parallel retros every sprint.</p>
          <div className="text-4xl font-bold mb-1">$49 <span className="text-base text-gray-400 font-normal">/month</span></div>
          <p className="text-xs text-gray-500 mb-8">Billed yearly</p>
          <div className="text-sm font-bold mb-4">Everything in Team, plus:</div>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-center gap-2"><div className="text-[#FF5733] bg-[#FF5733]/20 rounded-full p-0.5"><FiCheck size={12}/></div> 10 teams</li>
            <li className="flex items-center gap-2"><div className="text-[#FF5733] bg-[#FF5733]/20 rounded-full p-0.5"><FiCheck size={12}/></div> Unlimited boards</li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-gray-200">
          <h3 className="text-xl font-bold mb-2">Enterprise</h3>
          <p className="text-sm text-gray-500 mb-6">For companies with SSO and scale needs.</p>
          <div className="text-4xl font-bold mb-1">$99 <span className="text-base text-gray-500 font-normal">/month</span></div>
          <p className="text-xs text-gray-400 mb-8">Billed yearly</p>
          <ul className="space-y-4 text-sm text-gray-700">
            <li className="flex items-center gap-2"><div className="text-[#FF5733] bg-[#FF5733]/10 rounded-full p-0.5"><FiCheck size={12}/></div> Unlimited teams</li>
            <li className="flex items-center gap-2"><div className="text-[#FF5733] bg-[#FF5733]/10 rounded-full p-0.5"><FiCheck size={12}/></div> SAML & OIDC SSO</li>
          </ul>
        </div>

      </div>
    </section>
  );
}