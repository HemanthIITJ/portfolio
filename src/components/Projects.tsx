import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';
import styles from './Projects.module.css';

/**
 * Projects Section with Premium Cards
 * Elegant SVG icons instead of emojis
 */

// Premium SVG Icons
const CheckIcon = () => (
    <svg className={styles.checkmark} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.2" />
        <path d="M5 8L7 10L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ImpactIcon = () => (
    <svg className={styles.impactIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2L12.5 7.5L18 8.5L14 13L15 18.5L10 15.5L5 18.5L6 13L2 8.5L7.5 7.5L10 2Z"
            stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(255, 69, 0, 0.1)" />
    </svg>
);

const Projects: React.FC = () => {
    return (
        <section id="projects" className={styles.section}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Featured Projects</h2>
                    <p className={styles.subtitle}>
                        Impactful solutions driving measurable results
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={styles.projectCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.role}>{project.role}</div>
                                <h3>{project.title}</h3>
                                <p className={styles.organization}>{project.organization}</p>
                                <p className={styles.duration}>{project.duration}</p>
                            </div>

                            <p className={styles.description}>{project.description}</p>

                            {project.achievements && project.achievements.length > 0 && (
                                <div className={styles.achievements}>
                                    {project.achievements.map((achievement, i) => (
                                        <div key={i} className={styles.achievement}>
                                            <CheckIcon />
                                            <span>{achievement}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {project.impact && (
                                <div className={styles.impact}>
                                    <ImpactIcon />
                                    <span className={styles.impactText}>{project.impact}</span>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
