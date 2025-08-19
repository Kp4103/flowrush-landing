'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: [
      'Website Design',
      'Website Development',
      'App Development',
      'Software Development',
      'White-Label Solutions'
    ],
    Company: [
      'About Us',
      'Our Process',
      'Case Studies',
      'Careers',
      'Contact'
    ],
    Resources: [
      'Blog',
      'FAQ',
      'Documentation',
      'Support',
      'Privacy Policy'
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-container">
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-2 mb-6">
                  <Image
                    src="/flowrush-logo-new.webp"
                    alt="Flowrush Technologies"
                    width={240}
                    height={80}
                    className="h-16 sm:h-18 lg:h-20 w-auto brightness-0 invert"
                  />
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Your trusted global partner for full-cycle digital development—backed
                  by strict NDAs and complete confidentiality.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-primary-500" />
                    <span className="text-gray-400">hello@flowrush.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-primary-500" />
                    <span className="text-gray-400">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-primary-500" />
                    <span className="text-gray-400">UK, US, Global</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <div key={category}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold mb-6">{category}</h3>
                  <ul className="space-y-3">
                    {links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <motion.a
                          href="#"
                          whileHover={{ x: 5 }}
                          className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          {link}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © {currentYear} Flowrush Technologies. All rights reserved.
            </motion.div>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
