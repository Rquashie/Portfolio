import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img src="" alt="" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-xl" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
            Romario Quashie
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-600 mb-6">
            Étudiant en BTS SIO SLAM | Développeur en devenir
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionné par le développement logiciel, IOT et les bases de données
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-10">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-slate-700 hover:text-blue-600"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-slate-700 hover:text-blue-600"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:romario.quashie@example.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-slate-700 hover:text-blue-600"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <button
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              Voir mes projets
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              Me contacter
            </button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection('#about')}
            className="animate-bounce text-slate-400 hover:text-blue-600 transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;