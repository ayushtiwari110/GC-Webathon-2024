import { type Subject, Faculty, Student, List } from "./AdminAttendence";
import { CardContent, Card, CardTitle, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";
import { useState } from "react";
import Autocomplete from "react-autocomplete-input";

import "react-autocomplete-input/dist/bundle.css";

interface SubjectManagementProps {
  student: Student;
  subjectList: Subject[];
}

const SubjectManagement: React.FC<SubjectManagementProps> = ({
  student,
  subjectList,
}) => {
  const [addSubject, setAddSubject] = useState<Subject | null>(null);
  const [removeSubject, setRemoveSubject] = useState<Subject | null>(null);

  return (
    <Card className="md:col-start-3">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">
          Subject Management
        </CardTitle>
      </CardHeader>
      <CardContent>
        {subjectList.length > 0 && (
          <Autocomplete
            options={subjectList.map((subject) => subject.name)}
            trigger=""
            onChange={(value: string) => {
              const selectedSubject = subjectList.find(
                (subject) => subject.name === value
              );
              if (selectedSubject) {
                setAddSubject(selectedSubject);
                console.log(selectedSubject);
              }
            }}
            Component="input"
            className="w-full px-3 py-2 rounded-md bg-slate-700 text-white"
            placeholder="Add Subject"
            spacer=""
          />
        )}
        <Separator className="my-4" />
        {student.subjects.length > 0 && (
          <Autocomplete
            options={student.subjects.map((subject) => subject.name)}
            trigger=""
            onChange={(value: string) => {
              const selectedSubject = student.subjects.find(
                (subject) => subject.name === value
              );
              if (selectedSubject) {
                setRemoveSubject(selectedSubject);
                console.log(selectedSubject);
              }
            }}
            Component="input"
            className="w-full px-3 py-2 rounded-md bg-slate-700 text-white"
            placeholder="Remove Subject"
            spacer=""
          />
        )}
        <div className="flex justify-around mt-4">
          <button
            className="px-4 py-2 text-white bg-transparent rounded hover:bg-red-700"
            onClick={() => {
              // Handle cancel action here
            }}>
            Cancel
          </button>
          <button
            className="px-4 py-2 mr-2 text-white  rounded hover:bg-green-700"
            style={{ backgroundColor: "rgb(51,65,85)" }}
            onClick={() => {
              // Handle confirm action here
            }}>
            Confirm
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SubjectManagement;
