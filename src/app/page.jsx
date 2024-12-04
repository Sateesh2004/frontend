"use client"
import Link from 'next/link';
import React from 'react'
import { useState } from 'react';
import { Loader } from 'lucide-react';
const { GoogleGenerativeAI } = require("@google/generative-ai");

const page = () => {
    const [loader,setLoader]=useState(false)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        subjectIn12: "",
        Skills: "",
        Interest: "",
        Personality: "",
      });
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
  const [responseText, setResponseText] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true)

    const genAI = new GoogleGenerativeAI("AIzaSyAQ0GK-17iWUa4f6-rjjuSZkfGi7jmk214");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `These are the details of the user based on these details suggest him some career guidance what career options he can choose. And assume you are directly telling to user so response in that way and in JSON format.
    First entry should be Greeting and content for greeting Hi with Name
    Second should be Analysis
    Third Career Suggestion 
    Fourth Conslusion.
    It shoulf follow this structure:
    {
    "greeting":"Hi........"
    "analysis":"..........."
    
    .
    .
    .
    .}
    also include the possible list of degrees (name:degrees) in an array inside careerSuggestions




    }
Name : ${formData.firstName} ${formData.lastName}
Subjects in current grade : ${formData.subjectIn12}
Skills : ${formData.Skills}
Interest : ${formData.Interest}
Personality Traits : ${formData.Personality}
`;

    const result = await model.generateContent(prompt);
    const textContent = result.response.candidates[0].content.parts[0].text;
    const jsonString = textContent.replace(/```json\n|\n```/g, '');
    const guide = JSON.parse(jsonString);
    setResponseText(guide); // Set the response as JSON string
    console.log(guide)
    setLoader(false)

    setModalVisible(true); // Show the modal after receiving the response
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
<div className="min-h-screen bg-gray-50">
      {/* SEO Meta Tags Simulated with Standard HTML */}
      <title>Career Compass - Find Your Perfect Path</title>
      <meta name="description" content="Discover your ideal career with personalized suggestions" />

      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <svg 
                  className="h-8 w-8 text-blue-600" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12a1 1 0 11-2 0v-5a1 1 0 112 0v5zm-1-8a1 1 0 100-2 1 1 0 000 2z" 
                    clipRule="evenodd" 
                  />
                </svg>
                <span className="ml-2 text-xl font-bold text-gray-800">Career Compass</span>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition duration-300">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition duration-300">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition duration-300">Services</Link>
              <Link href="/feedback" className="text-gray-700 hover:text-blue-600 transition duration-300">Contact</Link>
            </div>
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <button className='p-2 bg-blue-500 rounded-[50px] px-5 text-white hover:bg-blue-600'>Signup</button>
            </div>



        

            {/* Mobile Menu Button */}
            <div className="-mr-2 flex sm:hidden items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                {isMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a href="#" className="text-gray-700 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">About</a>
              <a href="#" className="text-gray-700 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Services</a>
              <a href="#" className="text-gray-700 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Form */}
      <main className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Discover Your 
              <span className="block text-blue-600">Perfect Career Path</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Take our comprehensive assessment and get personalized career recommendations tailored to your unique skills, interests, and personality.
            </p>
          </div>

          {/* Career Assessment Form */}
          <div className="bg-white shadow-2xl rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Career Assessment
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input 
                    type="text" 
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder='e.g. john'
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                     placeholder='e.g. doe'
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Interests (comma-separated)
                </label>
                <input 
                  type="text" 
                  id="Interest"
              name="Interest"
                  value={formData.Interest}
                  onChange={handleChange}
                  placeholder="e.g. technology, design, writing"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Skills (comma-separated)
                </label>
                <input 
                  type="text" 
                 id="Skills"
              name="Skills"
                  value={formData.Skills}
                  onChange={handleChange}
                  placeholder="e.g. programming, communication, problem-solving"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="subject12" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject in current Grade
                </label>
                <input 
                  type="text" 
                   id="subjectIn12"
              name="subjectIn12"
                  value={formData.subjectIn12}
                  onChange={handleChange}
                  placeholder="e.g. Science, Commerce, Arts"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="personalityTraits" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Personality Traits (comma-separated)
                </label>
                <input 
                  type="text" 
                    id="Personality"
              name="Personality"
                  value={formData.Personality}
                  onChange={handleChange}
                  placeholder="e.g. creative, analytical, leadership"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <button 
                  type="submit" 
                  disabled={loader}
                  className="w-full flex items-center justify-center bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300 font-semibold text-lg"
                >
                    <div className='flex '>
                        {!loader? <p className='mr-2'> Get Career Suggestions</p> : <Loader className="animate-spin" />}
                   
                   </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>


      {modalVisible && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 max-h-[95vh] overflow-y-auto transform transition-all duration-300 ease-in-out">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white z-10 border-b border-gray-100 px-6 py-5 flex items-center justify-between">
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
            Career Analysis
          </h2>
          <button 
            onClick={() => setModalVisible(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* Greeting Section */}
          <div className="bg-blue-50 border border-blue-100 p-5 rounded-xl">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Analysis</h3>
            <p className="text-gray-700 leading-relaxed">
              {responseText.greeting} {responseText.analysis}
            </p>
          </div>

          {/* Conclusion Section */}
          

          {/* Career Suggestions Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Career Suggestions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {responseText.careerSuggestions.map((suggestion, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
                >
                  <h4 className="text-lg font-bold text-gray-800 mb-3">
                    {suggestion.title}
                  </h4>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {suggestion.description}
                  </p>
                  
                  {/* Recommended Degrees Section */}
                  <div className="border-t border-gray-100 pt-4">
                    <h5 className="text-sm font-semibold text-gray-500 mb-2">Recommended Degrees:</h5>
                    <ul className="space-y-2">
                      {suggestion.degrees.map((degree, i) => (
                        <li 
                          key={i} 
                          className="text-sm text-gray-600 flex items-center"
                        >
                          <svg 
                            className="w-4 h-4 mr-2 text-blue-500" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path 
                              fillRule="evenodd" 
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                              clipRule="evenodd" 
                            />
                          </svg>
                          {degree}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {suggestion.requiredSkills && (
                    <div className="border-t border-gray-100 pt-4 mt-4">
                      <h5 className="text-sm font-semibold text-gray-500 mb-2">Required Skills:</h5>
                      <ul className="space-y-2">
                        {suggestion.requiredSkills.map((skill, i) => (
                          <li 
                            key={i} 
                            className="text-sm text-gray-600 flex items-center"
                          >
                            <svg 
                              className="w-4 h-4 mr-2 text-blue-500" 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path 
                                fillRule="evenodd" 
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                                clipRule="evenodd" 
                              />
                            </svg>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-green-50 border border-green-100 p-5 rounded-xl">
            <h3 className="text-xl font-bold text-green-800 mb-3">Conclusion</h3>
            <p className="text-gray-700 leading-relaxed">
              {responseText.conclusion}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-white border-t border-gray-100 px-6 py-4 flex justify-end space-x-4">
          <button
            onClick={() => setModalVisible(false)}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 ease-in-out"
          >
            Close
          </button>
        </div>
      </div>
    </div>
)}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Career Compass. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default page
