import { AvatarImage, AvatarFallback, Avatar } from "../components/ui/avatar"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../components/ui/table"
import { CardContent, Card, CardTitle, CardHeader } from "../components/ui/card"
import { Separator } from "../components/ui/separator"
import { Link } from 'react-router-dom'

export default function Component() {
  return (
    <div className="grid md:grid-cols-3 gap-4 items-start w-full max-w-6xl px-2 py-3 mx-auto md:px-6 lg:py-12">
      <div className="flex flex-col gap-4 md:col-span-2 md:grid md:grid-cols-2 md:gap-4">
        <div className="flex flex-col gap-1">
          <Link to="./profile" className="flex items-center gap-2">
            <Avatar className="h-10 w-10 border-black dark:border-white border-2">
              <AvatarImage alt="Emma" src="/placeholder-avatar.jpg" />
              <AvatarFallback>EM</AvatarFallback>
            </Avatar>
            <h1 className="text-3xl font-bold">Hi, Emma!</h1>
          </Link>
          <p className="text-gray-500 dark:text-gray-400">Here's what's happening with your courses and schedule.</p>
        </div>
        <Link to="./course" className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold">Fall 2023</h2>
          <p className="text-gray-500 dark:text-gray-400">You are currently registered for 4 courses.</p>
        </Link>
        <Card className="md:col-span-2">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table className="min-w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead>   Course</TableHead>
                    <TableHead>Professor</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Location</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-semibold">Biology 101</TableCell>
                    <TableCell>Dr. Smith</TableCell>
                    <TableCell>9:00 AM - 10:30 AM</TableCell>
                    <TableCell>Science Building 101</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">History of Art</TableCell>
                    <TableCell>Prof. Johnson</TableCell>
                    <TableCell>11:00 AM - 12:30 PM</TableCell>
                    <TableCell>Arts Building 202</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Mathematics</TableCell>
                    <TableCell>Prof. Lee</TableCell>
                    <TableCell>1:00 PM - 2:30 PM</TableCell>
                    <TableCell>Math Building 301</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Literature</TableCell>
                    <TableCell>Prof. Adams</TableCell>
                    <TableCell>3:00 PM - 4:30 PM</TableCell>
                    <TableCell>Library 2nd Floor</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Upcoming Assignments</CardTitle>
            <a className="text-sm font-medium underline" href="#">
              View All
            </a>

          </CardHeader>
          <CardContent>
            <ul className="grid gap-1 text-sm">
              <li>
                <span className="font-semibold">Biology 101:</span>
                Chapter 3 Quiz - Due 25th March
              </li>
              <li>
                <span className="font-semibold">History of Art:</span>
                Essay on Renaissance - Due 30th March
              </li>
              <li>
                <span className="font-semibold">Mathematics:</span>
                Problem Set 1 - Due 10th April
              </li>
              <li>
                <span className="font-semibold">Literature:</span>
                Reading Journal - Due 5th April
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Grades</CardTitle>
            <Link to="./grades " className="flex flex-col gap-1">
              Veiw All
            </Link>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-2 text-sm">
              <li>
                <span className="font-semibold">Biology 101:</span>
                Midterm Exam - 85%
              </li>
              <li>
                <span className="font-semibold">History of Art:</span>
                Essay on Renaissance - 92%
              </li>
              <li>
                <span className="font-semibold">Mathematics:</span>
                Problem Set 1 - 78%
              </li>
              <li>
                <span className="font-semibold">Literature:</span>
                Reading Journal - 88%
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <Card className="md:col-start-3">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Attendance</CardTitle>
          <Link to="./attendance" className="flex flex-col gap-1">
            Veiw All
          </Link>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="grid gap-1">
              <h3 className="text-base font-bold">Biology 101</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Dr. Smith | Monday, Wednesday, Friday</p>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <CalendarCheckIcon className="w-6 h-6" />
              <div className="grid gap-1 text-right">
                <h3 className="text-sm font-bold">Attendance</h3>
                <p className="text-2xl font-bold">75%</p>
              </div>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="flex items-center gap-4">
            <div className="grid gap-1">
              <h3 className="text-base font-bold">History of Art</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Prof. Johnson | Tuesday, Thursday</p>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <CalendarCheckIcon className="w-6 h-6" />
              <div className="grid gap-1 text-right">
                <h3 className="text-sm font-bold">Attendance</h3>
                <p className="text-2xl font-bold">90%</p>
              </div>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="flex items-center gap-4">
            <div className="grid gap-1">
              <h3 className="text-base font-bold">Mathematics</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Prof. Lee | Monday, Wednesday, Friday</p>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <CalendarCheckIcon className="w-6 h-6" />
              <div className="grid gap-1 text-right">
                <h3 className="text-sm font-bold">Attendance</h3>
                <p className="text-2xl font-bold">82%</p>
              </div>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="flex items-center gap-4">
            <div className="grid gap-1">
              <h3 className="text-base font-bold">Literature</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Prof. Adams | Tuesday, Thursday</p>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <CalendarCheckIcon className="w-6 h-6" />
              <div className="grid gap-1 text-right">
                <h3 className="text-sm font-bold">Attendance</h3>
                <p className="text-2xl font-bold">95%</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Feedback</CardTitle>
          <a className="text-sm font-medium underline" href="#">
            Give Feedback
          </a>
        </CardHeader>

        <CardContent>
          <form className="grid gap-4">
            <div className="mb-4">
              <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-1">Select Category</label>
              <select id="category" className="w-full px-3 py-2 rounded-md bg-slate-700 text-white">
                <option value="">Choose a category</option>
                <option value="courses">Courses</option>
                <option value="professor">Professor</option>
                <option value="facilities">Facilities</option>
                <option value="campus-events">Campus Events</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="topic" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
              <input type="text" id="topic" className="w-full px-3 py-2 rounded-md bg-gray-800 text-white" placeholder="Subject/Topic of Feedback" />
            </div>
            <div className="mb-4">
              <label htmlFor="feedback" className="block text-sm font-medium text-gray-300 mb-1">Share your feedback</label>
              <textarea id="feedback" rows={4} className="w-full px-3 py-2 rounded-md bg-slate-700 text-white" placeholder="Type your feedback..."></textarea>
            </div>
            <button className="w-full py-2 px-4 bg-black dark:bg-white hover:bg-blue-700 rounded-md text-white dark:text-black font-medium">Submit</button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

function CalendarCheckIcon(props: any) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="m9 16 2 2 4-4" />
    </svg>
  )
}
