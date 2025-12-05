import React from 'react'

const Hero = () => {
  return (
    <div className='px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen' >

        <div className="text-center ">
            <h1 className='text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]'>Create amazing content <br /> with AI tools</h1>
        <p className="">Transform  your content creation with our suite of premium AI tools.
            write articles, generate images, and enchance your workflow
        </p>
        </div>
    </div>
  )
}

export default Hero