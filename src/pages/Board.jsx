import   { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Board() {
  const [cards, setCards] = useState(() => {
    const saved = localStorage.getItem('retro_cards');
    return saved ? JSON.parse(saved) : [
      { id: 1, type: 'wentWell', text: 'Checkout latency dropped after promo fix', votes: 4 },
      { id: 2, type: 'toImprove', text: 'Release notes landed too late for CS', votes: 2 }
    ];
  });

  const [text, setText] = useState('');
  const [column, setColumn] = useState('wentWell');

  useEffect(() => {
    localStorage.setItem('retro_cards', JSON.stringify(cards));
  }, [cards]);

  const addCard = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setCards([...cards, { id: Date.now(), type: column, text, votes: 0 }]);
    setText('');
  };

  const handleVote = (id) => {
    setCards(cards.map(c => c.id === id ? { ...c, votes: c.votes + 1 } : c));
  };

  const deleteCard = (id) => {
    setCards(cards.filter(c => c.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-white p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8 border-b border-neutral-800 pb-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-[#FF5733] rounded-lg flex items-center justify-center font-bold">H</div>
          <h1 className="text-xl font-bold">Live Retro Board</h1>
        </div>
        <Link to="/" className="text-sm text-neutral-400 hover:text-white transition-colors">← Back to Home</Link>
      </div>

      <form onSubmit={addCard} className="flex flex-col sm:flex-row gap-3 mb-8 bg-[#141417] p-4 rounded-xl border border-neutral-800">
        <input 
          value={text} 
          onChange={(e) => setText(e.target.value)}
          placeholder="Write feedback..."
          className="flex-1 bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-[#FF5733]"
        />
        <select 
          value={column} 
          onChange={(e) => setColumn(e.target.value)}
          className="bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-neutral-300"
        >
          <option value="wentWell">Went Well</option>
          <option value="toImprove">To Improve</option>
        </select>
        <button type="submit" className="bg-[#FF5733] hover:bg-[#e04826] px-5 py-2 rounded-lg text-sm font-medium transition-colors">
          Add Card
        </button>
      </form>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[#141417] border border-neutral-800 p-4 rounded-xl">
          <h2 className="font-bold text-emerald-400 mb-4 flex justify-between items-center">
            Went Well
            <span className="text-xs bg-emerald-950/50 text-emerald-400 border border-emerald-900 px-2 py-0.5 rounded-full">
              {cards.filter(c => c.type === 'wentWell').length}
            </span>
          </h2>
          {cards.filter(c => c.type === 'wentWell').map(card => (
            <div key={card.id} className="bg-[#1E1E22] p-3.5 rounded-lg mb-3 flex justify-between items-center border border-neutral-800/80">
              <span className="text-sm text-neutral-200">{card.text}</span>
              <div className="flex items-center gap-3">
                <button onClick={() => handleVote(card.id)} className="text-xs bg-neutral-800 border border-neutral-700 px-2.5 py-1 rounded-md hover:bg-neutral-700 transition-colors">
                  👍 {card.votes}
                </button>
                <button onClick={() => deleteCard(card.id)} className="text-xs text-neutral-500 hover:text-red-400 transition-colors">
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#141417] border border-neutral-800 p-4 rounded-xl">
          <h2 className="font-bold text-amber-400 mb-4 flex justify-between items-center">
            To Improve
            <span className="text-xs bg-amber-950/50 text-amber-400 border border-amber-900 px-2 py-0.5 rounded-full">
              {cards.filter(c => c.type === 'toImprove').length}
            </span>
          </h2>
          {cards.filter(c => c.type === 'toImprove').map(card => (
            <div key={card.id} className="bg-[#1E1E22] p-3.5 rounded-lg mb-3 flex justify-between items-center border border-neutral-800/80">
              <span className="text-sm text-neutral-200">{card.text}</span>
              <div className="flex items-center gap-3">
                <button onClick={() => handleVote(card.id)} className="text-xs bg-neutral-800 border border-neutral-700 px-2.5 py-1 rounded-md hover:bg-neutral-700 transition-colors">
                  👍 {card.votes}
                </button>
                <button onClick={() => deleteCard(card.id)} className="text-xs text-neutral-500 hover:text-red-400 transition-colors">
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}   