/**
 * v0 by Vercel.
 * @see https://v0.dev/t/2XBDgWQavak
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../components/ui/table"
import { ResponsivePie } from "@nivo/pie"

export default function Component() {
    return (
        <Card className="w-full max-w-3xl mx-auto dark">
            <CardHeader className="flex flex-col md:flex-row items-start md:items-center gap-4 py-4 px-6 md:gap-8 md:py-8 md:px-10">
                <div className="flex flex-col">
                    <CardTitle className="text-2xl">Attendance Tracking</CardTitle>
                    <CardDescription>Overall attendance of students in different courses</CardDescription>
                </div>
                <div className="ml-auto flex gap-4 md:gap-2">
                    <Button size="sm">
                        <UploadIcon className="mr-2 h-4 w-4" />
                        Import
                    </Button>
                    <Button size="sm">
                        <DownloadIcon className="mr-2 h-4 w-4" />
                        Export
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="p-0 overflow-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[200px] text-white">Course</TableHead>
                            <TableHead className="text-white">Students</TableHead>
                            <TableHead className="text-white">Attendance</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className="bg-gray-100 dark:bg-gray-800">
                            <TableCell className="font-semibold text-white">Mathematics</TableCell>
                            <TableCell className="text-white">Alison Lee</TableCell>
                            <TableCell className="text-white">Present</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-semibold text-white">Physics</TableCell>
                            <TableCell className="text-white">Alison Lee</TableCell>
                            <TableCell className="text-white">Late</TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-100 dark:bg-gray-800">
                            <TableCell className="font-semibold text-white">History</TableCell>
                            <TableCell className="text-white">Alison Lee</TableCell>
                            <TableCell className="text-white">Present</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-semibold text-white">Biology</TableCell>
                            <TableCell className="text-white">Alison Lee</TableCell>
                            <TableCell className="text-white">Present</TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-100 dark:bg-gray-800">
                            <TableCell className="font-semibold text-white">Today's Attendance</TableCell>
                            <TableCell className="text-white">Alison Lee</TableCell>
                            <TableCell className="text-white">Present</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-semibold text-white">Semester's Total Attendance</TableCell>
                            <TableCell className="text-white">Alison Lee</TableCell>
                            <TableCell className="text-white">85%</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                {/* <PieChart className="aspect-[4/3]" /> */}
            </CardContent>
        </Card>
    )
}

function DownloadIcon(props) {
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
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
    )
}


function PieChart(props) {
    return (
        <div {...props}>
            <ResponsivePie
                data={[
                    { id: "Jan", value: 111 },
                    { id: "Feb", value: 157 },
                    { id: "Mar", value: 129 },
                    { id: "Apr", value: 150 },
                    { id: "May", value: 119 },
                    { id: "Jun", value: 72 },
                ]}
                sortByValue
                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                cornerRadius={0}
                padAngle={0}
                borderWidth={1}
                borderColor={"#ffffff"}
                enableArcLinkLabels={false}
                arcLabel={(d) => `${d.id}`}
                arcLabelsTextColor={"#ffffff"}
                arcLabelsRadiusOffset={0.65}
                colors={["#2563eb"]}
                theme={{
                    labels: {
                        text: {
                            fontSize: "18px",
                        },
                    },
                    tooltip: {
                        chip: {
                            borderRadius: "9999px",
                        },
                        container: {
                            fontSize: "12px",
                            textTransform: "capitalize",
                            borderRadius: "6px",
                        },
                    },
                }}
                role="application"
            />
        </div>
    )
}


function UploadIcon(props) {
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
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" x2="12" y1="3" y2="15" />
        </svg>
    )
}
