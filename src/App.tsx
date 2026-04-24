import { useState } from "react";
import FilterPanel from "./components/FilterPanel";
import Header from "./components/Header";
import StudentCard from "./components/StudentCard";

export type StudentStatus = "Passed" | "Failed";
type ActivityFilter = "All" | "Active" | "Inactive";

export interface Student {
  id: number;
  name: string;
  year: string;
  grade: number;
  isActive: boolean;
}

function getStudentStatus(grade: number): StudentStatus {
  const passingGrade = 75;
  const status: StudentStatus = grade >= passingGrade ? "Passed" : "Failed";
  return status;
}

const studentsData: Student[] = [
  { id: 1, name: "Anna", year: "Sophomore", grade: 90, isActive: true },
  { id: 2, name: "John", year: "Freshman", grade: 70, isActive: false },
  { id: 3, name: "Maria", year: "Junior", grade: 85, isActive: true },
  { id: 4, name: "Sam", year: "Senior", grade: 60, isActive: true },
  { id: 5, name: "Eleanor", year: "Senior", grade: 88, isActive: true },
  { id: 6, name: "Mason", year: "Freshman", grade: 72, isActive: true },
  { id: 7, name: "Priya", year: "Junior", grade: 95, isActive: false },
  { id: 8, name: "Liam", year: "Sophomore", grade: 68, isActive: true },
  { id: 9, name: "Sofia", year: "Freshman", grade: 82, isActive: true },
  { id: 10, name: "James", year: "Senior", grade: 77, isActive: false },
  { id: 11, name: "Noah", year: "Junior", grade: 84, isActive: true },
  { id: 12, name: "Ava", year: "Sophomore", grade: 91, isActive: true },
  { id: 13, name: "Isabella", year: "Senior", grade: 73, isActive: false },
  { id: 14, name: "Ethan", year: "Freshman", grade: 66, isActive: true },
  { id: 15, name: "Mia", year: "Junior", grade: 87, isActive: true },
  { id: 16, name: "Lucas", year: "Sophomore", grade: 79, isActive: false },
  { id: 17, name: "Charlotte", year: "Freshman", grade: 93, isActive: true },
  { id: 18, name: "Amelia", year: "Senior", grade: 74, isActive: false },
  { id: 19, name: "Oliver", year: "Junior", grade: 81, isActive: true },
  { id: 20, name: "Harper", year: "Sophomore", grade: 69, isActive: true },
  { id: 21, name: "Elijah", year: "Freshman", grade: 76, isActive: false },
  { id: 22, name: "Evelyn", year: "Senior", grade: 89, isActive: true },
  { id: 23, name: "Logan", year: "Junior", grade: 71, isActive: true },
  { id: 24, name: "Abigail", year: "Sophomore", grade: 94, isActive: false }
];

function App() {
  const [selectedFilter, setSelectedFilter] = useState<ActivityFilter>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const total = studentsData;
  const active = studentsData.filter((student) => student.isActive);
  const inactive = studentsData.filter((student) => !student.isActive);

  const filteredByActivity = studentsData.filter((student) => {
    if (selectedFilter === "Active") {
      return student.isActive;
    }

    if (selectedFilter === "Inactive") {
      return !student.isActive;
    }

    return true;
  });

  const filteredStudents = filteredByActivity.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header title={'Student Dashboard: "History & Film" Course'} />
      <p style={{ paddingBottom: "8px" }}>Total Students: {total.length}</p>
      <p style={{ paddingBottom: "8px" }}>Active Students: {active.length}</p>
      <p style={{ paddingBottom: "8px" }}>Inactive Students: {inactive.length}</p>
      <div style={{ paddingBottom: "12px" }}>
        <label htmlFor="activity-filter">
          Filter by activity status:
          {" "}
          <select
            id="activity-filter"
            value={selectedFilter}
            onChange={(event) => setSelectedFilter(event.target.value as ActivityFilter)}
          >
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </label>
      </div>

      <div>
        <FilterPanel searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
      </div>

      {filteredStudents.map((student) => {
        const status = getStudentStatus(student.grade);

        return (
          <StudentCard
            key={student.id}
            name={student.name}
            year={student.year}
            grade={student.grade}
            status={status}
            isActive={student.isActive}
          />
        );
      })}
    </div>
  );
}

export default App;