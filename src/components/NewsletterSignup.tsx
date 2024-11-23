import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Check } from 'lucide-react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Burada API çağrısı yapılabilir
      setEmail('');
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Dekoratif arka plan elementleri */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-4 -right-4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl" />
          </div>

          <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Sol taraf - Görsel ve Metin */}
              <div className="p-8 md:p-12 bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm mb-8">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">
                    Yeniliklerden Haberdar Olun
                  </h2>
                  <p className="text-purple-100 text-lg mb-8">
                    En yeni ürünler, özel kampanyalar ve indirimlerden ilk siz haberdar olun.
                    Üstelik ilk alışverişinize özel %10 indirim kazanın!
                  </p>
                  <div className="flex items-center text-sm">
                    <Check className="w-5 h-5 mr-2" />
                    <span>Haftalık özel fırsatlar</span>
                  </div>
                  <div className="flex items-center text-sm mt-2">
                    <Check className="w-5 h-5 mr-2" />
                    <span>Yeni ürün duyuruları</span>
                  </div>
                  <div className="flex items-center text-sm mt-2">
                    <Check className="w-5 h-5 mr-2" />
                    <span>Kişiye özel indirimler</span>
                  </div>
                </motion.div>
              </div>

              {/* Sağ taraf - Form */}
              <div className="p-8 md:p-12 flex items-center">
                <div className="w-full">
                  {!isSubmitted ? (
                    <motion.form
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          E-posta Adresiniz
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="ornek@email.com"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                          required
                        />
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center group"
                      >
                        <span>Kaydol</span>
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                      <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                        Kaydolarak, gizlilik politikamızı kabul etmiş olursunuz.
                      </p>
                    </motion.form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 mb-4">
                        <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Kaydınız Alındı!
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        E-posta listemize başarıyla kaydoldunuz. İndirim kodunuz e-posta adresinize gönderilecektir.
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;