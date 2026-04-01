import React, { useState } from 'react';
import {
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    Download,
    Heart,
    Coffee,
    Code2,
    ArrowUp,
    Sparkles,
    Send,
    MapPin,
    Phone,
    Calendar,
    FileText
} from 'lucide-react';
import logo from '../../../src/assets/logo/image2.png'

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState('');
    const [isHovered, setIsHovered] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (id) => {
        document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Subscribed:', email);
        setEmail('');
        alert('Thank you for subscribing!');
    };

    const quickLinks = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Experience', href: '#experience' },
        { label: 'Contact', href: '#contact' }
    ];

    const socialLinks = [
        { icon: <Github className="w-5 h-5" />, href: 'https://github.com/arman278012', label: 'GitHub', color: 'hover:text-gray-900 hover:bg-gray-100' },
        { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-700 hover:bg-blue-100' },
        { icon: <Mail className="w-5 h-5" />, href: 'mailto:hello@example.com', label: 'Email', color: 'hover:text-red-600 hover:bg-red-100' },
        {
            icon: <FileText className="w-5 h-5" />,
            href: 'https://drive.google.com/file/d/1Sw9R6vih1A6T2fqZjtlANpJGOSIprk3e/view?usp=drive_link',
            label: 'Resume',
            color: 'hover:text-green-700 hover:bg-green-100'
        }
    ];

    const contactInfo = [
        { icon: <Mail className="w-4 h-4" />, text: 'aa278012@gmail.com' },
        { icon: <Phone className="w-4 h-4" />, text: '+91 8299760673' },
        { icon: <MapPin className="w-4 h-4" />, text: 'Bangalore, Karnataka' },
        // { icon: <Calendar className="w-4 h-4" />, text: 'Available for work' }
    ];

    return (
        <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            {/* Top Gradient Line */}
            <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand & Description */}
                    <div className="space-y-6">

                        <div className="flex">
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                }}
                            >
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="h-12 md:h-[100px] w-auto object-contain cursor-pointer"
                                />
                            </a>

                        </div>

                        <p className="text-gray-400 leading-relaxed">
                            Full Stack Developer creating exceptional digital experiences with modern technologies and clean code.
                        </p>

                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-3 rounded-xl bg-gray-800 text-gray-300 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-blue-400" />
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
                                    >
                                        <div className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <span className="group-hover:translate-x-2 transition-transform">{link.label}</span>
                                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                            <Send className="w-4 h-4 text-purple-400" />
                            Get In Touch
                        </h4>
                        <ul className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <li key={index} className="flex items-center gap-3 text-gray-400">
                                    <div className="p-2 bg-gray-800 rounded-lg">
                                        {info.icon}
                                    </div>
                                    <span>{info.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                            <Coffee className="w-4 h-4 text-pink-400" />
                            Stay Updated
                        </h4>
                        <p className="text-gray-400 mb-4">
                            Subscribe for latest projects and tech insights.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <Send className="w-4 h-4" />
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2 text-gray-400">
                        <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                        <span>
                            Made with passion by Arman Ali • © {currentYear} All rights reserved.
                        </span>
                    </div>

                    {/* Back to Top */}
                    <button
                        onClick={scrollToTop}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="group relative p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-xl transition-all duration-300"
                        aria-label="Back to top"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                        <ArrowUp className="w-5 h-5 text-white relative z-10 transform group-hover:-translate-y-1 transition-transform" />

                        {/* Floating effect */}
                        {isHovered && (
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                                Back to top
                            </div>
                        )}
                    </button>

                    <div className="text-gray-500 text-sm">
                        <a
                            href="/privacy"
                            className="hover:text-white transition-colors mr-4"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="/terms"
                            className="hover:text-white transition-colors"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                        { label: 'Projects Delivered', value: '50+' },
                        { label: 'Code Commits', value: '1k+' },
                        { label: 'Coffee Cups', value: '∞' }
                    ].map((stat, index) => (
                        <div key={index} className="text-center p-4 bg-gray-800/50 rounded-xl backdrop-blur-sm">
                            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-gray-400 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Technology Stack */}
                <div className="mt-12">
                    <h5 className="text-center text-gray-400 mb-4">Built with</h5>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['React', 'Tailwind CSS', 'JavaScript', 'Vite', 'Node.js', 'Git', 'Figma'].map((tech, index) => (
                            <div key={index} className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Line */}
            <div className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>
        </footer>
    );
};