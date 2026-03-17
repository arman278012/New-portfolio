import React, { useEffect, useState } from 'react';
import {
    ChevronDown,
    Sparkles,
    Code2,
    Coffee,
    Rocket,
    Terminal,
    MousePointerClick,
    Zap,
    ArrowRight,
    Download,
    Send,
    Play
} from 'lucide-react';

export const Hero = () => {
    const [typedText, setTypedText] = useState('');
    const [cursorVisible, setCursorVisible] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    const textToType = 'Full Stack Web/App developer';
    const typingSpeed = 100;
    const cursorBlinkSpeed = 530;

    useEffect(() => {
        if (currentIndex < textToType.length) {
            const timeout = setTimeout(() => {
                setTypedText(prev => prev + textToType[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, typingSpeed);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setCursorVisible(prev => !prev);
        }, cursorBlinkSpeed);
        return () => clearInterval(cursorInterval);
    }, []);

    const scrollToSection = (id) => {
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleDownloadResume = () => {
        const downloadUrl =
            "https://drive.google.com/uc?export=download&id=1Sw9R6vih1A6T2fqZjtlANpJGOSIprk3e";

        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = "Arman_Ali_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 pt-16">
            {/* Animated Background - Dark Mode Compatible */}
            <div className="absolute inset-0">
                {/* Gradient Orbs - Subtle in dark mode */}
                <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-purple-400/10 dark:bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

                {/* Grid Pattern - Visible in light mode */}
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                    maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
                }}></div>

                {/* Dark mode grid overlay */}
                <div className="absolute inset-0 dark:block" style={{
                    backgroundImage: `linear-gradient(to right, rgba(147, 197, 253, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(147, 197, 253, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                    maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
                }}></div>

                {/* Alternative: Use Tailwind classes for better control */}
                <div className="absolute inset-0">
                    <div className="light-grid absolute inset-0 opacity-20 dark:opacity-10"></div>
                    <div className="dark-grid absolute inset-0 opacity-0 dark:opacity-20"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-10 md:top-20 left-5 md:left-10 animate-float">
                    <div className="text-2xl md:text-4xl">⚡</div>
                </div>
                <div className="absolute top-20 md:top-40 right-10 md:right-20 animate-float delay-700">
                    <div className="text-2xl md:text-4xl">🚀</div>
                </div>
                <div className="absolute bottom-20 md:bottom-40 left-10 md:left-20 animate-float delay-500">
                    <div className="text-2xl md:text-4xl">✨</div>
                </div>
                <div className="absolute bottom-10 md:bottom-20 right-5 md:right-10 animate-float delay-300">
                    <Code2 className="w-6 h-6 md:w-10 md:h-10 text-blue-400/50 dark:text-blue-300/30" />
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full">
                <div className="text-center">
                    {/* Welcome Badge */}
                    {/* <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 rounded-full px-4 md:px-6 py-2 md:py-3 mb-8 md:mb-12 shadow-lg animate-fade-in">
                        <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-blue-600 dark:text-blue-400" />
                        <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm md:text-base">
                            Welcome to my portfolio
                        </span>
                        <Coffee className="w-4 h-4 md:w-5 md:h-5 text-purple-600 dark:text-purple-400 ml-2" />
                    </div> */}

                    {/* Main Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 animate-fade-in">
                        <div className="text-gray-800 dark:text-gray-200 mb-3 md:mb-4">Hi, I'm</div>
                        <div className="relative">
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                                Arman Ali
                            </span>
                            <div className="absolute -bottom-2 md:-bottom-4 left-1/2 transform -translate-x-1/2 w-32 md:w-48 h-1 md:h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm"></div>
                        </div>
                    </h1>

                    {/* Typing Animation */}
                    <div className="relative inline-flex items-center mb-6 md:mb-8">
                        <Terminal className="w-6 h-6 md:w-8 md:h-8 text-blue-500 dark:text-blue-400 mr-3 md:mr-4 animate-pulse" />
                        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300">
                            {typedText}
                            <span className={`inline-block w-[1px] md:w-[2px] h-6 md:h-10 bg-blue-500 dark:bg-blue-400 ml-1 transition-opacity ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
                        </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 md:mb-12 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed animate-fade-in px-4">
                        Crafting exceptional digital experiences with <span className="font-semibold text-blue-600 dark:text-blue-400">React.js</span>, <span className="font-semibold text-purple-600 dark:text-purple-400">Modern JavaScript</span>, and <span className="font-semibold text-pink-600 dark:text-pink-400">Beautiful UI</span>
                    </p>

                    {/* Stats - Responsive Grid */}
                    <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4 md:gap-8 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
                        {[
                            { value: '2+', label: 'Years Experience', icon: '🎯' },
                            { value: '20+', label: 'Projects', icon: '🚀' },
                            { value: '100%', label: 'Passion', icon: '🔥' },
                            { value: '24/7', label: 'Learning', icon: '📚' }
                        ].map((stat, index) => (
                            <div key={index} className="text-center group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-0 md:bg-transparent">
                                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 md:mb-2 group-hover:scale-110 transition-transform">
                                    {stat.value}
                                </div>
                                <div className="text-xl md:text-2xl mb-1 md:mb-2 group-hover:scale-125 transition-transform inline-block">
                                    {stat.icon}
                                </div>
                                <div className="text-gray-700 dark:text-gray-300 font-medium text-sm md:text-base">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Action Buttons - Responsive Stack */}
                    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6 mb-12 md:mb-20 px-4">
                        <button
                            onClick={() => scrollToSection('#projects')}
                            className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl md:rounded-2xl hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden min-w-[200px] sm:min-w-0"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                            <div className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                                <MousePointerClick className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
                                <span className="text-base md:text-lg font-semibold">Explore My Work</span>
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
                            </div>
                        </button>

                        <button
                            onClick={handleDownloadResume}
                            className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-2 border-blue-200 dark:border-gray-700 rounded-xl md:rounded-2xl hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 min-w-[200px] sm:min-w-0"
                        >
                            <div className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                                <Download className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-y-1 transition-transform" />
                                <span className="text-base md:text-lg font-semibold">Download Resume</span>
                                <Zap className="w-4 h-4 md:w-5 md:h-5 text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </button>

                        <button
                            onClick={() => scrollToSection('#contact')}
                            className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl md:rounded-2xl hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 min-w-[200px] sm:min-w-0"
                        >
                            <div className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                                <Send className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                <span className="text-base md:text-lg font-semibold">Let's Connect</span>
                                <Rocket className="w-4 h-4 md:w-5 md:h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </button>
                    </div>

                    {/* Scroll Indicator */}
                    <div
                        className="flex flex-col items-center gap-3 md:gap-4 animate-bounce cursor-pointer"
                        onClick={() => scrollToSection('#about')}
                    >
                        <div className="text-gray-500 dark:text-gray-400 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm md:text-base">
                            Discover More
                        </div>
                        <div className="relative">
                            <div className="w-6 h-8 md:w-8 md:h-12 border-2 border-blue-300 dark:border-blue-600/30 rounded-full flex justify-center">
                                <div className="w-1 h-2 md:w-1 md:h-3 bg-blue-500 dark:bg-blue-400 rounded-full mt-1 md:mt-2 animate-scroll"></div>
                            </div>
                            <ChevronDown className="w-4 h-4 md:w-6 md:h-6 text-blue-500 dark:text-blue-400 absolute -bottom-1 md:-bottom-2 left-1/2 transform -translate-x-1/2" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Add CSS animations and grid styles */}
            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(8px); opacity: 0; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Grid styles that work in both modes */
        .light-grid {
          background-image: 
            linear-gradient(to right, rgba(59, 130, 246, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.15) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(circle at center, black, transparent 70%);
          -webkit-mask-image: radial-gradient(circle at center, black, transparent 70%);
        }
        
        .dark-grid {
          background-image: 
            linear-gradient(to right, rgba(147, 197, 253, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(147, 197, 253, 0.2) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(circle at center, black, transparent 70%);
          -webkit-mask-image: radial-gradient(circle at center, black, transparent 70%);
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .animate-float {
            animation: float 8s ease-in-out infinite;
          }
          .light-grid, .dark-grid {
            background-size: 40px 40px;
          }
        }
      `}</style>
        </section>
    );
};