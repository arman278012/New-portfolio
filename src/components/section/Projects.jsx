import React, { useState } from 'react';
import {
    ExternalLink, Github, Play, Users, Clock, TrendingUp,
    Shield, ShoppingCart, BarChart3, Smartphone, ChevronRight,
    Star, Zap, Globe, Database, Server, Activity
} from 'lucide-react';

const projects = [
    {
        id: 1,
        name: 'AssetLend App',
        tagline: 'Fintech Lending Platform',
        description: 'A production-grade fintech lending platform enabling instant asset-backed loans. Built with a real-time admin dashboard for KYC verification and loan approvals, serving 100K+ users with sub-second response times.',
        techStack: ['React Native', 'Node.js', 'AWS', 'Redis', 'Socket.io'],
        features: [
            'Instant asset-backed loan processing',
            'Real-time KYC verification dashboard',
            'Live loan approval workflows',
            'Redis-cached API responses'
        ],
        metrics: [
            { label: 'Users Served', value: '100K+', icon: <Users className="w-4 h-4" /> },
            { label: 'Processing Time', value: '-9%', icon: <Clock className="w-4 h-4" /> },
            { label: 'API Latency', value: '-35%', icon: <Zap className="w-4 h-4" /> },
        ],
        period: 'July 2025 – Present',
        category: 'Fintech',
        color: 'blue',
        gradient: 'from-blue-500 to-cyan-400',
        bgLight: 'bg-blue-50',
        bgDark: 'dark:bg-blue-900/20',
        borderLight: 'border-blue-100',
        borderDark: 'dark:border-blue-800/40',
        badgeLight: 'bg-blue-100 text-blue-700',
        badgeDark: 'dark:bg-blue-900/40 dark:text-blue-300',
        icon: <Smartphone className="w-6 h-6" />,
        demoLink: 'https://drive.google.com/file/d/1n9D2zBiVRS2BUn_XcBZU3ycj59Di9j8C/view',
        demoLabel: 'Watch Demo',
        status: 'live'
    },
    {
        id: 2,
        name: 'Ametheus Health Admin',
        tagline: 'Healthcare Management Dashboard',
        description: 'Full-scale admin dashboard for managing 25K+ medicines, real-time inventory updates, and end-to-end order tracking. Supports multi-currency global pricing for an international healthcare e-commerce platform.',
        techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'REST API'],
        features: [
            'Manage 25K+ medicine catalog',
            'Real-time inventory tracking',
            'Multi-currency dynamic pricing',
            'End-to-end order management'
        ],
        metrics: [
            { label: 'Medicines', value: '25K+', icon: <Database className="w-4 h-4" /> },
            { label: 'Order Tracking', value: 'Live', icon: <Activity className="w-4 h-4" /> },
            { label: 'Currencies', value: 'Multi', icon: <Globe className="w-4 h-4" /> },
        ],
        period: 'Apr 2024 – Jun 2025',
        category: 'Healthcare',
        color: 'green',
        gradient: 'from-green-500 to-emerald-400',
        bgLight: 'bg-green-50',
        bgDark: 'dark:bg-green-900/20',
        borderLight: 'border-green-100',
        borderDark: 'dark:border-green-800/40',
        badgeLight: 'bg-green-100 text-green-700',
        badgeDark: 'dark:bg-green-900/40 dark:text-green-300',
        icon: <BarChart3 className="w-6 h-6" />,
        repoLink: 'https://github.com/arman278012/Ametheushealth-Admin-Dashboard',
        status: 'archived'
    },
    {
        id: 3,
        name: 'Ametheus Health E-Commerce',
        tagline: 'Global Medicine Marketplace',
        description: 'Scalable global e-commerce platform for purchasing medicines and healthcare products. Features dynamic multi-currency pricing based on user location, a rich product catalog, and a seamless checkout experience.',
        techStack: ['React Native', 'Node.js', 'MongoDB', 'Express'],
        features: [
            'Location-based currency switching',
            'Rich medicine product catalog',
            'Seamless checkout flow',
            'Cross-platform mobile app'
        ],
        metrics: [
            { label: 'Platform', value: 'Mobile', icon: <Smartphone className="w-4 h-4" /> },
            { label: 'Markets', value: 'Global', icon: <Globe className="w-4 h-4" /> },
            { label: 'Stack', value: 'MERN', icon: <Server className="w-4 h-4" /> },
        ],
        period: 'Apr 2024 – Jun 2025',
        category: 'Healthcare',
        color: 'purple',
        gradient: 'from-purple-500 to-pink-400',
        bgLight: 'bg-purple-50',
        bgDark: 'dark:bg-purple-900/20',
        borderLight: 'border-purple-100',
        borderDark: 'dark:border-purple-800/40',
        badgeLight: 'bg-purple-100 text-purple-700',
        badgeDark: 'dark:bg-purple-900/40 dark:text-purple-300',
        icon: <ShoppingCart className="w-6 h-6" />,
        repoLink: 'https://github.com/arman278012/Ametheus-App',
        status: 'archived'
    },
    {
        id: 4,
        name: 'Insurance Sales Management',
        tagline: 'Hierarchical CRM Dashboard',
        description: 'Enterprise-grade insurance management system with a multi-level agent hierarchy. Admins can onboard agents, assign sub-agents, manage policy sales, and track performance across the entire distribution network.',
        techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
        features: [
            'Multi-level agent hierarchy management',
            'Policy sales tracking & reporting',
            'Role-based access control',
            'Performance analytics per agent'
        ],
        metrics: [
            { label: 'Access Levels', value: 'Multi', icon: <Shield className="w-4 h-4" /> },
            { label: 'Hierarchy', value: 'Dynamic', icon: <TrendingUp className="w-4 h-4" /> },
            { label: 'Reports', value: 'Live', icon: <BarChart3 className="w-4 h-4" /> },
        ],
        period: '2024',
        category: 'Enterprise',
        color: 'orange',
        gradient: 'from-orange-500 to-yellow-400',
        bgLight: 'bg-orange-50',
        bgDark: 'dark:bg-orange-900/20',
        borderLight: 'border-orange-100',
        borderDark: 'dark:border-orange-800/40',
        badgeLight: 'bg-orange-100 text-orange-700',
        badgeDark: 'dark:bg-orange-900/40 dark:text-orange-300',
        icon: <Shield className="w-6 h-6" />,
        repoLink: 'https://github.com/arman278012/Insurance-Sales-Management-System',
        status: 'archived'
    }
];

const StatusBadge = ({ status }) => {
    if (status === 'live') {
        return (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Live
            </span>
        );
    }
    return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
            Archived
        </span>
    );
};

const ProjectCard = ({ project, isExpanded, onToggle }) => {
    return (
        <div
            className={`group relative rounded-2xl border transition-all duration-300 overflow-hidden
                bg-white dark:bg-gray-800
                ${project.borderLight} ${project.borderDark}
                ${isExpanded ? 'shadow-2xl' : 'shadow-lg hover:shadow-xl hover:-translate-y-1'}
            `}
        >
            {/* Top accent bar */}
            <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`}></div>

            <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3">
                        <div className={`p-2.5 rounded-xl bg-gradient-to-r ${project.gradient} text-white shrink-0`}>
                            {project.icon}
                        </div>
                        <div>
                            <div className="flex items-center gap-2 flex-wrap mb-1">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                                    {project.name}
                                </h3>
                                <StatusBadge status={project.status} />
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{project.tagline}</p>
                        </div>
                    </div>
                    <span className={`hidden sm:block text-xs font-medium px-2.5 py-1 rounded-lg shrink-0 ml-2 ${project.badgeLight} ${project.badgeDark}`}>
                        {project.category}
                    </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                </p>

                {/* Metrics */}
                <div className={`grid grid-cols-3 gap-2 mb-4 p-3 rounded-xl ${project.bgLight} ${project.bgDark}`}>
                    {project.metrics.map((metric, i) => (
                        <div key={i} className="text-center">
                            <div className={`inline-flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-r ${project.gradient} text-white mb-1`}>
                                {metric.icon}
                            </div>
                            <div className="text-sm font-bold text-gray-900 dark:text-white">{metric.value}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{metric.label}</div>
                        </div>
                    ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech, i) => (
                        <span key={i} className="px-2.5 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Expandable Features */}
                <button
                    onClick={onToggle}
                    className={`w-full flex items-center justify-between text-sm font-semibold py-2 px-3 rounded-lg transition-colors duration-200
                        ${isExpanded
                            ? `${project.bgLight} ${project.bgDark} text-gray-800 dark:text-white`
                            : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                        }`}
                >
                    <span>Key Features</span>
                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
                </button>

                {isExpanded && (
                    <div className="mt-3 space-y-2">
                        {project.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} shrink-0`}></div>
                                {feature}
                            </div>
                        ))}
                        <p className="text-xs text-gray-400 dark:text-gray-500 pt-1">{project.period}</p>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    {project.demoLink && (
                        <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r ${project.gradient} hover:opacity-90 transition-opacity duration-200`}
                        >
                            <Play className="w-4 h-4" />
                            {project.demoLabel || 'View Demo'}
                        </a>
                    )}
                    {project.repoLink && (
                        <a
                            href={project.repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${project.demoLink ? '' : 'flex-1'} flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-sm font-semibold border transition-colors duration-200
                                bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300
                                border-gray-200 dark:border-gray-600
                                hover:bg-gray-100 dark:hover:bg-gray-600`}
                        >
                            <Github className="w-4 h-4" />
                            {!project.demoLink ? 'View Repository' : 'Repo'}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export const Projects = () => {
    const [expandedId, setExpandedId] = useState(null);
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Fintech', 'Healthcare', 'Enterprise'];

    const filtered = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    const handleToggle = (id) => {
        setExpandedId(prev => prev === id ? null : id);
    };

    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        <span className="relative">
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Featured Projects
                            </span>
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                        </span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
                        Production apps built for real users — from fintech platforms to healthcare systems.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200
                                ${filter === cat
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filtered.map(project => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            isExpanded={expandedId === project.id}
                            onToggle={() => handleToggle(project.id)}
                        />
                    ))}
                </div>

                {/* Bottom note */}
                <p className="text-center text-sm text-gray-400 dark:text-gray-500 mt-10">
                    Some live deployments are offline as company services have been discontinued. Repos & demos available above.
                </p>
            </div>
        </section>
    );
};