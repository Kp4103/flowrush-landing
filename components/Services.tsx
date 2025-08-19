'use client'

import { motion } from 'framer-motion'
import { Globe, Smartphone, Monitor, Code } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Website Design',
      description: 'Modern, responsive websites that captivate your audience and drive conversions.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'User-Friendly']
    },
    {
      icon: Code,
      title: 'Website Development',
      description: 'Robust web applications built with cutting-edge technologies and best practices.',
      features: ['Custom Development', 'Scalable Architecture', 'API Integration', 'Performance Optimized']
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'Native Performance']
    },
    {
      icon: Monitor,
      title: 'Software Development',
      description: 'Enterprise-grade software solutions tailored to your business requirements.',
      features: ['Custom Software', 'Cloud Solutions', 'Database Design', 'System Integration']
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Development Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we deliver comprehensive digital solutions
            that drive business growth and user engagement.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:from-primary-100 group-hover:to-primary-200 transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary-600" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* White Label Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              White-Label Development You Can Rely On
            </h3>
            <p className="text-lg text-primary-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Focus on growing your business while we handle the technical execution
              behind the scenes. Our white-label development services are designed for
              agencies and consultants who need a dependable partner to deliver
              high-quality web, software, and app solutions—on time, on brand, and
              under strict confidentiality.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              <span>About Flowrush Technologies</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
