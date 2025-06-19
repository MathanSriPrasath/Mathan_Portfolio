import React from 'react';

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 fixed w-full top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Mathan Sri</h1>
        <div className="space-x-4">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}