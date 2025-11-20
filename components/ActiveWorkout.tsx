import React from 'react';
import { useApp } from '../context/AppContext';

const ActiveWorkout: React.FC = () => {
    const { activeWorkout, updateActiveSet, addSet, finishWorkout } = useApp();

    if (!activeWorkout) {
        return (
            <div className="h-full flex flex-col items-center justify-center text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <p>No workout in progress.</p>
                <p className="text-sm mt-2">Go to Dashboard to start a recommended session.</p>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto space-y-6 pb-24">
            <div className="flex justify-between items-end sticky top-0 bg-[#0f172a] z-20 py-4 border-b border-slate-800">
                <div>
                    <h2 className="text-2xl font-bold text-white">{activeWorkout.split} Session</h2>
                    <p className="text-slate-400 text-xs">Started at {activeWorkout.startTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                </div>
                <button 
                    onClick={() => { if(confirm("Finish Workout?")) finishWorkout(); }}
                    className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg font-medium text-sm shadow-lg shadow-green-900/20"
                >
                    Complete Workout
                </button>
            </div>

            <div className="space-y-4">
                {activeWorkout.exercises.map((ex, exIdx) => (
                    <div key={exIdx} className="bg-slate-800/50 backdrop-blur border border-slate-700 p-4 sm:p-6 rounded-xl">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-white text-lg">{ex.name}</h3>
                            <button 
                                onClick={() => addSet(exIdx)}
                                className="text-xs bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded text-blue-400"
                            >
                                + Add Set
                            </button>
                        </div>
                        <div className="space-y-2">
                            {ex.sets.map((set, sIdx) => (
                                <div key={sIdx} className="grid grid-cols-12 gap-2 items-center text-sm">
                                    <div className="col-span-1 text-slate-500">#{sIdx + 1}</div>
                                    <div className="col-span-3 sm:col-span-3">
                                        <input 
                                            type="number" 
                                            placeholder="lbs" 
                                            className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-2 text-white focus:border-blue-500 outline-none"
                                            value={set.weight || ''}
                                            onChange={(e) => updateActiveSet(exIdx, sIdx, 'weight', Number(e.target.value))}
                                        />
                                    </div>
                                    <div className="col-span-3 sm:col-span-3">
                                        <input 
                                            type="number" 
                                            placeholder="reps" 
                                            className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-2 text-white focus:border-blue-500 outline-none"
                                            value={set.reps || ''}
                                            onChange={(e) => updateActiveSet(exIdx, sIdx, 'reps', Number(e.target.value))}
                                        />
                                    </div>
                                    <div className="col-span-3 sm:col-span-3">
                                        <input 
                                            type="number" 
                                            placeholder="RPE" 
                                            className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-2 text-white focus:border-blue-500 outline-none"
                                            value={set.rpe}
                                            onChange={(e) => updateActiveSet(exIdx, sIdx, 'rpe', Number(e.target.value))}
                                        />
                                    </div>
                                    <div className="col-span-2 sm:col-span-2 flex justify-end">
                                        <input 
                                            type="checkbox" 
                                            className="w-6 h-6 accent-green-500 rounded cursor-pointer"
                                            checked={set.completed}
                                            onChange={(e) => updateActiveSet(exIdx, sIdx, 'completed', e.target.checked)}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActiveWorkout;