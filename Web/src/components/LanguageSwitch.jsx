import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitch = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-3 py-2 bg-black/20 backdrop-blur-sm border border-[#0964ff]/20 rounded-lg hover:border-[#09dfff]/40 transition-all duration-300 text-white hover:text-[#09dfff]"
    >
      <Globe size={18} />
      <span className="font-semibold">
        {language === 'es' ? 'EN' : 'ES'}
      </span>
    </motion.button>
  );
};

export default LanguageSwitch;
