import React from "react";
import type { Student } from "../App";
import StudentCard from "./StudentCard";

interface Props {
  students: Student[];
}

const StudentList: React.FC<Props> = ({ students }) => {
  return (
    <div>
      <h2>Student List</h2>

      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          year={student.year}
          grade={student.grade}
          status={student.grade >= 75 ? "Passed" : "Failed"}
          isActive={student.isActive}
        />
      ))}
    </div>
  );
};

export default StudentList;