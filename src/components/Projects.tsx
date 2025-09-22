import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Système de Gestion de Bibliothèque',
      description: 'Application web complète pour gérer les emprunts de livres avec interface utilisateur intuitive et système de fichiers texte pour le stockage.',
      technologies: ['HTML', 'PHP', 'CSS', 'Fichiers texte'],
      image: 'https://images.pexels.com/photos/481021/pexels-photo-481021.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com',
      liveUrl: null,
    },
    {
      title: 'Interface Base de Données MySQL',
      description: 'Dashboard administratif avec interface PHP pour la gestion complète d\'une base de données MySQL avec CRUD, requêtes avancées et rapports.',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com',
      liveUrl: null,
    },
    {
      title: 'Applications Python POO',
      description: 'Collection d\'applications Python utilisant la programmation orientée objet : gestionnaire de tâches, calculatrice scientifique et outil d\'analyse de données.',
      technologies: ['Python', 'POO', 'Tkinter', 'Pandas'],
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com',
      liveUrl: null,
    },
    {
      title: 'Scripts d\'Automatisation Python',
      description: 'Suite de scripts Python pour automatiser des tâches répétitives : sauvegarde de fichiers, traitement batch d\'images et génération de rapports.',
      technologies: ['Python', 'OS', 'Selenium', 'BeautifulSoup'],
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com',
      liveUrl: null,
    },
    {
      title: 'Exercices Java Avancés',
      description: 'Implémentation d\'algorithmes complexes en Java : structures de données, gestion de formulaires et interfaces graphiques avec Swing.',
      technologies: ['Java', 'Swing', 'Collections', 'JDBC'],
      image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com',
      liveUrl: null,
    },
    {
      title: 'Portfolio Web Responsive',
      description: 'Site web portfolio moderne et responsive créé avec les dernières technologies web, optimisé pour tous les appareils.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Mes Projets
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Découvrez une sélection de mes réalisations techniques, 
            allant du développement web aux applications de bureau
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200 text-sm font-medium"
                  >
                    <Github size={16} className="mr-2" />
                    GitHub
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;