"use client";

import React from 'react'
import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Active from './active';
import Animarted from './animarted';



const main = () => {
  return (
    <>
    <div className='pb-20 px-4 min-h-screen mt-[160px] '>
      <div className='container mx-auto text-center '>
        <h1 className='text-5xl   md:text-8xl lg:text-[105px] bg-gradient-to-br from-blue-600 to-purple-600 font-extrabold tracking-tighter pr-2 pb-2 text-transparent bg-clip-text'>
          Manage Your<br /> Finances <br /> with Intelligence
        </h1>
        <p className=' text-xl text-gray-600 mb-8 max-w-2xl mx-auto '>
          An AI-powered financial management platform that helps you track,
          <br />
          analyze, and optimize your spending with real-time insights.
        </p>

        <div className='flex justify-center items-center gap-5 mt-4'>
          <Link href="/dashboard">
            
            <InteractiveHoverButton className=" rounded-sm bg-black text-white">Get Started</InteractiveHoverButton>
          </Link>
          <Link href="/dashboard">
            {/* <Button size="lg" className="px-8 " variant="outline">Watch Demo</Button> */}
            <InteractiveHoverButton className=" rounded-sm">Watch Demo</InteractiveHoverButton>
          </Link>
        </div>

        <div className=' '>
          <Image
            src="/ai finance  19-08-2025 at 02-11-51.jpeg"

            alt="Company Logo"
            height={60}
            width={200}
            className=" h-full w-full mx-auto  rounded-sm relative top-10      "
          />

        </div>
        
      </div>
      </div>
      <Active/>
      <Animarted/>
      </>
  )
  }

export default main;