// src/app/components/Education.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';

const education = [
  {
    institution: "Northeastern University",
    degree: "M.S. in Artificial Intelligence",
    period: "2025 - Present",
    description: "Specialized in machine learning, statistical modeling, and big data technologies. Thesis on 'Deep Learning for Medical Diagnosis'.",
    courses: ["Foundations of Artificial Intelligence", "Algorithms", "Machine Learning",
      "Programming Design Paradigm"],
    logo: "/logos/nu-logo.png", 
    alt: "Stanford University Logo"
  },
  {
    institution: "University of Oulu",
    degree: "M.S. in Computer Science and Engineering",
    period: "2021 - 2023",
    description: "Minor in Statistics. Graduated with honors. President of Data Science Club.",
    courses: ["Natural Language Processing and Text Mining", "Towards Data Mining",
      "Machine Vision", "Machine Learning", "Computer Graphics", "Affective Computing", 
      "Deep Learning","Big Data Processing and Applications"],
    logo: "/logos/uni-of-oulu-logo.jpg",
    alt: "UC Berkeley Logo"
  },
  {
    institution: "National University of Sciences and Technology",
    degree: "B.E. in Computer Engineering",
    period: "2013 - 2017",
    description: "Advanced data analysis, visualization, and R programming certification. Hands-on projects with real-world datasets.",
    courses: ["Object-Oriented Programming", "Algorithms and Computing", "Data Structures", "Database Engineering",  
      "Digital Image Processing", "Digital Signal Processing", 
      "Artificial Intelligence and Decision Suport System"],
    logo: "/logos/nust-logo.png",
    alt: "Google Logo"
  }
];

export default function Education() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform ${
                hoveredCard === index ? 'scale-105' : 'scale-100'
              } border-l-4 border-blue-500 group cursor-pointer`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Logo with Animation */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className={`absolute inset-0 bg-blue-100 rounded-full transform ${
                    hoveredCard === index ? 'scale-125 opacity-50' : 'scale-100 opacity-0'
                  } transition-all duration-300`}></div>
                  
                  <div className={`relative transform ${
                    hoveredCard === index ? 'scale-110 -translate-y-1' : 'scale-100'
                  } transition-all duration-300`}>
                    <Image
                      src={edu.logo}
                      alt={edu.alt}
                      width={120}
                      height={120}
                      className="rounded-full object-contain bg-white p-2 shadow-lg border-2 border-gray-100"
                      onError={(e) => {
                        // Fallback if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    
                    {/* Fallback initial icon */}
                    <div className="hidden absolute inset-0 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {edu.institution.charAt(0)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Institution and Degree */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-blue-600 font-semibold mt-1">{edu.institution}</p>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-2 inline-block">
                  {edu.period}
                </span>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 mb-4 text-sm leading-relaxed text-center">
                {edu.description}
              </p>
              
              {/* Courses */}
              <div className="mt-4">
                <h4 className="font-semibold text-gray-700 mb-2 text-center text-sm">
                  Relevant Coursework:
                </h4>
                <div className="flex flex-wrap gap-1 justify-center">
                  {edu.courses.map((course, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded transition-colors group-hover:bg-blue-50 group-hover:text-blue-700"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect Indicator */}
              <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 ${
                hoveredCard === index ? 'opacity-100' : 'opacity-0'
              } transition-opacity duration-300`}>
                <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}