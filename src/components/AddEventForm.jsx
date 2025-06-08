import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddEventForm = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [startingPrice, setStartingPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
  const fetchCategories = async () => {
    try {
      const response = await fetch("category-service-app-g8bugcfhfadcb3dg.swedencentral-01.azurewebsites.net/api/categories");
      if (!response.ok) throw new Error("Failed to fetch categories");
      const data = await response.json();
      setCategories(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  fetchCategories();
  }, []);
  
    const validate = () => {
    const newErrors = {};
      if (!title.trim()) newErrors.title = "Title is required";
      if (!description.trim()) newErrors.description = "Description is required";
      if (!date) newErrors.date = "Date is required";
      if (!startingPrice || isNaN(startingPrice) || startingPrice < 0) newErrors.startingPrice = "Price must be a positive number";
      if (!categoryId) newErrors.categoryId = "Please select a category";
      return newErrors;
    };
  
const handleSubmit = async (e) => {
  e.preventDefault();

  const formErrors = validate();
  if (Object.keys(formErrors).length > 0) {
    setErrors(formErrors);
    return;
  }

  const payload = {
    Title: title,
    Description: description,
    Date: date,
    Time: time === "" ? "00:00" : time,
    Location: location.trim() === "" ? null : location,
    StartingPrice: parseFloat(startingPrice),
    CategoryId: parseInt(categoryId),
    Status: "Draft" // Default status for new events
  };

  try {
    setSubmitting(true);

    const response = await fetch("event-service-app-h5hhaag4c2czezbj.swedencentral-01.azurewebsites.net/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Failed to add event.");
    }

    navigate(0); // Refreshes the page to show the new event
    onClose();
  } catch (err) {
    alert(err.message || "Something went wrong.");
  } finally {
    setSubmitting(false);
  }
};

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Event Title"
          className="p-2 border rounded-md bg-grey-10 text-grey-100 placeholder-grey-60 focus:outline-none focus:ring-2 focus:ring-primary-100 w-full"
        />
        {errors.title && <p className="text-primary-90 text-sm mt-1">{errors.title}</p>}
      </div>

      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="p-2 border rounded-md bg-grey-10 text-grey-100 placeholder-grey-60 focus:outline-none focus:ring-2 focus:ring-primary-100 w-full"
          rows={3}
        />
        {errors.description && <p className="text-primary-90 text-sm mt-1">{errors.description}</p>}
      </div>

      <div>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={`p-2 border rounded-md bg-grey-10 focus:outline-none focus:ring-2 focus:ring-primary-100 w-full ${
            date ? "text-grey-100" : "text-grey-60"
          }`}
        />
        {errors.date && <p className="text-primary-90 text-sm mt-1">{errors.date}</p>}
      </div>

      <div>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className={`p-2 border rounded-md bg-grey-10 focus:outline-none focus:ring-2 focus:ring-primary-100 w-full ${
            time ? "text-grey-100" : "text-grey-60"
          }`}
        />
        {errors.time && <p className="text-primary-90 text-sm mt-1">{errors.time}</p>}
      </div>

      <div>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="p-2 border rounded-md bg-grey-10 text-grey-100 placeholder-grey-60 focus:outline-none focus:ring-2 focus:ring-primary-100 w-full"
        />
        {errors.location && <p className="text-primary-90 text-sm mt-1">{errors.location}</p>}
      </div>

      <div>
        <input
          type="number"
          value={startingPrice}
          onChange={(e) => setStartingPrice(e.target.value)}
          placeholder="Starting price"
          className="p-2 border rounded-md bg-grey-10 text-grey-100 placeholder-grey-60 focus:outline-none focus:ring-2 focus:ring-primary-100 w-full"
        />
        {errors.startingPrice && <p className="text-primary-90 text-sm mt-1">{errors.startingPrice}</p>}
      </div>

      <div>
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className= "p-2 border rounded-md bg-grey-10 text-grey-100 focus:outline-none focus:ring-2 focus:ring-primary-100 w-full"
        >
          <option value="" disabled>--- Select Category ---</option>
          {categories.map(c => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        {errors.categoryId && <p className="text-primary-90 text-sm mt-1">{errors.categoryId}</p>}
      </div>

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
          disabled={submitting}
          className="w-24 py-2 rounded-full text-sm font-medium bg-primary-100 text-white hover:bg-primary-90 disabled:opacity-50"
        >
          {submitting ? "Saving..." : "Save"}
        </button>
      </div>
    </form>
  )
}

export default AddEventForm