import React from "react";

function CheckCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

const FeatureSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
        <div className="text-center space-y-2">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-white-800">
            Features
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Transform Your Meetings
          </h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            With EduQuest's advanced AI proctoring capabilities, you can take
            your meetings to the next level. Our platform offers a range of
            features designed to enhance collaboration, improve productivity,
            and ensure that every participant is engaged and included.
          </p>
        </div>
        <div className="w-full max-w-4xl grid gap-4 md:gap-8">
          <div className="grid items-center gap-4 md:grid-cols-[1fr_200px]">
            <CheckCircleIcon className="w-6 h-6 text-gray-500" />
            <div>
              <h3 className="font-semibold">Automated Attendance Tracking</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Easily track meeting attendance with automated check-ins and
                attendance reports.
              </p>
            </div>
          </div>
          <div className="grid items-center gap-4 md:grid-cols-[1fr_200px]">
            <CheckCircleIcon className="w-6 h-6 text-gray-500" />
            <div>
              <h3 className="font-semibold">Real-time Collaboration Tools</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Enable seamless collaboration with integrated chat, file
                sharing, and collaborative whiteboarding.
              </p>
            </div>
          </div>
          <div className="grid items-center gap-4 md:grid-cols-[1fr_200px]">
            <CheckCircleIcon className="w-6 h-6 text-gray-500" />
            <div>
              <h3 className="font-semibold">Engagement Analytics</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Gain insights into participant engagement with real-time
                analytics and engagement scoring.
              </p>
            </div>
          </div>
          <div className="grid items-center gap-4 md:grid-cols-[1fr_200px]">
            <CheckCircleIcon className="w-6 h-6 text-gray-500" />
            <div>
              <h3 className="font-semibold">Inclusive Meeting Experience</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Ensure that every participant has an inclusive experience with
                automated captions and accessibility features.
              </p>
            </div>
          </div>
          <div className="grid items-center gap-4 md:grid-cols-[1fr_200px]">
            <CheckCircleIcon className="w-6 h-6 text-gray-500" />
            <div>
              <h3 className="font-semibold">
                Facial Recognition for Engagement
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                EduQuest's AI-powered facial recognition technology detects
                participant emotions and engagement levels, providing valuable
                insights to help you create more engaging and impactful
                meetings.
              </p>
            </div>
          </div>
          <div className="grid items-center gap-4 md:grid-cols-[1fr_200px]">
            <CheckCircleIcon className="w-6 h-6 text-gray-500" />
            <div>
              <h3 className="font-semibold">Seamless Integration</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                With EduQuest's advanced AI features, you can ensure that
                every meeting is efficient, inclusive, and impactful. Our
                platform offers a range of tools to enhance collaboration,
                engage participants, and make meetings more productive.
              </p>
            </div>
          </div>
          <div className="grid items-center gap-4 md:grid-cols-[1fr_200px]">
            <CheckCircleIcon className="w-6 h-6 text-gray-500" />
            <div>
              <h3 className="font-semibold">Make Every Meeting Count</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                EduQuest's AI-powered features are designed to help you create
                more engaging, inclusive, and productive meetings. With
                automated attendance tracking, real-time collaboration tools,
                and engagement analytics, you can ensure that every meeting is
                impactful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
