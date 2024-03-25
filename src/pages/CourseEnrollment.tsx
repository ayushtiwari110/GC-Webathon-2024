/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OAwVsv5nsal
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Select } from "../components/ui/select"
import { CardHeader, CardContent, Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"

export default function Component() {
    return (
        <div className="grid max-w-6xl gap-6 px-4 mx-auto lg:grid-cols-3 lg:px-6 xl:gap-10 dark">
            <div className="space-y-6 lg:col-span-2">
                <div>
                    <h1 className="text-3xl font-bold">Course Registration</h1>
                    <div className="flex items-center gap-2 text-sm">
                        <span className="font-semibold">Term:</span>
                        <div>
                            <div className="text-primary-500 hover:underline">
                                Spring 2023
                                <div className="w-4 h-4 inline" />
                            </div>
                            <div className="z-10 p-2 bg-white border shadow-lg w-48 origin-top-right rounded-md focus:outline-none dark:bg-gray-900">
                                <div>Fall 2023</div>
                                <div>Spring 2024</div>
                                <div>Summer 2024</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className="relative">
                        <div className="absolute inset-y-0 inset-x-3 w-4 h-4 m-2.5 text-gray-400 dark:text-gray-500" />
                        <Input className="pl-10" id="search" placeholder="Search for courses..." />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Label className="m-0" htmlFor="filter">
                            Show:
                        </Label>
                        <Select className="min-w-[200px]" id="filter">
                            <div>All Courses</div>
                            <div>Registered Courses</div>
                            <div>Open Courses</div>
                            <div>Waitlist</div>
                        </Select>
                    </div>
                </div>
                <div className="grid gap-4">
                    <Card>
                        <CardHeader className="flex items-center space-x-2">
                            <div className="font-semibold">MATH 101</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Introduction to Calculus</div>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <dl>
                                        <div className="font-semibold">Description</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                            An introductory course in differential and integral calculus. Emphasis on techniques of
                                            differentiation and integration.
                                        </div>
                                    </dl>
                                </div>
                                <div>
                                    <dl>
                                        <div className="font-semibold">Instructor</div>
                                        <div>Dr. A. Turing</div>
                                    </dl>
                                </div>
                            </div>
                            <div>
                                <dl className="grid grid-cols-2 gap-2">
                                    <div className="font-semibold">Timings</div>
                                    <div className="text-right">MWF 10:00 AM - 11:00 AM</div>
                                    <div className="font-semibold">Location</div>
                                    <div className="text-right">Hall 3, Room 102</div>
                                    <div className="font-semibold">Credits</div>
                                    <div className="text-right">3.0</div>
                                </dl>
                            </div>
                            <div className="border-t pt-4">
                                <Button className="w-full">Register</Button>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex items-center space-x-2">
                            <div className="font-semibold">PHYS 202</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Quantum Mechanics</div>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <dl>
                                        <div className="font-semibold">Description</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                            Introduction to the fundamental principles of quantum mechanics. Topics include wave-particle
                                            duality, the Schrödinger equation, and quantum entanglement.
                                        </div>
                                    </dl>
                                </div>
                                <div>
                                    <dl>
                                        <div className="font-semibold">Instructor</div>
                                        <div>Prof. M. Curie</div>
                                    </dl>
                                </div>
                            </div>
                            <div>
                                <dl className="grid grid-cols-2 gap-2">
                                    <div className="font-semibold">Timings</div>
                                    <div className="text-right">TTh 1:00 PM - 2:30 PM</div>
                                    <div className="font-semibold">Location</div>
                                    <div className="text-right">Science Building, Room 301</div>
                                    <div className="font-semibold">Credits</div>
                                    <div className="text-right">4.0</div>
                                </dl>
                            </div>
                            <div className="border-t pt-4">
                                <Button className="w-full">Register</Button>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex items-center space-x-2">
                            <div className="font-semibold">ENGL 110</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Academic Writing</div>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <dl>
                                        <div className="font-semibold">Description</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                            This course introduces students to the principles of academic writing. Topics include essay
                                            structure, citation styles, and critical analysis.
                                        </div>
                                    </dl>
                                </div>
                                <div>
                                    <dl>
                                        <div className="font-semibold">Instructor</div>
                                        <div>Dr. E. Brontë</div>
                                    </dl>
                                </div>
                            </div>
                            <div>
                                <dl className="grid grid-cols-2 gap-2">
                                    <div className="font-semibold">Timings</div>
                                    <div className="text-right">MWF 9:00 AM - 10:00 AM</div>
                                    <div className="font-semibold">Location</div>
                                    <div className="text-right">Library, Room 201</div>
                                    <div className="font-semibold">Credits</div>
                                    <div className="text-right">3.0</div>
                                </dl>
                            </div>
                            <div className="border-t pt-4">
                                <Button className="w-full">Register</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="space-y-6 order-first lg:order-none">
                <Card className="flex-col">
                    <CardHeader className="flex items-center space-x-2">
                        <div className="font-semibold">Registered Courses</div>
                        <Badge>3</Badge>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="overflow-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="text-left py-2 px-3 border font-normal first:rounded-tl-md last:rounded-tr-md">
                                            Course
                                        </th>
                                        <th className="text-left py-2 px-3 border font-normal">Title</th>
                                        <th className="text-left py-2 px-3 border font-normal">Instructor</th>
                                        <th className="text-left py-2 px-3 border font-normal">Timings</th>
                                        <th className="text-left py-2 px-3 border font-normal">Location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
                                        <td className="py-2 px-3 border">
                                            <div className="font-semibold">MATH 101</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">Introduction to Calculus</div>
                                        </td>
                                        <td className="py-2 px-3 border">Dr. A. Turing</td>
                                        <td className="py-2 px-3 border">MWF 10:00 AM - 11:00 AM</td>
                                        <td className="py-2 px-3 border">Hall 3, Room 102</td>
                                    </tr>
                                    <tr className="transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
                                        <td className="py-2 px-3 border">
                                            <div className="font-semibold">PHYS 202</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">Quantum Mechanics</div>
                                        </td>
                                        <td className="py-2 px-3 border">Prof. M. Curie</td>
                                        <td className="py-2 px-3 border">TTh 1:00 PM - 2:30 PM</td>
                                        <td className="py-2 px-3 border">Science Building, Room 301</td>
                                    </tr>
                                    <tr className="transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
                                        <td className="py-2 px-3 border">
                                            <div className="font-semibold">ENGL 110</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">Academic Writing</div>
                                        </td>
                                        <td className="py-2 px-3 border">Dr. E. Brontë</td>
                                        <td className="py-2 px-3 border">MWF 9:00 AM - 10:00 AM</td>
                                        <td className="py-2 px-3 border">Library, Room 201</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

