import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Navigation.module.css';

/**
 * Navigation Component with smooth scroll and active section tracking
 */

interface NavigationProps {
    activeSection: string;
}

const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
];

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll event
    useState(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navContent}`}>
                {/* Logo */}
                <button
                    className={styles.logo}
                    onClick={() => scrollToSection('hero')}
                    aria-label="Scroll to top"
                >
                    <span className={styles.logoInitial}>HK</span>
                </button>

                {/* Desktop Navigation */}
                <ul className={styles.navList}>
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <button
                                className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
                                onClick={() => scrollToSection(item.id)}
                            >
                                {item.label}
                                {activeSection === item.id && (
                                    <motion.div
                                        className={styles.activeIndicator}
                                        layoutId="activeIndicator"
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileMenuButton}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    <div className={isMobileMenuOpen ? styles.menuIconClose : styles.menuIcon}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    className={styles.mobileMenu}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                >
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            className={`${styles.mobileNavLink} ${activeSection === item.id ? styles.active : ''}`}
                            onClick={() => scrollToSection(item.id)}
                        >
                            {item.label}
                        </button>
                    ))}
                </motion.div>
            )}
        </nav>
    );
};

export default Navigation;
