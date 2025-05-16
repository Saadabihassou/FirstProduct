import './App.css'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <main className="flex flex-col overflow-hidden">
      <NavBar />
      <Header />
      <hr className="mx-44 border border-violet-400" />
      <Features />
      <hr className="mx-44 border border-blue-400" />
      <Testimonials />
      <hr className="mx-44 border border-green-400" />
      <Pricing />
      <hr className="mx-44 border border-red-400" />
      <Footer />
    </main>
  )
}

export default App