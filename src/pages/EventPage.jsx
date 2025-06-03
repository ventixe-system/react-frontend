import EventCard from "../components/EventCard"
import EventFilters from "../components/EventFilters";
import React from "react"
import { useState } from "react";

const dummyEvents = [
  {
    category: "Music",
    status: "Active",
    date: "May 20, 2029",
    time: "6:00 PM",
    title: "Echo Beats Festival",
    location: "Sunset Park, Los Angeles, CA",
    sales: 70,
    price: 60,
  },
  {
    category: "Tech",
    status: "Active",
    date: "June 1, 2029",
    time: "10:00 AM",
    title: "Tech Future Expo",
    location: "Silicon Valley, San Jose, CA",
    sales: 55,
    price: 80,
  },
  {
    category: "Music",
    status: "Active",
    date: "May 20, 2029",
    time: "6:00 PM",
    title: "Echo Beats Festival",
    location: "Sunset Park, Los Angeles, CA",
    sales: 70,
    price: 60,
  },
  {
    category: "Tech",
    status: "Active",
    date: "June 1, 2029",
    time: "10:00 AM",
    title: "Tech Future Expo",
    location: "Silicon Valley, San Jose, CA",
    sales: 55,
    price: 80,
  },
]

const EventPage = () => {
  const [statusFilter, setStatusFilter] = React.useState("Active");
  const [categoryFilter, setCategoryFilter] = React.useState("All");

  const filteredEvents = dummyEvents.filter(event => {
    return event.status === statusFilter &&
      (categoryFilter === "All" || event.category === categoryFilter);
  }
  );

  return (
    <section className="grid grid-rows-[auto_1fr] bg-grey-20 rounded-2xl p-6 h-full">

      <div className="p-4">
        <EventFilters
          selectedStatus={statusFilter}
          onStatusChange={setStatusFilter}
          selectedCategory={categoryFilter}
          onCategoryChange={setCategoryFilter}
        />
      </div>
      
      <div className="overflow-y-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}

          {filteredEvents.length === 0 && (
            <p className="text-center text-base text-grey-60 col-span-full pt-12">
              No events match your filters.
            </p>
        )}
        </div>
      </div>

    </section>
  )
}

export default EventPage