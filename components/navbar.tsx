import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import twitter from "@/public/asset/twitter.svg";
import telegram from "@/public/asset/telegram.svg";
import { Button } from './ui/button';


const DesktopSocialLink = [
    {
        href:"https://x.com/jorgeonbase?s=21",
        icon: twitter
    },
    {
        href:"https://t.me/JorgeOnBase",
        icon: telegram
    },

]

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between py-3 items-center'>

        <div className='block lg:hidden'>
            <div className='flex flex-row items-center justify-between'>
            <div> 
            <Image src="https://jorgeonsol.io/logo.png"   width={250} height={250} quality={80}  alt="" className='w-100 h-100 lg:w-[250px] lg:h-[250px]' />
            </div>
            <a href="#tokenomics" className='text-xl'>Tokenomics</a>
            </div>
        </div>
        <div className='hidden lg:block'>
        <div> 
            <Image src="https://jorgeonsol.io/logo.png"   width={250} height={250} quality={80}  alt="" />
        </div>
        <div className='flex flex-row space-x-6'>
            <a href="#tokenomics" className='text-xl'>Tokenomics</a>
            <a href="/" className='text-xl'>Whitepaper</a>
        </div>
        <div className='flex flex-row space-x-5 '>
            {
                DesktopSocialLink.map((item, i) => (
                    <Link href={item.href} target="_blank" key={i} className='border p-3 border-red-700 rounded-full'>
                        <Image src={item.icon} alt="" width={30} height={30}/>
                    </Link>
                ))
            }
        </div>
        <div>
            <Button>Buy Now</Button>
        </div>
        </div>
       
    </div>
  )
}


export default Navbar

