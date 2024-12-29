import React from 'react'
import { initFlowbite } from 'flowbite'
import { Navbar } from "flowbite-react";

export default function App() {
  return (
    <div>
      <Navbar fluid rounded className='bg-slate-200'>
        <Navbar.Brand href="/">
          <img src="./src/assets/Nike.png" className="mr-3 h-6 sm:h-9" alt="" />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Login</button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" className='md:text-[18px]'>Home</Navbar.Link>
          <Navbar.Link href="/" className='md:text-[18px]'>Location</Navbar.Link>
          <Navbar.Link href="/" className='md:text-[18px]'>About</Navbar.Link>
          <Navbar.Link href="/" className='md:text-[18px]'>Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <main className='md:flex md:gap-10 md:justify-center my-8'>
        <div className='bg-red  md:w-1/3' >
          <h1 className='text-6xl md:text-8xl my-5  font-bold text-center md:text-start'>YOUR FEET DESERVE THE BEST</h1>
          <p className='text-xl my-5 md:my-10 font-bold text-center md:text-start'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
          <div className='text-center md:text-start'>
            <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Shop Now</button>
            <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Category</button>
          </div>
          <footer className=' my-3 text-xl text-center md:text-start'>
            <p>Also Available On</p>
            <div className='flex justify-center md:justify-start md:my-3 gap-12 md:gap-0'>
              <img src="./src/assets/flipkart.png" alt="" />
              <img src="./src/assets/amazon.png" alt="" />
            </div>
          </footer>
        </div>
        <div className='my-5 text-center flex justify-center' >
          <img className='h-72 md:h-auto' src="./src/assets/shoe.png" alt="" />
        </div>
      </main>

    </div>
  )
}
