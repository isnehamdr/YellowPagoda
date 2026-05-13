import React from 'react'
import About2 from '../Components/About2'
import About3 from '../Components/About3'

const AboutPage = () => {
  return (
    <>
    <div 
      className='min-h-screen bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage: "url('/images/aboutbg.jpg')"
     
      }}
    >
      {/* Overlay */}
      <div className='min-h-screen bg-black/60 pt-24 md:pt-52'>
        {/* Content */}
        <div className="container mx-auto px-4 text-white text-center">
          <p className='mb-6 md:mb-12 text-sm md:text-md font-semibold'>
            An Iconic Hotel in the Heart of Pokhara
          </p>
          <h1 className="text-4xl md:text-7xl font-bold mb-8 md:mb-12">
            About The Hotel
          </h1>
          <p className='text-sm md:text-md font-semibold px-4 md:px-0'>
            A luxury boutique hotel in the heart of wine country
          </p>
        </div>
      </div>
    </div>

    <About2/>
    <About3/>
    </>
  )
}

export default AboutPage