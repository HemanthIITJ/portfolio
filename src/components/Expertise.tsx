import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { expertiseAreas } from '../data/portfolio';
import styles from './Expertise.module.css';

/**
 * Expertise Section with Premium Accordion Design
 * Elegant SVG chevron icon instead of basic text
 */

// Premium Chevron Icon
const ChevronIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const Expertise: React.FC = () => {
    const [expandedAreas, setExpandedAreas] = useState<number[]>([]);

    const toggleArea = (index: number) => {
        setExpandedAreas(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <section id="expertise" className={styles.section}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Deep Technical Expertise</h2>
                    <p className={styles.subtitle}>
                        Mastery across the full spectrum of AI training, agentic systems, and multi-agent orchestration
                    </p>
                </motion.div>

                <div className={styles.expertiseList}>
                    {expertiseAreas.map((area, index) => {
                        const isExpanded = expandedAreas.includes(index);
                        return (
                            <motion.div
                                key={index}
                                className={styles.expertiseArea}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <button
                                    className={`${styles.areaHeader} ${isExpanded ? styles.expanded : ''}`}
                                    onClick={() => toggleArea(index)}
                                    aria-expanded={isExpanded}
                                    aria-controls={`area-content-${index}`}
                                >
                                    <div>
                                        <h3>{area.title}</h3>
                                        <p className={styles.areaDescription}>{area.description}</p>
                                    </div>
                                    <ChevronIcon className={styles.expandIcon} />
                                </button>

                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            id={`area-content-${index}`}
                                            className={styles.areaContent}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        >
                                            <div className={styles.competenciesGrid}>
                                                {area.competencies.map((competency, compIndex) => (
                                                    <motion.div
                                                        key={compIndex}
                                                        className={styles.competencyCard}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: compIndex * 0.05 }}
                                                    >
                                                        <h4 className={styles.competencyTitle}>{competency.title}</h4>
                                                        <ul className={styles.competencyItems}>
                                                            {competency.items.map((item, itemIndex) => (
                                                                <li key={itemIndex}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
