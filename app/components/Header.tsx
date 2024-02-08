"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useFormState } from "react-dom";


const navlinks = [
    { label: 'Home', url: '/home' },
      { label: 'About', url: '/about' },
      {label:'Services ', url:'/services'},
        { label: 'Contact', url: '/contact' }
        ];


export default function Header(){
    const [isOpen, setOpen] = useState(false);
    const toggleOpen = () => {
      setOpen(!isOpen)
    }



    return(
        <header className=" bg-white shadow-lg h-[80px] w-full ">
          <nav className="flex flex-wrap justify-between items-center">
             <div className="">
                <Link href="/">
                <Image src="/logo.png" height={200} width={200} alt="Logo" />
                </Link>
             </div>
             <div className="gap-3">
              <ul className="hidden sm:flex flex-wrap gap-6 m-7 items-center ">
                 {navlinks.map((links,index)=>(
                  <li key={index} >
                    <Link href={links.url} className="flex flex-wrap">
                      <h2 className="text-black uppercase   ">{links.label} </h2>
                    </Link>
                  </li>
                 ))}
                 <div className="m-[-2] gap-1 ">
                  <Button className="bg-black text-white hover:bg-white hover:text-black  transition dutation-500 uppercase ">Book Now <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>

                    </span></Button>
                 </div>
              </ul>
              </div>
             {/*Mobile Nav*/}
              <div className="items-center  h-[60px] w-[60px]  sm:hidden">

                {isOpen ? (<svg onClick={toggleOpen} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                    ) :
               (<svg onClick={toggleOpen} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 top-[40px] ">
                  <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                  </svg>) 
                  } 
            {isOpen && (<div className="bg-black top-[100px] flex justify-between items-center">
                  <div>
                        <a href="#" className="text-white text-xl font-bold">Your Brand</a>
                            </div>
                                <div className="block lg:hidden">
                                      <button id="menu-toggle" className="text-gray-300 focus:outline-none focus:text-white">
                                              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                                                                </svg>
                                                                      </button>
                                                                          </div>
                                                                              <div className="hidden lg:flex lg:items-center lg:w-auto" id="menu">
                                                                                    <ul className="list-reset lg:flex justify-end items-center">
                                                                                            <li><a href="#" className="text-gray-300 hover:text-white px-4 py-2 block">Home</a></li>
                                                                                                    <li><a href="#" className="text-gray-300 hover:text-white px-4 py-2 block">About</a></li>
                                                                                                            <li><a href="#" className="text-gray-300 hover:text-white px-4 py-2 block">Services</a></li>
                                                                                                                    <li><a href="#" className="text-gray-300 hover:text-white px-4 py-2 block">Contact</a></li>
                                                                                                                            <li><a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Book Now</a></li>
                                                                                                                                    <li><a href="#" className="text-gray-300 hover:text-white px-4 py-2 block">Login</a></li>
                                                                                                                                          </ul>
                                                                                                                                              </div>
                                                                                                                                                </div>
                                                                                                                                                
                                                                                                                                                
                                                                                                                                                
                                                                                                                                            
                                                                                                                                            
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                      
                                                                                                                                            
                                                                                                                                                
                                                                                                                                                
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                    
                                                                                                                                                      
                                                                                    )}

              </div>
          </nav>
        </header>
    )
}