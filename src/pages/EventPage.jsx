import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const EventPage = () => {
  return (
    <div className="wrapper min-h-screen flex flex-col">
      <Header />
      <Nav />
      <main className="main flex-grow">
          <h1>Event Page</h1>
          <h1 className="text-4xl text-purple-600">Tailwind is working!</h1>
          {/* Here you can include components like EventCard, EventForm, EventDetail, TicketPackageForm */}
          {/* Example: */}
          {/* <EventCard /> */}
          {/* <EventForm /> */}
          {/* <EventDetail /> */}
          {/* <TicketPackageForm /> */}
      </main>
      <Footer />
    </div>
  )
}

export default EventPage