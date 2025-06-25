
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! Welcome to CADD Solutions. How can I help you today?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const botResponses = {
    courses: "We offer comprehensive courses in AutoCAD, CREO, CATIA, SolidWorks, Python, Machine Learning, ANSYS, Revit, and many more. Which specific course interests you?",
    fees: "Our course fees vary by program. AutoCAD starts at ₹15,000, Python & ML at ₹20,000, SolidWorks at ₹18,000. Contact us for detailed fee structure.",
    duration: "Course durations range from 2-4 months depending on the program. Most popular courses are 3 months long with flexible timings.",
    location: "We have two locations: Solapur (Saat Rasta) and Karad (Mangalwar Peth). Both centers offer all courses with modern facilities.",
    placement: "We have 95% placement success rate. Our students work at TCS, Softenger, Larson & Turbo, and many other top companies.",
    demo: "Yes! We offer free demo classes. You can book a demo by contacting us at +91 96890 44025 or through our contact form.",
    contact: "You can reach us at:\n📞 +91 96890 44025\n📞 +91 77220 82626\n📧 tambolimahibub@gmail.com",
    default: "Thank you for your question! For detailed information, please contact us directly or visit our center. Our team will be happy to assist you personally."
  };

  const getResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('course') || lowerMessage.includes('training')) {
      return botResponses.courses;
    }
    if (lowerMessage.includes('fee') || lowerMessage.includes('cost') || lowerMessage.includes('price')) {
      return botResponses.fees;
    }
    if (lowerMessage.includes('duration') || lowerMessage.includes('time') || lowerMessage.includes('long')) {
      return botResponses.duration;
    }
    if (lowerMessage.includes('location') || lowerMessage.includes('address') || lowerMessage.includes('where')) {
      return botResponses.location;
    }
    if (lowerMessage.includes('job') || lowerMessage.includes('placement') || lowerMessage.includes('career')) {
      return botResponses.placement;
    }
    if (lowerMessage.includes('demo') || lowerMessage.includes('trial')) {
      return botResponses.demo;
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('call')) {
      return botResponses.contact;
    }
    
    return botResponses.default;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 300 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ 
            boxShadow: isOpen ? "0 0 0 0 rgba(59, 130, 246, 0.4)" : "0 0 0 10px rgba(59, 130, 246, 0.4)"
          }}
          transition={{ duration: 1, repeat: isOpen ? 0 : Infinity }}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-40 w-80 sm:w-96"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="shadow-2xl border-0 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Bot size={20} />
                  CADD Solutions Assistant
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-0">
                {/* Messages */}
                <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-2 ${message.isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      {message.isBot && (
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Bot size={16} className="text-white" />
                        </div>
                      )}
                      
                      <div className={`max-w-xs p-3 rounded-lg ${
                        message.isBot 
                          ? 'bg-white text-gray-800 shadow-sm' 
                          : 'bg-blue-600 text-white'
                      }`}>
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                      </div>
                      
                      {!message.isBot && (
                        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <User size={16} className="text-white" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Input */}
                <div className="p-4 border-t bg-white">
                  <div className="flex gap-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Type your message..."
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage} size="sm">
                      <Send size={16} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
