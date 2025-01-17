"use client";
import { Copy, CopyCheck } from 'lucide-react'

import React, { useState } from 'react'
import { Button } from './ui/button'

const Hero = () => {
  const [text, setText] = useState('7BNMb8k689NK9i7Sn8n9BwuqmxHMMWHJ57bBJYEow87s');
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = () => {
      navigator.clipboard.writeText(text)
        .then(() => {
          setCopySuccess(true); 
          setTimeout(() => setCopySuccess(false), 2000); 
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
          setCopySuccess(false);
        });
    };
  return (
    <div 
    className='h-screen w-full bg-cover bg-center bg-no-repeat'
    style={{ backgroundImage: "url('/https://jorgeonsol.io/assets/mobile%20hero-BMxZvkoq.png')" }}
    >
    <div className='flex py-10  h-full'>
        <div className='flex flex-col gap-y-6 '>
            <div className='flex flex-row space-x-5 items-center'>
              {
                copySuccess ? 
                <>
                <CopyCheck className='size-12 text-red-700'/>
                </> 
                :
                 <>
                  <Copy onClick={handleCopy} className='size-12 text-red-700'/>
                 </>
           
              }
            
            <h1 className='text-6xl font-bold text-red-700'>COPY CA</h1>
            </div>
            <h1 className='font-extrabold text-red-700 text-7xl tracking-wide '>Jorge <br/>Wagshington</h1>
            <p className='text-2xl font-semibold tracking-wide '>
            Dear patriots this is where fun <br/> meets freedom. In a rollercoaster of <br/> emotion and excitement we <br/> remember the pioneers of our<br/> independence.
            </p>

            <div className='mt-6 flex flex-row space-x-3'>
                <Button>Buy now</Button>
                <Button variant="secondary"> Dex</Button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero

