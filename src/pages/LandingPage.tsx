import { useNavigate } from "react-router-dom"

const LandingPage = () => {

  const navigate = useNavigate()

  return (
    <div className="flex flex-col min-h-[90dvh]">

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container flex flex-col items-center justify-center px-4 space-y-4 md:px-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Student ERP Portal</h1>
              <p className="max-w-[1000px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The only platform you need to manage your academic journey. From admissions to graduation.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <a
                className="inline-flex w-full items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white shadow-sm px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                onClick={() => navigate('./student')}
              >

                Login with Google
              </a>
            </div>
          </div>
        </section>
        {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
           <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_600px] xl:grid-cols-[1fr_900px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Your one-stop solution</h2>
              <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Access your timetable, attendance, marks, and more.
              </p>
            </div>
            <ul className="grid gap-4">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Timetable</h3>
                  <p className="text-gray-500 dark:text-gray-400">Access your class schedule.</p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Attendance</h3>
                  <p className="text-gray-500 dark:text-gray-400">Track your attendance.</p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Marks</h3>
                  <p className="text-gray-500 dark:text-gray-400">View your exam results.</p>
                </div>
              </li>
            </ul>
          </div>
          <img
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="450"
                src="/placeholder.svg"
                width="900"
              /> 
           </div>
            </div> 
        </section> */}

      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}


function ChromeIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}


function MountainIcon(props: any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

export default LandingPage