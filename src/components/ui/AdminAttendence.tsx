import { useState } from "react";
import { CardContent, Card, CardTitle, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";
import { useNavigate } from "react-router-dom";
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
      strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="m9 16 2 2 4-4" />
    </svg>
  );
}
export interface Student {
  id: string;
  name: string;
  email: string | null;
  subjects: Subject[];
}

export interface Faculty {
  id: string;
  name: string;
}

export interface Subject {
  id: string;
  name: string;
  faculty: Faculty[] | null;
}

export interface AdminAttendanceProps {
  student: Student;
  subjectList: Subject[];
}

export interface ListProps {
  id: string;
  title: string;
  data: any;
  setState: (state: any) => void;
  currentState?: any;
}

export const List: React.FC<ListProps> = ({
  id,
  title,
  data,
  setState,
  currentState,
}) => {
  return (
    <div className="mb-4" style={{ maxWidth: 200 }}>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-300 mb-1 text-left">
        {title}
      </label>
      <select
        id={id}
        className="w-full px-3 py-2 rounded-md bg-slate-700 text-white"
        value={currentState ? currentState.id : ""}
        onChange={(e) => {
          const selected = data.find((item: any) => item.id === e.target.value);
          setState(selected);
        }}>
        {data.map((each: any) => (
          <option value={each.id}>{each.name}</option>
        ))}
      </select>
    </div>
  );
};

const AdminAttendence: React.FC<AdminAttendanceProps> = ({
  student,
  subjectList,
}) => {
  const [subject, setSubject] = useState(subjectList[0]);
  const navigate = useNavigate();

  return (
    <Card className="md:col-start-3">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">Attendance</CardTitle>
      </CardHeader>
      <CardContent>
        <List
          id="subject"
          title="Subject"
          data={subjectList}
          setState={setSubject}
          currentState={subject}
        />
        <Separator className="my-4" />
        <div className="mb-4">
          <label
            htmlFor="feedback"
            className="block text-sm font-medium text-gray-300 mb-1 text-left">
            Attendence
          </label>
          <input
            className="w-full px-3 py-2 rounded-md bg-slate-700 text-white"
            placeholder="0"
          />
          <label
            htmlFor="feedback"
            className="block text-sm font-medium text-gray-300 mb-1 text-left">
            Grade
          </label>
          <input
            className="w-full px-3 py-2 rounded-md bg-slate-700 text-white"
            placeholder="0"
          />
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 mt-3"
            style={{
              backgroundColor: "rgb(51,65,85)",
            }}
            onClick={() => {
              navigate(
                `/${subject === undefined ? subjectList[0].id : subject.id}/${
                  student.id
                }`
              );
            }}>
            View Assignments
          </button>
          <Separator />
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-1 text-left">
              Feedback
            </label>
            <p className="max-w-[300px] rounded-lg border border-white text-white my-3 p-1">
              Feedback Feedback Feedback Feedback Feedback Feedback Feedback
              Feedback Feedback Feedback Feedback Feedback Feedback Feedback
              Feedback Feedback Feedback Feedback Feedback Feedback Feedback
              Feedback Feedback Feedback Feedback
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminAttendence;
