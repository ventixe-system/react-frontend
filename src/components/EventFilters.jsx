import { useState } from "react"

{/* ChatGpt 4o helped a lot with writing this code. It filters the events based on status and category. */}

const statuses = ["Active", "Draft", "Cancelled", "Past"]
const categories= ["All", "Music", "Outdoor & Adventure", "Fashion", "Food & Culinary", "Art & Design", "Sports", "Technology", "Health & Wellness"]

const EventFilters = ({ selectedStatus, onStatusChange, selectedCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-between items-center">

      {/* Status Filter Buttons*/}
      <div className="flex gap-2">
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
      <div className="ml-8">
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