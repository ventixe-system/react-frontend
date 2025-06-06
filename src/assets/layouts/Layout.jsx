import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"

const Layout = () => {
  return (
    <div className="min-h-screen font-sans bg-grey-10 text-grey-90">
      <div className="grid grid-cols-[auto_1fr] xl:grid-cols-[220px_1fr] min-h-screen p-3">
        <Nav />
        <div className="grid grid-rows-[auto_1fr_auto]">
          <Header />
          <main role="main">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Layout