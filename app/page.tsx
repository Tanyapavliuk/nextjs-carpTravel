import Hero from '../components/Home/Hero.jsx';
import About from '../components/About/About.jsx';
import Offer from '../components/Offer/Offer.jsx';
import ChooseUs from '../components/ChooseUs/ChooseUs.jsx'
import GallerySection from '../components/GallerySection/Gallery.jsx'
import Contact from '../components/Contact/Contact.jsx'

export default function Home() {
  return (
    <div className='relative'>
      <Hero />
      <main>
        <About />
        <Offer />
        <ChooseUs />
        <GallerySection/>
      </main>
      <footer><Contact/></footer>
    </div>
  )
}
