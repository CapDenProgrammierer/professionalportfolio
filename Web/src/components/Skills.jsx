import { motion } from 'framer-motion';
import { User, Lightbulb, Users, Target } from 'lucide-react';

// Importaciones de iconos de tecnologías
import ReactIcon from '../assets/icons/react-icon.svg';
import SqlServerIcon from '../assets/icons/sqlserver-icon.svg';
import GodotIcon from '../assets/icons/godot-icon.svg';
import UnityIcon from '../assets/icons/unity-icon.svg';
import CSharpIcon from '../assets/icons/csharp-icon.svg';
import CppIcon from '../assets/icons/cpp-icon.svg';
import JavaIcon from '../assets/icons/java-icon.svg';
import SpringBootIcon from '../assets/icons/springboot-icon.svg';
import MySqlIcon from '../assets/icons/mysql-icon.svg';

const Skills = () => {
  const technologies = [
    { 
      name: 'React', 
      icon: ReactIcon
    }, 
    { 
      name: 'SQL Server', 
      icon: SqlServerIcon
    },
    { 
      name: 'Godot', 
      icon: GodotIcon
    },
    { 
      name: 'Unity', 
      icon: UnityIcon
    },
    { 
      name: 'C#', 
      icon: CSharpIcon
    },
    { 
      name: 'C++', 
      icon: CppIcon
    },
    { 
      name: 'Java', 
      icon: JavaIcon
    },
    { 
      name: 'Spring Boot', 
      icon: SpringBootIcon
    },
    { 
      name: 'MySQL', 
      icon: MySqlIcon
    }
  ];

  const softSkills = [
    {
      title: 'Ágil resolvedor de problemas',
      icon: <Lightbulb size={32} />,
      description: 'Capacidad para identificar y resolver desafíos técnicos de manera eficiente'
    },
    {
      title: 'Trabajo solo y en equipo',
      icon: <Users size={32} />,
      description: 'Versatilidad para desempeñarme tanto de forma independiente como colaborativa'
    },
    {
      title: 'Comprometido a la ayuda mutua',
      icon: <Target size={32} />,
      description: 'Enfocado en crear un ambiente de apoyo y crecimiento conjunto'
    }
  ];

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
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
            Habilidades
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Professional Profile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#09dfff] text-left">
              Perfil Profesional
            </h3>              <div className="bg-black/30 backdrop-blur-sm border border-[#0964ff]/20 rounded-xl p-8 hover:border-[#09dfff]/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-[#ff2909] mt-1">
                  <User size={28} />
                </div>
                <p className="text-lg text-white leading-relaxed">
                  Desarrollador de Backend y Frontend, diseñador de sistemas e implementación de base de datos. 
                  Experiencia con tecnologías de React, SQL Server, Godot, Unity C#, C++, Java, Spring Boot y MySQL.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Technologies Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-[#09dfff] text-center">
              Tecnologías
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/50 backdrop-blur-sm border border-[#0964ff]/20 rounded-xl p-6 text-center hover:border-[#09dfff]/40 transition-all duration-300 group"
                >
                  {/* Icono de tecnología */}
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#09dfff]/20 to-[#0964ff]/20 rounded-lg flex items-center justify-center group-hover:from-[#09dfff]/30 group-hover:to-[#0964ff]/30 transition-all duration-300">
                    {tech.icon ? (
                      <img 
                        src={tech.icon} 
                        alt={`${tech.name} icon`}
                        className="w-10 h-10 object-contain"
                      />
                    ) : (
                      <div className="text-2xl text-[#ff2909] font-bold">
                        {tech.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <h4 className="text-white font-semibold text-sm">{tech.name}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-[#09dfff] text-center">
              Habilidades Blandas
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-black/30 backdrop-blur-sm border border-[#0964ff]/20 rounded-xl p-8 text-center hover:border-[#09dfff]/40 transition-all duration-300"
                >
                  <div className="text-[#ff2909] mb-4 flex justify-center">
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">{skill.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
