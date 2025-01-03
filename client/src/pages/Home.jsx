import React from "react";
import visit from "../assests/visit.jpeg";
import logo from "../assets/logo.png";
import FAQSection from "./components/FAQ-Section";
import { Link } from "react-router-dom";
function Home() {
  console.log(process.env.REACT_APP_SERVER_URL);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-900 to-blue-700 text-white">
      <div className="flex-grow flex flex-col justify-center items-center py-16">
        <div className="mb-4">
          <img
            src={logo}
            alt="QuickHeal Logo"
            className="mx-auto w-56 h-auto transition-transform duration-150 ease-out transform hover:scale-110"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-white via-teal-300 to-blue-400 bg-clip-text text-transparent animate__animated animate__fadeInLeft animate__delay-0.3s text-center">
          Welcome to QuickHeal
        </h1>

        <p className="text-lg text-gray-200 mb-6 animate__animated animate__fadeIn animate__delay-0.6s text-center">
          Choose your role below to get started.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 animate__animated animate__fadeIn animate__delay-0.9s">
          {/* Doctor Login Button */}
          <Link
            to="/auth/doctor"
            className="text-lg font-semibold px-8 py-4 bg-blue-600 text-white rounded-lg shadow-lg transition-all duration-150 transform hover:scale-105 hover:bg-blue-700 hover:shadow-xl"
          >
            Doctor Login
          </Link>
          {/* Patient Login Button */}
          <Link
            to="/auth/patient"
            className="text-lg font-semibold px-8 py-4 bg-teal-600 text-white rounded-lg shadow-lg transition-all duration-150 transform hover:scale-105 hover:bg-teal-700 hover:shadow-xl"
          >
            Patient Login
          </Link>
        </div>
      </div>

      {/* FAQ Section */}

      <div className="mt-12 mb-8 px-6 md:px-20 lg:px-32 xl:px-40 ">
        <FAQSection />
      </div>

      {/* Footer Section */}

      <footer className="w-full py-3 bg-gray-700 text-center text-gray-200 text-sm mt-auto">
        <div className="border-gray-400 mb-3">
          <p>© 2025 QuickHeal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
