import { useEffect, useState } from "react";
import AdminAttendence, {
  type Subject,
  type Faculty,
  type Student,
  List,
} from "../components/ui/AdminAttendence";
import SubjectManagement from "../components/ui/SubjectManagement";
import { studentsCollection, subjectsCollection } from "../firebaseConfig";
import { onSnapshot, query, getDoc } from "firebase/firestore";

// interface Student {
//     id: string;
//     name: string;
//     email: string | null;
//   }

//   interface Faculty {
//     id: string;
//     name: string;
//   }

//   interface Subject {
//     id: string;
//     name: string;
//     faculty: Faculty[] | null;
//   }

const dummySubjectList: Subject[] = [
  { id: "1", name: "bio", faculty: null },
  { id: "2", name: "eng", faculty: null },
  { id: "3", name: "math", faculty: null },
  { id: "4", name: "sci", faculty: null },
];
const dummyStudentList: Student[] = [
  { id: "-1", name: "s1", email: "e1", subjects: [] },
  { id: "2", name: "s2", email: "e2", subjects: [] },
  { id: "3", name: "s3", email: "e3", subjects: [] },
  { id: "4", name: "s4", email: "e4", subjects: [] },
];

const AdminDashBoard = () => {
  const [studentsList, setStudentList] = useState<Student[]>([]);
  const [student, setStudent] = useState<Student>(dummyStudentList[0]);
  const [subjectList, setSubjectList] = useState<Subject[]>([]);
  useEffect(() => {
    const q = query(studentsCollection);
    const unsubscribe = onSnapshot(
      q,
      async (snapshot) => {
        let documents: Student[] = [];
        for (const doc of snapshot.docs) {
          const student = doc.data();
          const subjects = await Promise.all(
            student.subjects.map(async (docRef: any) => {
              const doc = await getDoc(docRef);
              return doc.data();
            })
          );
          documents.push({
            name: student.name as string,
            email: student.email as string,
            id: doc.id.toString(),
            subjects: subjects,
          });
        }
        setStudentList(documents);
        if (student.id === "-1") setStudent(documents[0]);
      },
      (error) => {
        console.log("Error getting documents: ", error);
      }
    );

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const q = query(subjectsCollection);
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        let documents: Subject[] = [];
        snapshot.forEach((doc) => {
          const subject = doc.data() as Subject;
          documents.push({ ...subject, id: doc.id.toString() });
        });
        setSubjectList(documents);
        console.log("subject", documents);
      },
      (error) => {
        console.log("Error getting documents: ", error);
      }
    );
    return () => unsubscribe();
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 w-full z-10"
        style={{ backgroundColor: "rgb(36,36,36)" }}>
        {studentsList.length > 0 && (
          <List
            title="Student"
            id="student"
            data={studentsList}
            setState={setStudent}
            currentState={student}
          />
        )}
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start w-full max-w-6xl px-2 py-3 mx-auto md:px-6 lg:py-12 ">
        <div>
          <SubjectManagement student={student} subjectList={subjectList} />
        </div>

        <AdminAttendence subjectList={subjectList} student={student} />
      </div>
    </>
  );
};

export default AdminDashBoard;
