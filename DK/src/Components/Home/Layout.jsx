import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8
    }
  }
};

const imageVariants = {
  hidden: { scale: 1 },
  hover: { 
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  hover: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3
    }
  }
};

// Animated Product Card Component
const AnimatedProductCard = ({ product, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover="hover"
      custom={index}
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
      style={{
        transitionDelay: `${index * 100}ms`
      }}
    >
      {/* Image Container with Gradient Overlay */}
      <div className="relative aspect-w-16 aspect-h-9 h-48 sm:h-56 md:h-64 overflow-hidden">
        <motion.img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover"
          variants={imageVariants}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Hover Content */}
        <motion.div 
          className="absolute inset-0 flex items-end p-6"
          variants={contentVariants}
        >
          <div className="text-white">
            <div className="w-12 h-1 bg-white mb-3 rounded-full transform group-hover:scale-x-150 transition-transform duration-500"></div>
            <p className="text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              Click to view details
            </p>
          </div>
        </motion.div>

        {/* Floating Badge */}
        <motion.div 
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-lg"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
        >
          Popular
        </motion.div>
      </div>
      
      {/* Content Section */}
      <div className="p-6 relative">
        {/* Animated Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
        
        <div className="relative z-10">
          <motion.h3 
            className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            {product.title}
          </motion.h3>
          <motion.p 
            className="text-blue-600 font-semibold text-lg group-hover:text-blue-700 transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            {product.catchyWord}
          </motion.p>
        </div>

        <motion.button
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110 hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="/products">Order Now</a>
        </motion.button>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
    </motion.div>
  );
};

const ProductsHighlight = () => {
  const [headerRef, headerInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const products = [
    {
      id: 1,
      title: "Cow's Milk",
      catchyWord: "Pure & Fresh",
      image: "https://videos.openai.com/az/vg-assets/task_01kanb99nreanbfbp35nfg8m1a%2F1763800645_img_1.webp?se=2025-11-26T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-22T01%3A09%3A01Z&ske=2025-11-29T01%3A14%3A01Z&sks=b&skv=2024-08-04&sig=W8J2GY34jHq2UAkxeGKOlz7lg/01Vc2ya37/UastTKQ%3D&ac=oaivgprodscus2"
    },
    {
      id: 2,
      title: "Buffalo's Milk",
      catchyWord: "Rich & Creamy", 
      image: "https://videos.openai.com/az/vg-assets/task_01kanbkatefr5a6eh2bs0cjg29%2F1763800982_img_3.webp?se=2025-11-26T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-22T01%3A09%3A01Z&ske=2025-11-29T01%3A14%3A01Z&sks=b&skv=2024-08-04&sig=dUimt68Z6ajo8Cj/I1PPed/MeoV/sKdbqjVCY0ozphE%3D&ac=oaivgprodscus2"
    },
    {
      id: 3,
      title: "Punjabi Dahi(Curd)",
      catchyWord: "Thick & Delicious",
      image: "https://videos.openai.com/az/vg-assets/task_01kanbxrrde8k9x5hfdw8gk7p1%2F1763801341_img_3.webp?se=2025-11-26T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-22T01%3A09%3A01Z&ske=2025-11-29T01%3A14%3A01Z&sks=b&skv=2024-08-04&sig=33YwZeosENuUHi1iZCMwzpqPHKji3NhBAo6R6yOXjss%3D&ac=oaivgprodscus2"
    },
    {
      id: 4,
      title: "Lassi", 
      catchyWord: "Refreshing & Cool",
      image: "https://videos.openai.com/az/vg-assets/task_01kanc4rjcfresxdey20fwh9zb%2F1763801545_img_0.webp?se=2025-11-26T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-22T01%3A09%3A01Z&ske=2025-11-29T01%3A14%3A01Z&sks=b&skv=2024-08-04&sig=DuHvzhOaqBekRD8daf63XImR26CUzMC4qwMCi2Q0xfY%3D&ac=oaivgprodscus2"
    },
    {
      id: 5,
      title: "Paneer (Cottage Cheese)",
      catchyWord: "Soft & Fresh",
      image: "https://videos.openai.com/az/vg-assets/task_01kanca18bfdqag7cd25d6sawn%2F1763801725_img_0.webp?se=2025-11-26T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-22T01%3A09%3A01Z&ske=2025-11-29T01%3A14%3A01Z&sks=b&skv=2024-08-04&sig=LDvmsk7hh68turO/%2Blc6MvqyTqqXIkDczrFX0M3w%2BZk%3D&ac=oaivgprodscus2"
    },
    {
      id: 6,
      title: "Ghee (Clarified Butter)",
      catchyWord: "Rich & Aromatic",
      image: "https://videos.openai.com/az/vg-assets/task_01kanch98re79rctxhf2g1qf73%2F1763801905_img_0.webp?se=2025-11-26T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-22T01%3A09%3A01Z&ske=2025-11-29T01%3A14%3A01Z&sks=b&skv=2024-08-04&sig=8MnFB4x8k1XGSrWIp3L8dqrXFWlgTM/BzC/K9B%2B/PW8%3D&ac=oaivgprodscus2"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
          className="mx-auto max-w-2xl lg:text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={headerInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-4"
          >
            <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              DK KRISHNA DAIRY
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Our Popular Products
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={headerInView ? { width: "100px" } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <AnimatedProductCard 
              key={product.id} 
              product={product} 
              index={index}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
         <Link to="/products">View All Products</Link>

          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsHighlight;