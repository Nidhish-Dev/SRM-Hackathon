import React from "react";

export default function EducationSection() {
  const programs = [
    {
      title: 'Bachelor',
      description: "Read more about our Bachelor's programme",
      link: '#',
    },
    {
      title: 'Master',
      description: "Read more about our Master's programmes",
      link: '#',
    },
    {
      title: 'PhD',
      description: 'Read more about our doctoral studies',
      link: '#',
    },
  ];

  return (
    <section className="bg-white py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black mb-8 sm:mb-12 lg:mb-16">IAC Colloquium</h2>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl text-black mb-4">Education</h3>
        <p className="text-gray-800 max-w-2xl text-sm sm:text-base mb-6 sm:mb-8 lg:mb-10">
          Our Institute educates outstanding young scientists for careers in academia, public administration and the private sector.
        </p>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {programs.map((prog, index) => (
            <div key={index} className="bg-[#007B94] text-white p-4 sm:p-6 min-h-[140px] sm:min-h-[160px] flex flex-col justify-between">
              <h4 className="text-xl sm:text-2xl font-medium mb-2">{prog.title}</h4>
              <a href={prog.link} className="text-base sm:text-lg lg:text-xl hover:underline flex items-center">
                <span className="mr-2 text-sm sm:text-base lg:text-lg">›</span>
                {prog.description}
              </a>
            </div>
          ))}
        </div>

        {/* Optional button below */}
        <button className="mt-6 sm:mt-8 lg:mt-10 border border-gray-400 text-gray-800 px-6 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-4 text-xs sm:text-sm font-semibold hover:bg-gray-100 transition">
          See overview
        </button>
      </div>
    </section>
  );
}