import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function About() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen w-full flex flex-col items-start justify-center bg-neutral-200 dark:bg-black text-neutral-900 dark:text-white transition-colors px-6 sm:px-8 py-12 sm:py-8"
      aria-labelledby="about-title"
    >
      <div className="flex flex-col w-full max-w-7xl mx-auto py-24">
        {/* Center: Bio */}
        <div className="w-full flex items-start justify-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl text-sm sm:text-base font-mono text-justify leading-relaxed"
          >
           <p>
  I'm Dhani Das, a TY B.Sc. Computer Science student at Vivekanand Education
  Society's College of Arts, Science & Commerce, Mumbai. I'm passionate about
  frontend development, UI/UX design, and Artificial Intelligence, and I enjoy
  turning ideas into clean, interactive, and user-friendly digital experiences.
  <br /><br />
  I learn by building practical projects and exploring technologies such as
  React, Tailwind CSS, JavaScript, Python, Flutter, and databases. I'm also
  exploring Generative AI, prompt engineering, and AI-powered applications.
  <br /><br />
  With a combination of technology and creativity, my goal is to grow as a
  developer, contribute to real-world projects, and build digital experiences
  that are both useful and engaging.
</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}