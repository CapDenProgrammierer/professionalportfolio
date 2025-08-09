import { createContext, useContext, useState } from 'react';

// Crear el contexto
const LanguageContext = createContext();

// Textos en ambos idiomas
export const translations = {
  es: {
    // Header
    nav: {
      home: 'Inicio',
      about: 'Sobre Mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto'
    },
    // Hero
    hero: {
      greeting: '¡Hola! Soy',
      name: 'Santiago Astua',
      title: 'Desarrollador Full Stack',
      slogan: 'Creando soluciones innovadoras con código limpio y diseño excepcional',
      downloadCv: 'Descargar CV',
      contactMe: 'Contáctame'
    },
    // About
    about: {
      title: 'Sobre Mí',
      description: 'Soy un desarrollador apasionado por crear soluciones tecnológicas innovadoras. Mi enfoque se centra en el desarrollo de aplicaciones web y sistemas robustos que generen impacto positivo.',
      values: {
        title: 'Valores',
        innovation: 'Innovación',
        innovationDesc: 'Siempre busco nuevas formas de resolver problemas y mejorar procesos',
        excellence: 'Excelencia',
        excellenceDesc: 'Me esfuerzo por entregar trabajo de la más alta calidad en cada proyecto',
        collaboration: 'Colaboración',
        collaborationDesc: 'Creo en el poder del trabajo en equipo para lograr objetivos ambiciosos'
      },
      mission: {
        title: 'Misión',
        description: 'Desarrollar soluciones tecnológicas que simplifiquen la vida de las personas y optimicen los procesos empresariales, siempre con un enfoque en la calidad, innovación y experiencia del usuario.'
      },
      objective: {
        title: 'Objetivo',
        description: 'Consolidarme como un desarrollador full stack experto, contribuyendo a proyectos desafiantes que generen impacto positivo mientras continúo aprendiendo y creciendo profesionalmente en un entorno colaborativo.'
      }
    },
    // Skills
    skills: {
      title: 'Habilidades',
      profile: {
        title: 'Perfil Profesional',
        description: 'Desarrollador de Backend y Frontend, diseñador de sistemas e implementación de base de datos. Experiencia con tecnologías de React, SQL Server, Godot, Unity C#, C++, Java, Spring Boot y MySQL.'
      },
      technologies: 'Tecnologías',
      softSkills: {
        title: 'Habilidades Blandas',
        problemSolver: {
          title: 'Ágil resolvedor de problemas',
          description: 'Capacidad para identificar y resolver desafíos técnicos de manera eficiente'
        },
        teamwork: {
          title: 'Trabajo solo y en equipo',
          description: 'Versatilidad para desempeñarme tanto de forma independiente como colaborativa'
        },
        help: {
          title: 'Comprometido a la ayuda mutua',
          description: 'Enfocado en crear un ambiente de apoyo y crecimiento conjunto'
        }
      }
    },
    // Projects
    projects: {
      title: 'Proyectos',
      description: 'Una muestra de los proyectos en los que he trabajado, mostrando mi experiencia y habilidades técnicas.',
      seeDetails: 'Ver Detalles',
      seeCode: 'Ver Código',
      technologies: 'Tecnologías',
      features: 'Características Principales'
    },
    // Contact
    contact: {
      title: 'Contacto',
      description: '¿Tienes un proyecto en mente? ¡Hablemos! Completa el formulario y te responderé pronto.',
      getInTouch: 'Ponte en contacto',
      form: {
        firstName: 'Nombre',
        lastName: 'Apellido',
        email: 'Email',
        phone: 'Teléfono',
        address: 'Dirección',
        message: 'Escribe tu mensaje aquí',
        send: 'Enviar',
        sending: 'Enviando...'
      },
      success: '¡Mensaje enviado exitosamente! Te responderé pronto.',
      error: 'Error al enviar el mensaje. Por favor intenta de nuevo.',
      whatsappText: 'Haz clic para chatear'
    }
  },
  en: {
    // Header
    nav: {
      home: 'Home',
      about: 'About Me',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    },
    // Hero
    hero: {
      greeting: 'Hi! I\'m',
      name: 'Santiago Astua',
      title: 'Full Stack Developer',
      slogan: 'Creating innovative solutions with clean code and exceptional design',
      downloadCv: 'Download CV',
      contactMe: 'Contact Me'
    },
    // About
    about: {
      title: 'About Me',
      description: 'I\'m a passionate developer focused on creating innovative technological solutions. My approach centers on developing web applications and robust systems that generate positive impact.',
      values: {
        title: 'Values',
        innovation: 'Innovation',
        innovationDesc: 'I always seek new ways to solve problems and improve processes',
        excellence: 'Excellence',
        excellenceDesc: 'I strive to deliver the highest quality work in every project',
        collaboration: 'Collaboration',
        collaborationDesc: 'I believe in the power of teamwork to achieve ambitious goals'
      },
      mission: {
        title: 'Mission',
        description: 'Develop technological solutions that simplify people\'s lives and optimize business processes, always with a focus on quality, innovation, and user experience.'
      },
      objective: {
        title: 'Objective',
        description: 'Establish myself as an expert full stack developer, contributing to challenging projects that generate positive impact while continuing to learn and grow professionally in a collaborative environment.'
      }
    },
    // Skills
    skills: {
      title: 'Skills',
      profile: {
        title: 'Professional Profile',
        description: 'Backend and Frontend Developer, systems designer and database implementation. Experience with React, SQL Server, Godot, Unity C#, C++, Java, Spring Boot and MySQL technologies.'
      },
      technologies: 'Technologies',
      softSkills: {
        title: 'Soft Skills',
        problemSolver: {
          title: 'Agile problem solver',
          description: 'Ability to identify and resolve technical challenges efficiently'
        },
        teamwork: {
          title: 'Solo and team work',
          description: 'Versatility to perform both independently and collaboratively'
        },
        help: {
          title: 'Committed to mutual help',
          description: 'Focused on creating an environment of support and joint growth'
        }
      }
    },
    // Projects
    projects: {
      title: 'Projects',
      description: 'A showcase of projects I\'ve worked on, demonstrating my experience and technical skills.',
      seeDetails: 'See Details',
      seeCode: 'See Code',
      technologies: 'Technologies',
      features: 'Main Features'
    },
    // Contact
    contact: {
      title: 'Contact',
      description: 'Have a project in mind? Let\'s talk! Fill out the form and I\'ll get back to you soon.',
      getInTouch: 'Get in touch',
      form: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        phone: 'Phone',
        address: 'Address',
        message: 'Write your message here',
        send: 'Send',
        sending: 'Sending...'
      },
      success: 'Message sent successfully! I\'ll get back to you soon.',
      error: 'Error sending message. Please try again.',
      whatsappText: 'Click to chat'
    }
  }
};

// Proveedor del contexto
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      toggleLanguage,
      t
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
