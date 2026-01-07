import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Expertise from './components/Expertise';
import Skills from './components/Skills';
import Contact from './components/Contact';
import styles from './App.module.css';

/**
 * Main Application Component
 * Orchestrates all sections with scroll-based active section tracking
 */

function App() {
    const [activeSection, setActiveSection] = useState('hero');

    // Intersection Observer for active section tracking
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections
        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <div className={styles.app}>
            <Navigation activeSection={activeSection} />

            <main>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Expertise />
                <Skills />
                <Contact />
            </main>

            <footer className={styles.footer}>
                <div className="container">
                    <p>© {new Date().getFullYear()} Hemanth Kandimalla. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
