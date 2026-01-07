import { motion } from 'framer-motion';
import { personalInfo, education } from '../data/portfolio';
import styles from './About.module.css';

/**
 * About Section - Premium Layout with Professional Photo
 * Showcases professional background with elegant photo integration
 */

const About: React.FC = () => {
    return (
        <section id="about" className={styles.section}>
            <div className="container">
                <div className={styles.aboutContainer}>
                    {/* Left - Professional Photo */}
                    <motion.div
                        className={styles.photoSection}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className={styles.photoWrapper}>
                            <div className={styles.photoCard}>
                                <img
                                    src="/images/profile.png"
                                    alt="Hemanth Kandimalla - Professional Photo"
                                    className={styles.profilePhoto}
                                />
                                <div className={styles.photoGradient}></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - About Content */}
                    <motion.div
                        className={styles.content}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.h2
                            className={styles.sectionTitle}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            About Me
                        </motion.h2>

                        <motion.div
                            className={styles.bio}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <p>
                                An AI Research Lead with deep expertise in reinforcement learning, large language models,
                                and vision-language systems. I specialize in building production-grade AI solutions that
                                push the boundaries of what's possible in artificial intelligence.
                            </p>
                            <p>
                                My work focuses on adversarial robustness, parameter-efficient fine-tuning, and advanced
                                agentic frameworks. I lead multi-disciplinary teams in architecting scalable data pipelines
                                and optimizing training/inference costs for foundation models at scale.
                            </p>
                        </motion.div>

                        <motion.div
                            className={styles.highlights}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className={styles.highlightCard}>
                                <div className={styles.highlightIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z"
                                            stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h3>Education</h3>
                                    <p>{education.degree} in {education.field}</p>
                                    <p className={styles.institution}>{education.institution}</p>
                                    <p className={styles.gpa}>CGPA: {education.gpa}</p>
                                </div>
                            </div>

                            <div className={styles.highlightCard}>
                                <div className={styles.highlightIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="3" y="6" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="M3 10H21M8 14H8.01M12 14H12.01M16 14H16.01M8 17H8.01M12 17H12.01M16 17H16.01"
                                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h3>Current Role</h3>
                                    <p>{personalInfo.title}</p>
                                    <p className={styles.institution}>C-DAC, Bengaluru</p>
                                    <p className={styles.duration}>Aug 2023 - Present</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className={styles.stats}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            <div className={styles.statItem}>
                                <div className={styles.statNumber}>35%</div>
                                <div className={styles.statLabel}>Adversarial Robustness Improvement</div>
                            </div>
                            <div className={styles.statItem}>
                                <div className={styles.statNumber}>65%</div>
                                <div className={styles.statLabel}>Training Cost Reduction</div>
                            </div>
                            <div className={styles.statItem}>
                                <div className={styles.statNumber}>42%</div>
                                <div className={styles.statLabel}>RAG Accuracy Boost</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
