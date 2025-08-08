import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import LogoPersonal from '../assets/LogoPersonal.svg';
import SantiagoEspImagen from '../assets/SantiagoEspImagen.pdf';
import SantiagoEnImagen from '../assets/SantiagoEnImagen.pdf';
import AnimatedBackground from './AnimatedBackground';

const Hero = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [cvMenuOpen, setCvMenuOpen] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('santiastua@gmail.com').then(() => {
      setEmailCopied(true);
      setTimeout(() => {
        setEmailCopied(false);
      }, 2000);
    });
  };

  const downloadCV = (language) => {
    const cvFile = language === 'es' ? SantiagoEspImagen : SantiagoEnImagen;
    const fileName = language === 'es' ? 'Santiago_Astua_CV_Español.pdf' : 'Santiago_Astua_CV_English.pdf';
    
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setCvMenuOpen(false);
  };
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground 
        opacity={0.15} 
        speed={0.8}
        zIndex={0}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <img 
              src={LogoPersonal} 
              alt="Santiago Astua Logo" 
              className="w-48 h-48 mx-auto object-contain drop-shadow-lg" 
            />
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#09dfff] to-[#0964ff] bg-clip-text text-transparent"
          >
            Santiago Astua
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-[#09dfff] mb-8 font-semibold"
          >
            Desarrollador Full Stack & Ingeniero de Software
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg text-white mb-10 max-w-2xl mx-auto font-medium"
          >
            Coding into the Future
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-gradient-to-r from-[#09dfff] to-[#0964ff] text-black px-8 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-[#09dfff]/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Contáctame
            </motion.a>
            <motion.div
              className="relative"
              onMouseLeave={() => setCvMenuOpen(false)}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCvMenuOpen(!cvMenuOpen)}
                className="border-2 border-[#0964ff] text-[#09dfff] bg-black/30 backdrop-blur-sm px-8 py-3 rounded-lg font-bold hover:bg-[#0964ff]/10 hover:border-[#09dfff] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Descargar CV
                <ChevronDown size={16} className={`transition-transform duration-200 ${cvMenuOpen ? 'rotate-180' : ''}`} />
              </motion.button>

              {/* CV Options Menu */}
              {cvMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 left-0 right-0 bg-gray-900/95 backdrop-blur-md border border-[#09dfff]/30 rounded-lg shadow-lg shadow-[#09dfff]/20 z-10"
                >
                  <button
                    onClick={() => downloadCV('es')}
                    className="w-full px-4 py-3 text-left text-white hover:bg-[#0964ff]/20 hover:text-[#09dfff] transition-colors duration-200 rounded-t-lg flex items-center gap-2"
                  >
                    <span className="text-lg">🇪🇸</span>
                    Español
                  </button>
                  <div className="border-t border-[#0964ff]/20"></div>
                  <button
                    onClick={() => downloadCV('en')}
                    className="w-full px-4 py-3 text-left text-white hover:bg-[#0964ff]/20 hover:text-[#09dfff] transition-colors duration-200 rounded-b-lg flex items-center gap-2"
                  >
                    <span className="text-lg">🇺🇸</span>
                    English
                  </button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex justify-center gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.1, color: '#ff2909' }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/CapDenProgrammierer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#ff2909] transition-colors duration-300"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, color: '#ff2909' }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/santiago-astua-estrada-18a54a322/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#ff2909] transition-colors duration-300"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, color: '#ff2909' }}
              whileTap={{ scale: 0.9 }}
              onClick={copyEmailToClipboard}
              className="text-white hover:text-[#ff2909] transition-colors duration-300 cursor-pointer relative"
            >
              <Mail size={24} />
              {emailCopied && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap z-10"
                >
                  Correo copiado al portapapeles
                </motion.div>
              )}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
