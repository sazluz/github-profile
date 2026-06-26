import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
{/* <div className="min-h-screen w-full bg-black relative overflow-hidden">
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      background: `
        linear-gradient(
          90deg, 
          transparent 0%,
          transparent 30%,
          rgba(138, 43, 226, 0.4) 50%,
          transparent 70%,
          transparent 100%
        ),
        linear-gradient(
          to bottom,
          #1a1a2e 0%,
          #2d1b69 50%,
          #0f0f23 100%
        )
      `,
      backgroundImage: `
        repeating-linear-gradient(
          90deg,
          transparent 0px,
          transparent 79px,
          rgba(255, 255, 255, 0.05) 80px,
          rgba(255, 255, 255, 0.05) 81px
        )
      `,
    }}
  />
</div> */}
<div className="min-h-screen w-full bg-black relative overflow-hidden">
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
    {/* Your Content */}
     <Navbar />
     <Hero />
</div>
    </>
  )
}

export default App
