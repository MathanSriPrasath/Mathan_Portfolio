import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: "Employee Shift Management System",
      desc: "A full-stack application to automate employee shift scheduling with features like 15-day cycle, attendance tracking, and notifications.",
      tech: "Spring Boot, React, MySQL, Hibernate",
      github: "#",
    },
    {
      title: "IoT Sentinel System",
      desc: "An IoT project for real-time monitoring of gas, temperature and fire with alerts via Firebase.",
      tech: "Arduino, NodeMCU, Firebase",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold">{proj.title}</h3>
            <p className="text-gray-400 mt-2">{proj.desc}</p>
            <p className="mt-2 text-sm text-gray-400">Tech Stack: {proj.tech}</p>
            <a href={proj.github} className="text-blue-400 mt-2 inline-block">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}