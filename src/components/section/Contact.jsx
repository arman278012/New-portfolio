import React, { useState } from 'react';
import {
    Mail,
    Send,
    MessageSquare,
    Phone,
    MapPin,
    Clock,
    CheckCircle,
    Github,
    Linkedin,
    ExternalLink,
    Sparkles,
    Zap,
    Paperclip,
    User,
    AtSign,
    Coffee,
    Twitter,
    Instagram,
    Youtube
} from 'lucide-react';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactInfo = [
        { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'aa278012@gmail.com', color: 'text-blue-500' },
        { icon: <Phone className="w-5 h-5" />, label: 'Phone', value: '+91 8299760673', color: 'text-green-500' },
        { icon: <MapPin className="w-5 h-5" />, label: 'Location', value: 'Bangalore, Karnataka', color: 'text-red-500' },
        { icon: <Clock className="w-5 h-5" />, label: 'Response Time', value: 'Within 24 hours', color: 'text-purple-500' }
    ];

    const socialLinks = [
        {
            icon: <Github className="w-5 h-5" />,
            href: 'https://github.com/arman278012',
            label: 'GitHub',
            color: 'hover:bg-gray-900 hover:text-white'
        },
        {
            icon: <Linkedin className="w-5 h-5" />,
            href: 'https://www.linkedin.com/in/arman-ali-06011b1ab',
            label: 'LinkedIn',
            color: 'hover:bg-blue-700 hover:text-white'
        },
        {
            icon: <Twitter className="w-5 h-5" />,
            href: 'https://x.com/ArmanAl91521989',
            label: 'Twitter (X)',
            color: 'hover:bg-black hover:text-white'
        },
        {
            icon: <Instagram className="w-5 h-5" />,
            href: 'https://www.instagram.com/_ali.arman_?igsh=MTBxamxpdHEwMTZ4OA==',
            label: 'Instagram',
            color: 'hover:bg-pink-600 hover:text-white'
        },
        {
            icon: <Youtube className="w-5 h-5" />,
            href: 'https://www.youtube.com/@learningengineer6633',
            label: 'YouTube',
            color: 'hover:bg-red-600 hover:text-white'
        },
        {
            icon: <Mail className="w-5 h-5" />,
            href: 'mailto:aa278012@gmail.com',
            label: 'Email',
            color: 'hover:bg-red-500 hover:text-white'
        }
    ];

    return (
        <section id="contact" className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400/5 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl mb-6">
                        <MessageSquare className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                        <Sparkles className="w-6 h-6 text-purple-500 dark:text-purple-400 -ml-2" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Let's <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or just want to chat? I'd love to hear from you!
                    </p>
                    <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-8"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column - Contact Info */}
                    <div className="space-y-8">
                        {/* Contact Information */}
                        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                <Coffee className="w-6 h-6 text-blue-500" />
                                Get In Touch
                            </h3>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex items-center gap-4 group">
                                        <div className={`p-3 rounded-xl bg-gradient-to-br from-gray-100 to-white dark:from-gray-700 dark:to-gray-800 group-hover:scale-110 transition-transform duration-300 ${info.color}`}>
                                            {info.icon}
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">{info.label}</div>
                                            <div className="font-medium text-gray-900 dark:text-white">{info.value}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-700">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h4>
                                <div className="flex gap-3">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                                            aria-label={social.label}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Availability Status */}
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="font-semibold text-gray-900 dark:text-white">Currently Available</span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                I'm open to new opportunities, collaborations, and interesting projects. Let's build something amazing together!
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <Send className="w-6 h-6 text-purple-500" />
                            Send a Message
                        </h3>

                        {isSubmitted ? (
                            <div className="text-center py-12">
                                <div className="inline-flex p-3 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
                                    <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
                                </div>
                                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h4>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Thank you for reaching out. I'll get back to you within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="group">
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                                            <User className="w-4 h-4" />
                                            Name
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white transition-all duration-300"
                                                placeholder="John Doe"
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300"></div>
                                        </div>
                                    </div>

                                    <div className="group">
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                                            <AtSign className="w-4 h-4" />
                                            Email
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white transition-all duration-300"
                                                placeholder="john@example.com"
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="group">
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        Subject
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white transition-all duration-300"
                                            placeholder="Project inquiry or collaboration"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300"></div>
                                    </div>
                                </div>

                                <div className="group">
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                                        <MessageSquare className="w-4 h-4" />
                                        Message
                                    </label>
                                    <div className="relative">
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="5"
                                            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white resize-none transition-all duration-300"
                                            placeholder="Tell me about your project..."
                                        ></textarea>
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300"></div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full group relative px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl"></div>
                                    <div className="relative z-10 flex items-center justify-center gap-3">
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                                <span className="font-semibold">Send Message</span>
                                                <Zap className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </>
                                        )}
                                    </div>
                                </button>

                                <p className="text-center text-sm text-gray-500 dark:text-gray-400 pt-4">
                                    I typically respond within 24 hours
                                </p>
                            </form>
                        )}
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { value: '95%', label: 'Response Rate', icon: '📨' },
                        { value: '24h', label: 'Avg. Response Time', icon: '⚡' },
                        { value: '20+', label: 'Projects Discussed', icon: '🚀' },
                        { value: '100%', label: 'Satisfaction', icon: '❤️' }
                    ].map((stat, index) => (
                        <div key={index} className="text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                            <div className="text-3xl mb-2">{stat.icon}</div>
                            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                            <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};