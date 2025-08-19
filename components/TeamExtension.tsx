'use client'

import { motion } from 'framer-motion'

const TeamExtension = () => {
  return (
    <section className="min-h-screen flex items-center py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              Think of us as an extension of your team
            </h3>
            <p className="text-lg text-primary-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Let's kick things off with a no-pressure consultation and explore how we can grow together—because when you succeed, we all succeed.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-50 transition-all duration-200 text-lg"
            >
              <span>Get Started</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamExtension
