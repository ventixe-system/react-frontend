import { useState } from "react";

const AddEventForm = ({ onClose }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  
  return (
            <form className="grid gap-4">
          <input
            type="text"
            placeholder="Event Title"
            className="p-2 border rounded-md bg-grey-10 text-grey-100 placeholder-grey-60 focus:outline-none focus:ring-2 focus:ring-primary-100"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={`p-2 border rounded-md bg-grey-10 focus:outline-none focus:ring-2 focus:ring-primary-100 
              ${date ? "text-grey-100" : "text-grey-60"
            }`}
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className={`p-2 border rounded-md bg-grey-10 focus:outline-none focus:ring-2 focus:ring-primary-100 
              ${time ? "text-grey-100" : "text-grey-60"
            }`}
          />
          <input
            type="text"
            placeholder="Location"
            className="p-2 border rounded-md bg-grey-10 text-grey-100 placeholder-grey-60 focus:outline-none focus:ring-2 focus:ring-primary-100"
          />
          <input
            type="number"
            placeholder="Price"
            className="p-2 border rounded-md bg-grey-10 text-grey-100 placeholder-grey-60 focus:outline-none focus:ring-2 focus:ring-primary-100"
          />
          <select
            defaultValue=""
            className="p-2 border rounded-md bg-grey-10 text-grey-100 focus:outline-none focus:ring-2 focus:ring-primary-100"
          >
            <option value="" disabled>
              --- Select Category ---
            </option>
            <option>Music</option>
            <option>Tech</option>
            <option>Sports</option>
            <option>Business</option>
          </select>

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="w-24 py-2 rounded-full text-sm font-medium bg-grey-40 hover:bg-grey-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-24 py-2 rounded-full text-sm font-medium bg-primary-100 text-white hover:bg-primary-90"
            >
              Save
            </button>
          </div>
        </form>
  )
}

export default AddEventForm