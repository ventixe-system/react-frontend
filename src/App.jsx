import {Route, Routes, Navigate} from 'react-router-dom'
import EventPage from './pages/EventPage.jsx'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="EventPage" />} />
        <Route path="/EventPage" element={<EventPage />} />
      </Routes>
      
    </>
  )
}

export default App
