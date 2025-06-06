import { Route, Routes, Navigate} from 'react-router-dom'
import Layout from './assets/layouts/Layout.jsx'
import EventPage from './pages/EventPage.jsx'
import EventDetailsPage from './pages/EventDetailsPage.jsx'
import React from 'react'
import TicketPackageForm from './pages/TicketPackageForm.jsx'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<EventPage />} />
          <Route path="eventdetails" element={<EventDetailsPage />} />
          <Route path="TicketPackageForm" element={<TicketPackageForm />} />
        </Route>
        
        {/* Redirect from /EventPage to root path */}
        <Route path="/EventPage" element={<Navigate to="/" />} />
      </Routes>
      
    </>
  )
}

export default App
