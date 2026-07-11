import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, ChevronRight, User, Bot } from 'lucide-react';
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
              <h4>Saudagar AI</h4>
              <span className="ai-version">v2.0</span>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <X size={20} strokeWidth={2} />
            </button>
          </div>

          <div className="chat-body">
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-message-row ${msg.sender}`}>
                {msg.sender === 'bot' && (
                  <div className="message-avatar bot">
                    <Sparkles size={16} strokeWidth={2.5} />
                  </div>
                )}
                {msg.sender === 'user' && (
                  <div className="message-avatar user">
                    <User size={16} />
                  </div>
                )}
                <div className="message-content">
                  {msg.text}
                </div>
              </div>
            ))}
            
            {/* FAQ Chips */}
            {messages.length === 1 && (
              <div className="faq-chips">
                <div className="suggestions-grid">
                {faqs.map((faq, i) => (
                  <button key={i} className="suggestion-pill" onClick={() => handleSend(faq)}>
                    {faq}
                  </button>
                ))}
                </div>
              </div>
            )}
          </div>

          <div className="chat-footer">
            <div className="input-container">
              <input 
                type="text" 
                placeholder="Message Saudagar AI..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend(inputValue)}
              />
              <button 
                className={`send-action-btn ${inputValue.trim() ? 'active' : ''}`} 
                onClick={() => handleSend(inputValue)}
              >
                <Send size={16} strokeWidth={2.5} />
              </button>
            </div>
            <div className="chat-disclaimer">
              AI can make mistakes. Consider verifying important information.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
