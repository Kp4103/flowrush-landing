'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const TechnologiesAndPartners = () => {
  const technologies = [
    { name: 'Next.js', logo: '/next-logo.webp' },
    { name: 'React', logo: '/react-logo.webp' },
    { name: 'Vue.js', logo: '/vuejs-logo.webp' },
    { name: 'Flutter', logo: '/flutter-logo.webp' },
    { name: 'JavaScript', logo: '/javascript-logo.webp' },
    { name: 'Node.js', logo: '/nodejs-logo.webp' },
    { name: 'Python', logo: '/python-logo.webp' },
    { name: 'PHP', logo: '/php-logo.webp' },
    { name: 'WordPress', logo: '/wordpress-logo.webp' },
    { name: 'AWS', logo: '/aws-logo.webp' },
    { name: 'Azure', logo: '/azure-logo.webp' },
  ]

  const partners = [
    { name: 'Google Partner', logo: '/google-partner-logo.webp' },
    { name: 'Top Developer - Clutch', logo: '/clutch-logo.webp' },
    { name: 'Shopify Partner', logo: '/shopify-partner-logo.webp' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Technologies We <span className="gradient-text">Master</span>
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-16"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={60}
                    height={60}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Trusted <span className="gradient-text">Partnerships</span>
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-24 h-16 mb-4 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700">{partner.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechnologiesAndPartners
