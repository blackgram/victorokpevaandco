import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const CompLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <Navbar />
        <div className='min-h-[100vh] pt-12 lg:pt-18 xl:pt-24 bg-[#f9f9ff]'>
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default CompLayout