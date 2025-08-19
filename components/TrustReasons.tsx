'use client'

import { motion } from 'framer-motion'
import { Shield, Users, Clock, Wrench, MessageSquare, LifeBuoy } from 'lucide-react'

const TrustReasons = () => {
  const trustReasons = [
    {
      icon: Shield,
      title: 'Strict Confidentiality & White-Label Delivery',
      description: 'We operate under NDAs and deliver fully branded solutions—your clients never know we\'re there.'
    },
    {
      icon: Users,
      title: 'Scalable On-Demand Teams',
      description: 'Quickly expand your development capacity with dedicated experts, without the overhead.'
    },
    {
      icon: Clock,
      title: 'Reliable, On-Time Delivery',
      description: 'We meet your deadlines—no delays, no excuses—so you can maintain client trust.'
    },
    {
      icon: Wrench,
      title: 'Custom-Built Solutions',
      description: 'Every product is tailored to your client\'s unique goals, tech stack, and business needs.'
    },
    {
      icon: MessageSquare,
      title: 'Transparent Communication',
      description: 'No tech jargon—just clear, consistent updates and collaboration at every step.'
    },
    {
      icon: LifeBuoy,
      title: 'Post-Launch Support & Maintenance',
      description: 'We offer lifetime support, ensuring your client projects remain stable and successful long after delivery.'
    },
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
    <section id="about" className="min-h-screen flex items-center py-20 bg-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Agencies Worldwide Trust <span className="gradient-text">Flowrush</span>
            <br />
            as Their Tech Partner
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {trustReasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover group hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TrustReasons
