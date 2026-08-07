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

    // Lock body scroll while the mobile menu is open.
    // This is what was causing the layout to "break" on mobile:
    // the page kept scrolling behind the fixed, blurred menu panel,
    // so the hero content bled through the translucent background.
    useEffect(() => {
        if (isOpen) {
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.left = '0';
            document.body.style.right = '0';
            document.body.style.overflow = 'hidden';

            return () => {
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.left = '';
                document.body.style.right = '';
                document.body.style.overflow = '';
                window.scrollTo(0, scrollY);
            };
        }
    }, [isOpen]);

    // Close the menu automatically if the viewport is resized up to desktop width
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024 && isOpen) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isOpen]);

    // Close on Escape key
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
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
        setIsOpen(false);
        // Wait a tick so the body-scroll-lock cleanup restores scroll position
        // before we scroll to the target section, otherwise the browser can
        // fight itself and land in the wrong place.
        requestAnimationFrame(() => {
            const element = document.querySelector(id);
            element?.scrollIntoView({ behavior: 'smooth' });
        });
    };

    const socialLinks = [
        { icon: <Github className="w-5 h-5" />, href: 'https://github.com/arman278012', label: 'GitHub' },
        { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/arman-ali-06011b1ab', label: 'LinkedIn' },
        { icon: <Mail className="w-5 h-5" />, href: 'mailto:aa278012@gmail.com', label: 'Email' }
    ];

    return (
        <nav className={`fixed w-full h-[90px] z-50 transition-all duration-500 ${scrolled
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-xl dark:shadow-gray-900/50'
            : 'bg-transparent'
            }`}>
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
                                className="h-20 md:h-[120px] w-auto object-contain cursor-pointer mt-5"
                            />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.href)}
                                className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${activeSection === link.href.substring(1)
                                    ? 'text-blue-600 dark:text-blue-400'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                                    }`}
                            >
                                {activeSection === link.href.substring(1) && (
                                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                )}
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
                            aria-expanded={isOpen}
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

            {/* Mobile Menu — rendered as its own fixed, full-viewport layer
                so nothing behind it can show through or shift its layout,
                even while the underlying page would otherwise scroll. */}
            {isOpen && (
                <div className="lg:hidden fixed inset-0 z-[60]">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
                        onClick={() => setIsOpen(false)}
                        aria-hidden="true"
                    ></div>

                    {/* Menu Panel */}
                    <div
                        className="absolute inset-y-0 right-0 w-full max-w-sm h-full max-h-screen
                                   bg-white dark:bg-gray-900
                                   shadow-[0_0_40px_rgba(0,0,0,0.3)] border-l border-gray-200 dark:border-gray-800
                                   transform transition-transform duration-500 ease-in-out
                                   overflow-y-auto overscroll-contain"
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className="flex flex-col min-h-full">

                            {/* Header */}
                            <div className="sticky top-0 z-10 p-6 flex items-center justify-between border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsOpen(false);
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                    }}
                                    className="flex items-center gap-2"
                                >
                                    <img
                                        src={logo}
                                        alt="Logo"
                                        className="h-14 w-auto object-contain"
                                    />
                                </a>

                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300 group"
                                    aria-label="Close menu"
                                >
                                    <X className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white" />
                                </button>
                            </div>

                            {/* Menu Items */}
                            <div className="flex-1 p-6 space-y-3">
                                {navLinks.map((link) => {
                                    const isActive = activeSection === link.href.substring(1);

                                    return (
                                        <button
                                            key={link.name}
                                            onClick={() => scrollToSection(link.href)}
                                            className={`flex items-center gap-4 w-full p-4 rounded-2xl transition-all duration-300 group relative overflow-hidden
                                ${isActive
                                                    ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 shadow-inner"
                                                    : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                                                }`}
                                        >
                                            {isActive && (
                                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl"></div>
                                            )}

                                            <div className={`relative p-2 rounded-xl transition-all duration-300
                                    ${isActive
                                                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                                                    : "bg-gray-100 dark:bg-gray-800 group-hover:bg-gradient-to-r group-hover:from-blue-500/20 group-hover:to-purple-500/20"
                                                }`}
                                            >
                                                {link.icon}
                                            </div>

                                            <span className="relative font-medium tracking-wide">
                                                {link.name}
                                            </span>

                                            {isActive && (
                                                <span className="relative ml-auto w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></span>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Social Links */}
                            <div className="p-6 border-t border-gray-200 dark:border-gray-800">
                                <h3 className="text-xs tracking-widest text-gray-500 dark:text-gray-400 mb-4">
                                    CONNECT
                                </h3>

                                <div className="flex gap-3">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300 group"
                                        >
                                            <div className="flex flex-col items-center gap-1">
                                                <div className="text-gray-600 dark:text-gray-400 group-hover:text-blue-500">
                                                    {social.icon}
                                                </div>
                                                <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
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
            )}
        </nav>
    );
};