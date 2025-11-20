import React from 'react';
import { useApp } from '../context/AppContext';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Logbook: React.FC = () => {
    const { workoutHistory } = useApp();

    // Prepare chart data (Volume per workout)
    const chartData = workoutHistory.slice(-10).map(w => ({
        date: new Date(w.workoutDate).toLocaleDateString(undefined, { month: 'numeric', day: 'numeric'}),
        volume: w.exercisesPerformed.reduce((acc, curr) => acc + (curr.weight * curr.reps * curr.sets), 0)
    }));

    const reversedHistory = [...workoutHistory].reverse();

    return (
        <div className="max-w-4xl mx-auto space-y-8 pb-20">
             <div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 rounded-xl">
                <h3 className="text-white font-bold mb-4">Volume Trend (Last 10 Workouts)</h3>
                <div className="h-64 w-full">
                    {chartData.length > 0 ? (
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData}>
                                <XAxis dataKey="date" stroke="#64748b" fontSize={12} />
                                <YAxis stroke="#64748b" fontSize={12} />
                                <Tooltip 
                                    contentStyle={{ backgroundColor: '#1e293b', border: 'none', color: '#fff' }} 
                                    cursor={{fill: 'rgba(255,255,255,0.05)'}}
                                />
                                <Bar dataKey="volume" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    ) : (
                        <div className="flex items-center justify-center h-full text-slate-500">
                            Not enough data
                        </div>
                    )}
                </div>
            </div>

            <div>
                <h2 className="text-xl font-bold text-white mb-4">Recent History</h2>
                <div className="space-y-4">
                    {reversedHistory.length === 0 && <p className="text-slate-500">No workouts logged yet.</p>}
                    {reversedHistory.map((workout, idx) => (
                        <div key={idx} className="bg-slate-800/50 border border-slate-700 p-5 rounded-xl">
                            <div className="flex justify-between mb-2 items-start">
                                <div>
                                    <span className="text-white font-bold block text-lg">{new Date(workout.workoutDate).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                    <span className="text-slate-400 text-xs">{workout.exercisesPerformed.length} Exercises Completed</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                                {workout.exercisesPerformed.map((ex, eIdx) => (
                                    <div key={eIdx} className="text-sm flex justify-between border-b border-slate-700/50 pb-1">
                                        <span className="text-slate-300">{ex.exerciseName}</span>
                                        <span className="text-slate-500">{ex.sets} sets <span className="mx-1">•</span> Best: {ex.weight} lbs</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Logbook;