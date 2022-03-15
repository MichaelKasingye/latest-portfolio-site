import AboutUs from '../components/about_us/AboutUs'
import Blogs from '../components/Blogs/Blogs'
import Header from '../components/Header'
// import Image from 'next/image'
import Hero from '../components/Hero'
import Motto from '../components/Motto/Motto'
import Services from '../components/Services/Services'
import Values from '../components/Values/Values'
import styles from '../styles/Home.module.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'


export default function Home() {
  useEffect(() => {
   Aos.init({duration: 2000})
  }, [])
  return (
    <div className={styles.container}>
      <Header 
      title="thestella center"
      metaName="The Stella Center"
      metaContent="Stella Center Page, details about child aid"/>
     

      {/* <Hero/>
      <Values />
      <AboutUs />
      <Motto/>
      <Services/>
      <Blogs/> */}
    
    </div>
  )
}
