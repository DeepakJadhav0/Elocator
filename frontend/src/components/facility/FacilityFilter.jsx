export default function FacilityFilter({
  filterDistance,
  handleFilterChange,
  showVerifiedOnly,
  toggleVerifiedOnly,
}) {
  return (
    <div className="bg-white p-2 ml-2 rounded-md shadow-md flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
      
      <h1 className="text-sm font-semibold">Filter Facility</h1>

      {/* Verified Only toggle */}
      <button
        onClick={toggleVerifiedOnly}
        className={`text-[12px] p-1 w-fit rounded-md bg-gray-50 border ${
          showVerifiedOnly ? "bg-red-100" : "bg-green-100"
        }`}
      >
        {showVerifiedOnly ? "Show All" : "Verified"}
      </button>

      {/* Distance filter */}
      <select
        className="text-[13px] p-1 rounded-md bg-gray-50 border"
        value={filterDistance}
        onChange={handleFilterChange}
      >
        <option value="5">Within 5 km</option>
        <option value="20">Within 20 km</option>
        <option value="50">Within 50 km</option>
      </select>
    </div>
  );
}
