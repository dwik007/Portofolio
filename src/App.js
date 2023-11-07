import Header from "./components/header"
import Profile from "./components/profile"
import Portfolio from "./components/portfolio"
import Navigation from "./components/navigation"
import Banner from "./components/banner"
import Footer from "./components/footer"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

function App() {
  useEffect(() => AOS.init)
  return (
    <div>
      <Header />
      <Navigation />
      <Banner />
      <Profile />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default App
