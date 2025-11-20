import React from 'react';
import { useApp } from '../context/AppContext';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer, RadarChart, PolarGrid, PolarRadiusAxis, Radar } from 'recharts';
import { MuscleState } from '../types';

const Dashboard: React.FC = () => {
    const { muscleStates, cnsStress, recommendation, startWorkout, activeWorkout } = useApp();

    const cnsValue = Math.max(0, 100 - cnsStress);
    const cnsData = [{ name: 'CNS', value: cnsValue, fill: cnsValue > 80 ? '#22c55e' : cnsValue > 50 ? '#eab308' : '#ef4444' }];

    const sortedMuscles = Object.entries(muscleStates)
        .sort(([, a]: [string, MuscleState], [, b]: [string, MuscleState]) => a.recovery - b.recovery);

    // Prepare data for radar chart (Group readiness)
    const groupData = [
        { subject: 'Push', A: 0, fullMark: 100 },
        { subject: 'Pull', A: 0, fullMark: 100 },
        { subject: 'Legs', A: 0, fullMark: 100 },
        { subject: 'Core', A: 0, fullMark: 100 },
    ];
    
    // Helper to aggregate (simplified logic matching constants)
    const getAvg = (names: string[]) => {
        const valid = names.filter(n => muscleStates[n]);
        if (!valid.length) return 100;
        return valid.reduce((sum, n) => sum + muscleStates[n].recovery, 0) / valid.length;
    };
    
    groupData[0].A = getAvg(["Chest", "Triceps", "Front Delts"]);
    groupData[1].A = getAvg(["Back", "Biceps", "Rear Delts"]);
    groupData[2].A = getAvg(["Quads", "Hamstrings", "Glutes"]);
    groupData[3].A = getAvg(["Abs", "ErectorSpinae"]);

    return (
        <div className="space-y-6 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* CNS Score */}
                <div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 rounded-xl flex flex-col items-center justify-center">
                    <h3 className="text-slate-400 text-sm uppercase tracking-wider mb-2">CNS Readiness</h3>
                    <div className="h-32 w-32 relative">
                         <ResponsiveContainer width="100%" height="100%">
                            <RadialBarChart innerRadius="70%" outerRadius="100%" data={cnsData} startAngle={180} endAngle={-180}>
                                <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                                <RadialBar background dataKey="value" cornerRadius={30} />
                            </RadialBarChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl font-bold text-white">{Math.round(cnsValue)}%</span>
                        </div>
                    </div>
                    <p className="text-sm text-slate-400 mt-2">
                        {cnsValue > 80 ? "System Prime" : cnsValue > 50 ? "Moderate Fatigue" : "High Fatigue"}
                    </p>
                </div>

                {/* Recommendation */}
                <div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 rounded-xl md:col-span-2 flex flex-col justify-between relative overflow-hidden">
                    <div className="z-10">
                        <h3 className="text-slate-400 text-sm uppercase tracking-wider mb-1">Today's Target</h3>
                        <h2 className="text-3xl font-bold text-white mb-2">
                            {recommendation?.recommendedSplitDayType || "Loading..."}
                        </h2>
                        <p className="text-slate-300 text-sm max-w-md mb-4">
                            {recommendation?.reason || "Analyzing muscle data..."}
                        </p>
                        {activeWorkout ? (
                             <button disabled className="bg-slate-600 text-white px-6 py-2 rounded-lg font-semibold opacity-50 cursor-not-allowed">
                                Workout in Progress
                            </button>
                        ) : (
                            <button 
                                onClick={() => recommendation && startWorkout(recommendation)}
                                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold transition shadow-lg shadow-blue-500/20">
                                Start Session
                            </button>
                        )}
                    </div>
                    <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                </div>
            </div>

            {/* Charts and Bars */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Muscle List */}
                <div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 rounded-xl">
                    <h3 className="text-white font-semibold mb-4">Muscle Matrix</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 max-h-80 overflow-y-auto">
                        {sortedMuscles.map(([name, state]) => {
                            const val = Math.round(state.recovery);
                            const color = val < 50 ? 'bg-red-500' : val < 80 ? 'bg-yellow-500' : 'bg-green-500';
                            return (
                                <div key={name}>
                                    <div className="flex justify-between text-xs mb-1">
                                        <span className="text-slate-300">{name}</span>
                                        <span className="text-slate-400">{val}%</span>
                                    </div>
                                    <div className="bg-slate-700 rounded-full h-2 overflow-hidden">
                                        <div className={`h-full ${color} transition-all duration-500`} style={{ width: `${val}%` }}></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Radar Chart */}
                <div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 rounded-xl flex flex-col items-center">
                    <h3 className="text-white font-semibold mb-2 self-start">System Balance</h3>
                    <div className="w-full h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={groupData}>
                                <PolarGrid stroke="#334155" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
                                <Radar name="Readiness" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;