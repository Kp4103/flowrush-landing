'use client'

import { motion } from 'framer-motion'
import { Search, Map, Zap, Cog, Rocket } from 'lucide-react'

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Discovery & Alignment',
      description: 'We start by understanding your client\'s goals, expectations, and timelines to ensure we\'re fully aligned from day one.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: '02',
      icon: Map,
      title: 'Tailored Planning',
      description: 'Our team creates a custom development roadmap with clear milestones, ensuring transparency and a smooth workflow.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: '03',
      icon: Zap,
      title: 'Rapid Prototyping',
      description: 'We build and share early prototypes or design mockups for quick feedback—minimizing revisions and speeding up approvals.',
      color: 'from-green-500 to-green-600'
    },
    {
      number: '04',
      icon: Cog,
      title: 'Agile Development & QA',
      description: 'Using agile methods, we deliver in sprints with continuous testing, ensuring stability, quality, and adaptability at every stage.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      number: '05',
      icon: Rocket,
      title: 'On-Time Delivery & Ongoing Support',
      description: 'We meet your deadlines with precision and offer lifetime support to keep your clients satisfied long after launch.',
      color: 'from-red-500 to-red-600'
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  return (
    <section id="process" className="min-h-screen flex items-center py-20 bg-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">5-Step Process</span> to Keep Your Clients Happy
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto space-y-32"
        >
          {steps.map((step, index) => {
            const IconComponent = step.icon
            const isEven = index % 2 === 0
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col lg:flex-row items-center gap-16 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0">
                    <span className="text-5xl sm:text-6xl font-bold text-gray-600">
                      {step.number}
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className="flex-shrink-0"
                >
                  <div className={`w-40 h-40 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center shadow-2xl`}>
                    <IconComponent className="w-20 h-20 text-white" />
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Process
