import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"

const App = () => {
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Contact />
    </>
  )
}

export default App