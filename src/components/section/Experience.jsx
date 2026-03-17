import React, { useState } from 'react';
import {
    Briefcase,
    TrendingUp,
    Calendar,
    Award,
    Zap,
    Target,
    Star,
    GraduationCap,
    MapPin,
    Building2,
    CheckCircle2,
    ChevronDown,
    ChevronUp,
    ArrowRight
} from 'lucide-react';

const colorConfig = {
    blue: {
        bar: 'from-blue-500 to-cyan-400',
        dot: 'bg-blue-500',
        dotDark: 'dark:bg-blue-400',
        dotRing: 'ring-blue-100 dark:ring-blue-900/40',
        badge: 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-700/50',
        check: 'text-blue-500 dark:text-blue-400',
        highlight: 'bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800/40',
        iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-400',
        line: 'from-blue-400 to-cyan-300',
    },
    green: {
        bar: 'from-green-500 to-emerald-400',
        dot: 'bg-green-500',
        dotDark: 'dark:bg-green-400',
        dotRing: 'ring-green-100 dark:ring-green-900/40',
        badge: 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-300 border border-green-200 dark:border-green-700/50',
        check: 'text-green-500 dark:text-green-400',
        highlight: 'bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-800/40',
        iconBg: 'bg-gradient-to-br from-green-500 to-emerald-400',
        line: 'from-green-400 to-emerald-300',
    },
    purple: {
        bar: 'from-purple-500 to-pink-400',
        dot: 'bg-purple-500',
        dotDark: 'dark:bg-purple-400',
        dotRing: 'ring-purple-100 dark:ring-purple-900/40',
        badge: 'bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-700/50',
        check: 'text-purple-500 dark:text-purple-400',
        highlight: 'bg-purple-50 dark:bg-purple-900/20 border-purple-100 dark:border-purple-800/40',
        iconBg: 'bg-gradient-to-br from-purple-500 to-pink-400',
        line: 'from-purple-400 to-pink-300',
    },
};

const ExperienceCard = ({ exp, index, isLast, activeTab }) => {
    const [expanded, setExpanded] = useState(index === 0);
    const colors = colorConfig[exp.color] || colorConfig.blue;

    return (
        <div className="relative flex gap-4 md:gap-8">
            {/* Timeline Column */}
            <div className="flex flex-col items-center flex-shrink-0">
                {/* Icon Circle */}
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${colors.iconBg} flex items-center justify-center text-white text-xl shadow-lg ring-4 ${colors.dotRing} z-10 flex-shrink-0`}>
                    {exp.icon}
                </div>
                {/* Vertical Line */}
                {!isLast && (
                    <div className={`w-0.5 flex-1 mt-2 bg-gradient-to-b ${colors.line} opacity-30 min-h-[40px]`}></div>
                )}
            </div>

            {/* Card */}
            <div className="flex-1 pb-10">
                <div className={`rounded-2xl border bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden
          ${expanded ? 'border-gray-200 dark:border-gray-600' : 'border-gray-100 dark:border-gray-700'}`}>

                    {/* Top gradient stripe */}
                    <div className={`h-1 w-full bg-gradient-to-r ${colors.bar}`}></div>

                    {/* Header — always visible, clickable */}
                    <button
                        onClick={() => setExpanded(p => !p)}
                        className="w-full text-left px-5 md:px-7 pt-5 pb-4 flex items-start justify-between gap-4 group"
                    >
                        <div className="flex-1">
                            {/* Title + Badge row */}
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                                    {exp.title}
                                </h3>
                                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${colors.badge}`}>
                                    {exp.type}
                                </span>
                            </div>

                            {/* Meta row */}
                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 dark:text-gray-400">
                                <span className="flex items-center gap-1.5 font-medium text-gray-700 dark:text-gray-300">
                                    <Building2 className="w-3.5 h-3.5 flex-shrink-0" />
                                    {exp.company}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                                    {exp.period}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                                    {exp.location}
                                </span>
                            </div>
                        </div>

                        {/* Expand toggle */}
                        <div className={`mt-1 p-1.5 rounded-lg transition-colors duration-200 flex-shrink-0
              ${expanded ? 'bg-gray-100 dark:bg-gray-700' : 'bg-gray-50 dark:bg-gray-700/50 group-hover:bg-gray-100 dark:group-hover:bg-gray-700'}`}>
                            {expanded
                                ? <ChevronUp className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                : <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />}
                        </div>
                    </button>

                    {/* Expandable body */}
                    {expanded && (
                        <div className="px-5 md:px-7 pb-6 border-t border-gray-100 dark:border-gray-700/60 pt-5 space-y-5">

                            {/* Description */}
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                {exp.description}
                            </p>

                            {/* Achievements */}
                            <div>
                                <div className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white text-sm mb-3">
                                    <Award className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                                    {activeTab === 'education' ? 'Highlights' : 'Key Achievements'}
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {exp.achievements.map((item, i) => (
                                        <div key={i} className={`flex items-start gap-2.5 p-2.5 rounded-xl border ${colors.highlight}`}>
                                            <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${colors.check}`} />
                                            <span className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div>
                                <div className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white text-sm mb-3">
                                    <Zap className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                                    {activeTab === 'education' ? 'Subjects & Skills' : 'Technologies Used'}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export const Experience = () => {
    const [activeTab, setActiveTab] = useState('professional');

    const experiences = {
        professional: [
            {
                title: 'App Developer',
                company: 'Arthayukti Fintech Pvt. Ltd.',
                period: 'July 2025 – Present',
                location: 'Bangalore, India',
                type: 'Full-time',
                description:
                    'Owning the end-to-end development of AssetLend — a production-grade fintech lending platform — from 0→1. Responsible for system architecture, feature planning, and shipping to production for 100K+ users.',
                achievements: [
                    'Led full 0→1 architecture and production delivery of the AssetLend platform',
                    'Built secure Node.js + Express REST APIs with role-based access control, improving backend throughput by 30%',
                    'Developed a real-time admin dashboard for KYC, loan approvals, and asset monitoring, cutting processing time by 9%',
                    'Integrated compliant third-party financial APIs and Redis caching, reducing API latency by 35%'
                ],
                skills: ['React Native', 'Node.js', 'Express', 'Redis', 'Socket.io', 'AWS', 'REST APIs'],
                color: 'blue',
                icon: '🚀'
            },
            {
                title: 'Full Stack Developer',
                company: 'Ametheus Holdings Pvt. Ltd.',
                period: 'Apr 2024 – June 2025',
                location: 'New Delhi, India',
                type: 'Full-time',
                description:
                    'Led development of the Ametheus Health global e-commerce platform, delivering medicines across multiple countries. Built scalable admin tooling and backend services to handle high-volume product and order data.',
                achievements: [
                    'Delivered a global e-commerce platform supporting 25K+ medicines across multiple countries',
                    'Built a real-time admin dashboard for medicine catalog management, inventory, and order lifecycle tracking',
                    'Implemented dynamic multi-currency pricing based on user-selected country for seamless international transactions',
                    'Optimized APIs and DB queries through indexing and caching, improving response times by 40%'
                ],
                skills: ['React', 'Node.js', 'MongoDB', 'Express', 'REST APIs', 'React Native'],
                color: 'green',
                icon: '💻'
            },
            {
                title: 'Frontend Developer',
                company: 'Vendors Tech',
                period: 'Aug 2023 – Mar 2024',
                location: 'Pune, India',
                type: 'Internship',
                description:
                    'Kicked off my professional journey as a frontend intern, collaborating with cross-functional teams to design and ship a user-friendly software product. Gained hands-on experience in debugging, REST API integration, and team-based development workflows.',
                achievements: [
                    'Collaborated with the team to design, develop, and launch a production software product',
                    'Conducted testing and debugging to identify and resolve bugs, ensuring stable performance',
                    'Integrated RESTful APIs and managed database queries for seamless data flow',
                    'Contributed to UI development using React and modern frontend tooling'
                ],
                skills: ['React', 'JavaScript', 'REST APIs', 'HTML5', 'CSS3', 'Git'],
                color: 'purple',
                icon: '🌐'
            }
        ],
        education: [
            {
                title: 'B.Tech in Computer Science',
                company: 'BN College of Engineering and Technology (BNCET)',
                period: 'July 2019 – May 2023',
                location: 'India',
                type: 'Degree',
                description:
                    'Completed a four-year undergraduate program in Computer Science with a strong academic record (CGPA: 8.20). Built a solid foundation in data structures, algorithms, software engineering, databases, and computer networks.',
                achievements: [
                    'Graduated with CGPA of 8.20 / 10',
                    'Studied core CS subjects: DSA, DBMS, Operating Systems, Computer Networks',
                    'Built multiple academic projects in web and mobile development',
                    'Developed problem-solving skills through competitive programming'
                ],
                skills: ['C++', 'Java', 'DBMS', 'Data Structures', 'Algorithms', 'Computer Networks'],
                color: 'blue',
                icon: '🎓'
            },
            {
                title: 'Class XI – XII (Science / PCM)',
                company: 'Airforce School, Gorakhpur',
                period: 'May 2017 – May 2019',
                location: 'Gorakhpur, India',
                type: 'Higher Secondary',
                description:
                    'Completed higher secondary education with Physics, Chemistry, and Mathematics. Achieved 78% in Class XII board exams, building the foundation for an engineering career.',
                achievements: [
                    'Scored 78% in Class XII board examinations',
                    'Science stream with PCM: Physics, Chemistry, Mathematics',
                    'Participated in school-level science exhibitions and competitions'
                ],
                skills: ['Physics', 'Chemistry', 'Mathematics'],
                color: 'purple',
                icon: '📚'
            },
            {
                title: 'Class II – X (Secondary Schooling)',
                company: 'RK Memorial Public School',
                period: 'Up to 2017',
                location: 'Kushinagar, India',
                type: 'Secondary',
                description:
                    'Completed primary and secondary education with a well-rounded academic background, building strong core fundamentals across all subjects.',
                achievements: [
                    'Consistent academic performance across all school years',
                    'Active participation in extracurricular and sports activities'
                ],
                skills: ['Mathematics', 'Science', 'English'],
                color: 'green',
                icon: '🏫'
            }
        ]
    };

    const stats = [
        { value: '2+', label: 'Years Experience', icon: <Calendar className="w-5 h-5" />, gradient: 'from-blue-500 to-cyan-400' },
        { value: '4+', label: 'Projects Shipped', icon: <Briefcase className="w-5 h-5" />, gradient: 'from-purple-500 to-pink-400' },
        { value: '8.20', label: 'B.Tech CGPA', icon: <Star className="w-5 h-5" />, gradient: 'from-green-500 to-emerald-400' },
        { value: '3', label: 'Companies', icon: <Building2 className="w-5 h-5" />, gradient: 'from-orange-500 to-yellow-400' }
    ];

    const tabs = [
        { key: 'professional', label: 'Work Experience', icon: <Briefcase className="w-4 h-4" /> },
        { key: 'education', label: 'Education', icon: <GraduationCap className="w-4 h-4" /> }
    ];

    const timeline = [
        { year: '2019', label: 'Started B.Tech CS', gradient: 'from-blue-600 to-purple-600' },
        { year: '2023', label: 'Graduated & Internship', gradient: 'from-purple-600 to-pink-600' },
        { year: '2024', label: 'Full Stack at Ametheus', gradient: 'from-pink-600 to-orange-500' },
        { year: '2025', label: 'App Dev at Arthayukti', gradient: 'from-orange-500 to-yellow-500' },
    ];

    return (
        <section id="experience" className="py-24 bg-white dark:bg-gray-900">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Experience & Education
                            </span>
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                        </span>
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mt-6">
                        From intern to building production fintech and healthcare platforms — my journey so far.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
                    {stats?.map((stat, i) => (
                        <div key={i} className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm p-5 text-center group hover:shadow-md transition-shadow duration-300">
                            {/* Gradient top strip */}
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient}`}></div>
                            <div className={`inline-flex p-2 rounded-xl bg-gradient-to-r ${stat.gradient} text-white mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                {stat.icon}
                            </div>
                            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-gray-100 dark:bg-gray-800 p-1 rounded-2xl gap-1">
                        {tabs.map(tab => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === tab.key
                                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md'
                                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                                    }`}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Timeline Cards */}
                <div className="relative">
                    {experiences[activeTab].map((exp, index) => (
                        <ExperienceCard
                            key={`${activeTab}-${index}`}
                            exp={exp}
                            index={index}
                            isLast={index === experiences[activeTab].length - 1}
                            activeTab={activeTab}
                        />
                    ))}
                </div>

                {/* Career Timeline Strip */}
                <div className="mt-16 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-100 dark:border-gray-700 p-8 shadow-sm">
                    <div className="flex items-center gap-2 mb-8">
                        <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Career Timeline</h3>
                    </div>

                    {/* Desktop timeline */}
                    <div className="hidden md:flex items-center justify-between relative">
                        {/* Connecting line */}
                        <div className="absolute left-0 right-0 top-5 h-0.5 bg-gradient-to-r from-blue-300 via-purple-300 via-pink-300 to-yellow-300 dark:from-blue-700 dark:via-purple-700 dark:via-pink-700 dark:to-yellow-700 z-0 mx-7"></div>

                        {timeline.map((item, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center gap-3 flex-1">
                                <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center shadow-md ring-4 ring-white dark:ring-gray-900`}>
                                    <span className="text-white text-xs font-bold">{i + 1}</span>
                                </div>
                                <div className="text-center">
                                    <div className={`text-2xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                                        {item.year}
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-[100px] mx-auto leading-relaxed">
                                        {item.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile timeline */}
                    <div className="flex flex-col gap-4 md:hidden">
                        {timeline.map((item, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className={`w-9 h-9 rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center shadow-md flex-shrink-0`}>
                                    <span className="text-white text-xs font-bold">{i + 1}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className={`text-xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                                        {item.year}
                                    </span>
                                    <ArrowRight className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600 flex-shrink-0" />
                                    <span className="text-sm text-gray-600 dark:text-gray-400">{item.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};