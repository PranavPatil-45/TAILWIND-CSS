import React, { useEffect, useState } from 'react'
import { color, motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import AOS from 'aos'
import 'aos/dist/aos.css'

const products = [
  { id: 1, name: "Cow's Milk", href: '#', imageSrc: "https://videos.openai.com/az/vg-assets/task_01kaqvm6j7ef38w6ep6eszzczt%2F1763884897_img_0.webp?se=2025-11-26T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=8ffff87a-01f1-47c9-9090-32999d4d6380&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-23T01%3A09%3A51Z&ske=2025-11-30T01%3A14%3A51Z&sks=b&skv=2024-08-04&sig=SC58/n2cz3BA5I6ayG7oQEOB6l2HOJ2yHZBJjOmGxrk%3D&ac=oaivgprodscus2", price: '₹50/litre', color: 'Pure & Fresh'},
  { id: 2, name: 'Buffalo Milk', href: '#', imageSrc: "https://videos.openai.com/az/vg-assets/task_01kaqw0fkge599cxsfyy16r9be%2F1763885290_img_1.webp?se=2025-11-26T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=8ffff87a-01f1-47c9-9090-32999d4d6380&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-23T01%3A09%3A51Z&ske=2025-11-30T01%3A14%3A51Z&sks=b&skv=2024-08-04&sig=QZ5iwWzx1/QDbohhSfi2MMaJFtlJntm1u%2BDQ3HiSFLI%3D&ac=oaivgprodscus2", price: '	₹68/litre',color: 'Rich & Creamy' },
  { id: 3, name: 'Butter Milk', href: '#', imageSrc:"https://videos.openai.com/az/vg-assets/task_01kaqw6s95fq0ay3n39wez34g3%2F1763885501_img_1.webp?se=2025-11-26T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=8ffff87a-01f1-47c9-9090-32999d4d6380&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-23T01%3A09%3A51Z&ske=2025-11-30T01%3A14%3A51Z&sks=b&skv=2024-08-04&sig=6kAv%2B5LpwwyK3XFbzzkgwpOuKOJ8Qy4CNG%2ByVlFT8JY%3D&ac=oaivgprodscus2" ,  price: '₹30/litre', color: 'Light & Refreshing' },
  { id: 4, name: 'Punjabi Dahi', href: '#', imageSrc: "https://i.pinimg.com/originals/d1/0e/de/d10ede122569351840f5fb45c9338852.webp", price: '₹100/kg', color: 'Thick & Delicious' },
  { id: 5, name: 'Lassi ', href: '#', imageSrc:"https://www.sharmispassions.com/wp-content/uploads/2023/08/sweet-lassi3.jpg" ,  price: '₹20/glass', color: 'Refreshing & Cool' },
  { id: 6, name: 'Panneer', href: '#', imageSrc: "https://i.pinimg.com/736x/cf/d4/36/cfd4360fb7a7c8e5e020c7637b4dd091.jpg", price: '₹360/kg', color: 'Soft & Fresh' },
  { id: 7, name: 'Cow Ghee', href: '#', imageSrc:"https://images.news18.com/webstories/2023/10/cropped-ghee-12-1.jpg" , price: '₹600 to ₹1000/kg', color: 'Rich & Aromatic' },
  { id: 8, name: 'Buffalo Ghee', href: '#', imageSrc: "https://i0.wp.com/m.media-amazon.com/images/I/41aTLIkNnbL._AC_UF894,1000_QL80_.jpg?resize=400%2C600&ssl=1",  price: '₹600 to ₹1200/kg', color: 'Thick & Flavorful' },
]

export default function AnimatedProductGrid() {
  const [modalProduct, setModalProduct] = useState(null)

  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true })
  }, [])

  const handleCallOrder = (product) => {
    const phoneNumber = '+919021598976'
    const message = `Hello! I would like to order ${product.name} - ${product.price}`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleQuickCall = (product) => {
    const phoneNumber = '+919021598976'
    window.open(`tel:${phoneNumber}`, '_self')
  }

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Our Products Loved By Customers</h2>
        <p className="mt-2 text-gray-600">High quality Dairy Products, Creamy & Delicious.</p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={i * 60}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              <Tilt
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                glareEnable={false}
                className="group"
              >
                <div className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative aspect-square lg:aspect-[4/5] w-full overflow-hidden">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 flex flex-col justify-between p-3 pointer-events-none">
                      <div className="flex justify-end gap-2 pointer-events-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={() => setModalProduct(product)}
                          className="bg-white/90 text-gray-800 px-3 py-2 rounded-md text-sm font-semibold shadow-md hover:scale-105 transform transition"
                          aria-label={`Quick view ${product.name}`}
                        >
                          Quick View
                        </button>
                        <button
                          onClick={() => toastAddToWishlist(product)}
                          className="bg-red-600 text-white px-3 py-2 rounded-md text-sm font-semibold shadow-md hover:scale-105 transform transition"
                          aria-label={`Add ${product.name} to wishlist`}
                        >
                          ♥
                        </button>
                      </div>

                      <div className="flex justify-between items-center pointer-events-none">
                        <div className="bg-white/90 px-3 py-1 rounded-md text-xs text-gray-700 pointer-events-auto">{product.color}</div>
                        <div className="bg-white/90 px-3 py-1 rounded-md text-sm font-semibold text-gray-900 pointer-events-auto">{product.price}</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-sm text-gray-700 truncate">
                      <a href={product.href} className="block hover:text-red-600 transition-colors duration-200">{product.name}</a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                    
\                    <div className="mt-3 flex gap-2">
                      <button
                        onClick={() => handleCallOrder(product)}
                        className="flex-1 bg-green-600 text-white py-2 px-3 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors duration-200 transform hover:scale-105 shadow-md"
                      >
                        📱 WhatsApp
                      </button>
                      <button
                        onClick={() => handleQuickCall(product)}
                        className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105 shadow-md"
                      >
                        📞 Call Now
                      </button>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>

      {modalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setModalProduct(null)} />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-square lg:aspect-[4/5]">
                <img src={modalProduct.imageSrc} alt={modalProduct.imageAlt} className="object-cover w-full h-full" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">{modalProduct.name}</h3>
                <p className="mt-2 text-gray-600">{modalProduct.color}</p>
                <p className="mt-4 text-2xl font-extrabold text-gray-900">{modalProduct.price}</p>

                <div className="mt-6 flex gap-3 flex-col">
                  <button 
                    onClick={() => handleCallOrder(modalProduct)}
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <span>📱</span> Order via WhatsApp
                  </button>
                  <button 
                    onClick={() => handleQuickCall(modalProduct)}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <span>📞</span> Call to Order Now
                  </button>
                  <button 
                    onClick={() => setModalProduct(null)} 
                    className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => setModalProduct(null)}
              className="absolute top-3 right-3 rounded-full bg-white/90 p-2 shadow-md hover:scale-110 transition-transform"
              aria-label="Close quick view"
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}
    </div>
  )
}

function toastAddToWishlist(product) {
  alert(`${product.name} added to wishlist`)
}