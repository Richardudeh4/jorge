"use client";
import { Copy, CopyCheck } from 'lucide-react'

import React, { useState } from 'react'
import { Button } from './ui/button'
import Image from 'next/image';

const Hero = () => {
  const [text] = useState('7BNMb8k689NK9i7Sn8n9BwuqmxHMMWHJ57bBJYEow87s');
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
      <div className='flex py-10 justify-between flex-col lg:flex-row h-full px-6'>
        <div className='flex flex-col gap-y-6 lg:w-1/2'>
          {/* Copy Button */}
          <div className='flex flex-row space-x-5 items-center'>
            {copySuccess ? 
              <CopyCheck className='text-2xl text-red-700' />
              :
              <Copy onClick={handleCopy} className='text-2xl text-red-700 cursor-pointer' />
            }
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-red-700'>COPY CA</h1>
          </div>

          {/* Main Heading */}
          <h1 className='font-extrabold text-red-700 text-5xl sm:text-6xl md:text-7xl lg:text-7xl tracking-wide'>
            Jorge <br/> Wagshington
          </h1>

          {/* Description Text */}
          <p className='text-xl sm:text-2xl font-semibold tracking-wide'>
            Dear patriots, this is where fun <br/> meets freedom. In a rollercoaster of <br/> emotion and excitement we <br/> remember the pioneers of our<br/> independence.
          </p>

          {/* Buttons */}
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


// "use client";
// import { Copy, CopyCheck } from 'lucide-react'

// import React, { useState } from 'react'
// import { Button } from './ui/button'
// import Image from 'next/image';

// const Hero = () => {
//   const [text] = useState('7BNMb8k689NK9i7Sn8n9BwuqmxHMMWHJ57bBJYEow87s');
//   const [copySuccess, setCopySuccess] = useState(false);

//   const handleCopy = () => {
//       navigator.clipboard.writeText(text)
//         .then(() => {
//           setCopySuccess(true); 
//           setTimeout(() => setCopySuccess(false), 2000); 
//         })
//         .catch(err => {
//           console.error('Failed to copy text: ', err);
//           setCopySuccess(false);
//         });
//     };
//   return (
//     <div 
//     className='h-screen w-full bg-cover bg-center bg-no-repeat'
//     style={{ backgroundImage: "url('/https://jorgeonsol.io/assets/mobile%20hero-BMxZvkoq.png')" }}
//     >
//     <div className='flex py-10 justify-between flex-row h-full'>
//         <div className='flex flex-col gap-y-6 '>
//             <div className='flex flex-row space-x-5 items-center'>
//               {
//                 copySuccess ? 
//                 <>
//                 <CopyCheck className='size-12 text-red-700'/>
//                 </> 
//                 :
//                  <>
//                   <Copy onClick={handleCopy} className='size-12 text-red-700'/>
//                  </>
           
//               }
            
//             <h1 className='text-6xl font-bold text-red-700'>COPY CA</h1>
//             </div>
//             <h1 className='font-extrabold text-red-700 text-7xl tracking-wide '>Jorge <br/>Wagshington</h1>
//             <p className='text-2xl font-semibold tracking-wide '>
//             Dear patriots this is where fun <br/> meets freedom. In a rollercoaster of <br/> emotion and excitement we <br/> remember the pioneers of our<br/> independence.
//             </p>

//             <div className='mt-6 flex flex-row space-x-3'>
//                 <Button>Buy now</Button>
//                 <Button variant="secondary"> Dex</Button>
//             </div>
//         </div>
//         <div className='-mt-36 ml-7'>
//           <Image src="https://jorgeonsol.io/assets/mobile%20hero-BMxZvkoq.png" width={2000} height={2000} alt=""/>
//         </div>
//     </div>
//     </div>
//   )
// }

// export default Hero

