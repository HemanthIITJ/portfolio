import { motion } from 'framer-motion';
import { personalInfo, summary } from '../data/portfolio';
import styles from './Hero.module.css';

/**
 * Hero Section - Premium Split-Screen Layout with Professional Photo
 */

const Hero: React.FC = () => {
    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.heroContainer}>
                {/* Left Content */}
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <motion.p
                        className={styles.greeting}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Hi, I'm
                    </motion.p>

                    <motion.h1
                        className={styles.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        {personalInfo.name}
                    </motion.h1>

                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        {personalInfo.title}
                    </motion.h2>

                    <motion.p
                        className={styles.summary}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        {summary}
                    </motion.p>

                    <motion.div
                        className={styles.cta}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        <motion.a
                            href="#projects"
                            className={styles.primaryButton}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            View Projects
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className={styles.secondaryButton}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Get In Touch
                        </motion.a>
                    </motion.div>

                    <motion.div
                        className={styles.social}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                    >
                        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            LinkedIn
                        </a>
                        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            GitHub
                        </a>
                        <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            Twitter
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Photo */}
                <motion.div
                    className={styles.photoContainer}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                >
                    <div className={styles.photoFrame}>
                        <img
                            src={`${import.meta.env.BASE_URL}images/hero.png`}
                            alt="Hemanth Kandimalla - AI Research Lead"
                            className={styles.photo}
                        />
                        <div className={styles.photoOverlay}></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
