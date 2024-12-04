"use client";
import { useState } from "react";

const { GoogleGenerativeAI } = require("@google/generative-ai");

const FormPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    subjectIn12: "",
    Skills: "",
    Interest: "",
    Personality: "",
  });

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
    "degrees":"list all the possible degrees that he can opt"
    .
    .
    .
    .}




    }
Name : ${formData.firstName} ${formData.lastName}
Subjects in 12th : ${formData.subjectIn12}
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

    setModalVisible(true); // Show the modal after receiving the response
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Enter Your Details
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-600"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-600"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="Interest"
              className="block text-sm font-medium text-gray-600"
            >
              Your Interests (comma-separated)
            </label>
            <input
              type="text"
              id="Interest"
              name="Interest"
              value={formData.Interest}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="Skills"
              className="block text-sm font-medium text-gray-600"
            >
              Your Skills (comma-separated)
            </label>
            <input
              type="text"
              id="Skills"
              name="Skills"
              value={formData.Skills}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="subjectIn12"
              className="block text-sm font-medium text-gray-600"
            >
              Subject in 12
            </label>
            <input
              type="text"
              id="subjectIn12"
              name="subjectIn12"
              value={formData.subjectIn12}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="Personality"
              className="block text-sm font-medium text-gray-600"
            >
              Your Personality Traits (comma-separated)
            </label>
            <input
              type="text"
              id="Personality"
              name="Personality"
              value={formData.Personality}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold rounded-md p-2 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
        Submit
          </button>
        </form>
      </div>

      {/* Modal */}
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



      
    </div>
  );
};

export default FormPage;
