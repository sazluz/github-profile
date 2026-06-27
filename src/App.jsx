import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'

function App() {
  return (
    <>
<div className="min-h-screen w-full bg-black relative overflow-hidden z-10">
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        radial-gradient(circle at 50% 110%, rgba(46, 160, 67, 0.6) 0%, transparent 30%),
      radial-gradient(circle at 50% 100%, rgba(46, 160, 67, 0.45) 0%, transparent 45%),
      radial-gradient(circle at 50% 100%, rgba(46, 160, 67, 0.25) 0%, transparent 60%)
      `,
    }}
  />
     <Navbar />
     <Hero />
</div>
     <HowItWorks />
     <Features />
    </>
  )
}

export default App
