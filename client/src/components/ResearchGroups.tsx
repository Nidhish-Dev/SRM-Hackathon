import React from "react";

export default function ResearchGroups() {
  const groups = [
    ['Aerosol Chemistry', 'Atmospheric Chemistry', 'Atmospheric Dynamics', 'Land-Climate Dynamics'],
    ['Atmospheric Physics', 'Atmospheric Predictability', 'Climate Dynamics'],
    ['Climate Physics', 'High-Resolution Weather and Climate Modeling', 'Hydrology and Climate Impacts'],
  ];

  return (
    <section className="bg-white py-8 px-4 sm:py-10 sm:px-6 lg:py-12 lg:px-20">
      {/* Header section */}
      <div className="max-w-6xl mx-auto mb-6 sm:mb-8 lg:mb-10 mt-8 sm:mt-12 lg:mt-50 flex flex-col lg:flex-row">
        <div className="flex mb-6 lg:mb-0 lg:mr-12">
          <div className="text-5xl sm:text-6xl lg:text-8xl font-bold mr-2">SRM</div>
          <div className="mt-1 text-base sm:text-lg">
            <div>Institute</div>
            <div>Of</div>
            <div>Technology</div>
          </div>
        </div>
        <div className="flex-1">
          <div className="text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-6">Welcome to the Institute of Atmospheric and Climate Science</div>
          <div className="text-sm sm:text-base">
            The Institute for Atmospheric and Climate Science (IAC) focuses on atmospheric and climate processes, including links to the hydrosphere, cryosphere, and biosphere.
          </div>
        </div>
      </div>

      {/* Research Groups box */}
      <div className="bg-[#1e5aad] text-white py-10 px-4 sm:py-12 sm:px-6 lg:py-20 lg:px-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-8 sm:mb-10 lg:mb-14">Research Groups</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 sm:gap-y-6 gap-x-8 sm:gap-x-10 lg:gap-x-12 text-base sm:text-lg">
          {groups.map((col, colIndex) => (
            <ul key={colIndex} className="space-y-2">
              {col.map((group, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-base sm:text-lg leading-none">›</span>
                  <span>{group}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}