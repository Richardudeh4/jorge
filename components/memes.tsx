import Image from 'next/image'
import React from 'react'

const Memes = () => {
  return (
    <div className="w-full bg-blue-950 mt-2 overflow-hidden">
      <div className="flex flex-col justify-center items-center">
        {/* Heading */}
        <h1 className="text-white font-serif font-extrabold text-5xl sm:text-6xl md:text-8xl pt-10">
          MEMES
        </h1>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-9 px-4">
          <div className="flex justify-center">
            <Image
              src="https://jorgeonsol.io/assets/cap-DVesqw1i.png"
              width={400}
              height={400}
              alt="Cap"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="https://jorgeonsol.io/assets/dog-BIAxAf74.png"
              width={400}
              height={400}
              alt="Dog"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="https://jorgeonsol.io/assets/cap-DVesqw1i.png"
              width={400}
              height={400}
              alt="Cap"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Memes


// import Image from 'next/image'
// import React from 'react'

// const Memes = () => {
//   return (
//     <div className='w-full bg-blue-950 mt-2  overflow-hidden'>
//         <div className=' '>
//         <div className='flex flex-col justify-center items-center gap-5'>
//                     <h1 className='text-white font-serif font-extrabold text-8xl pt-10'>
//                         MEMES
//                     </h1>
        
//                 <div className='flex flex-row justify-between mt-9'>
//                         <Image src="https://jorgeonsol.io/assets/cap-DVesqw1i.png" width={400} height={400} alt=""/>
//                         <Image src="https://jorgeonsol.io/assets/dog-BIAxAf74.png" alt="" width={400} height={400}/>
//                         <Image src="https://jorgeonsol.io/assets/cap-DVesqw1i.png" width={400} height={400} alt=""/>
//                     </div>
//             </div>
//         </div> 
//     </div>
//   )
// }

// export default Memes