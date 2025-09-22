import React from 'react';
import { 
  Code2, 
  Database, 
  Shield, 
  Terminal, 
  GitBranch, 
  Monitor,
  Coffee,
  BookOpen
} from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Python', icon: Code2, level: 85, color: 'bg-blue-500' },
    { name: 'SQL', icon: Database, level: 80, color: 'bg-green-500' },
    { name: 'Java', icon: Coffee, level: 75, color: 'bg-orange-500' },
    { name: 'PHP', icon: Code2, level: 70, color: 'bg-purple-500' },
    { name: 'HTML/CSS', icon: Monitor, level: 90, color: 'bg-red-500' },
    { name: 'Git', icon: GitBranch, level: 75, color: 'bg-gray-600' },
    { name: 'Linux', icon: Terminal, level: 70, color: 'bg-yellow-600' },
    { name: 'Cybersécurité', icon: Shield, level: 65, color: 'bg-indigo-500' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            À propos
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* About Text */}
          <div>
            <div className="flex items-center mb-6">
              <BookOpen className="text-blue-600 mr-4" size={32} />
              <h3 className="text-2xl font-semibold text-slate-800">Mon parcours</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              Actuellement en BTS SIO option SLAM (Solutions Logicielles et Applications Métiers), 
              je me spécialise dans le développement d'applications et la gestion de bases de données.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Ma passion pour l'informatique m'a amené à explorer diverses technologies, 
              de la programmation orientée objet avec Python et Java, à la création d'interfaces 
              web dynamiques avec PHP et HTML/CSS.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Mon objectif est de devenir un développeur polyvalent, capable de concevoir 
              des solutions logicielles robustes tout en maintenant une veille technologique 
              constante sur les enjeux de cybersécurité.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-8">Compétences techniques</h3>
            <div className="space-y-6">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Icon className="text-slate-600 mr-3" size={20} />
                        <span className="font-medium text-slate-800">{skill.name}</span>
                      </div>
                      <span className="text-sm text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className={`${skill.color} h-2 rounded-full transition-all duration-500 group-hover:shadow-lg`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;