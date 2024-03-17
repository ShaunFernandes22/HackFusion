import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Features = () => {
  return (
    <section className="features-section bg-black py-12">
      <style>
        {`
          .feature-enter {
            opacity: 0;
            transform: translateY(100%);
          }

          .feature-enter-active {
            opacity: 1;
            transform: translateY(0%);
            transition: opacity 0.5s, transform 0.5s;
          }

          .feature-exit {
            opacity: 1;
            transform: translateY(0%);
          }

          .feature-exit-active {
            opacity: 0;
            transform: translateY(100%);
            transition: opacity 0.5s, transform 0.5s;
          }

          .feature-card {
            display: flex;
            width: 70vw;
            align-items: center;
            margin: 0 auto;
            background-color: #fff;
            padding: 24px;
            border-radius: 8px;
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease-in-out;
          }

          .feature-card:hover {
            transform: scale(1.05);
          }

          .feature-card h3 {
            font-size: 1.5rem;
            font-weight: bold;
            color: #000;
            margin-bottom: 12px;
          }

          .feature-card p {
            width: 50vw;
            font-size: 1rem;
            color: #666;
            margin-bottom: 0;
          }

          .feature-image {
            flex: 0 0 auto;
            width: 120px;  
            height: 150px;
            margin-left: 24px;
            max-width: 150px;
          }
        `}
      </style>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#00df9a]">Key Features</h2>
        <div className="grid grid-cols-1 gap-8">
          {/* Feature 1 */}
          <TransitionGroup>
            <CSSTransition timeout={500} classNames="feature">
              <div className="feature-card">
                <div>
                  <h3>Real Time Analysis of Student Engagement</h3>
                  <p>We will track student engagement and interest levels to tailor instructional strategies and support interventions.</p>
                </div>
                <img src="./website-3483020_1280.png" alt="Feature 1" className="feature-image" />
              </div>
            </CSSTransition>
          </TransitionGroup>
          {/* Feature 2 */}
          <TransitionGroup>
            <CSSTransition timeout={500} classNames="feature">
              <div className="feature-card">
                <div>
                  <h3>Live Virtual Classroom</h3>
                  <p>Interactive real-time collaboration and interaction with a live virtual classroom feature.</p>
                </div>
                <img src="./video-conference-5352757_1280.png" alt="Feature 2" className="feature-image" />
              </div>
            </CSSTransition>
          </TransitionGroup>
          {/* Feature 3 */}
          <TransitionGroup>
            <CSSTransition timeout={500} classNames="feature">
              <div className="feature-card">
                <div>
                  <h3>Record of Student Data from previous lectures</h3>
                  <p>Comprehensive analysis of overall student data.</p>
                </div>
                <img src="./charts-6246450_1280.png" alt="Feature 3" className="feature-image" />
              </div>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </section>
  );
};

export default Features;


