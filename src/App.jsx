import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { Stats } from './components/Stats.jsx';
import { About } from './components/About.jsx';
import { Curriculum } from './components/Curriculum.jsx';
import { Testimonials } from './components/Testimonials.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';
import './App.css'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Curriculum />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
