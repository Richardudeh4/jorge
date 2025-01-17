import Image from 'next/image'
import React from 'react'

const Tokenomics = () => {
  return (
    <section id="tokenomics" className='flex w-full flex-col gap-10 justify-center py-10  h-full '>
        <h1 className='text-center text-5xl font-bold font-serif text-blue-800'>Tokenomics</h1>
        <div className='mt-6 max-w-7xl mx-auto'>
        <Image src="https://jorgeonsol.io/assets/token-x6TuzsK7.svg" width={2000} height={2000} alt=""/>
        </div>
      
    </section>
  )
}

export default Tokenomics