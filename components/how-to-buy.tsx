import Image from 'next/image'
import React from 'react'


const buyCard = [
    {
        number:"1",
        title: "Create a wallet",
        desc: "⁠Download a metamask or any evm wallet. These can be downloaded from the AppStore or as chrome extensions for desktop user",
    },
    {
        number:"2",
        title: "Add Solana",
        desc: "Purchase base eth or send base eth to your wallet through any exchange of your choice.",
    },
    {
        number:"3",
        title: "Swap Base Eth for jorge",
        desc: "Open Uniswap and buy using the $JORGE contract address",
    },
    {
        number:"4",
        title: "Welcome to $Jorge",
        desc: "Your Jorge tokens should now be in your wallet. Welcome to the Jorge movement",
    },
]
const HowToBuy = () => {
  return (
    <div className='flex justify-center flex-col gap-4 py-7'>
       <h1 className='text-5xl text-blue-700 font-bold font-serif text-center'>How to buy</h1>

        <div className='grid grid-cols-3 gap-4 mt-5'>
            <div className='relative'>
                <Image src="https://jorgeonsol.io/assets/flag2-DcIrdqco.png" width={700} height={700} alt=""/>
                <Image src="https://jorgeonsol.io/assets/dog-BIAxAf74.png" alt="" width={700} height={700} className='z-[9999px] absolute top-5 col-span-2'/>
            </div>
            {
                buyCard.map((item, i) => (
                    <div className={`${i === 0 ? "col-span-2": "col-span-1"}`} key={i}>
                        <div className='border-3  border-red-400 p-6 max-h-[350px]  rounded-xl bg-blue-800 border-b-6'>
                                <div className="flex flex-col justify-center items-center gap-3">
                                            <h1 className='text-8xl text-red-700  font-extrabold font-sans '>{item.number}</h1>
                                            <h1 className='text-3xl text-white '>{item.title}</h1>
                                            <h1 className='text-2xl text-center text-white mb-5'>{item.desc}</h1>

                                </div>
                        </div>
                    </div>
                ))
            }
            {

            }
        </div>
    </div>
  )
}

export default HowToBuy