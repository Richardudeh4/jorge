"use client";
import React, { useState } from 'react';
import twitter from "@/public/asset/twitter.svg";
import telegram from "@/public/asset/telegram.svg";
import dexscreener from "@/public/asset/dex-screener-seeklogo.png";
import dextool from "@/public/asset/dextools.svg";
import Link from 'next/link';
import Image from 'next/image';
import { Copy, CopyCheck } from 'lucide-react';

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

const StayInTouch = () => {
  const [text] = useState<string>('0xf55632dB629EcF1DeA65046ed790c68744b22028');
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
    <div className='w-full mx-0 mt-0 py-16 bg-blue-950'>
      <div className='flex flex-col gap-6 items-center justify-center'>
        {/* Heading */}
        <h1 className='font-serif text-4xl sm:text-6xl md:text-8xl text-white text-center font-extrabold'>
          Stay in touch
        </h1>

        {/* Social Links */}
        <div className='flex flex-wrap justify-center gap-6 mt-6'>
          {
            DesktopSocialLink.map((item, i) => (
              <div key={i} className='p-3 border-transparent flex justify-center items-center rounded-full bg-white'>
                <Link href={item.href} target="_blank">
                  <Image src={item.icon} height={30} width={30} alt="" />
                </Link>
              </div>
            ))
          }
        </div>

        {/* Content Layout */}
        <div className='w-full flex flex-col sm:flex-row justify-between mt-10 items-center'>
          <div className='w-full sm:w-auto'>
            <Image src="https://jorgeonsol.io/assets/flag3-BzMvU6gq.png" alt="" width={250} height={250} className='w-full max-w-[250px]' />
          </div>
          <div className='w-full sm:w-[60%] mt-6 sm:mt-0'>
            <p className='text-xl sm:text-2xl text-center text-white'>
              60% of the tokens were sent to the liquidity pool. LP tokens<br />
              were burnt contract is renounced. The remaining 40% of the<br />
              supply is being held in a multi-sig wallet only to be used<br />
              as tokens for future centralized exchange listings, bridges<br />
              and liquidity pools.
            </p>
          </div>
          <div className='w-full sm:w-auto mt-6 sm:mt-0'>
            <Image src="https://jorgeonsol.io/assets/flag4-1i-LYS46.png" alt="" width={250} height={250} className='w-full max-w-[250px]' />
          </div>
        </div>

       
         <h1 className='font-extrabold text-3xl sm:text-4xl md:text-[45px] text-white mt-8'>
          TOKEN CONTRACT ADDRESS
        </h1>
        <div className='px-8 py-6 rounded-xl bg-red-700 flex items-center flex-row space-x-5 mt-6'>
          <p className='text-xl '>{text}</p>
          {
            copySuccess ?
              <CopyCheck size={38} color="white" />
              :
              <Copy size={38} onClick={handleCopy} color="white" />
          }
       
        </div>
      </div>
    </div>
  )
}

export default StayInTouch


// "use client";
// import React, { useState } from 'react'
// import twitter from "@/public/asset/twitter.svg";
// import telegram from "@/public/asset/telegram.svg";
// import dexscreener from "@/public/asset/dex-screener-seeklogo.png";
// import dextool from "@/public/asset/dextools.svg";
// import Link from 'next/link';
// import Image from 'next/image';
// import { Copy, CopyCheck } from 'lucide-react';

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
// const StayInTouch = () => {
//     const [text] = useState<string>('7BNMb8k689NK9i7Sn8n9BwuqmxHMMWHJ57bBJYEow87s');
//     const [copySuccess, setCopySuccess] = useState(false);

//     const handleCopy = () => {
//         navigator.clipboard.writeText(text)
//           .then(() => {
//             setCopySuccess(true); 
//             setTimeout(() => setCopySuccess(false), 2000); 
//           })
//           .catch(err => {
//             console.error('Failed to copy text: ', err);
//             setCopySuccess(false);
//           });
//       };
//   return (
//     <div className='w-full mx-0 mt-0 py-16 bg-blue-950'>
//        <div className='flex flex-col gap-6 items-center justify-center'>
//                 <h1 className='font-serif text-6xl text-white text-center font-extrabold'>Stay in touch</h1>
//                 <div className='flex flex-row space-x-8 items-center'>
//                     {
//                         DesktopSocialLink.map((item,i) => (
//                             <div key={i} className='p-3 border-transparent flex justify-center items-center rounded-full bg-white'>
//                                     <Link href={item.href} target="_blank">
//                                     <Image src={item.icon} height={30} width={30} alt=""/>
//                                     </Link>
//                             </div> 
//                         ))
//                     }
//                 </div>    
//                 <div className='w-full flex flex-row justify-between -mt-10 items-center'>
//                     <div>
//                         <Image src="https://jorgeonsol.io/assets/flag3-BzMvU6gq.png" alt="" width={250} height={250}/>
//                     </div>
//                     <div>
//                         <p className='text-3xl text-white'>60% of the tokens were sent to the liquidity pool. LP tokens<br/> were burnt contract is renounced. the remaining 405 of the <br/>supply is being held in a multi - sig wallet only to be used <br/> as tokenss for future centralized exchange listings, bridges<br/> and liquidity pools</p>
//                     </div>
//                     <div>
//                         <Image src="https://jorgeonsol.io/assets/flag4-1i-LYS46.png" alt="" width={250} height={250}/>
//                     </div>
//                 </div>

//                 <h1 className='font-extrabold text-[65px] text-white'>TOKEN CONTRACT ADDRESS</h1>

//                 <div className='px-8 py-6 rounded-xl bg-red-700 flex items-center flex-row space-x-5'>
//                         {/* <p className='text-2xl font-bold text-white'>7BNMb8k689NK9i7Sn8n9BwuqmxHMMWHJ57bBJYEow87s</p> */}
//                         {
//                             copySuccess ?
//                              <>
//                              <CopyCheck size={38}  color="white"/>
//                             </> :
//                              <>
//                              <Copy size={38} onClick={handleCopy} color="white"/>
//                             </>
//                         }
                        
//                 </div>
//        </div>
//     </div>
//   )
// }

// export default StayInTouch
