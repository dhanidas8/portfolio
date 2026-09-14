import { motion } from 'framer-motion';

export default function Contact() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dhani-das-996b97325',
      display: 'www.linkedin.com/in/dhani-das-996b97325',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/dhanidas8',
      display: 'github.com/dhanidas8',
    },
    {
      name: 'Email',
      href: 'mailto:dhanidas8@gmail.com',
      display: 'dhanidas8@gmail.com',
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex flex-col items-start justify-center bg-neutral-200 dark:bg-black transition-colors px-4 sm:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-start justify-center text-left max-w-5xl mx-auto w-full"
      >
        <h1 className="font-gambarino text-[2.8rem] sm:text-6xl md:text-7xl leading-tight text-neutral-900 dark:text-white mb-12">
          Let&apos;s connect<span className="text-orange-600">.</span>
        </h1>

        <div className="flex flex-col gap-6">
          {socialLinks.map((link) => (
            <div key={link.name} className="flex flex-col">
              <span className="font-mono text-sm text-neutral-500 dark:text-neutral-400 mb-1">
                {link.name}
              </span>

              <a
                href={link.href}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="font-mono text-lg sm:text-xl text-white hover:text-orange-600 transition-colors underline"
              >
                {link.display}
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}