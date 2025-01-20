import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const MeetJorge = () => {
  return (
    <div className="w-full bg-slate-300">
      <div className="flex flex-col">
        {/* Main Flag Image */}
        <Image 
          src="https://jorgeonsol.io/assets/flag-D6HFsaDl.png" 
          alt="flag" 
          width={1300} 
          height={1300} 
          className="w-full object-cover"
        />

        <div className="max-w-8xl mx-auto px-6 lg:px-12 py-10">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Cap Image */}
            <div className="w-full lg:w-1/3">
              <Image 
                src="https://jorgeonsol.io/assets/cap-DVesqw1i.png" 
                width={700} 
                height={700} 
                alt="Cap" 
                className="w-full h-auto object-contain mx-auto rounded-2xl"
              />
            </div>

            <div className="flex flex-col lg:w-2/3 lg:ml-12 mt-6 lg:mt-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold   text-gray-700">
                Meet Jorge
              </h1>
              <p className="text-xl sm:text-3xl lg:text-2xl mt-5 text-gray-700 leading-relaxed">
                Jorge Wagshington is here to bring fun, freedom, <br/> 
                and financial opportunities to the masses. Ready <br/> 
                to join the most patriotic and playful crypto community? <br/> 
                Hop aboard, and let’s make history together! <br/> 
                <div className='flex mt-4 flex-row space-x-6'>
                  <Button asChild>
                    <Link href="https://x.com/jorgeonbase?s=21" target="_blank">
                    Get started
                    </Link>
                    </Button>
                  <Button asChild>
                    <Link href="https://t.me/JorgeOnBas" target="_blank">
                    Join the community
                    </Link>
                  </Button>
                </div>
              </p>
              <div className="mt-6 relative">
                {/* House Image */}
                <Image 
                  src="https://jorgeonsol.io/assets/house-Duk6FXjq.png" 
                  width={600} 
                  height={600} 
                  alt="House" 
                  className="w-full h-auto object-contain mx-auto -mb-32 lg:mb-0 rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeetJorge


// import Image from 'next/image'
// import React from 'react'

// const MeetJorge = () => {
//   return (
//     <div className='w-full bg-slate-300'>
//     <div className='flex flex-col'>
//         <Image src="https://jorgeonsol.io/assets/flag-D6HFsaDl.png" alt='flag' width={1300} height={1300}  className=''/>
//         <div className='max-w-8xl mx-auto'>
//             <div className="flex flex-row justify-between items-center">
//                 <Image src="https://jorgeonsol.io/assets/cap-DVesqw1i.png" width={700} height={700} alt="" />
//                 <div className='flex flex-col '>
//                     <div className='flex flex-col '>
//                         <h1 className='text-6xl font-semibold font-serif  text-white'>Meet Jorge</h1>
//                         <p className='text-2xl mt-5 text-white'>
//                         Jorge Wagshington is here to bring fun, freedom , <br/> and financial opportunities to the masses. Ready <br/> to join the most patriotic and playful crypto community? <br/> Hop aboard, and let’s make history together! [Get Started]<br/> [Join the Community]
//                         </p>
//                     <Image src="https://jorgeonsol.io/assets/house-Duk6FXjq.png" width={600} height={600} alt=""  className='-mb-32'/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     </div>
//   )
// }

// export default MeetJorge