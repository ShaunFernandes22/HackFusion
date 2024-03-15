import React from "react";

function Button({ size, variant, children }) {
  return (
    <button className={`button-${size} button-${variant}`}>{children}</button>
  );
}

function Label({ htmlFor, children }) {
  return <label htmlFor={htmlFor}>{children}</label>;
}

function Input({ id, placeholder, type }) {
  return <input id={id} placeholder={placeholder} type={type} />;
}

function Textarea({ id, placeholder, className }) {
  return <textarea id={id} placeholder={placeholder} className={className} />;
}

const ContactSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
        <div className="text-center space-y-2">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-white-800">
            Contact Sales
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Ready to get started?
          </h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Contact our sales team to learn more about how EduQuest can help
            you create more engaging and productive meetings. Whether you're a
            small team or a large enterprise, EduQuest has the tools you need
            to make every meeting count.
          </p>
        </div>
        <div className="w-full max-w-[400px]">
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" placeholder="Enter your company" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                className="min-h-[100px] resize-none"
                id="message"
                placeholder="Enter your message"
              />
            </div>
            <Button size="sm">Contact Sales</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
