import EventCard from "../components/EventCard"

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
  return (
    <section className="grid grid-rows-[auto_1fr] bg-grey-20 rounded-2xl p-6 h-full">
      <div>
        insert buttons etc. here
      </div>
      <div className="overflow-y-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {dummyEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
      </div>
      </div>
    </section>
  )
}

export default EventPage