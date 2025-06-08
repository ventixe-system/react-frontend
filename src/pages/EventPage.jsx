import EventCard from "../components/EventCard"
import EventFilters from "../components/EventFilters";
import React from "react"
import { useEffect, useState } from "react";
import Modal from "../components/ModalBase";
import AddEventForm from "../components/AddEventForm";

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = React.useState("Active");
  const [categories, setCategories] = useState([]);
  const [categoryFilter, setCategoryFilter] = React.useState("All Categories");
  const [fetchError, setFetchError] = useState(null);
  const [showModal, setShowModal] = useState(false);

useEffect(() => {
  const fetchData = async () => {
    try {
      const [eventRes, categoryRes] = await Promise.all([
        fetch("https:/event-service-app-h5hhaag4c2czezbj.swedencentral-01.azurewebsites.net/api/events"),
        fetch("https:/category-service-app-g8bugcfhfadcb3dg.swedencentral-01.azurewebsites.net/api/categories"),
      ]);

      if (!eventRes.ok || !categoryRes.ok) {
        throw new Error("Failed to fetch data");
      }

      const [eventData, categoryData] = await Promise.all([
        eventRes.json(),
        categoryRes.json(),
      ]);

      setEvents(eventData);
      setCategories(categoryData);
      setLoading(false);
      setFetchError(null);
    } catch (err) {
      console.error(err);
      setFetchError("Something went wrong while loading events.");
      setLoading(false);
    }
  };

  fetchData();
}, []);

  const getCategoryName = (id) => {
  const found = categories.find((c) => c.id === id);
  return found ? found.name : "Unknown";
  };
  
  const filteredEvents = events.filter(event =>
  event.status === statusFilter &&
  (categoryFilter === "All Categories" || getCategoryName(event.categoryId)?.toLowerCase() === categoryFilter.toLowerCase())
);

  return (
    <section className="grid grid-rows-[auto_1fr] bg-grey-20 rounded-2xl p-6 h-full">

      <div className="flex gap-4 flex-wrap-reverse justify-between items-center">
        <EventFilters
          selectedStatus={statusFilter}
          onStatusChange={setStatusFilter}
          selectedCategory={categoryFilter}
          onCategoryChange={setCategoryFilter}
        />
        <button
          onClick={() => setShowModal(true)}
          className="bg-primary-100 hover:bg-primary-90 text-white px-4 py-2 rounded-full text-nowrap text-sm font-medium"
        >
          + Add Event
        </button>
      </div>
      
      <div className="overflow-y-auto p-4">
        {loading ? (
          <p className="text-center text-base text-grey-60 col-span-full pt-12">
            Loading events...
          </p>
        ) : fetchError ? (
          <div className="col-span-full text-center mt-8 p-4 bg-primary-30 border border-primary-100 text-primary-100 rounded">
            {fetchError}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => (
            <EventCard key={index} event={event} getCategoryName={getCategoryName} />
    ))
            ) : (
              <p className="text-center text-base text-grey-60 col-span-full pt-12">
                No events match your filters.
              </p>
            )}
          </div>
        )}
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2 className="text-xl font-semibold mb-4">Add New Event — Draft</h2>
         <AddEventForm onClose={() => setShowModal(false)} />
      </Modal>
    </section>

  )
}

export default EventPage