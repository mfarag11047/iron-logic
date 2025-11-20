import React from 'react';
import { useApp } from '../context/AppContext';
import { UserSettings } from '../types';

const Settings: React.FC = () => {
    const { userProfile, updateSettings, resetData } = useApp();

    const handleChange = (field: keyof UserSettings, value: string) => {
        updateSettings({ ...userProfile, [field]: value });
    };

    return (
        <div className="max-w-2xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 rounded-xl">
                <h2 className="text-xl font-bold text-white mb-6">Training Preferences</h2>
                
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm text-slate-400 mb-2">Split Preference</label>
                        <select 
                            value={userProfile.split}
                            onChange={(e) => handleChange('split', e.target.value)}
                            className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-white focus:border-blue-500 outline-none"
                        >
                            <option value="Push/Pull/Legs">Push / Pull / Legs</option>
                            <option value="Upper/Lower">Upper / Lower</option>
                            <option value="Full Body">Full Body</option>
                        </select>
                        <p className="text-xs text-slate-500 mt-1">The algorithm will bias recommendations toward this split structure.</p>
                    </div>

                    <div>
                        <label className="block text-sm text-slate-400 mb-2">Primary Goal</label>
                        <select 
                            value={userProfile.goal}
                            onChange={(e) => handleChange('goal', e.target.value)}
                            className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-white focus:border-blue-500 outline-none"
                        >
                            <option value="hypertrophy">Hypertrophy (Muscle Growth)</option>
                            <option value="strength">Strength</option>
                            <option value="general">General Fitness</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm text-slate-400 mb-2">Volume Tolerance</label>
                        <select 
                            value={userProfile.volume}
                            onChange={(e) => handleChange('volume', e.target.value)}
                            className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-white focus:border-blue-500 outline-none"
                        >
                            <option value="low">Low (2 sets/exercise)</option>
                            <option value="moderate">Moderate (3 sets/exercise)</option>
                            <option value="high">High (4+ sets/exercise)</option>
                        </select>
                    </div>

                    <div className="pt-6 border-t border-slate-700">
                        <h3 className="text-white font-bold mb-2">Danger Zone</h3>
                        <button 
                            onClick={() => { if(confirm("Delete all workout history? This cannot be undone.")) resetData(); }}
                            className="text-red-400 text-sm hover:text-red-300 underline"
                        >
                            Reset All Workout History
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;