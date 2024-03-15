import {Link} from 'react-router-dom'
// import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <>
      <div className="dark bg-black border-b border-gray-100 dark:bg-gray-950 dark:border-gray-800">
        <div className="container flex items-center justify-between px-4 h-[60px] md:px-6">
          <Link className="flex items-center space-x-2 text-sm font-medium" href="#">
            <SquareIcon className="w-5 h-5" />
            <span className="font-semibold text-white">MeetingPro</span>
          </Link>
          <nav className="hidden space-x-4 text-sm font-medium md:flex">
            <Link
              className="text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
              href="#"
            >
              Features
            </Link>
            <Link
              className="text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
              href="#"
            >
              AI Proctoring
            </Link>
            <Link
              className="text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
              href="#"
            >
              Contact Sales
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button  className = "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
              Sign in
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">Sign up</button>
          </div>
        </div>
      </div>
      <header className="w-full py-16 text-center md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="max-w-[600px] mx-auto space-y-4">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Professional Meetings
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl/line-tight lg:text-7xl/line-tight font-secondary text-white">
              Elevate Your Meetings with AI
            </h1>
            <p className="md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-white">
              The all-in-one platform for productive and engaging meetings. With MeetingPro's advanced AI features, you
              can ensure that every meeting is efficient, inclusive, and impactful.
            </p>
          </div>
        </div>
      </header>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-[1fr_700px]">
          <img
            alt="Image"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
            height="393"
            src="/placeholder.svg"
            width="700"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                AI Proctoring
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Real-time Analysis of Engagement</h2>
              <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-white">
                MeetingPro uses advanced AI to analyze participant engagement levels in real time. With features like
                emotion recognition and attention tracking, you can ensure that your meetings are inclusive,
                interactive, and effective.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function SquareIcon(props) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </svg>
  )
}
