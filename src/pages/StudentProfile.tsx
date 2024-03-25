
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Label } from "../components/ui/label"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"

export default function Component() {
    return (
        <Card className="w-full max-w-3xl dark mx-auto">
            <CardHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                    <div className="space-y-1">
                        <CardTitle className="text-gray-50">Profile</CardTitle>
                        <CardDescription className="text-gray-400">Update your profile information.</CardDescription>
                    </div>
                    <div className="flex items-center space-x-4 md:space-x-0 md:ml-auto">
                        <Button size="sm">Upload</Button>
                        <Button size="sm" variant="outline">
                            Remove
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label className="text-gray-50" htmlFor="name">
                            Name
                        </Label>
                        <Input className="dark" id="name" placeholder="Enter your name" required />
                    </div>
                    <div className="space-y-2">
                        <Label className="text-gray-50" htmlFor="dob">
                            Date of Birth
                        </Label>
                        <Input className="dark" id="dob" type="date" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label className="text-gray-50">Gender</Label>
                        <div className="space-x-2 flex items-center">
                            <Label className="mr-2 text-gray-50" htmlFor="male">
                                <div />
                                Male
                            </Label>
                            <Label className="text-gray-50" htmlFor="female">
                                <div />
                                Female
                            </Label>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label className="text-gray-50" htmlFor="address">
                            Address
                        </Label>
                        <Textarea className="min-h-[100px] dark" id="address" placeholder="Enter your address" required />
                    </div>
                </div>
                <fieldset className="space-y-2">
                    <legend className="text-sm font-medium tracking-wide text-gray-50">Academic Information</legend>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label className="text-gray-50" htmlFor="program">
                                Current Program
                            </Label>
                            <Input className="dark" id="program" placeholder="Enter your program" required />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-gray-50" htmlFor="department">
                                Department
                            </Label>
                            <Input className="dark" id="department" placeholder="Enter your department" required />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-gray-50" htmlFor="enrollment-year">
                                Enrollment Year
                            </Label>
                            <Input className="dark" id="enrollment-year" placeholder="Enter your enrollment year" required />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-gray-50" htmlFor="student-id">
                                Student ID
                            </Label>
                            <Input className="dark" id="student-id" placeholder="Enter your student ID" required />
                        </div>
                    </div>
                </fieldset>
                <fieldset className="space-y-2">
                    <legend className="text-sm font-medium tracking-wide text-gray-50">Contact Information</legend>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label className="text-gray-50" htmlFor="email">
                                Email
                            </Label>
                            <Input className="dark" id="email" placeholder="Enter your email" required type="email" />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-gray-50" htmlFor="phone">
                                Phone
                            </Label>
                            <Input className="dark" id="phone" placeholder="Enter your phone" required type="tel" />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-gray-50" htmlFor="emergency-contact">
                                Emergency Contact (Name)
                            </Label>
                            <Input className="dark" id="emergency-contact" placeholder="Enter emergency contact" required />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-gray-50" htmlFor="emergency-phone">
                                Emergency Contact (Phone)
                            </Label>
                            <Input className="dark" id="emergency-phone" placeholder="Enter emergency contact phone" required />
                        </div>
                    </div>
                </fieldset>
            </CardContent>
            <CardFooter>
                <Button className="dark">Save</Button>
            </CardFooter>
        </Card>
    )
}

