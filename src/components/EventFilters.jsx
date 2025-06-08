import { useState, useEffect } from "react"

{/* ChatGpt 4o helped a lot with writing this code. It filters the events based on status and category. */}

const statuses = ["Active", "Draft", "Cancelled", "Past"]

const EventFilters = ({ selectedStatus, onStatusChange, selectedCategory, onCategoryChange }) => {
  const [categories, setCategories] = useState([])

    useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://localhost:7028/api/categories");
        if (!response.ok) throw new Error("Failed to fetch categories");
        const data = await response.json();
        setCategories(["All Categories", ...data.map(c => c.name)]);
      } catch (err) {
        console.error("Error fetching categories:", err.message);
      }
      };
      
          fetchCategories();
    }, []);
  
  return (
    <div className="flex flex-wrap gap-2 justify-between items-center">

      {/* Status Filter Buttons*/}
      <div className="flex flex-wrap gap-1">
        {statuses.map((status) => (
          <button
            key={status}
            onClick={() => onStatusChange(status)}
            className={`w-24 py-2 rounded-full text-sm font-medium 
              ${selectedStatus === status
                ? "bg-primary-100 text-white"
                : "bg-grey-10 text-grey-90 hover:bg-primary-30"}`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Category Filter Dropdown */}
      <div>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="bg-coolgrey-10 text-secondary-100 py-2 px-4 rounded-full text-sm font-medium
           hover:bg-coolgrey-20 focus:ring-2 focus:ring-primary-30 focus:outline-none"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

    </div>
  )
}

export default EventFilters