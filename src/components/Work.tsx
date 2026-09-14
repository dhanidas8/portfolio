import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Library Management System",
    description:
      "A desktop-based library management application for managing books, members, book issuance, and returns through a database-connected interface.",
    technologies: ["Python", "Tkinter", "MySQL"],
  },
  {
    title: "SGPA Calculator",
    description:
      "A Flutter-based application designed to simplify semester grade calculations through a clean and user-friendly interface.",
    technologies: ["Flutter", "Dart", "Android Studio"],
  },
  {
    title: "AI Study Assistant",
    description:
      "An AI-powered study assistant that explores document-based question answering using RAG, vector retrieval, and language models.",
    technologies: ["Python", "LangChain", "Chroma", "Streamlit"],
  },
  {
    title: "Smart Water Management System",
    description:
      "An IoT-based project concept for monitoring water consumption and presenting usage data through a mobile application with daily and monthly tracking.",
    technologies: ["ESP32", "IoT", "Flutter", "Dart"],
  },
];

const Work = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="work" className="py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Projects<span className="text-orange-600">.</span>
          </h2>
        </motion.div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={
                !isMobile
                  ? {
                      y: -8,
                      transition: { duration: 0.2 },
                    }
                  : {}
              }
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white"
            >
              {/* Project Box */}
              <div className="h-56 bg-gray-100 flex items-center justify-center p-8">
                <div className="text-center">
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                    Project {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {project.title}
                    <span className="text-orange-600">.</span>
                  </h3>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1 text-sm border border-gray-300 rounded-full text-gray-700"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;