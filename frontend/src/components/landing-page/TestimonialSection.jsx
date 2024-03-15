import React from "react";
function CardHeader({ children }) {
  return <div className="card-header">{children}</div>;
}

function CardContent({ children }) {
  return <div className="card-content">{children}</div>;
}

function CardFooter({ children }) {
  return <div className="card-footer">{children}</div>;
}

function Card({ children }) {
  return <div className="card">{children}</div>;
}
const TestimonialSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
        <div className="text-center space-y-2">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
            Trusted by Customers
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            What Customers are Saying
          </h2>
        </div>
        <div className="w-full max-w-3xl grid gap-8 md:grid-cols-2 lg:gap-12">
          <Card>
            <CardHeader>
              <img
                alt="Avatar"
                className="rounded-full object-cover object-center border border-gray-100 dark:border-gray-800"
                height="48"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                "EduQuest has completely transformed the way we approach
                meetings. The AI-powered features are incredibly innovative and
                have helped us create more engaging and productive meetings.
                Highly recommended!"
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex items-center space-x-2">
                <div className="font-medium">Alice Johnson</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Head of Marketing
                </div>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <img
                alt="Avatar"
                className="rounded-full object-cover object-center border border-gray-100 dark:border-gray-800"
                height="48"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                "As a remote team, we rely on virtual meetings for
                collaboration, and EduQuest has been a game-changer. The
                platform's AI proctoring features have helped us understand
                participant engagement levels and improve our meetings. It's
                like having a personal meeting assistant!"
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex items-center space-x-2">
                <div className="font-medium">David Lee</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Team Lead
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
