import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, ArrowDown } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ProyectoPokemon from '../assets/ProyectoPokemon.jpg';
import ProyectoJuego from '../assets/ProyectoJuego.png';
import ProyectoMultas from '../assets/ProyectoMultas.jpg';
import ProyectoMusica from '../assets/ProyectoMusica.jpg';

const Projects = () => {
  const { t } = useLanguage();
  const [currentProject, setCurrentProject] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  // Proyectos del portafolio
  const projects = [
    {
      id: 1,
      title: t('projects.pokemon.title'),
      subtitle: t('projects.pokemon.subtitle'),
      image: ProyectoPokemon,
      description: t('projects.pokemon.description'),
      technologies: ['JavaScript', 'HTML', 'MongoDB'],
      features: [
        t('projects.pokemon.features.0'),
        t('projects.pokemon.features.1'),
        t('projects.pokemon.features.2')
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/KendallCa05/PokemonGame'
    },
    {
      id: 2,
      title: t('projects.kana.title'),
      subtitle: t('projects.kana.subtitle'),
      image: ProyectoJuego,
      description: t('projects.kana.description'),
      technologies: ['Godot', 'C#'],
      features: [
        t('projects.kana.features.0'),
        t('projects.kana.features.1'),
        t('projects.kana.features.2')
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/CapDenProgrammierer/ProyectoJuego'
    },
    {
      id: 3,
      title: t('projects.multas.title'),
      subtitle: t('projects.multas.subtitle'),
      image: ProyectoMultas,
      description: t('projects.multas.description'),
      technologies: ['ASP.NET', 'C#', 'SQL Server', 'HTML', 'CSS', 'JavaScript'],
      features: [
        t('projects.multas.features.0'),
        t('projects.multas.features.1'),
        t('projects.multas.features.2'),
        t('projects.multas.features.3'),
        t('projects.multas.features.4'),
        t('projects.multas.features.5'),
        t('projects.multas.features.6'),
        t('projects.multas.features.7')
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/NotFabianML/Proyecto2-GestionDeMultas-Frontend'
    },
    {
      id: 4,
      title: t('projects.beatz.title'),
      subtitle: t('projects.beatz.subtitle'),
      image: ProyectoMusica,
      description: t('projects.beatz.description'),
      technologies: ['React', 'C#', 'ASP.NET', 'SQL Server', 'JavaScript', 'MP3 Player API'],
      features: [
        t('projects.beatz.features.0'),
        t('projects.beatz.features.1'),
        t('projects.beatz.features.2'),
        t('projects.beatz.features.3'),
        t('projects.beatz.features.4'),
        t('projects.beatz.features.5'),
        t('projects.beatz.features.6'),
        t('projects.beatz.features.7')
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/CapDenProgrammierer/MusicApp'
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    // Scroll suave a la subsección
    setTimeout(() => {
      document.getElementById('project-details')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#09dfff] to-[#0964ff] bg-clip-text text-transparent">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t('projects.description')}
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto mb-16"
        >
          {/* Main Project Display */}
          <div className="relative overflow-hidden rounded-2xl bg-black/30 backdrop-blur-sm border border-[#0964ff]/20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Project Image */}
                <div className="relative h-96 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center cursor-pointer overflow-hidden"
                     onClick={() => handleProjectClick(projects[currentProject])}>
                  {/* Project Image */}
                  {projects[currentProject].image && projects[currentProject].image !== '/placeholder-project-1.jpg' ? (
                    <img 
                      src={projects[currentProject].image} 
                      alt={projects[currentProject].title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-6xl text-[#ff2909] opacity-50">
                      📱
                    </div>
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <ArrowDown size={48} className="mx-auto mb-4 text-[#09dfff]" />
                      <p className="text-lg font-semibold">{t('projects.seeDetails')}</p>
                    </div>
                  </div>
                </div>

                {/* Project Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {projects[currentProject].title}
                  </h3>
                  <p className="text-[#09dfff] text-lg">
                    {projects[currentProject].subtitle}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300 hover:text-[#ff2909]"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300 hover:text-[#ff2909]"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? 'bg-[#09dfff] scale-125'
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Project Details Subsection */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              id="project-details"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto bg-black/40 backdrop-blur-sm border border-[#0964ff]/20 rounded-2xl p-8 mb-16"
            >
              {/* Close Button */}
              <div className="flex justify-end mb-6">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  ✕
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Left Column - Project Info */}
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xl text-[#09dfff] mb-6">
                    {selectedProject.subtitle}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-3">{t('projects.descriptionLabel')}</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-3">{t('projects.technologies')}</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[#0964ff]/20 text-[#09dfff] rounded-full text-sm border border-[#0964ff]/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-[#09dfff] to-[#0964ff] text-black px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#09dfff]/30 transition-all duration-300"
                    >
                      <Github size={18} />
                      {t('projects.seeCode')}
                    </a>
                  </div>
                </div>

                {/* Right Column - Features */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">{t('projects.features')}</h4>
                  <ul className="space-y-3">
                    {selectedProject.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <div className="w-2 h-2 bg-[#ff2909] rounded-full mt-2 flex-shrink-0"></div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
