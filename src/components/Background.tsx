import { motion } from "framer-motion";

const workExperiences = [
  {
    company: "Community Engagement Program (CEP)",
    role: "Office Admin",
    period: "3 Months",
    description:
      "Worked on administrative and digital tasks including MS Office, document preparation, printer handling, online data updates, and supporting school-related digital work.",
  },
  {
    company: "Private & Academic Tutoring",
    role: "Tutor — Nursery to 12th Standard",
    period: "2+ Years",
    description:
      "Teach students from foundational to higher-secondary levels, with experience in Mathematics, Science, Biology, Physics, English, and Social Science. Focus on explaining concepts from the basics and adapting teaching methods to each student's learning needs.",
  },
];

const positionsOfResponsibility = [
  {
    organization: "V.E.S. College of Arts, Science & Commerce",
    role: "Class Representative",
    period: "Student Leadership",
    description:
      "Represented classmates, communicated student concerns, coordinated with faculty, and supported communication between students and the college.",
  },
  {
    organization: "Tecknow Magazine",
    role: "Core Design Team Member",
    period: "College Magazine",
    description:
      "Contributed to the design and visual presentation of the Computer Science department's annual technical magazine, combining creativity with technology-focused content.",
  },
  {
    organization: "College Magazine Cover Design Competition",
    role: "1st Rank — Cover Design",
    period: "College Achievement",
    description:
      "Won 1st Rank for a magazine cover design based on the theme 'Rooted in India, Reaching the World.'",
  },
  {
    organization: "College Events & Activities",
    role: "Event Anchor & Creative Contributor",
    period: "College Activities",
    description:
      "Participated in anchoring, creative activities, cultural events, and student initiatives, developing communication, teamwork, and presentation skills.",
  },
];

export default function Background() {
  return (
    <section
      id="background"
      className="min-h-screen w-full flex flex-col items-start justify-center bg-neutral-200 dark:bg-black transition-colors px-6 sm:px-8 py-12 sm:py-8"
      aria-labelledby="experience-title"
    >
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 1 }}
  className="flex flex-col items-start justify-center text-left max-w-4xl mx-auto w-full"
>
  <div className="space-y-32 w-full">
    {/* Work Experience Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="font-gambarino text-lg sm:text-xl md:text-2xl font-semibold mb-6 text-orange-600 dark:text-orange-600">
        WORK EXPERIENCE
      </h3>
      <div className="flex flex-col gap-8">
        {workExperiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-row items-start gap-4"
          >
            <div className="space-y-2">
              <div className="text-base text-orange-600 dark:text-orange-600 font-mono">{exp.company}</div>
              <div className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white leading-tight">{exp.role}</div>
              <div className="flex flex-row items-center font-mono gap-4 text-xs text-orange-600 dark:text-orange-600 mb-1">
                <span>{exp.period}</span>
              </div>
              <div className="text-neutral-800 font-mono dark:text-neutral-300 text-sm max-w-2xl leading-relaxed">
                {exp.description}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Positions of Responsibility Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="font-gambarino text-lg sm:text-xl md:text-2xl font-semibold mb-6 text-orange-600 dark:text-orange-600">
        POSITIONS OF RESPONSIBILITY
      </h3>
      <div className="flex flex-col gap-8">
        {positionsOfResponsibility.map((pos, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-row items-start gap-4"
          >
            <div className="space-y-2">
              <div className="text-base text-orange-600 dark:text-orange-600 font-mono">{pos.organization}</div>
              <div className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white leading-tight">{pos.role}</div>
              <div className="flex flex-row items-center font-mono gap-4 text-xs text-orange-600 dark:text-orange-600 mb-1">
                <span>{pos.period}</span>
              </div>
              <div className="text-neutral-800 font-mono dark:text-neutral-300 text-sm max-w-2xl leading-relaxed">
                {pos.description}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</motion.div>
    </section>
  );
}
