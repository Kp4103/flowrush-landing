'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Smartphone, Monitor, Code, ChevronLeft, ChevronRight } from 'lucide-react'

const ServicesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const services = [
    {
      icon: Globe,
      title: 'Website Design',
      description: 'Modern, responsive websites that captivate your audience and drive conversions with stunning visual design and seamless user experience.',
      features: ['Responsive Design', 'UI/UX Focused', 'Brand Consistency', 'Performance Optimized'],
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Code,
      title: 'Website Development',
      description: 'Robust web applications built with cutting-edge technologies, scalable architecture, and industry best practices.',
      features: ['Modern Frameworks', 'API Integration', 'Database Design', 'Security First'],
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
      features: ['iOS & Android', 'Cross-Platform', 'Native Performance', 'App Store Ready'],
      gradient: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: Monitor,
      title: 'Software Development',
      description: 'Enterprise-grade software solutions tailored to your business requirements with scalable architecture.',
      features: ['Custom Solutions', 'Enterprise Grade', 'Scalable Architecture', 'Integration Ready'],
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, services.length])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const currentService = services[currentIndex]

  return (
    <section id="services" className="min-h-screen flex items-center py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From concept to deployment, we deliver comprehensive digital solutions
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`${currentService.bgColor} relative`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                  <div className="p-8 lg:p-12 flex flex-col justify-center text-center lg:text-left">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${currentService.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto lg:mx-0`}>
                        <currentService.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        {currentService.title}
                      </h3>
                      
                      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        {currentService.description}
                      </p>

                      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0">
                        {currentService.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                            className="flex items-center space-x-2"
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${currentService.gradient} rounded-full`}></div>
                            <span className="text-sm font-medium text-gray-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  <div className="relative flex items-center justify-center p-8 lg:p-12">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="relative"
                    >
                      <div className={`w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-r ${currentService.gradient} rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden`}>
                        <currentService.icon className="w-24 h-24 lg:w-32 lg:h-32 text-white z-10" />
                        
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-4 border-2 border-white/30 rounded-full"
                        />
                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-8 border border-white/20 rounded-full"
                        />
                      </div>

                      <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center"
                      >
                        <div className={`w-8 h-8 bg-gradient-to-r ${currentService.gradient} rounded-lg`}></div>
                      </motion.div>
                      
                      <motion.div
                        animate={{ y: [10, -10, 10] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
                      >
                        <div className={`w-6 h-6 bg-gradient-to-r ${currentService.gradient} rounded-full`}></div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prevSlide}
            className="absolute -left-6 lg:-left-16 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10 border border-gray-100"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute -right-6 lg:-right-16 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10 border border-gray-100"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          <div className="flex justify-center mt-8 space-x-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <div className="mt-6 max-w-md mx-auto">
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary-600 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentIndex + 1) / services.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
        >
          {services.map((service, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-xl text-center transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white shadow-lg ring-2 ring-primary-500'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            >
              <div className={`w-10 h-10 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                <service.icon className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-sm font-semibold text-gray-900">{service.title}</h4>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSlider
