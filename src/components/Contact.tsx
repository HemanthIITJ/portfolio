import { motion } from 'framer-motion';
import { personalInfo, achievements } from '../data/portfolio';
import styles from './Contact.module.css';

/**
 * Contact Section with Premium Design
 * Simplified layout with only email and social links, premium glow on achievements
 */

// Premium SVG Icons
const EmailIcon = () => (
    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const AwardIcon = () => (
    <svg className={styles.achievementIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15L8.5 17L9.5 13L6 10L10.5 9.5L12 5L13.5 9.5L18 10L14.5 13L15.5 17L12 15Z"
            stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(255, 69, 0, 0.1)" />
        <path d="M8.5 17V21L12 19L15.5 21V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Contact: React.FC = () => {
    return (
        <section id="contact" className={styles.section}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Get In Touch</h2>
                    <p className={styles.subtitle}>
                        Let's collaborate on cutting-edge AI research and innovation
                    </p>
                </motion.div>

                <div className={styles.content}>
                    <motion.div
                        className={styles.infoCard}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>Contact</h3>
                        <div className={styles.emailContainer}>
                            <EmailIcon />
                            <a href={`mailto:${personalInfo.email}`} className={styles.emailLink}>
                                {personalInfo.email}
                            </a>
                        </div>

                        <div className={styles.socialLinks}>
                            <motion.a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialButton}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                LinkedIn
                            </motion.a>
                            <motion.a
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialButton}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                GitHub
                            </motion.a>
                            <motion.a
                                href={personalInfo.x}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialButton}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                X
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.achievementsCard}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>Notable Achievements</h3>
                        <ul className={styles.achievementsList}>
                            {achievements.map((achievement, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <AwardIcon />
                                    <span>{achievement}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
