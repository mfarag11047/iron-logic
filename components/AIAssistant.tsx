import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { generateTrainingResponse, analyzeEquipmentImage } from '../services/geminiService';
import { MuscleState } from '../types';

interface Message {
    role: 'user' | 'ai' | 'system';
    text: string;
    isLoading?: boolean;
}

const AIAssistant: React.FC = () => {
    const { userProfile, muscleStates, workoutHistory } = useApp();
    const [messages, setMessages] = useState<Message[]>([
        { role: 'ai', text: "Hello. I'm Iron Logic. I have access to your recovery data and workout history. How can I assist you today?" }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const getSystemContext = () => {
        const tiredMuscles = Object.entries(muscleStates)
            .filter(([, s]: [string, MuscleState]) => s.recovery < 70)
            .map(([name]) => name);
        
        return `
            You are an expert fitness coach named Iron Logic.
            User Profile: Goal=${userProfile.goal}, Split=${userProfile.split}.
            Current Fatigue (Muscles < 70% recovery): ${tiredMuscles.join(', ') || "None"}.
            Last workout was on: ${workoutHistory.length > 0 ? new Date(workoutHistory[workoutHistory.length-1].workoutDate).toDateString() : "N/A"}.
            Provide concise, science-based advice suitable for a ${userProfile.goal} athlete.
        `;
    };

    const handleSend = async () => {
        if (!input.trim()) return;
        
        const userMsg = input;
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setIsTyping(true);

        const responseText = await generateTrainingResponse(userMsg, getSystemContext());
        
        setIsTyping(false);
        setMessages(prev => [...prev, { role: 'ai', text: responseText }]);
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || !e.target.files[0]) return;
        
        const file = e.target.files[0];
        const reader = new FileReader();
        
        setIsTyping(true);
        setMessages(prev => [...prev, { role: 'user', text: `[Uploaded Image: ${file.name}]` }]);

        reader.onload = async (event) => {
            if (event.target?.result) {
                const base64 = (event.target.result as string).split(',')[1];
                const analysis = await analyzeEquipmentImage(base64);
                setIsTyping(false);
                setMessages(prev => [...prev, { role: 'ai', text: analysis }]);
            }
        };
        reader.readAsDataURL(file);
        // Reset input
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    return (
        <div className="flex flex-col h-[calc(100vh-180px)] lg:h-[calc(100vh-140px)] max-w-4xl mx-auto bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl overflow-hidden">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {msg.role !== 'user' && (
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0 text-white">IL</div>
                        )}
                        <div className={`max-w-[80%] rounded-lg p-3 text-sm ${
                            msg.role === 'user' 
                                ? 'bg-blue-600 text-white rounded-tr-none' 
                                : 'bg-slate-700 text-slate-200 rounded-tl-none'
                        }`}>
                            <div className="whitespace-pre-wrap">{msg.text}</div>
                        </div>
                    </div>
                ))}
                {isTyping && (
                    <div className="flex gap-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0 text-white">IL</div>
                         <div className="bg-slate-700 rounded-lg rounded-tl-none p-3 flex items-center gap-2">
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75"></div>
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></div>
                         </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-slate-900 border-t border-slate-700 flex gap-2">
                <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="p-2 text-slate-400 hover:text-white transition bg-slate-800 rounded-lg border border-slate-700"
                    title="Identify Equipment"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </button>
                <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    accept="image/*" 
                    onChange={handleImageUpload}
                />
                <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask about exercises, recovery..." 
                    className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                />
                <button 
                    onClick={handleSend}
                    className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default AIAssistant;