import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../components/ui/table"

export default function Component() {
    return (
        <div className="dark px-4 py-4 md:py-6  text-white w-full h-full border border-white">
            <div className="space-y-2 text-center">
                <h1 className="text-4xl font-bold">Student Grades</h1>
                <p className="text-lg">Summary of grades for the semester</p>
            </div>
            <div className="w-full h-full overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Subject</TableHead>
                            <TableHead>Midterm</TableHead>
                            <TableHead>Final Exam</TableHead>
                            <TableHead>CGPA</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">Mathematics</TableCell>
                            <TableCell>85</TableCell>
                            <TableCell>90</TableCell>
                            <TableCell>3.8</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Science</TableCell>
                            <TableCell>78</TableCell>
                            <TableCell>82</TableCell>
                            <TableCell>3.5</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">History</TableCell>
                            <TableCell>92</TableCell>
                            <TableCell>88</TableCell>
                            <TableCell>3.9</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Literature</TableCell>
                            <TableCell>87</TableCell>
                            <TableCell>91</TableCell>
                            <TableCell>3.7</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Art</TableCell>
                            <TableCell>95</TableCell>
                            <TableCell>93</TableCell>
                            <TableCell>4.0</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
