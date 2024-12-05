import React from 'react';

const teamMembers = [
  {
    name: 'Sarah Rodriguez',
    role: 'Founder & CEO',
    bio: '15+ years in HR and talent development, MBA from Stanford University'
  },
  {
    name: 'Michael Chen',
    role: 'Chief Career Strategist',
    bio: 'Career coach with 20 years of experience, Ph.D. in Organizational Psychology'
  }
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 z-10 relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Career Compass
          </h1>
          <p className="text-xl max-w-2xl">
            Empowering professionals to navigate their career journeys with confidence, insight, and purpose.
          </p>
        </div>
        <div className="absolute inset-0 bg-blue-700 opacity-50 z-0"></div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-600">
            Our Story
          </h2>
          <p className="text-gray-700 mb-4">
            Founded by professionals who understand the challenges of career development, Career Compass emerged from a shared vision to democratize career guidance.
          </p>
          <p className="text-gray-700">
            We believe that everyone deserves access to expert career insights, personalized strategies, and supportive resources.
          </p>
        </div>
        <div className="relative aspect-video">
          <img 
            src="/api/placeholder/600/400" 
            alt="Career Compass Team" 
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-blue-600 text-center">
            Our Mission
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Personalized Guidance',
                description: 'Tailored career advice that recognizes your unique professional journey.'
              },
              {
                title: 'Expert Insights',
                description: 'Leveraging decades of combined experience across multiple industries.'
              },
              {
                title: 'Continuous Support',
                description: 'Resources and community to support your professional growth at every stage.'
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-blue-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-blue-600 text-center">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-2 gap-12 justify-center">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center text-center p-8"
            >
              <div className="relative w-48 h-48 mb-6">
                <img 
                  src="/api/placeholder/400/400" 
                  alt={member.name} 
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                {member.name}
              </h3>
              <p className="text-gray-700 mb-4">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Connect With Us
          </h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Your career journey is unique. Let's navigate it together.
          </p>
          <div className="flex justify-center space-x-6">
            {[
              { 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                ),
                href: 'https://linkedin.com/company/careercompass',
                label: 'LinkedIn'
              },
              { 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                ),
                href: 'https://instagram.com/careercompassguide',
                label: 'Instagram'
              },
              { 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                ),
                href: 'mailto:support@careercompass.com',
                label: 'Email'
              }
            ].map((social, index) => (
              <a 
                key={index} 
                href={social.href} 
                className="hover:text-blue-200 transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}