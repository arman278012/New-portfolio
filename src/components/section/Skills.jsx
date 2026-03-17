import React, { useState, useEffect } from 'react';
import {
    Sparkles,
    Zap,
    Cpu,
    Palette,
    Server,
    Smartphone,
    Layers,
    Globe,
    Terminal,
    CircuitBoard,
    Cpu as Chip
} from 'lucide-react';

export const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const skillsData = {
        frontend: {
            color: 'border-blue-200 bg-blue-50 hover:bg-blue-100 dark:border-blue-700 dark:bg-blue-900/30 dark:hover:bg-blue-900/50',
            glow: 'hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]',
            icon: <Palette className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
            skills: [
                { name: 'React.js', icon: '⚛️', level: 'advanced' },
                { name: 'JavaScript', icon: '🔧', level: 'advanced' },
                { name: 'TypeScript', icon: '📘', level: 'intermediate' },
                { name: 'Next.js', icon: '⏭️', level: 'intermediate' },
                { name: 'Tailwind CSS', icon: '🎨', level: 'advanced' },
                { name: 'HTML5', icon: '📄', level: 'expert' },
                { name: 'Redux', icon: '🔄', level: 'advanced' }
            ]
        },
        backend: {
            color: 'border-purple-200 bg-purple-50 hover:bg-purple-100 dark:border-purple-700 dark:bg-purple-900/30 dark:hover:bg-purple-900/50',
            glow: 'hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]',
            icon: <Server className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
            skills: [
                { name: 'Node.js', icon: '🟢', level: 'intermediate' },
                { name: 'Express', icon: '⚡', level: 'intermediate' },
                { name: 'REST APIs', icon: '🔌', level: 'advanced' },
                { name: 'MongoDB', icon: '🍃', level: 'intermediate' },
                { name: 'Firebase', icon: '🔥', level: 'intermediate' },
            ]
        },
        tools: {
            color: 'border-green-200 bg-green-50 hover:bg-green-100 dark:border-green-700 dark:bg-green-900/30 dark:hover:bg-green-900/50',
            glow: 'hover:shadow-[0_0_40px_rgba(34,197,94,0.2)]',
            icon: <Terminal className="w-6 h-6 text-green-600 dark:text-green-400" />,
            skills: [
                { name: 'Git & GitHub', icon: '🐙', level: 'advanced' },
                { name: 'VS Code', icon: '💻', level: 'expert' },
                { name: 'Docker', icon: '🐳', level: 'learning' },
                { name: 'AWS', icon: '☁️', level: 'learning' },
            ]
        },
        mobile: {
            color: 'border-pink-200 bg-pink-50 hover:bg-pink-100 dark:border-pink-700 dark:bg-pink-900/30 dark:hover:bg-pink-900/50',
            glow: 'hover:shadow-[0_0_40px_rgba(236,72,153,0.2)]',
            icon: <Smartphone className="w-6 h-6 text-pink-600 dark:text-pink-400" />,
            skills: [
                { name: 'React Native (Expo)', icon: '📱', level: 'intermediate' },
                { name: 'Flutter', icon: '🦋', level: 'intermediate' },
                { name: 'Dart', icon: '🎯', level: 'intermediate' },
            ]
        }
    };

    const levelColors = {
        expert: 'from-blue-500 to-cyan-400',
        advanced: 'from-purple-500 to-pink-400',
        intermediate: 'from-green-500 to-emerald-400',
        learning: 'from-yellow-500 to-orange-400'
    };

    const allSkills = Object.values(skillsData).flatMap(cat => cat.skills);
    const filteredSkills = activeCategory === 'all'
        ? allSkills
        : skillsData[activeCategory]?.skills || [];

    return (
        <section id="skills" className="py-24 bg-white dark:bg-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20">
                    <div className="relative inline-block mb-8">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                        <div className="relative inline-flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                            <CircuitBoard className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                            <Sparkles className="w-8 h-8 text-purple-500 dark:text-purple-400 -ml-3" />
                        </div>
                    </div>

                    <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        <span className="relative">
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Tech Stack
                            </span>
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                        </span>
                    </h2>

                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
                        Technologies I work with to build exceptional digital experiences
                    </p>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        <button
                            onClick={() => setActiveCategory('all')}
                            className={`
                px-6 py-3 rounded-xl font-semibold transition-all duration-300
                ${activeCategory === 'all'
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-2 border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600'
                                }
              `}
                        >
                            <Globe className="inline-block w-5 h-5 mr-2" />
                            All Skills
                        </button>

                        {Object.entries(skillsData).map(([key, category]) => (
                            <button
                                key={key}
                                onClick={() => setActiveCategory(key)}
                                className={`
                  px-6 py-3 rounded-xl font-semibold transition-all duration-300
                  flex items-center gap-2
                  ${activeCategory === key
                                        ? 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-lg border-2'
                                        : 'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-600'
                                    }
                  ${key === 'frontend' && activeCategory === key ? 'border-blue-200 dark:border-blue-600' : ''}
                  ${key === 'backend' && activeCategory === key ? 'border-purple-200 dark:border-purple-600' : ''}
                  ${key === 'tools' && activeCategory === key ? 'border-green-200 dark:border-green-600' : ''}
                  ${key === 'mobile' && activeCategory === key ? 'border-pink-200 dark:border-pink-600' : ''}
                `}
                            >
                                {category.icon}
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Skills Grid */}
                <div className="relative min-h-[600px]">
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-5 dark:opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0)`,
                            backgroundSize: '50px 50px'
                        }}></div>
                    </div>

                    {/* Skills Container */}
                    <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
                        {filteredSkills.map((skill, index) => (
                            <div
                                key={index}
                                className={`
                  transform transition-all duration-700
                  hover:scale-105 hover:z-10
                  ${hoveredSkill === skill.name ? 'scale-110' : 'scale-100'}
                `}
                                style={{ animationDelay: `${index * 100}ms` }}
                                onMouseEnter={() => setHoveredSkill(skill.name)}
                                onMouseLeave={() => setHoveredSkill(null)}
                            >
                                {/* Skill Card */}
                                <div className={`
                  relative w-44 h-48 flex flex-col items-center justify-center
                  bg-white dark:bg-gray-800 border-2 rounded-3xl
                  transition-all duration-300
                  ${skillsData[activeCategory === 'all'
                                        ? Object.keys(skillsData).find(key =>
                                            skillsData[key].skills.some(s => s.name === skill.name)
                                        )
                                        : activeCategory]?.color.split(' ')[0].replace('border-', 'border-')}
                  ${hoveredSkill === skill.name ? 'shadow-2xl' : 'shadow-lg dark:shadow-gray-900'}
                  group
                `}>
                                    {/* Floating Icon Background */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                                        <div className="text-8xl">{skill.icon}</div>
                                    </div>

                                    {/* Main Content */}
                                    <div className="relative z-10 text-center p-6">
                                        <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                            {skill.icon}
                                        </div>
                                        <h3 className="font-bold text-gray-800 dark:text-white text-xl mb-2">{skill.name}</h3>

                                        {/* Skill Level Badge */}
                                        <span className={`
                      inline-block px-3 py-1 rounded-full text-xs font-semibold
                      ${skill.level === 'expert' ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300' : ''}
                      ${skill.level === 'advanced' ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300' : ''}
                      ${skill.level === 'intermediate' ? 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300' : ''}
                      ${skill.level === 'learning' ? 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300' : ''}
                    `}>
                                            {skill.level}
                                        </span>
                                    </div>

                                    {/* Corner Accents */}
                                    <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-current opacity-20"></div>
                                    <div className="absolute bottom-3 left-3 w-3 h-3 rounded-full bg-current opacity-20"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Legend */}
                <div className="mt-24 p-8 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {Object.entries(levelColors).map(([level, gradient]) => (
                            <div key={level} className="flex items-center space-x-3">
                                <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${gradient} flex items-center justify-center`}>
                                    {level === 'expert' && <Zap className="w-5 h-5 text-white" />}
                                    {level === 'advanced' && <Cpu className="w-5 h-5 text-white" />}
                                    {level === 'intermediate' && <Layers className="w-5 h-5 text-white" />}
                                    {level === 'learning' && <Sparkles className="w-5 h-5 text-white" />}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 dark:text-white capitalize">{level}</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {level === 'expert' && 'Extensive experience'}
                                        {level === 'advanced' && 'Strong proficiency'}
                                        {level === 'intermediate' && 'Working knowledge'}
                                        {level === 'learning' && 'Currently exploring'}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center space-x-8 bg-white dark:bg-gray-800 rounded-2xl px-8 py-4 shadow-lg border border-gray-100 dark:border-gray-700">
                        <div className="text-center">
                            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {allSkills.length}+
                            </div>
                            <div className="text-gray-600 dark:text-gray-400 text-sm">Technologies</div>
                        </div>
                        <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
                        <div className="text-center">
                            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                {Object.keys(skillsData).length}
                            </div>
                            <div className="text-gray-600 dark:text-gray-400 text-sm">Categories</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};