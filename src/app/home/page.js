'use client'
import Navbar from '@/components/home/Navbar'
import Hero from '@/components/home/Hero'
import About from '../components/about/About';
import Teams from '@/components/teams/Teams';
import Footer from '@/components//Footer'

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Teams/>
      <Footer/>
    </>
  )
}
