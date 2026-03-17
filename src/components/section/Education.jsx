import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Download, Moon, Sun, ChevronDown, Code2, Briefcase, GraduationCap, Award, User, FolderGit2 } from 'lucide-react';

export const Education = () => {
    return (
        <section id="education" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
                        <GraduationCap className="w-8 h-8 text-blue-600" />
                        Education & Certifications
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                </div>
                <div className="max-w-4xl mx-auto space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Bachelor's Degree</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">Computer Science / IT</p>
                        <p className="text-gray-500 dark:text-gray-500">Dr APJ Abdul Kalam technical University • 2023</p>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl shadow-lg">
                        <div className="flex items-start gap-4">
                            <Award className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Certifications & Achievements</h3>
                                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                                    <li>• React - The Complete Guide (Udemy)</li>
                                    <li>• Advanced JavaScript Concepts</li>
                                    <li>• Redux & State Management</li>
                                    <li>• Responsive Web Design</li>
                                    <li>• Git & GitHub Fundamentals</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Self-Learning</h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Continuously expanding my knowledge through online courses, documentation, and hands-on projects. Currently focusing on mastering React ecosystem, Data Structures & Algorithms, and mobile development with React Native.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};