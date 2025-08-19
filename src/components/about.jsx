import React from "react";
import Skills from "./Skills";

const About = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "JavaScript (ES6+)",
    "React.js",
    "Git & GitHub",
    "Firebase",
    "Responsive Design",
    "Node.js (Learning)",
    "Express.js (Learning)",
    "next.js (Learning)",
  ];

  return (
    <section
      className="bg-black h-screen flex items-center text-white py-16 px-4 md:px-8"
      id="skills"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl mb-6 inline-block">Skills_</h2>
        <p className="text-lg leading-relaxed mb-8">
          I am a passionate and dedicated frontend web developer who loves
          building responsive and user-friendly websites using modern tools and
          technologies. I’m always eager to learn new things and continuously
          improve my skills with real-world projects. My goal is to become a
          full-stack developer and contribute to impactful digital solutions.
        </p>

        <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] text-center py-3 px-2 rounded-md border border-gray-700 hover:border-green-400 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
