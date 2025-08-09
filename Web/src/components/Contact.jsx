import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t, language } = useLanguage();
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  // Configuración EmailJS - CONFIGURADO Y LISTO
  const SERVICE_ID = 'service_q25jptx'; // Tu Service ID
  const TEMPLATE_ID = 'template_b4mbp76'; // Tu Template ID
  const PUBLIC_KEY = 'xXtNzyS4NJXE7fTWd'; // Tu Public Key

  // Número de WhatsApp (sin espacios ni guiones para la URL)
  const WHATSAPP_NUMBER = '50683940269'; // Tu número sin espacios ni símbolos

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ text: '', type: '' });

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          setMessage({
            text: t('contact.success'),
            type: 'success'
          });
          form.current.reset();
        },
        (error) => {
          setMessage({
            text: t('contact.error'),
            type: 'error'
          });
          console.log('Error:', error.text);
        }
      )
      .finally(() => {
        setIsLoading(false);
        // Limpiar mensaje después de 5 segundos
        setTimeout(() => {
          setMessage({ text: '', type: '' });
        }, 5000);
      });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(t('contact.whatsappMessage'));
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappURL, '_blank');
  };
  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
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
            {t('contact.title')}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-black/40 backdrop-blur-sm border border-[#0964ff]/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              {t('contact.getInTouch')}
            </h3>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {/* Nombre y Apellido */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="from_name"
                    placeholder={t('contact.form.firstName')}
                    required
                    className="w-full px-4 py-3 bg-[#0964ff]/10 border border-[#0964ff]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#09dfff] focus:bg-[#0964ff]/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="from_lastname"
                    placeholder={t('contact.form.lastName')}
                    required
                    className="w-full px-4 py-3 bg-[#0964ff]/10 border border-[#0964ff]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#09dfff] focus:bg-[#0964ff]/20 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Email y Teléfono */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="email"
                    name="from_email"
                    placeholder={t('contact.form.email')}
                    required
                    className="w-full px-4 py-3 bg-[#0964ff]/10 border border-[#0964ff]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#09dfff] focus:bg-[#0964ff]/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="from_phone"
                    placeholder={t('contact.form.phone')}
                    className="w-full px-4 py-3 bg-[#0964ff]/10 border border-[#0964ff]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#09dfff] focus:bg-[#0964ff]/20 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Dirección */}
              <div>
                <input
                  type="text"
                  name="from_address"
                  placeholder={t('contact.form.address')}
                  className="w-full px-4 py-3 bg-[#0964ff]/10 border border-[#0964ff]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#09dfff] focus:bg-[#0964ff]/20 transition-all duration-300"
                />
              </div>

              {/* Mensaje */}
              <div>
                <textarea
                  rows="6"
                  name="message"
                  placeholder={t('contact.form.message')}
                  required
                  className="w-full px-4 py-3 bg-[#0964ff]/10 border border-[#0964ff]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#09dfff] focus:bg-[#0964ff]/20 transition-all duration-300 resize-vertical"
                ></textarea>
              </div>

              {/* Mensaje de estado */}
              {message.text && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg text-center font-medium ${
                    message.type === 'success'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}
                >
                  {message.text}
                </motion.div>
              )}

              {/* Botón Enviar */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`px-12 py-3 bg-gradient-to-r from-[#09dfff] to-[#0964ff] text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-105 ${
                    isLoading
                      ? 'opacity-70 cursor-not-allowed'
                      : 'hover:shadow-lg hover:shadow-[#09dfff]/30'
                  }`}
                >
                  {isLoading ? t('contact.form.sending') : t('contact.form.send')}
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
          {/* Email Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-sm border border-[#0964ff]/20 rounded-2xl p-6 text-center"
          >
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-[#09dfff] to-[#0964ff] rounded-full flex items-center justify-center">
              <Mail size={24} className="text-black" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Email</h4>
            <p className="text-[#09dfff] font-mono text-sm">santiastua@gmail.com</p>
          </motion.div>

          {/* WhatsApp Container */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onClick={openWhatsApp}
            className="bg-black/40 backdrop-blur-sm border border-[#0964ff]/20 rounded-2xl p-6 text-center cursor-pointer hover:border-[#25d366]/40 hover:bg-[#25d366]/10 transition-all duration-300 transform hover:scale-105"
          >
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-[#25d366] to-[#128c7e] rounded-full flex items-center justify-center">
              <MessageCircle size={24} className="text-white" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">WhatsApp</h4>
            <p className="text-[#25d366] font-mono text-sm">+506 8394-0269</p>
            <p className="text-gray-400 text-xs mt-2">{t('contact.whatsappText')}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
