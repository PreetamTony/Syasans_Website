import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Minimize2, Maximize2, X } from 'lucide-react';
import syasansLogo from '@/assets/syasans-logo.png';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const COMPANY_INFO = `
Syasan's Vision is a leading career analytics and training institution with comprehensive details:

**About Us:**
- Name: Syasan's Vision / Crystal Syasan's Vision
- Experience: 9+ years in professional training and development
- Focus: Career analytics solutions and professional development programs

**Key Statistics:**
- Students Trained: 250K+
- Expert Mentors: 100+
- Corporate Clients: 50+
- Training Batches: 5K+
- Rating: 4.5/5.0 (based on 88K reviews)
- Project Success Rate: 99%
- Client Retention: 94%
- Training Hours: 30K+
- Learning Centers: 20+
- Pool Drives: 50+
- MoU's: 30+
- Career Success Rate: 89%

**Services Offered:**
- Professional career development programs
- Industry-expert designed training
- Career analytics solutions
- Corporate training programs
- Student development programs
- Placement assistance
- Skill development workshops

**Contact Information:**
- Multiple learning centers available
- Strong industry partnerships
- Comprehensive support system
- Professional mentorship available

**Mission:**
To transform careers through expert training programs designed by industry professionals, helping students and professionals achieve their goals and excel in their chosen fields.

**Values:**
- Professional excellence
- Student success focus
- Industry-relevant curriculum
- Expert mentorship
- High-quality training delivery
`;

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm here to help. Ask me anything about Syasan's Vision or I can assist with general questions too.",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = async (userMessage: string): Promise<string> => {
    const apiKey = import.meta.env.VITE_GROQ_API_KEY;
    
    console.log('API Key available:', !!apiKey);
    console.log('API Key length:', apiKey?.length);
    
    if (!apiKey) {
      return "I apologize, but I'm currently unable to connect to my AI services. You can still ask me questions about Syasan's Vision using my built-in knowledge!";
    }

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'llama-3.1-8b-instant',
          messages: [
            {
              role: 'system',
              content: `You are a helpful assistant for Syasan's Vision. Keep responses concise and helpful. Use this company information when relevant: ${COMPANY_INFO}. Focus on answering user questions directly without adding promotional content unless specifically asked about the company.`
            },
            {
              role: 'user',
              content: userMessage
            }
          ],
          temperature: 1,
          max_tokens: 1024,
          top_p: 1,
          stream: false
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Response Error:', response.status, errorText);
        throw new Error(`API request failed: ${response.status} ${errorText}`);
      }

      const data = await response.json();
      console.log('API Response:', data);
      return data.choices[0]?.message?.content || "I apologize, but I couldn't process your request. Please try again.";
    } catch (error) {
      console.error('Chatbot API Error:', error);
      // Fallback to basic responses if API fails
      const lowerMessage = userMessage.toLowerCase();
      
      if (lowerMessage.includes('course') || lowerMessage.includes('training')) {
        return "We offer comprehensive professional training programs designed by industry experts. Our programs cover various fields with a 99% success rate and have trained over 250K students. Would you like to know more about specific programs?";
      }
      
      if (lowerMessage.includes('placement') || lowerMessage.includes('job')) {
        return "Our placement assistance program has an 89% career success rate with 50+ pool drives and strong industry connections. We provide comprehensive support to help you achieve your career goals.";
      }
      
      if (lowerMessage.includes('contact') || lowerMessage.includes('address')) {
        return "We have 20+ learning centers available. For specific location details and contact information, please visit our contact page or reach out through our inquiry form.";
      }
      
      if (lowerMessage.includes('fee') || lowerMessage.includes('cost')) {
        return "For detailed fee information, I recommend contacting our admissions team through the inquiry form. They can provide you with current pricing and available payment options.";
      }
      
      return "I apologize, but I'm having trouble connecting to my AI services. However, I can tell you that Syasan's Vision has 9+ years of experience, 250K+ trained students, and a 99% project success rate. Feel free to ask me about our programs, placement assistance, or general information!";
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    try {
      const botResponse = await generateBotResponse(inputText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, but I'm experiencing technical difficulties. Please try again later or contact our support team directly.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 glass text-gray-800 p-4 rounded-full shadow-3xl hover:shadow-4xl transition-all duration-300 z-50 group hover:scale-110 border border-white/20"
        aria-label="Open chat"
      >
        <Bot className="w-6 h-6 transition-transform group-hover:scale-110" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        <span className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-2xl">
          <div className="relative">
            Need help? Chat with our AI assistant!
            <div className="absolute top-full right-2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </span>
      </button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 bg-white rounded-2xl shadow-4xl z-50 transition-all duration-500 border border-gray-200 ${isMinimized ? 'w-80 h-14' : 'w-96 h-[650px] overflow-hidden'}`}>
      {/* Header */}
      <div className="bg-blue-600 border-b border-blue-700 text-white p-4 rounded-t-2xl flex items-center justify-between relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600"></div>
        <div className="relative z-10 flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200">
            <img src={syasansLogo} alt="Syasan's Vision" className="w-7 h-7 rounded-full object-cover" />
          </div>
          <div>
            <span className="font-semibold text-sm">Syasan's Assistant</span>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs opacity-90">Online</span>
            </div>
          </div>
        </div>
        <div className="relative z-10 flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-white/80 hover:text-white p-1.5 rounded-md transition-all duration-200 hover:bg-white/10"
            aria-label={isMinimized ? "Maximize" : "Minimize"}
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white p-1.5 rounded-md transition-all duration-200 hover:bg-white/10"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="h-[480px] overflow-y-auto p-4 space-y-4 bg-gray-50">
            <div className="space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
                >
                  <div className={`flex items-end space-x-2 max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    {message.sender === 'bot' && (
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-200 overflow-hidden">
                        <img src={syasansLogo} alt="Syasan's Vision" className="w-6 h-6 rounded-full object-cover" />
                      </div>
                    )}
                    <div
                      className={`relative px-4 py-3 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-blue-600 text-white shadow-lg border border-blue-700'
                          : 'bg-white text-gray-800 shadow-md border border-gray-100'
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                      <p className={`text-xs mt-2 ${
                        message.sender === 'user' ? 'text-white/80' : 'text-gray-400'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                    {message.sender === 'user' && (
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 border border-gray-200">
                        <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start animate-fadeIn">
                  <div className="flex items-end space-x-2">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-200 overflow-hidden">
                      <img src={syasansLogo} alt="Syasan's Vision" className="w-6 h-6 rounded-full object-cover" />
                    </div>
                    <div className="bg-white text-gray-800 px-4 py-3 rounded-2xl shadow-md border border-gray-100">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 bg-white p-4">
            <div className="flex items-center space-x-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm transition-all duration-200"
                  disabled={isTyping}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="w-1 h-4 bg-gray-300 rounded-full animate-pulse"></div>
                </div>
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 hover:shadow-lg transition-all duration-200 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-2 text-center">
              <p className="text-xs text-gray-400">
                Powered by AI • Get instant answers about Syasan's Vision
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatBot;
