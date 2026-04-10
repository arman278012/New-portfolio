import React, { useState } from 'react';
import {
    Github,
    ExternalLink,
    FolderGit2,
    Zap,
    Code,
    ArrowUpRight,
    Link as LinkIcon
} from 'lucide-react';

export const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Header with icon and title */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-900/10">
                        <div className="text-xl">{project.icon || '📱'}</div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {project.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{project.type}</p>
                    </div>
                </div>

                {/* Links */}
                <div className="flex gap-1">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                            aria-label="GitHub repository"
                        >
                            <Github className="w-4 h-4" />
                        </a>
                    )}
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            aria-label="Live demo"
                        >
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    )}
                </div>
            </div>

            {/* Description - Shortened */}
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                {project.description}
            </p>

            {/* Tech stack - Minimal */}
            <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.slice(0, 3).map((tech, index) => (
                    <span
                        key={index}
                        className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md border border-gray-200 dark:border-gray-700"
                    >
                        {tech}
                    </span>
                ))}
                {project.techStack.length > 3 && (
                    <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs rounded-md">
                        +{project.techStack.length - 3}
                    </span>
                )}
            </div>

            {/* Status and date */}
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${project.status === 'Live' ? 'bg-green-500' :
                        project.status === 'In Progress' ? 'bg-yellow-500' :
                            'bg-blue-500'
                        }`}></div>
                    <span>{project.status}</span>
                </div>
                <span>{project.date}</span>
            </div>

            {/* Hover arrow indicator */}
            <div className={`absolute top-3 right-3 text-blue-500 transition-transform duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                }`}>
                <ArrowUpRight className="w-4 h-4" />
            </div>
        </div>
    );
};

export const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            name: 'AssetLend (Fintech Loan App)',
            type: 'Full Stack / Mobile',
            description: 'Leading development of a fintech application enabling loans against mutual funds. Architected for high scalability, capable of handling 200K+ requests. Responsible for system design, feature planning, and end-to-end development lifecycle.',
            icon: '🏦',
            status: 'In Progress',
            techStack: ['React Native', 'Node.js', 'MongoDB', 'Firebase'],
            github: 'YOUR_GITHUB_LINK',
            demo: 'https://drive.google.com/file/d/1n9D2zBiVRS2BUn_XcBZU3ycj59Di9j8C/view',
            date: '2025'
        },
        {
            name: 'AssetLend Admin Dashboard',
            type: 'Full Stack',
            description: 'Designed and developed the complete admin system for the AssetLend fintech platform, managing users, loans, approvals, and analytics. Built both frontend and backend architecture from scratch.',
            icon: '🧾',
            status: 'In Progress',
            techStack: ['React', 'Node.js', 'MongoDB', 'Redux'],
            github: 'YOUR_GITHUB_LINK',
            demo: "https://assetlend-admin-pannel.vercel.app",
            date: '2025'
        },
        {
            name: 'Ametheus Health (Global E-commerce Platform)',
            type: 'Full Stack',
            description: 'Built a scalable cross-border e-commerce platform for medicines with multi-currency support (USD, AED, NPR, etc.), serving international markets including the US, Dubai, and Nepal. Engineered to handle 100K+ concurrent requests with optimized performance, secure payments, and real-time inventory management.',
            icon: '💊',
            status: 'Live',
            techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
            github: 'https://github.com/gourav-mishra551/AH-Medicine-new',
            demo: 'https://ah-medicine-new.vercel.app',
            date: '2024'
        },
        {
            name: 'Ametheus Admin Dashboard',
            type: 'Full Stack',
            description: 'Designed and developed a complete admin dashboard managing end-to-end operations including inventory, orders, users, and analytics. Enabled seamless onboarding of 27,000+ medicines via dynamic forms and bulk operations. Acts as the core control system for the entire platform.',
            icon: '📊',
            status: 'Live',
            techStack: ['React', 'Redux', 'Node.js', 'MongoDB'],
            github: 'https://github.com/arman278012/Ametheushealth-Admin-Dashboard',
            demo: 'https://ametheushealth-admin-dashboard.vercel.app',
            date: '2024'
        },
        {
            name: 'Assetorix (Real Estate Platform)',
            type: 'Full Stack',
            description: 'Developed a real estate marketplace where users can explore, connect with property owners, and purchase properties. Focused on user experience, seamless communication, and scalable architecture.',
            icon: '🏠',
            status: 'Live',
            techStack: ['React', 'Node.js', 'MongoDB'],
            github: 'YOUR_GITHUB_LINK',
            demo: null,
            date: '2024'
        },
        {
            name: 'Doctor Consultation Platform',
            type: 'Full Stack',
            description: 'Built a multilingual telemedicine platform enabling patients to book appointments and consult doctors via real-time video conferencing. Integrated scheduling, user management, and communication systems.',
            icon: '👨‍⚕️',
            status: 'Live',
            techStack: ['React', 'WebRTC', 'Node.js', 'MongoDB'],
            github: 'https://github.com/gourav-mishra551/doctor-consultation',
            demo: 'https://doctor-consultation.vercel.app/',
            date: '2024'
        },
    ];

    const filters = [
        { id: 'all', label: 'All' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'fullstack', label: 'Full Stack' },
        { id: 'mobile', label: 'Mobile' }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project =>
            project.type.toLowerCase().includes(activeFilter.toLowerCase())
        );

    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-2.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-xl mb-4">
                        <FolderGit2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        <Zap className="w-5 h-5 text-purple-500 dark:text-purple-400 -ml-1" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                        My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        Selected projects showcasing my development skills
                    </p>
                </div>

                {/* Simple filter */}
                {/* <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${activeFilter === filter.id
                                ? 'bg-blue-600 text-white shadow-sm'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div> */}

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>

                {/* Bottom note */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm bg-gray-50 dark:bg-gray-800 rounded-lg px-4 py-2">
                        <Code className="w-4 h-4" />
                        <span>View more projects on my</span>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center gap-1"
                        >
                            GitHub
                            <LinkIcon className="w-3 h-3" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};