'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Shield, Zap, DollarSign, Globe } from 'lucide-react'

const WhyChoose = () => {
  const whyChooseFeatures = [
    { icon: CheckCircle, text: 'Risk-Free Engagement', desc: 'Money-back guarantee for your peace of mind' },
    { icon: Zap, text: 'Tailored Solutions', desc: 'Every product custom-built to match your goals' },
    { icon: Shield, text: 'Lifetime Support', desc: 'Ongoing technical support whenever you need it' },
    { icon: DollarSign, text: 'Clear, Honest Pricing', desc: 'Transparent and fair cost structures' },
    { icon: Globe, text: 'Global Trust', desc: 'Chosen by leading digital vendors and agencies worldwide' },
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
        duration: 0.6
      }
    }
  }

  return (
    <section className="min-h-screen flex items-center py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="gradient-text">Flowrush</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8"
        >
          {whyChooseFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center card-hover hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-primary-100 rounded-xl flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{feature.text}</h4>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChoose
