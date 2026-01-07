import { motion } from 'framer-motion';
import { education, workExperience } from '../data/portfolio';
import styles from './Experience.module.css';

/**
 * Experience Section
 * Timeline visualization of education and work history with quantified achievements
 */

const Experience: React.FC = () => {
    return (
        <section id="experience" className={styles.section}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Experience & Education</h2>
                    <p className={styles.subtitle}>Professional journey and academic foundation</p>
                </motion.div>

                {/* Education */}
                <motion.div
                    className={styles.educationCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className={styles.cardHeader}>
                        <div>
                            <h3>{education.institution}</h3>
                            <p className={styles.degree}>{education.degree} - {education.field}</p>
                        </div>
                        <div className={styles.meta}>
                            <span className={styles.duration}>{education.duration}</span>
                            <span className={styles.gpa}>{education.gpa}</span>
                        </div>
                    </div>
                    <ul className={styles.highlights}>
                        {education.highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                        ))}
                    </ul>
                </motion.div>

                {/* Work Experience Timeline */}
                <div className={styles.timeline}>
                    {workExperience.map((job, index) => (
                        <motion.div
                            key={index}
                            className={styles.timelineItem}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className={styles.timelineMarker}>
                                <div className={styles.markerDot} />
                            </div>
                            <div className={styles.experienceCard}>
                                <div className={styles.cardHeader}>
                                    <div>
                                        <h3>{job.company}</h3>
                                        <p className={styles.position}>{job.position}</p>
                                    </div>
                                    <div className={styles.meta}>
                                        <span className={styles.duration}>{job.duration}</span>
                                        <span className={styles.location}>{job.location}</span>
                                    </div>
                                </div>
                                <ul className={styles.achievements}>
                                    {job.achievements.map((achievement, idx) => (
                                        <li key={idx}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
