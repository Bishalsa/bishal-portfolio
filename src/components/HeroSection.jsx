import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="font-semibold text-gray-900">Bishal</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#work" className="text-sm text-gray-600 hover:text-gray-900 transition">
                Work
              </a>
              <a href="#about" className="text-sm text-gray-600 hover:text-gray-900 transition">
                About
              </a>
              <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900 transition">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Headline */}
            <div
              className={`space-y-6 transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Building Modern Websites, Stores & AI-Powered Systems
              </h1>
            </div>

            {/* Subheadline */}
            <div
              className={`transition-all duration-1000 delay-100 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                I build modern business websites, online stores, dashboards, and automation systems 
                that help brands grow faster. From concept to launch, I handle everything with precision.
              </p>
            </div>

            {/* Trust Statement */}
            <div
              className={`pt-4 transition-all duration-1000 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="text-base text-gray-600">
                Focused on building fast, scalable, and modern digital experiences.
              </p>
            </div>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-1000 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <button onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })} className="group relative px-8 py-3.5 bg-black text-white rounded-lg font-semibold text-base overflow-hidden transition-all duration-300 hover:shadow-lg">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>View Projects</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gray-800 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 -z-10" />
              </button>

              <a href="tel:+918327810209" className="px-8 py-3.5 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold text-base hover:bg-gray-50 transition-all duration-300 inline-block text-center">
                Book Free Consultation
              </a>
            </div>

            {/* Bottom Trust Text */}
            <div
              className={`text-sm text-gray-500 transition-all duration-1000 delay-400 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <p>✓ No upfront fees  ✓ Custom solutions  ✓ 24/7 support included</p>
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {/* Subtle gradient background shape */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-gray-50 to-white rounded-2xl" />
            
            {/* Card showcase */}
            <div className="relative space-y-4 p-8">
              {/* Card 1 - Top */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Lightning Fast</h3>
                <p className="text-sm text-gray-600">Optimized performance that converts visitors into customers</p>
              </div>

              {/* Card 2 - Middle */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1 ml-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Fully Automated</h3>
                <p className="text-sm text-gray-600">AI-powered systems that save you time and money</p>
              </div>

              {/* Card 3 - Bottom */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1 mr-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
                <p className="text-sm text-gray-600">Enterprise-grade security for peace of mind</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-16 border-t border-gray-100 transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="text-center">
            <div className="text-2xl font-semibold text-gray-900 mb-2">Modern Web Systems</div>
            <p className="text-sm text-gray-600">Built with latest technologies and best practices</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-semibold text-gray-900 mb-2">Fast Performance</div>
            <p className="text-sm text-gray-600">Optimized for speed and user experience</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-semibold text-gray-900 mb-2">Responsive Design</div>
            <p className="text-sm text-gray-600">Works perfectly on all devices and screens</p>
          </div>
        </div>
      </div>

      {/* Footer CTA Band */}
      <div className="border-t border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Services</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition">Website Design</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">E-Commerce</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Web Apps</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Expertise</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition">React & Next.js</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">AI Integration</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Automation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Connect</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition">Email</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8">
            <p className="text-center text-sm text-gray-600">© 2025 Bishal. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
