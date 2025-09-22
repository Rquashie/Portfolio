import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slat--800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold hover:text-blue-400 transition-colors cursor-pointer"
            >
              Romario Quashie
            </button>
            <p className="text-slate-300 mt-2">
              Développeur en devenir | BTS SIO SLAM
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Liens rapides</h4>
            <div className="flex flex-wrap justify-center gap-6 text-slate-300">
              <button
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-blue-400 transition-colors"
              >
                À propos
              </button>
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-blue-400 transition-colors"
              >
                Projets
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Status */}
          <div className="text-right">
            <div className="flex items-center justify-end mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-green-400 font-medium">Disponible</span>
            </div>
            <p className="text-slate-300 text-sm">
              Recherche stage & alternance
            </p>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-slate-300 mb-4 md:mb-0">
              <span>Développé avec</span>
              <Heart className="mx-2 text-red-400" size={16} fill="currentColor" />
              <span>et</span>
              <Code className="mx-2 text-blue-400" size={16} />
              <span>par Romario Quashie</span>
            </div>
            <div className="text-slate-400 text-sm">
              © {currentYear} Romario Quashie. Tous droits réservés.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;