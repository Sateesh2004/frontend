import React from 'react';

const serviceDetails = [
  {
    title: 'Career Coaching',
    description: 'Personalized one-on-one guidance to help you navigate your professional journey, identify strengths, and achieve career goals.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"/>
        <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"/>
      </svg>
    ),
    benefits: [
      'Personalized career strategy',
      'Goal setting and action planning',
      'Confidence building',
      'Career transition support'
    ],
    price: '$199/session'
  },
  {
    title: 'Resume Review',
    description: 'Comprehensive analysis and optimization of your resume to highlight your strengths and maximize your job application potential.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <line x1="10" y1="9" x2="8" y2="9"/>
      </svg>
    ),
    benefits: [
      'Professional formatting',
      'Keyword optimization',
      'Achievement highlighting',
      'Industry-specific tailoring'
    ],
    price: '$129 per review'
  },
  {
    title: 'Interview Preparation',
    description: 'Comprehensive training to boost your confidence, develop winning interview strategies, and showcase your best self to potential employers.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
        <path d="M9 11l4 4"/>
      </svg>
    ),
    benefits: [
      'Mock interview sessions',
      'Answer strategy development',
      'Non-verbal communication coaching',
      'Confidence building techniques'
    ],
    price: '$249 package'
  },
  {
    title: 'Career Transition Support',
    description: 'Comprehensive guidance for professionals looking to change industries, roles, or career paths with strategic planning and personalized support.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M16 12l-4-4v8"/>
        <path d="M12 16V8"/>
      </svg>
    ),
    benefits: [
      'Industry research',
      'Skill gap analysis',
      'Network development',
      'Targeted job search strategy'
    ],
    price: '$299 comprehensive package'
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Services Header */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Professional Services
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Tailored solutions to elevate your career, from personal coaching to strategic planning.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {serviceDetails.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="mr-6 text-blue-600">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold text-blue-600">
                  {service.title}
                </h2>
              </div>
              <p className="text-gray-700 mb-6">
                {service.description}
              </p>
              <div className="mb-6">
                <h3 className="font-semibold text-blue-600 mb-3">
                  Key Benefits:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li 
                      key={benefitIndex} 
                      className="flex items-center"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="mr-2 text-blue-500"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <span className="text-xl font-bold text-blue-600">
                  {service.price}
                </span>
                <button className="block w-full mt-4 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors">
                  Book Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Consultation Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Not Sure Which Service is Right for You?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Schedule a free 15-minute consultation to discuss your career goals and find the perfect service package.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-md font-bold hover:bg-gray-100 transition-colors">
            Book Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
}