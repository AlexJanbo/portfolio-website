import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-row">
        <div className="w-1/6 gradient_blue-purple"></div>
        <div className="h-auto min-h-screen flex flex-col w-3/4">
          <div className="flex-grow-0 h-1/6 bg-black-400">
            <Navbar />
          </div>
          <div className="flex-grow overflow-auto bg-gray-400">
            {children}
          </div>
          <div className="flex-grow-0 bg-black-400">
            <Footer />
          </div>
        </div>
        <div className="w-1/6 gradient_purple-blue"></div>
      </div>
    </>
  )
}

export default Layout