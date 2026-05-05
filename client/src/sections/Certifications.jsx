import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiBook, FiStar, FiCheckCircle, FiEye, FiDownload, FiX } from 'react-icons/fi';

const certifications = [
  {
    title: 'Microsoft Certified: Power BI Data Analyst Associate',
    issuer: 'Microsoft',
    year: '2025',
    icon: FiCheckCircle,
    color: '#6366f1',
    certificate: '/certificates/Microsoft Power BI.pdf',
    thumbnail: '/certificates/powerbi.png',
  },
  {
    title: 'Oracle APEX Cloud Developer Certified Professional',
    issuer: 'Oracle',
    year: '2025',
    icon: FiCheckCircle,
    color: '#f97316',
    certificate: '/certificates/Oracle APEX Cloud Developer Certified Professional.pdf',
    thumbnail: '/certificates/Apex.png',
  },
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    year: '2025',
    icon: FiBook,
    color: '#8b5cf6',
    certificate: '/certificates/Oracle Certified AI Foundations Associate.pdf',
    thumbnail: '/certificates/foundation.png',
  },
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    issuer: 'Oracle',
    year: '2025',
    icon: FiBook,
    color: '#06b6d4',
    certificate: '/certificates/Oracle Certified Generative AI Professional.pdf',
    thumbnail: '/certificates/generative.png',
  },
  {
    title: 'Academic Excellence Award (Scholarship)',
    issuer: 'Kongu Engineering College',
    year: '2025–2026',
    icon: FiStar,
    color: '#f59e0b',
    certificate: '/certificates/WhatsApp Image 2026-04-28 at 9.41.59 PM.jpeg',
    thumbnail: '/certificates/WhatsApp Image 2026-04-28 at 9.41.59 PM.jpeg',
  },
  {
    title: "1st Prize – CloudSpark'26 Project Presentation",
    issuer: 'CloudSpark Hackathon',
    year: '2026',
    icon: FiAward,
    color: '#10b981',
    certificate: '/certificates/cloudspark_certificate.pdf',
    thumbnail: '/certificates/cloudspark.png',
  },
];

const additionalAchievements = [
  'Publication – Paralysis Agitans Prediction Using Machine Learning Algorithms, IEEE, 2025',
  'Publication – Quantum Computing In Artificial Intelligence, Book Chapter in Quantum CRC, 2025',
  'Member – NSS (National Service Scheme), 2024–2025',
  'Member – Computer Society of India, 2024–2025',
  'Open Source Contributions – Active GitHub profile with 5+ projects',
];

function CertificateCard({ cert, index, inView }) {
  const [showPreview, setShowPreview] = useState(false);
  const hasCertificate = cert.certificate || cert.thumbnail;

  return (
    <>
      <motion.div
        key={cert.title}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        whileHover={{ y: -8, scale: 1.02 }}
        className="glass-card p-6 relative overflow-hidden group"
      >
        <div
          className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
          style={{ backgroundColor: cert.color }}
        />
        <div className="flex items-start gap-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${cert.color}15` }}
          >
            <cert.icon size={24} style={{ color: cert.color }} />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1 leading-snug">
              {cert.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              {cert.issuer}
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="inline-block text-xs font-medium px-2 py-1 rounded-md"
                style={{
                  backgroundColor: `${cert.color}15`,
                  color: cert.color,
                }}
              >
                {cert.year}
              </span>
              {hasCertificate && (
                <>
                  {cert.thumbnail && (
                    <button
                      onClick={() => setShowPreview(true)}
                      className="inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-md bg-primary-500/10 text-primary-600 dark:text-primary-400 hover:bg-primary-500/20 transition-colors"
                    >
                      <FiEye size={12} />
                      View
                    </button>
                  )}
                  {cert.certificate && (
                    <a
                      href={cert.certificate}
                      download
                      className="inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-md bg-accent-500/10 text-accent-600 dark:text-accent-400 hover:bg-accent-500/20 transition-colors"
                    >
                      <FiDownload size={12} />
                      Download
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Certificate Preview Modal */}
      <AnimatePresence>
        {showPreview && cert.thumbnail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setShowPreview(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-3xl w-full bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-dark-700">
                <h3 className="font-semibold text-gray-900 dark:text-white">{cert.title}</h3>
                <button
                  onClick={() => setShowPreview(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
                >
                  <FiX size={20} className="text-gray-500" />
                </button>
              </div>
              <div className="p-4">
                <img
                  src={cert.thumbnail}
                  alt={`${cert.title} certificate`}
                  className="w-full rounded-lg object-contain max-h-[70vh]"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden flex-col items-center justify-center py-12 text-gray-500">
                  <FiAward size={48} className="mb-4 opacity-50" />
                  <p>Certificate preview not available</p>
                  {cert.certificate && (
                    <a
                      href={cert.certificate}
                      download
                      className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                    >
                      <FiDownload size={16} />
                      Download Certificate
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Certifications() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="certifications" className="py-24 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subheading mx-auto">
            Professional certifications and notable achievements that showcase my expertise and dedication.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <CertificateCard key={cert.title} cert={cert} index={index} inView={inView} />
          ))}
        </div>

        {/* Publications and Membership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="glass-card p-8"
        >
          <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <FiBook className="text-primary-500" />
            Publications and Membership
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {additionalAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-dark-700/50"
              >
                <div className="w-2 h-2 rounded-full bg-accent-500 flex-shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {achievement}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
