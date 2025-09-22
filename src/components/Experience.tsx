import React from 'react';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const timeline = [
    {
      type: 'education',
      title: 'BTS SIO SLAM',
      organization: 'Lycée Technique',
      location: 'France',
      period: '2024 - 2026',
      description: 'Solutions Logicielles et Applications Métiers - Spécialisation en développement d\'applications, bases de données et cybersécurité.',
      skills: ['Programmation orientée objet', 'Bases de données', 'Développement web', 'Cybersécurité'],
      current: true,
    },
    {
      type: 'experience',
      title: 'Stage de Développement',
      organization: 'Entreprise IT (à confirmer)',
      location: 'À définir',
      period: 'Mai 2025',
      description: 'Stage prévu de 6 semaines pour mettre en pratique les compétences acquises en développement logiciel et gestion de bases de données.',
      skills: ['Développement logiciel', 'Travail en équipe', 'Gestion de projet'],
      upcoming: true,
    },
    {
      type: 'experience',
      title: 'Alternance Développeur',
      organization: 'Entreprise partenaire',
      location: 'À définir',
      period: 'Septembre 2025 - 2026',
      description: 'Contrat d\'alternance prévu pour la deuxième année de BTS, avec une spécialisation possible en administration de bases de données ou développement logiciel.',
      skills: ['Développement full-stack', 'Administration BDD', 'Méthodologies Agile'],
      upcoming: true,
    },
  ];

  const objectives = [
    'Administrateur de bases de données',
    'Développeur logiciel full-stack',
    'Expert en cybersécurité',
    'Architecte solutions',
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Formation & Expérience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200"></div>

              {timeline.map((item, index) => (
                <div key={index} className="relative flex mb-12">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center z-10 ${
                    item.type === 'education' ? 'bg-blue-600' : 'bg-green-600'
                  } ${item.upcoming ? 'opacity-60' : ''} ${item.current ? 'ring-4 ring-blue-200' : ''}`}>
                    {item.type === 'education' ? (
                      <GraduationCap className="text-white" size={24} />
                    ) : (
                      <Briefcase className="text-white" size={24} />
                    )}
                  </div>

                  {/* Content */}
                  <div className="ml-6 flex-1">
                    <div className={`bg-white rounded-xl shadow-lg p-6 ${
                      item.current ? 'ring-2 ring-blue-500' : ''
                    } ${item.upcoming ? 'opacity-80' : ''}`}>
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        {item.current && (
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                            En cours
                          </span>
                        )}
                        {item.upcoming && (
                          <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full">
                            À venir
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-semibold text-slate-800 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-lg text-slate-600 mb-2">{item.organization}</p>

                      <div className="flex flex-wrap items-center text-slate-500 text-sm mb-4 gap-4">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {item.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          {item.location}
                        </div>
                      </div>

                      <p className="text-slate-600 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Objectives Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-slate-50 rounded-xl p-6 sticky top-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-6">
                Objectifs Professionnels
              </h3>
              <div className="space-y-4">
                {objectives.map((objective, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-slate-700">{objective}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">
                  Recherche d'opportunités
                </h4>
                <p className="text-blue-700 text-sm leading-relaxed">
                  Je suis actuellement à la recherche d'un stage pour mai 2025 
                  et d'une alternance pour septembre 2025. Intéressé par les 
                  défis techniques et l'innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;