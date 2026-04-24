import React from "react";
import type { StudentStatus } from "../App";

interface Props {
  name: string;
  year: string;
  grade: number;
  status: StudentStatus;
  isActive: boolean;
}

// Pure Component
const StudentCard: React.FC<Props> = React.memo(({ name, year, grade, status, isActive }) => {
  const borderColor = status === "Passed" ? "green" : "red";
  const backgroundColor = status === "Passed" ? "#dff5df" : "#f9dede";

  return (
    <div
      style={{
        border: `3px solid ${borderColor}`,
        backgroundColor,
        margin: "10px",
        padding: "10px"
      }}
    >
      <h3>{name}</h3>
      <p>Year: {year}</p>
      <p>Grade: {grade}</p>
      <p>
        <strong>Status: {status}</strong>
      </p>
      {isActive ? <p>Active</p> : <p>Inactive</p>}
    </div>
  );
});

export default StudentCard;