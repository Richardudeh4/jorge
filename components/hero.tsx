"use client";
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image';

const Hero = () => {


  return (
    <div 
      className='h-screen w-full bg-cover bg-center bg-no-repeat bg-[url("../public/flag.jpg")]' 
    >
      <div className='flex py-10 justify-between flex-col lg:flex-row h-full px-6'>
        <div className='flex flex-col gap-y-6 lg:w-1/2'>
          <h1 className='font-extrabold text-red-700 text-5xl sm:text-6xl md:text-7xl lg:text-7xl tracking-wide'>
            Jorge <br/> Wagshington
          </h1>

          <p className='text-xl sm:text-2xl font-semibold tracking-wide'>
            Dear patriots, this is where fun <br/> meets freedom. In a rollercoaster of <br/> emotion and excitement we <br/> remember the pioneers of our<br/> independence.
          </p>

          <div className='mt-6 flex flex-col sm:flex-row gap-4'>
            <Button className="w-full sm:w-auto">Buy now</Button>
            <Button variant="secondary" className="w-full sm:w-auto">Dex</Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className='mt-8 sm:mt-0 lg:w-1/2'>
          <Image 
            src="https://jorgeonsol.io/assets/mobile%20hero-BMxZvkoq.png" 
            width={2000} 
            height={2000} 
            alt="Hero Image"
            className="w-full h-auto object-cover" 
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;


