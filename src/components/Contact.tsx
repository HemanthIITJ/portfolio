import { motion } from 'framer-motion';
import { personalInfo, achievements } from '../data/portfolio';
import styles from './Contact.module.css';

/**
 * Contact Section with Premium Design
 * Elegant SVG icons instead of emojis
 */

// Premium SVG Icons
const EmailIcon = () => (
    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const PhoneIcon = () => (
    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
);

const LocationIcon = () => (
    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.13401 2 5 5.13401 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13401 15.866 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
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
                        <h3>Contact Information</h3>
                        <div className={styles.infoList}>
                            <div className={styles.infoItem}>
                                <EmailIcon />
                                <span>{personalInfo.email}</span>
                            </div>
                            <div className={styles.infoItem}>
                                <PhoneIcon />
                                <span>{personalInfo.phone}</span>
                            </div>
                            <div className={styles.infoItem}>
                                <LocationIcon />
                                <span>{personalInfo.location}</span>
                            </div>
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
                                href={personalInfo.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialButton}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Twitter
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
