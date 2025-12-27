"use client"
import Image from 'next/image'
import React from 'react'
import Tilt from 'react-parallax-tilt'
const PROJECT_IMAGES = [
    "/images/p1.JPG",
    "/images/p2.JPG",
    "/images/p3.JPG",
    "/images/p4.JPG",
    "/images/p5.JPG",
    "/images/p6.JPG"
]

const Project = () => {
  return (
    <div className='pb-16 pt-16 bg-black'>
      <h2 className='text-[#b69974] text-lg text-center font-medium tracking-widest'>Portfolio</h2>
      <h1 className='text-3xl md:text-5xl mt-4 text-white font-bold text-center'>
        Transforming ideas into <br />digital reality
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20 w-[80%] mx-auto gap-6'>
        {PROJECT_IMAGES.map((src,idx)=>{
            return <div key={idx}>
                <Tilt>
                    <Image src={src} alt='project' width={550} height={550} className='rounded-lg' />
                </Tilt>
            </div>
        })}
      </div>
    </div>
  )
}

export default Project
