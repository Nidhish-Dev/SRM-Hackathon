import React from 'react';

function Page() {
  return (
    <div className="bg-white min-h-screen text-[#222222]">
      {/* News Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center border-b-4 border-[#222222] inline-block pb-2">
          News
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* News Item 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-[#222222] hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2">SRMJEEE Result 2025 Declared</h2>
            <p className="text-sm text-gray-500 mb-4">May 5, 2025</p>
            <p className="text-base leading-relaxed">
              The SRM Joint Engineering Entrance Examination (SRMJEEE) results for phase 1 were declared on May 5, 2025. Students can check their results on srmist.edu.in using their login details.
            </p>
          </div>

          {/* News Item 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-[#222222] hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2">Professor Lora Suspension Sparks Debate</h2>
            <p className="text-sm text-gray-500 mb-4">May 8, 2025</p>
            <p className="text-base leading-relaxed">
              Assistant Professor Lora at SRMIST KTR was suspended after her WhatsApp status criticizing "Operation Sindoor" went viral, sparking debates on academic freedom and privacy.
            </p>
          </div>

          {/* News Item 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-[#222222] hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2">Veranda XL Signs MoU with SRMIST</h2>
            <p className="text-sm text-gray-500 mb-4">December 19, 2024</p>
            <p className="text-base leading-relaxed">
              Veranda XL signed an MoU with SRMIST to offer CA coaching classes through JK Shah Classes on the KTR campus, enhancing professional education opportunities.
            </p>
          </div>

          {/* News Item 4 */}
          <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-[#222222] hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2">Faculty Recruitment Drive for 2025</h2>
            <p className="text-sm text-gray-500 mb-4">March 14, 2025</p>
            <p className="text-base leading-relaxed">
              SRMIST Kattankulathur announced a recruitment drive for Assistant Professors in the Faculty of Science & Humanities, focusing on academic excellence and research commitment.
            </p>
          </div>

          {/* News Item 5 */}
          <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-[#222222] hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2">Alumni Support for SRM Startups</h2>
            <p className="text-sm text-gray-500 mb-4">December 21, 2024</p>
            <p className="text-base leading-relaxed">
              During Alumni Day 5.0, SRMIST’s Founder Chancellor urged alumni to support over 40 on-campus startups by providing angel funds, fostering innovation among students.
            </p>
          </div>

          {/* News Item 6 */}
          <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-[#222222] hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2">SRMIST Ranked No. 1 in Times Engineering Survey</h2>
            <p className="text-sm text-gray-500 mb-4">May 2025</p>
            <p className="text-base leading-relaxed">
              SRMIST was ranked No. 1 in the Times All India Engineering Survey 2025, reflecting its academic excellence and strong industry connections.
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-[#222222] text-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center border-b-4 border-white inline-block pb-2">
            Events
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* Event Item 1 */}
            <div className="bg-white text-[#222222] shadow-md rounded-lg p-6 border-l-4 border-[#222222] hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl font-semibold mb-2">20th Convocation Ceremony</h2>
              <p className="text-sm text-gray-500 mb-4">October 13, 2024</p>
              <p className="text-base leading-relaxed">
                SRMIST held its 20th Convocation on October 13, 2024, at Dr. T. P. Ganesan Auditorium, KTR campus, celebrating graduates from July 2023 to August 2024.
              </p>
            </div>

            {/* Event Item 2 */}
            <div className="bg-white text-[#222222] shadow-md rounded-lg p-6 border-l-4 border-[#222222] hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl font-semibold mb-2">Alumni Day 5.0</h2>
              <p className="text-sm text-gray-500 mb-4">December 21, 2024</p>
              <p className="text-base leading-relaxed">
                SRMIST celebrated Alumni Day 5.0 on December 21, 2024, organized by the Directorate of Alumni Affairs, fostering lifelong memories and connections.
              </p>
            </div>

            {/* Event Item 3 */}
            <div className="bg-white text-[#222222] shadow-md rounded-lg p-6 border-l-4 border-[#222222] hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl font-semibold mb-2">Cyber Hackathon 3.0</h2>
              <p className="text-sm text-gray-500 mb-4">March 2, 2024</p>
              <p className="text-base leading-relaxed">
                Greater Chennai Police and SRMIST Ramapuram organized Cyber Hackathon 3.0, with prizes awarded by Commissioner Sandeep Rai Rathore.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;