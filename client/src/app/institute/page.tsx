import React from 'react';

function Page() {
  return (
    <div className="bg-white min-h-screen text-[#222222]">
      {/* Hero Section with Campus Image */}
      <section className="relative bg-[#222222] text-white">
        <div className="absolute inset-0">
          <img
            src="https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/07/IST-BANNER-3.jpg"
            alt="Aerial view of a university campus with modern buildings and green lawns"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative container mx-auto px-6 py-24 md:py-40 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            SRM Institute of Science and Technology, Kattankulathur
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
            A leading institution fostering innovation, research, and global opportunities since 1985.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">About SRM KTR</h2>
        <p className="text-lg sm:text-xl leading-relaxed text-center max-w-4xl mx-auto mb-10">
          Established in 1985, SRM Institute of Science and Technology (SRMIST) Kattankulathur, located near Chennai, Tamil Nadu, is a top-ranking deemed university in India. Spanning over 250 acres, the KTR campus is a vibrant hub hosting over 52,000 students and 3,200 faculty members across various disciplines. SRMIST offers a wide range of undergraduate, postgraduate, and doctoral programs in Engineering, Management, Medicine, Science & Humanities, Law, and Agricultural Sciences.
        </p>
        <div className="flex justify-center">
          <img
            src="https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/06/SRM-Placement-Record-e1654678280742.jpg"
            alt="Main administrative building of a university campus with modern architecture"
            className="w-full max-w-2xl rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Facilities Section */}
      <section className="bg-[#222222] text-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">World-Class Facilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div className="text-center">
              <img
                src="https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/03/Mask-group.png"
                alt="Modern university library with students studying in a well-lit environment"
                className="w-full h-56 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Central Library</h3>
              <p className="text-base sm:text-lg leading-relaxed">
                Housed in a 15-storey building, the library spans three floors with a vast collection of books, references, and digital resources, equipped with RFID and CCTV systems.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/09/3-1.jpg"
                alt="Students playing basketball on a university sports court with modern facilities"
                className="w-full h-56 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Sports Facilities</h3>
              <p className="text-base sm:text-lg leading-relaxed">
                World-class infrastructure for tennis, basketball, badminton, volleyball, and more, fostering holistic development.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/03/Boys_Hostel-2048x1364.png"
                alt="University hostel block with students interacting in a comfortable living space"
                className="w-full h-56 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Hostels</h3>
              <p className="text-base sm:text-lg leading-relaxed">
                Separate hostels for boys and girls, accommodating 3,500 students with modern amenities and 24/7 security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Academic Programs</h2>
        <p className="text-lg sm:text-xl leading-relaxed text-center max-w-4xl mx-auto mb-10">
          SRM KTR offers over 300 programs across six faculties, including Engineering & Technology, Management, Medicine & Health Sciences, Science & Humanities, Law, and Agricultural Sciences. Flagship programs like B.Tech and MBA are highly sought after, with admissions based on SRMJEEE and SRMJEEM scores.
        </p>
        <div className="flex justify-center">
          
        </div>
      </section>

      {/* Rankings and Placements Section */}
      <section className="bg-[#222222] text-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Rankings and Placements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Rankings</h3>
              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed mx-auto max-w-md">
                <li>Ranked 12th in University category by NIRF 2024</li>
                <li>Ranked 21st in Overall category by NIRF 2024</li>
                <li>QS World University Rankings 2025: 1001-1200 globally</li>
                <li>Ranked No. 1 in Times All India Engineering Survey 2025</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Placements</h3>
              <p className="text-base sm:text-lg leading-relaxed max-w-md mx-auto">
                SRM KTR boasts a 95% placement rate, with the highest package of INR 52 LPA in 2024. Top recruiters include Accenture, Bosch, Infosys, and Hyundai, offering over 2,232 high-paying jobs in 2024.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Life Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Campus Life</h2>
        <p className="text-lg sm:text-xl leading-relaxed text-center max-w-4xl mx-auto mb-10">
          The KTR campus is a vibrant microcosm hosting students from over 95 countries. With lush green lawns, decades-old trees, and a rich tradition of creativity, SRM KTR fosters a dynamic environment through student clubs, cultural events, and sports activities.
        </p>
        <div className="flex justify-center">
          <img
            src="https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/04/Fashion.png"
            alt="Students participating in a cultural event at a university campus open-air theatre"
            className="w-full max-w-2xl rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}

export default Page;