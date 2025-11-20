import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Dashboard from './components/Dashboard';
import ActiveWorkout from './components/ActiveWorkout';
import Logbook from './components/Logbook';
import AIAssistant from './components/AIAssistant';
import Settings from './components/Settings';

type Tab = 'dashboard' | 'workout' | 'logbook' | 'ai' | 'settings';

const MainLayout: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('dashboard');
    const { activeWorkout } = useApp();

    return (
        <div className="flex flex-col h-screen bg-[#0f172a] overflow-hidden text-slate-200">
            {/* Top Navigation */}
            <nav className="bg-slate-900/80 backdrop-blur border-b border-slate-800 p-4 shrink-0 z-30">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">IL</div>
                        <h1 className="text-xl font-bold tracking-tight text-white">Iron Logic</h1>
                    </div>
                    
                    <div className="flex gap-1 bg-slate-800 p-1 rounded-lg overflow-x-auto max-w-full">
                        <button onClick={() => setActiveTab('dashboard')} className={`px-3 py-1.5 text-sm font-medium rounded-md transition ${activeTab === 'dashboard' ? 'bg-slate-700 text-white shadow' : 'text-slate-400 hover:text-white'}`}>Dashboard</button>
                        <button onClick={() => setActiveTab('workout')} className={`px-3 py-1.5 text-sm font-medium rounded-md transition flex items-center gap-2 ${activeTab === 'workout' ? 'bg-slate-700 text-white shadow' : 'text-slate-400 hover:text-white'}`}>
                            Workout
                            {activeWorkout && <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>}
                        </button>
                        <button onClick={() => setActiveTab('logbook')} className={`px-3 py-1.5 text-sm font-medium rounded-md transition ${activeTab === 'logbook' ? 'bg-slate-700 text-white shadow' : 'text-slate-400 hover:text-white'}`}>Logbook</button>
                        <button onClick={() => setActiveTab('ai')} className={`px-3 py-1.5 text-sm font-medium rounded-md transition ${activeTab === 'ai' ? 'bg-blue-900/30 text-blue-400 shadow border border-blue-800/30' : 'text-blue-400 hover:text-blue-300'}`}>AI Assistant</button>
                        <button onClick={() => setActiveTab('settings')} className={`px-3 py-1.5 text-sm font-medium rounded-md transition ${activeTab === 'settings' ? 'bg-slate-700 text-white shadow' : 'text-slate-400 hover:text-white'}`}>Settings</button>
                    </div>
                </div>
            </nav>

            {/* Content Area */}
            <main className="flex-1 overflow-y-auto p-4 sm:p-6 relative">
                <div className="max-w-7xl mx-auto h-full">
                    {activeTab === 'dashboard' && <Dashboard />}
                    {activeTab === 'workout' && <ActiveWorkout />}
                    {activeTab === 'logbook' && <Logbook />}
                    {activeTab === 'ai' && <AIAssistant />}
                    {activeTab === 'settings' && <Settings />}
                </div>
            </main>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <AppProvider>
            <MainLayout />
        </AppProvider>
    );
};

export default App;