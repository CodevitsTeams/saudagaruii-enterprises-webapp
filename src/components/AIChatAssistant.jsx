import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot, ChevronRight } from 'lucide-react';
import '../AIChat.css';

export default function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Halo! Ada yang bisa Saudagar AI bantu hari ini?' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const faqs = [
    "Cara Daftar Merchant?",
    "Lacak Pesanan Saya",
    "Promo Hari Ini"
  ];

  const handleSend = (text) => {
    if (!text.trim()) return;
    
    // Add user message
    const newMsg = { id: Date.now(), sender: 'user', text };
    setMessages(prev => [...prev, newMsg]);
    setInputValue('');

    // Simulate AI typing and response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        sender: 'bot', 
        text: `Terima kasih! Tim kami atau asisten AI akan segera merespon pertanyaan Anda mengenai: "${text}".` 
      }]);
    }, 1000);
  };

  return (
    <div className="ai-chat-container">
      {/* Floating Button */}
      {!isOpen && (
        <div className="fab-container">
          <div className="fab-tooltip animate-fade-in delay-200">
            Butuh bantuan?
          </div>
          <button className="ai-chat-fab animate-bounce-slight" onClick={() => setIsOpen(true)}>
            <Bot size={28} />
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="ai-chat-window animate-slide-up">
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="bot-avatar">
                <Bot size={20} />
              </div>
              <div>
                <h4>Saudagar AI Assistant</h4>
                <span className="online-status">● Online 24/7</span>
              </div>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <div className="chat-body">
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-bubble-wrapper ${msg.sender}`}>
                <div className="chat-bubble">
                  {msg.text}
                </div>
              </div>
            ))}
            
            {/* FAQ Chips */}
            {messages.length === 1 && (
              <div className="faq-chips">
                <p className="faq-title">Pertanyaan Populer:</p>
                {faqs.map((faq, i) => (
                  <button key={i} className="faq-chip" onClick={() => handleSend(faq)}>
                    {faq} <ChevronRight size={14} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="chat-footer">
            <input 
              type="text" 
              placeholder="Ketik pesan Anda..." 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend(inputValue)}
            />
            <button className="send-btn" onClick={() => handleSend(inputValue)}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
