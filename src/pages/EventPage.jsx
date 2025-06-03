import EventCard from "../components/EventCard"
import EventFilters from "../components/EventFilters";
import React, { use } from "react"
import { useEffect, useState } from "react";
import Modal from "../components/Modal";

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = React.useState("Active");
  const [categoryFilter, setCategoryFilter] = React.useState("All");
  const [fetchError, setFetchError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("https://localhost:7182/api/events");

        if (!response.ok) {
          throw new Error("Server responded with an error.");
        }

        const data = await response.json();
        setEvents(data);
        setLoading(false);
        setFetchError(null);
      } catch (error) {
        console.error("Error fetching events", error);
        setFetchError("Failed to load events. Please try again later.");
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const filteredEvents = events.filter(event => {
    return event.status === statusFilter &&
      (categoryFilter === "All" || event.category === categoryFilter);
  }
  );

  return (
    <section className="grid grid-rows-[auto_1fr] bg-grey-20 rounded-2xl p-6 h-full">

      <div className="flex justify-between items-center">
        <EventFilters
          selectedStatus={statusFilter}
          onStatusChange={setStatusFilter}
          selectedCategory={categoryFilter}
          onCategoryChange={setCategoryFilter}
        />
        <button
          onClick={() => setShowModal(true)}
          className="bg-primary-100 hover:bg-primary-90 text-white px-4 py-2 rounded-full text-sm font-medium"
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
                <EventCard key={index} event={event} />
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
        <h2 className="text-xl font-semibold mb-4">Add New Event</h2>
        <p>Nothing to see here.</p>
      </Modal>
    </section>

  )
}

export default EventPage