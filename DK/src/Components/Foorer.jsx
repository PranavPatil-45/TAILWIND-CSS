import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerLinks = {
    products: [
      { name: "Cow's Milk", href: "/products" },
      { name: "Buffalo Milk", href: "/products" },
      { name: "Curd & Dahi", href: "/products" },
      { name: "Paneer", href: "/products" },
      { name: "Ghee", href: "/products" },
      { name: "Lassi", href: "/products" }
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Story", href: "/about" },
      { name: "Quality Standards", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Press Kit", href: "/press" }
    ],
    support: [
      { name: "Contact Us", href: "/contact" },
      { name: "Delivery Info", href: "/delivery" },
      { name: "Returns", href: "/returns" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" }
    ]
  };

  const socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      icon: '📘',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Instagram',
      href: '#',
      icon: '📷',
      color: 'hover:bg-pink-600'
    },
    {
      name: 'Twitter',
      href: '#',
      icon: '🐦',
      color: 'hover:bg-blue-400'
    },
    {
      name: 'YouTube',
      href: '#',
      icon: '📺',
      color: 'hover:bg-red-600'
    },
    {
      name: 'WhatsApp',
      href: '#',
      icon: '💬',
      color: 'hover:bg-green-500'
    }
  ];

  const contactInfo = [
    {
      icon: '📞',
      title: 'Call Us',
      value: '+91 90215 98976',
      href: 'tel:+919021598976'
    },
    {
      icon: '📧',
      title: 'Email Us',
      value: 'info@dkdairy.com',
      href: 'mailto:info@dkdairy.com'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      value: 'Maharana Pratap Nagar, Godadara, Surat, Gujarat-395011',
      href: 'https://maps.app.goo.gl/b4oieaqzCf7DVJx67'
    }
  ];

  const paymentMethods = ['💳', '📱', '🏦', '💰', '💸'];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-red-500 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-500 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-500 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-500 to-red-600 py-12"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  🎉 Get Fresh Updates!
                </h3>
                <p className="text-red-100 text-lg">
                  Subscribe to get exclusive offers, new product launches, and dairy tips delivered fresh to your inbox.
                </p>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 rounded-2xl border-0 focus:ring-4 focus:ring-white/30 text-gray-900 placeholder-gray-500"
                    required
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="bg-white text-red-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                  >
                    Subscribe Now
                  </motion.button>
                </form>
                
                {isSubscribed && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 bg-white/20 backdrop-blur-sm rounded-xl text-center"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>✅</span>
                      <span>Thank you for subscribing! Welcome to the DK Dairy family.</span>
                    </span>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Link to="/" className="inline-block mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-4 shadow-2xl inline-block"
                >
                  <img
                    src="https://image2url.com/images/1763956603504-226fdfd9-5a18-4092-9fdd-5485e758c169.png"
                    alt="DK Krishna Dairy"
                    className="h-12 w-auto"
                  />
                </motion.div>
              </Link>
              
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Serving fresh, pure, and natural dairy products since 2005. 
                Your trusted partner for quality dairy delivered to your doorstep.
              </p>
              
              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 group"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="font-semibold group-hover:text-red-400 transition-colors duration-200">
                        {item.title}
                      </div>
                      <div className="text-sm">{item.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-6 text-white">Our Products</h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-red-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-6 text-white">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-red-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-6 text-white">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-red-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              <div className="flex items-center space-x-4">
                <span className="text-gray-300 mr-4">Follow Us:</span>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 bg-gray-700 rounded-2xl flex items-center justify-center text-xl transition-all duration-300 ${social.color} shadow-lg hover:shadow-xl`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-gray-300 mr-4">We Accept:</span>
                <div className="flex space-x-2">
                  {paymentMethods.map((method, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.2, y: -2 }}
                      className="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center text-lg shadow-lg"
                    >
                      {method}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-900 py-6"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2024 DK Krishna Dairy. All rights reserved. Made with ❤️ in India
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-1">
                  <span>🚚</span>
                  <span>Free Delivery on orders above ₹200</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-1">
                  <span>⭐</span>
                  <span>4.9/5 Rating</span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 right-10 text-4xl opacity-20"
      >
        🐄
      </motion.div>
      
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-20 left-10 text-3xl opacity-20"
      >
        🥛
      </motion.div>
    </footer>
  );
};

export default Footer;