import React from "react";
const Features = () => {
  return (
    <section className="features-section bg-black py-12">
      <style>
        {`
            @keyframes slideInFromBottom {
              0% {
                opacity: 0;
                transform: translateY(100%);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }
  
            .animate-slide-in {
              animation: slideInFromBottom 0.5s ease-in-out;
            }
  
            .delay-100 {
              animation-delay: 0.3s;
            }
  
            .delay-200 {
              animation-delay: 0.6s;
            }
  
            .delay-300 {
              animation-delay: 0.9s;
            }
          `}
      </style>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#00df9a]">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="feature-card bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:rotate-3 animate-slide-in delay-100">
            <h3 className="text-xl font-bold mb-3 text-black">
              Real Time Analysis of Student Engagement{" "}
            </h3>
            <p className="text-gray-600">
              We will track student engagement and interest levels to tailor
              instructional strategies and support interventions.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="feature-card bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:rotate-3 animate-slide-in delay-200">
            <h3 className="text-xl font-bold mb-3 text-black">
              Live Virtual Classroom
            </h3>
            <p className="text-gray-600">
              Interactive real-time collaboration and interaction with a live
              virtual classroom feature.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="feature-card bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:rotate-3 animate-slide-in delay-300">
            <h3 className="text-xl font-bold mb-3 text-black">
              Record of Student Data from previous lectures
            </h3>
            <p className="text-gray-600">
              Comprehensive analysis of overall student data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
