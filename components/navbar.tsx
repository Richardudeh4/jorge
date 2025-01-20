"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import twitter from "@/public/asset/twitter.svg";
import telegram from "@/public/asset/telegram.svg";
import dexscreener from "@/public/asset/dex-screener-seeklogo.png";
import dextool from "@/public/asset/dextools.svg";
import { Button } from './ui/button';
import { X } from 'lucide-react';

const DesktopSocialLink = [
    {
        href: "https://x.com/jorgeonbase?s=21",
        icon: twitter
    },
    {
        href: "https://t.me/JorgeOnBase",
        icon: telegram
    },
    { 
        href: "https://dexscreener.com/base/0xf55632dB629EcF1DeA65046ed790c68744b22028",
        icon: dexscreener
    },
    { 
        href: "",
        icon: dextool,
    },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <div className="flex justify-between items-center py-3 px-4 md:px-8">

      {/* Logo and mobile toggle */}
   
        {/* Logo for all screen sizes */}
        <div className="w-[120px] md:w-[250px]">
          <Image src="https://jorgeonsol.io/logo.png" width={250} height={250} quality={80} alt="Logo" />
        </div>
        {/* Mobile menu button */}
        <button onClick={toggleMenu} className="lg:hidden text-2xl text-gray-700">
          {isMenuOpen ? '✖' : '☰'}
        </button>
      

      {/* Desktop navigation links */}
      <div className="hidden  lg:flex flex-row space-x-6">
        <a href="#tokenomics" className="text-xl">Tokenomics</a>
        <Link href="/" className="text-xl">Whitepaper</Link>
      </div>

      {/* Social links (desktop) */}
      <div className="hidden lg:flex space-x-5">
        {DesktopSocialLink.map((item, i) => (
          <Link href={item.href} target="_blank" key={i} className="border p-3 border-red-700 rounded-full">
            <Image src={item.icon} alt="" width={30} height={30} />
          </Link>
        ))}
      </div>

      {/* Button */}
      <div className="hidden lg:block">
        <Button>Buy Now</Button>
      </div>

      {/* Mobile Menu (toggle visibility) */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-0 left-0 right-0 bg-white p-6 space-y-4 shadow-md z-10">
            <div className='flex justify-between flex-row items-center'>
                <div className='flex flex-row space-x-2'>
                <a href="#tokenomics" className="text-xl">Tokenomics</a>
                <Link href="/" className="text-xl">Whitepaper</Link>
                </div>
          <X onClick={toggleMenu} size={28} color="black"/> 
          </div>
         
          <div className="flex space-x-5">
            {DesktopSocialLink.map((item, i) => (
              <Link href={item.href} target="_blank" key={i} className="border p-3 border-red-700 rounded-full">
                <Image src={item.icon} alt="" width={30} height={30} />
              </Link>
            ))}
          </div>
          <Button className="w-full">Buy Now</Button>
        </div>
      )}
    </div>
  );
}

export default Navbar;



// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// import twitter from "@/public/asset/twitter.svg";
// import telegram from "@/public/asset/telegram.svg";
// import dexscreener from "@/public/asset/dex-screener-seeklogo.png";
// import dextool from "@/public/asset/dextools.svg";
// import { Button } from './ui/button';


// const DesktopSocialLink = [
//     {
//         href:"https://x.com/jorgeonbase?s=21",
//         icon: twitter
//     },
//     {
//         href:"https://t.me/JorgeOnBase",
//         icon: telegram
//     },
//     { 
//         href: "",
//         icon: dexscreener
//     },
//     { 
//         href: "",
//         icon: dextool,
//     },

// ]

// const Navbar = () => {
//   return (
//     <div className='flex flex-row justify-between py-3 items-center'>

//         <div className='block lg:hidden'>
//             <div className='flex flex-row items-center justify-between'>
//             <div> 
//             <Image src="https://jorgeonsol.io/logo.png"   width={250} height={250} quality={80}  alt="" className='w-100 h-100 lg:w-[250px] lg:h-[250px]' />
//             </div>
//             <a href="#tokenomics" className='text-xl'>Tokenomics</a>
//             </div>
//         </div>
       
//         <div className='hidden lg:block'> 
//             <Image src="https://jorgeonsol.io/logo.png"   width={250} height={250} quality={80}  alt="" />
//         </div>
//         <div className='flex flex-row space-x-6'>
//             <a href="#tokenomics" className='text-xl'>Tokenomics</a>
//             <Link href="/" className='text-xl'>Whitepaper</Link>
//         </div>
//         <div className='flex flex-row space-x-5 '>
//             {
//                 DesktopSocialLink.map((item, i) => (
//                     <Link href={item.href} target="_blank" key={i} className='border p-3 border-red-700 rounded-full'>
//                         <Image src={item.icon} alt="" width={30} height={30}/>
//                     </Link>
//                 ))
//             }
//         </div>
//         <div>
//             <Button>Buy Now</Button>
//         </div>  
//     </div>
//   )
// }


// export default Navbar

