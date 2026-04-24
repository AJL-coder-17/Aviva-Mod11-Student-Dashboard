interface FilterPanelProps {
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
}

function FilterPanel({ searchTerm, onSearchTermChange }: FilterPanelProps) {
  return (
    <label htmlFor="student-search">
      Search by name:
      {" "}
      <input
        id="student-search"
        type="text"
        value={searchTerm}
        onChange={(event) => onSearchTermChange(event.target.value)}
        placeholder="Type a student name"
      />
    </label>
  );
}

export default FilterPanel;