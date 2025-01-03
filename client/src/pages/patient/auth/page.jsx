// LoginPage.tsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiCalls from "../../../core/APICalls";
import Loader from "../../components/loader"
import patientImage from "../../../assets/patient.png"; // Import the patient image

const LoginComponent = ({ setIsLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset the error state
    setError("");

    try {
      setLoader(true)
      const response = await apiCalls.loginPatient(email, password);
      if (response.status === 200) {
        // Redirect to the doctor's dashboard or home page upon successful login
        console.log(response);
        window.localStorage.setItem("data", JSON.stringify(response.data.data));

        navigate("/dashboard/patient");
      }
    } catch (error) {
      setError("Invalid credentials. Please try again.");
    } finally{
      setLoader(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-green-900 to-green-700">
      {/* Patient Image */}
      <div className="md:w-1/2 hidden md:flex items-center justify-center">
        <img
          src={patientImage}
          alt="Patient"
          className="w-3/4 animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg animate__animated animate__fadeInRight">
        {/* Patient Image for Mobile */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 md:hidden">
          <img
            src={patientImage}
            alt="Patient"
            className="w-24 h-24 rounded-full shadow-lg border-4 border-white"
          />
        </div>
        <h2 className="text-2xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-400">
          Patient Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          {error && <div className="text-sm text-red-500">{error}</div>}
          <button
            type="submit"
            className={`flex gap-2 justify-center w-full py-2 text-white bg-green-500 rounded-lg focus:outline-none transition-all duration-300 transform ${loader ? 'opacity-70' : 'hover:scale-105 hover:bg-green-600'} `}
            disabled={loader}
          >
            {loader ? (<div><Loader size="sm" /></div>) : null}
            {loader ? 'Logging...' : 'Login'}
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <span
            onClick={() => setIsLogin(false)}
            className="text-green-500 cursor-pointer hover:underline"
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};

const RegisterComponent = ({ setIsLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset the error state
    setError("");

    // Validate that the passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoader(true);
      const response = await apiCalls.registerPatient(
        name,
        email,
        password,
        age
      );
      if (response.status === 201) {
        setIsLogin(true);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally{
      setLoader(false)
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-green-900 to-green-700">
      {/* Patient Image */}
      <div className="md:w-1/2 hidden md:flex items-center justify-center">
        <img
          src={patientImage}
          alt="Patient"
          className="w-3/4 animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg animate__animated animate__fadeInRight">
        {/* Patient Image for Mobile */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 md:hidden">
          <img
            src={patientImage}
            alt="Patient"
            className="w-24 h-24 rounded-full shadow-lg border-4 border-white"
          />
        </div>
        <h2 className="text-2xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-400">
          Patient Registration
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Age
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          
          {error && <div className="text-sm text-red-500">{error}</div>}
          <button
            type="submit"
            className={`flex gap-2 justify-center w-full py-2 text-white bg-green-500 rounded-lg focus:outline-none transition-all duration-300 transform ${loader ? 'opacity-70' : 'hover:scale-105 hover:bg-green-600'} `}
            disabled={loader}
          >
            {loader ? (<div><Loader size="sm" /></div>) : null}
            {loader ? 'Registering...' : 'Register'}
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => setIsLogin(true)}
            className="text-green-500 cursor-pointer hover:underline"
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

const PatientAuth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      {isLogin ? (
        <LoginComponent setIsLogin={setIsLogin} />
      ) : (
        <RegisterComponent setIsLogin={setIsLogin} />
      )}
    </div>
  );
};

export default PatientAuth;
