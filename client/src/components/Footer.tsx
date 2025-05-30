import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#222222] text-white mt-auto">
      <div className="container p-4 md:p-8">
        {/* Main Footer Content */}
        <div className="flex md:flex-row flex-col justify-evenly  text-center">
          {/* Services Section */}
          <div>
            <h3 className="text-lg font-bold mb-3 md:mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Student portal
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Alumni association
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Staffnet
                </a>
              </li>
              <li className="flex items-center justify-center space-x-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 2c-1.104 0-2 .896-2 2v3h4v-3c0-1.104-.896-2-2-2z"
                  />
                </svg>
                <a href="#" className="hover:underline">
                  Login
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold mb-3 md:mb-4">Contact</h3>
            <p className="mb-2">
              Dr. Navneet Nayan<br />
              phone: +91 98526 85021<br /><br />
              Mrs. Ratna Kumari M<br />
              phone: +91 89396 86769
            </p>
          </div>

          {/* Institute Info Section */}
          <div>
            <h3 className="text-lg font-bold mb-3 md:mb-4">For information contact:</h3>
            <h3></h3>
            <p className="mb-2">
              SRM Nagar, Kattankulathur - 603 203<br />
              Chengalpattu District, Tamil Nadu
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p>© {new Date().getFullYear()} SRM Institute of Science and Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;