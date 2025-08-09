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
      contactMe: 'Contáctame',
      emailCopied: 'Correo copiado al portapapeles'
    },
    // About
    about: {
      title: '¿Quién Soy?',
      description: 'Ingeniero en Software y amante de la tecnología. Aspirante a creador de software independiente y ayudar a crear sistemas tecnológicos. Nacido originario de Costa Rica y Graduado de la Universidad CENFOTEC. Explorando mis límites.',
      valuesTitle: 'Valores',
      values: {
        innovation: 'Innovación',
        innovationDesc: 'Siempre busco nuevas formas de resolver problemas usando tecnología de punta y metodologías ágiles para crear soluciones eficientes.',
        excellence: 'Excelencia',
        excellenceDesc: 'Me esfuerzo por entregar trabajo de la más alta calidad, con atención al detalle y cumpliendo con los estándares más exigentes de la industria.',
        collaboration: 'Colaboración',
        collaborationDesc: 'Creo en el poder del trabajo en equipo para lograr objetivos ambiciosos y crear un ambiente de crecimiento mutuo.',
        humility: 'Humildad',
        humilityDesc: 'Siempre pensar en el beneficio mutuo con el público y compañeros. El verdadero éxito se construye cuando todos los involucrados crecen y se benefician del trabajo en conjunto.'
      },
      tapForMore: 'Toca para ver más',
      missionTitle: 'Misión',
      mission: 'Desarrollar habilidades excepcionales y útiles que ayuden a la creación de tecnologías y participar en investigaciones y desarrollo de software innovador.',
      objectiveTitle: 'Objetivo',
      objective: 'Entender el funcionamiento de tecnologías de software como freelance para eventualmente fundar un negocio en torno a la tecnología.'
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
      features: 'Características Principales',
      descriptionLabel: 'Descripción',
      pokemon: {
        title: 'Juego de Pokemon en Línea',
        subtitle: 'Simulador de Batallas Pokemon',
        description: 'Juego de Pokemon sin licencia de Nintendo en línea para simular batallas de pokemon. Una experiencia interactiva que permite a los usuarios crear equipos personalizados y enfrentarse en batallas estratégicas simuladas, recreando la emoción de los combates Pokemon clásicos.',
        features: [
          'Agregar usuarios para batallas',
          'Crear equipo de Pokemones',
          'Batalla Pokemon simulada'
        ]
      },
      kana: {
        title: 'Kana Defence',
        subtitle: 'Juego de tipo Tower Defence',
        description: 'Juego de defensa donde tienes que evitar que el enemigo (las Kanas) lleguen al objetivo colocando defensas. Un desafiante tower defense que pone a prueba tu estrategia y planificación, donde cada decisión cuenta para proteger tu base de las oleadas enemigas.',
        features: [
          'Construir defensas de distintas clases',
          'Economía de puntos por kill',
          'Contador de puntuación'
        ]
      },
      multas: {
        title: 'Sistema de Multas',
        subtitle: 'Sistema integral de gestión de multas de tránsito',
        description: 'Sistema completo de gestión de multas de tránsito desarrollado como proyecto de la universidad, diseñado para digitalizar y modernizar el proceso de administración de infracciones vehiculares. La aplicación permite tanto a ciudadanos como a autoridades gestionar de manera eficiente todo el ciclo de vida de las multas, desde su creación hasta su resolución.',
        features: [
          'Registro y gestión completa de usuarios ciudadanos y oficiales',
          'Sistema de roles con diferentes niveles de acceso y permisos',
          'Creación, asignación y seguimiento detallado de multas por cédula',
          'Generación automática de reportes y estados de cuenta de multas',
          'Mapa interactivo de calor mostrando concentración de infracciones',
          'Sistema de seguridad con autenticación por lector de identidad',
          'Panel administrativo para gestión de oficiales y estadísticas',
          'Historial completo de transacciones y auditoría del sistema'
        ]
      },
      beatz: {
        title: 'Proyecto Beatz',
        subtitle: 'Aplicación completa de reproducción de música',
        description: 'Aplicación de streaming de música desarrollada como proyecto académico, que ofrece una experiencia completa de reproducción musical. Permite a los usuarios gestionar su biblioteca personal de música, crear colecciones organizadas y disfrutar de reproducción de alta calidad con todas las funcionalidades de un reproductor profesional.',
        features: [
          'Sistema de usuarios con perfiles personalizados y bibliotecas individuales',
          'Carga y gestión de archivos de música en múltiples formatos',
          'Creación y organización de playlists personalizadas',
          'Gestión completa de álbumes con metadatos y artwork',
          'Reproductor de música con controles avanzados y audio real',
          'Sistema de búsqueda y filtrado por artista, álbum y género',
          'Interfaz intuitiva y responsive para una experiencia óptima',
          'Almacenamiento seguro y organizado de la biblioteca musical'
        ]
      }
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
      whatsappText: 'Haz clic para chatear',
      whatsappMessage: '¡Hola Santiago! Me interesa contactarte desde tu portafolio web.'
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
      contactMe: 'Contact Me',
      emailCopied: 'Email copied to clipboard'
    },
    // About
    about: {
      title: 'Who Am I?',
      description: 'Software Engineer and technology enthusiast. Aspiring independent software creator and helping to create technological systems. Born in Costa Rica and graduated from CENFOTEC University. Exploring my limits.',
      valuesTitle: 'Values',
      values: {
        innovation: 'Innovation',
        innovationDesc: 'I always seek new ways to solve problems using cutting-edge technology and agile methodologies to create efficient solutions.',
        excellence: 'Excellence',
        excellenceDesc: 'I strive to deliver the highest quality work, with attention to detail and meeting the most demanding industry standards.',
        collaboration: 'Collaboration',
        collaborationDesc: 'I believe in the power of teamwork to achieve ambitious goals and create an environment of mutual growth.',
        humility: 'Humility',
        humilityDesc: 'Always thinking about mutual benefit with the public and colleagues. True success is built when everyone involved grows and benefits from working together.'
      },
      tapForMore: 'Tap for more',
      missionTitle: 'Mission',
      mission: 'Develop exceptional and useful skills that help in the creation of technologies and participate in research and development of innovative software.',
      objectiveTitle: 'Objective',
      objective: 'Understand the functioning of software technologies as a freelancer to eventually found a business around technology.'
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
      features: 'Main Features',
      descriptionLabel: 'Description',
      pokemon: {
        title: 'Online Pokemon Game',
        subtitle: 'Pokemon Battle Simulator',
        description: 'Nintendo unlicensed online Pokemon game to simulate pokemon battles. An interactive experience that allows users to create custom teams and engage in simulated strategic battles, recreating the excitement of classic Pokemon combat.',
        features: [
          'Add users for battles',
          'Create Pokemon team',
          'Simulated Pokemon battle'
        ]
      },
      kana: {
        title: 'Kana Defence',
        subtitle: 'Tower Defence Type Game',
        description: 'Defense game where you have to prevent the enemy (the Kanas) from reaching the target by placing defenses. A challenging tower defense that tests your strategy and planning, where every decision counts to protect your base from enemy waves.',
        features: [
          'Build defenses of different classes',
          'Point economy per kill',
          'Score counter'
        ]
      },
      multas: {
        title: 'Traffic Violation System',
        subtitle: 'Comprehensive traffic violation management system',
        description: 'Complete traffic violation management system developed as a university project, designed to digitize and modernize the vehicular infraction administration process. The application allows both citizens and authorities to efficiently manage the entire lifecycle of violations, from creation to resolution.',
        features: [
          'Complete registration and management of citizen and official users',
          'Role system with different access levels and permissions',
          'Creation, assignment and detailed tracking of violations by ID',
          'Automatic generation of reports and violation account statements',
          'Interactive heat map showing concentration of infractions',
          'Security system with identity reader authentication',
          'Administrative panel for officer management and statistics',
          'Complete transaction history and system audit'
        ]
      },
      beatz: {
        title: 'Beatz Project',
        subtitle: 'Complete music playback application',
        description: 'Music streaming application developed as an academic project, offering a complete musical playback experience. Allows users to manage their personal music library, create organized collections and enjoy high-quality playback with all the functionalities of a professional player.',
        features: [
          'User system with personalized profiles and individual libraries',
          'Loading and management of music files in multiple formats',
          'Creation and organization of personalized playlists',
          'Complete album management with metadata and artwork',
          'Music player with advanced controls and real audio',
          'Search and filtering system by artist, album and genre',
          'Intuitive and responsive interface for optimal experience',
          'Secure and organized storage of the music library'
        ]
      }
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
      whatsappText: 'Click to chat',
      whatsappMessage: 'Hello Santiago! I\'m interested in contacting you from your web portfolio.'
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
