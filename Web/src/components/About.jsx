import { motion, AnimatePresence } from 'framer-motion';
import { User, Heart, Globe, GraduationCap, X } from 'lucide-react';
import { useState } from 'react';

const About = () => {
  const [hoveredValue, setHoveredValue] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);

  const valores = [
    {
      title: 'Responsabilidad',
      icon: '💼',
      description: 'Dedicar tiempo y esfuerzo a aprender y masterizar. Cada momento invertido en el crecimiento profesional es una inversión en la excelencia y el dominio de las habilidades técnicas.'
    },
    {
      title: 'Empatía',
      icon: '❤️',
      description: 'Trabajar en conjunto con personas y ser abierto a ideas de toda fuente. La colaboración efectiva nace de escuchar, comprender y valorar las perspectivas de cada miembro del equipo.'
    },
    {
      title: 'Compromiso',
      icon: '🎯',
      description: 'Aprender con determinación sobre el desarrollo del software y tecnologías actuales y ancestrales. La pasión por el conocimiento tecnológico impulsa la innovación y el crecimiento constante.'
    },
    {
      title: 'Humildad',
      icon: '🙏',
      description: 'Siempre pensar en el beneficio mutuo con el público y compañeros. El verdadero éxito se construye cuando todos los involucrados crecen y se benefician del trabajo en conjunto.'
    }
  ];

  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#09dfff] to-[#0964ff] bg-clip-text text-transparent"
          >
            ¿Quién Soy?
          </motion.h2>

          {/* Main Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-lg md:text-xl text-white leading-relaxed mb-8">
              Ingeniero en Software y amante de la tecnología. Aspirante a creador de software independiente 
              y ayudar a crear sistemas tecnológicos. Nacido originario de Costa Rica y Graduado de la 
              Universidad CENFOTEC. Explorando mis límites.
            </p>
          </motion.div>

          {/* Decorative Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center gap-8 mb-16"
          >
            <div className="text-[#ff2909]">
              <User size={32} />
            </div>
            <div className="text-[#ff2909]">
              <Heart size={32} />
            </div>
            <div className="text-[#ff2909]">
              <Globe size={32} />
            </div>
            <div className="text-[#ff2909]">
              <GraduationCap size={32} />
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-[#09dfff]">
              Valores
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto relative">
              {valores.map((valor, index) => (
                <motion.div
                  key={valor.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                  onMouseEnter={() => setHoveredValue(index)}
                  onMouseLeave={() => setHoveredValue(null)}
                  onClick={() => setSelectedValue(index)}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-black/50 backdrop-blur-sm border border-[#0964ff]/20 rounded-xl p-6 text-center hover:border-[#09dfff]/40 transition-all duration-300 cursor-pointer relative z-10"
                  >
                    <div className="text-3xl mb-3">{valor.icon}</div>
                    <h4 className="text-lg font-semibold text-white">{valor.title}</h4>
                    <p className="text-xs text-gray-400 mt-2 md:hidden">Toca para ver más</p>
                  </motion.div>

                  {/* Desktop Tooltip */}
                  {hoveredValue === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none hidden md:block"
                    >
                      <div className="bg-gray-900/95 backdrop-blur-md border border-[#09dfff]/30 rounded-lg p-4 shadow-lg shadow-[#09dfff]/20 min-w-[250px] max-w-[300px]">
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                          <div className="w-4 h-4 bg-gray-900/95 border-l border-t border-[#09dfff]/30 rotate-45"></div>
                        </div>
                        <p className="text-white text-sm leading-relaxed text-center">
                          {valor.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Mobile Modal */}
            <AnimatePresence>
              {selectedValue !== null && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                  onClick={() => setSelectedValue(null)}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-900/95 backdrop-blur-md border border-[#09dfff]/30 rounded-2xl p-8 max-w-lg w-full relative shadow-2xl shadow-[#09dfff]/20"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Close Button */}
                    <button
                      onClick={() => setSelectedValue(null)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <X size={24} />
                    </button>

                    {/* Modal Content */}
                    <div className="text-center">
                      <div className="text-5xl mb-4">
                        {valores[selectedValue].icon}
                      </div>
                      <h3 className="text-2xl font-bold text-[#09dfff] mb-4">
                        {valores[selectedValue].title}
                      </h3>
                      <p className="text-white leading-relaxed text-lg">
                        {valores[selectedValue].description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Mission and Objective Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="max-w-5xl mx-auto">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#09dfff] text-left">
                  Misión
                </h3>
                <div className="bg-black/30 backdrop-blur-sm border border-[#0964ff]/20 rounded-xl p-8 hover:border-[#09dfff]/40 transition-all duration-300">
                  <p className="text-lg text-white leading-relaxed text-left">
                    Desarrollar habilidades excepcionales y útiles que ayuden a la creación de tecnologías y participar en investigaciones y desarrollo de software innovador.
                  </p>
                </div>
              </motion.div>

              {/* Objective */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#09dfff] text-left">
                  Objetivo
                </h3>
                <div className="bg-black/30 backdrop-blur-sm border border-[#0964ff]/20 rounded-xl p-8 hover:border-[#09dfff]/40 transition-all duration-300">
                  <p className="text-lg text-white leading-relaxed text-left">
                    Entender el funcionamiento de tecnologías de software como freelance para eventualmente fundar un negocio en torno a la tecnología.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
