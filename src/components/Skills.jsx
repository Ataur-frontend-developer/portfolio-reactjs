import React from "react";

const Skills = () => {
  const categories = [
    {
      title: "Languuges",
      items: ["C++", "JavaScript"],
    },
    {
      title: "Course work",
      items: ["Object Oriented Programming", "DSA", "Database Management System"],
    },
    {
      title: "Frontend",
      items: [
        "React Js",
        "Redux Toolkit",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "JavaScript",
        "Bootstrap",
      ],
    },
    {
      title: "Backend",
      items: ["Node Js", "Express Js", "MySQL", "MongoDB"],
    },
    {
      title: "Others",
      items: ["Git", "GitHub", "VS Code", "Postman"],
    },
  ];

  return (
    <section className="h-screen bg-[#020307] text-white py-20 px-4" id="skills">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Skills</h2>
        <p className="text-gray-400 mb-12">
          Here are some of my skills on which I have been working on for the past 2 years.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="border border-violet-500 rounded-xl p-6 bg-[#161625] shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-black text-white border border-gray-600 px-3 py-1 rounded-full text-sm hover:bg-violet-500 hover:border-violet-500 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
