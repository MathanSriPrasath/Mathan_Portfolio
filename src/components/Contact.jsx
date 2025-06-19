import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
      <p className="text-gray-400">Let's connect! You can reach me at:</p>
      <ul className="mt-4 space-y-2 text-gray-300">
        <li>📧 mathan.sri@example.com</li>
        <li>🔗 <a href="https://github.com/yourusername" className="text-blue-400">GitHub</a></li>
        <li>🔗 <a href="https://linkedin.com/in/yourprofile" className="text-blue-400">LinkedIn</a></li>
      </ul>
    </section>
  );
}