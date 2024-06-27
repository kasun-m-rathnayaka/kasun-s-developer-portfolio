import React from 'react'
import { WobbleCard } from './ui/WobbleCard'
import { cardDetails } from '@/data'
import Image from 'next/image'

const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full -mt-5">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px]"
        className=" bg-gradient-to-r from-[#3C8CE7] from-10% to-[#B721FF] to-100%"
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            {cardDetails[0].title}
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          {cardDetails[0].description}
          </p>
        </div>
        <Image
          src={cardDetails[0].img ?? ''}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 lg:-right-[20%] -bottom-48 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]" className='bg-[#373b44] bg-gradient-to-r from-[#002661] from-10% to-[#92FFC0] to-100%'>
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          {cardDetails[1].title}
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          {cardDetails[1].description}
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[200px]" className='bg-gradient-to-r from-[#3B2667] from-10% to-[#BC78EC] to-100%'>
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            {cardDetails[2].title}
          </h2>
          <p className="mt-4 max-w-[40rem] text-left  text-base/6 text-neutral-200">
            {cardDetails[2].description}
          </p>
        </div>
        <Image
          src={cardDetails[2].img ?? ''}
          width={500}
          height={1000}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[10%] lg:-right-[5%] -bottom-3 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  )
}

export default About