import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import styles from './Skills.module.css';

/**
 * Skills Section
 * Categorized skill grid with visual hierarchy
 */

const Skills: React.FC = () => {
    return (
        <section id="skills" className={styles.section}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Technical Skills</h2>
                    <p className={styles.subtitle}>Comprehensive technology stack and tooling expertise</p>
                </motion.div>

                <div className={styles.skillsGrid}>
                    {skills.map((category, index) => (
                        <motion.div
                            key={index}
                            className={styles.skillCategory}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <h3 className={styles.categoryTitle}>{category.category}</h3>
                            <div className={styles.skillTags}>
                                {category.skills.map((skill, idx) => (
                                    <motion.span
                                        key={idx}
                                        className={styles.skillTag}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
