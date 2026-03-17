import React, { useState, useEffect } from 'react';
import {
    Menu,
    X,
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    Download,
    Moon,
    Sun,
    ChevronDown,
    Code2,
    Briefcase,
    GraduationCap,
    Award,
    User,
    FolderGit2,
    Home,
    Sparkles,
    Zap,
    Terminal
} from 'lucide-react';
import logo from '../../../src/assets/logo/image2.png'
import { Link } from "react-router-dom";

export const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Track active section
            const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home', icon: <Home className="w-4 h-4" /> },
        { name: 'About', href: '#about', icon: <User className="w-4 h-4" /> },
        { name: 'Skills', href: '#skills', icon: <Code2 className="w-4 h-4" /> },
        { name: 'Projects', href: '#projects', icon: <FolderGit2 className="w-4 h-4" /> },
        { name: 'Experience', href: '#experience', icon: <Briefcase className="w-4 h-4" /> },
        { name: 'Education', href: '#education', icon: <GraduationCap className="w-4 h-4" /> },
        { name: 'Contact', href: '#contact', icon: <Mail className="w-4 h-4" /> }
    ];

    const scrollToSection = (id) => {
        const element = document.querySelector(id);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    const socialLinks = [
        { icon: <Github className="w-5 h-5" />, href: 'https://github.com', label: 'GitHub' },
        { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: <Mail className="w-5 h-5" />, href: 'mailto:hello@example.com', label: 'Email' }
    ];

    return (
        <nav className={`fixed w-full h-[90px] z-50 transition-all duration-500 ${scrolled
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-xl dark:shadow-gray-900/50'
            : 'bg-transparent'
            }`}>
            {/* Animated border */}
            {/* <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 ${scrolled ? 'w-full' : 'w-0'
                }`}></div> */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo */}
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
                                className="h-12 md:h-[120px] w-auto object-contain cursor-pointer mt-5"
                            />
                        </a>

                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link, index) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.href)}
                                className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${activeSection === link.href.substring(1)
                                    ? 'text-blue-600 dark:text-blue-400'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                                    }`}
                            >
                                {/* Active indicator */}
                                {activeSection === link.href.substring(1) && (
                                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                )}

                                {/* Hover effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="relative flex items-center gap-2">
                                    <span className="opacity-70">{link.icon}</span>
                                    <span className="font-medium">{link.name}</span>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Right Side Controls */}
                    <div className="flex items-center gap-4">
                        {/* Social Links - Desktop */}
                        <div className="hidden md:flex items-center gap-3">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group"
                                    aria-label={social.label}
                                >
                                    <div className="relative">
                                        {social.icon}
                                        <div className="absolute inset-0 bg-blue-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Dark Mode Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="p-2.5 rounded-xl bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
                            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            {darkMode ? (
                                <Sun className="w-5 h-5 text-yellow-500 relative z-10 group-hover:rotate-45 transition-transform duration-300" />
                            ) : (
                                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                            )}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2.5 rounded-xl bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-lg transition-all duration-300"
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        >
                            {isOpen ? (
                                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                            ) : (
                                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    ></div>

                    {/* Menu Panel */}
                    <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl transform transition-transform duration-300">
                        <div className="flex flex-col h-full">
                            {/* Menu Header */}
                            <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                                            <Terminal className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Navigation</h2>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Select a section</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>

                            {/* Menu Items */}
                            <div className="flex-1 overflow-y-auto p-6">
                                <div className="space-y-2">
                                    {navLinks.map((link, index) => (
                                        <button
                                            key={link.name}
                                            onClick={() => scrollToSection(link.href)}
                                            className={`flex items-center gap-3 w-full p-4 rounded-xl transition-all duration-300 group ${activeSection === link.href.substring(1)
                                                ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 text-blue-600 dark:text-blue-400'
                                                : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                                                }`}
                                        >
                                            <div className={`p-2 rounded-lg ${activeSection === link.href.substring(1)
                                                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                                                : 'bg-gray-100 dark:bg-gray-800 group-hover:bg-gradient-to-r group-hover:from-blue-500/20 group-hover:to-purple-500/20'
                                                }`}>
                                                {link.icon}
                                            </div>
                                            <span className="font-medium">{link.name}</span>
                                            {activeSection === link.href.substring(1) && (
                                                <div className="ml-auto w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                            )}
                                        </button>
                                    ))}
                                </div>

                                {/* Social Links - Mobile */}
                                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">CONNECT WITH ME</h3>
                                    <div className="flex gap-3">
                                        {socialLinks.map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300 group"
                                                aria-label={social.label}
                                            >
                                                <div className="flex items-center justify-center gap-2">
                                                    <div className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                                        {social.icon}
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                                        {social.label}
                                                    </span>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};