import AboutUs from '../components/about_us/AboutUs'
import Contact from '../components/Contact/Contact'
import Header from '../components/Header'
// import Image from 'next/image'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio/Portfolio'
import Resume from '../components/Resume/Resume'
import Values from '../components/Values/Values'
import styles from '../styles/Home.module.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'


export default function Home() {
  useEffect(() => {
   Aos.init({duration: 900})
  }, [])
  return (
    <div >
      <Header 
      title="Michael Kasingye"
      metaName="Michael Kasingye"
      metaContent="Michael Kasingye Page, details about Michael Kasingye as a software developer"/>
     

      <Hero/>
      {/* <Values /> */}
      <AboutUs />
      <Resume/>
      <Portfolio/>
      <Contact/>
    
    </div>
  )
}
