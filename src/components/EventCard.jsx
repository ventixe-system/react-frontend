import React from 'react'
//Events will be imported from the API

const EventCard = ({event}) => {
  return (
    <div className=" flex flex-col gap-2 justify-between w-full h-[17rem] sm:h-[21rem] bg-grey-10 rounded-2xl p-4 shadow-sm">
      <div className="flex justify-between items-start bg-grey-40 rounded-2xl h-full p-2 mb-2"> {/*this background should later be an image matching the event*/}
        <span className="bg-grey-20 text-xs text-secondary-100 font-medium px-3 py-1 rounded-3xl">{event.category}</span>
        <span className="bg-primary-30 text-xs text-secondary-100 font-normal px-3 py-1 rounded-3xl"><span className="text-xs text-primary-100">●</span> {event.status}</span>
      </div>

      <div>
        <div className="text-xs text-grey-70">
          {event.date} — {event.time}
        </div>
        <h3 className="text-base font-semibold text-grey-100">{event.title}</h3>
        <div className="text-xs text-grey-80"><i className="fa-thin fa-location-dot"></i> {event.location}</div>
        <div className="flex justify-end">
          <span className="text-primary-100 text-lg font-semibold">${event.price}</span>
        </div>
      </div>

    </div>
  )
}

export default EventCard