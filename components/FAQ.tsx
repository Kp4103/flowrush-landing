'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'Do you offer white-label development services?',
      answer: 'Yes, Flowrush specializes in white-label development. We work under strict NDAs and deliver fully branded solutions so your clients never know we\'re involved.',
      category: 'Services'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We work with clients across fintech, retail, healthcare, manufacturing, SaaS, and more—delivering tailored digital solutions that meet industry-specific needs.',
      category: 'Industries'
    },
    {
      question: 'Can you work with our existing design or development team?',
      answer: 'Absolutely. We integrate seamlessly with your in-house team, acting as an extension to support and scale your development capacity.',
      category: 'Collaboration'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'We use modern stacks including React, Next.js, Node.js, Flutter, WordPress, Shopify, AWS, Azure, and more—ensuring performance, scalability, and security.',
      category: 'Technology'
    },
    {
      question: 'Do you provide post-launch support and maintenance?',
      answer: 'Yes, we offer lifetime support for all projects to ensure stability, performance, and long-term success for your clients.',
      category: 'Support'
    },
    {
      question: 'How do you ensure confidentiality and IP protection?',
      answer: 'All projects are covered under strict NDA agreements. You retain full ownership of the code, design, and intellectual property.',
      category: 'Security'
    },
    {
      question: 'What\'s your typical project turnaround time?',
      answer: 'Turnaround depends on the project scope, but we prioritize fast, efficient delivery with realistic timelines and milestone-based execution.',
      category: 'Timeline'
    },
    {
      question: 'Can I hire a dedicated developer or a full team?',
      answer: 'Yes, we offer flexible engagement models—including dedicated developers, full project teams, or staff augmentation based on your needs.',
      category: 'Resources'
    },
    {
      question: 'Is there a minimum project size or budget?',
      answer: 'We\'re flexible. Whether you\'re working on a small MVP or a full-scale enterprise platform, we tailor our solutions to fit your goals and budget.',
      category: 'Budget'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const categoryColors = {
    'Services': 'bg-blue-50 text-blue-700 border-blue-200',
    'Industries': 'bg-green-50 text-green-700 border-green-200',
    'Collaboration': 'bg-purple-50 text-purple-700 border-purple-200',
    'Technology': 'bg-orange-50 text-orange-700 border-orange-200',
    'Support': 'bg-pink-50 text-pink-700 border-pink-200',
    'Security': 'bg-red-50 text-red-700 border-red-200',
    'Timeline': 'bg-yellow-50 text-yellow-700 border-yellow-200',
    'Resources': 'bg-indigo-50 text-indigo-700 border-indigo-200',
    'Budget': 'bg-gray-50 text-gray-700 border-gray-200'
  }

  return (
    <section id="faq" className="min-h-screen flex items-center py-20 bg-white">
      <div className="section-container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers. Here are the most common questions about our services and process.
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-2xl border-2 shadow-lg overflow-hidden transition-all duration-300 ${
                openIndex === index 
                  ? 'border-primary-200 shadow-xl' 
                  : 'border-gray-100 hover:border-gray-200 hover:shadow-lg'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 lg:p-8 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-4 flex-1">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${categoryColors[faq.category]}`}>
                    {faq.category}
                  </span>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                    openIndex === index 
                      ? 'bg-primary-100 text-primary-600' 
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                      <div className="border-t border-gray-100 pt-6">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help! Get in touch and we'll provide personalized answers to all your questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Contact Our Team
              </motion.a>
              <motion.a
                href="mailto:hello@flowrush.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Email Us Directly
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
