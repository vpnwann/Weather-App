import React from 'react'

export default function Nav() {
  return (
    <section class="w-full">
    <div class="w-full h-[520px] relative flex flex-col justify-center items-center">
        <video class="absolute top-0 left-0 w-full h-full object-cover" autoplay muted loop>
            <source src="https://videos.pexels.com/video-files/1779202/1779202-hd_1280_720_25fps.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        <div class="relative z-10">
            <h1 class="text-white text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-semibold bg-gray-800 p-2 bg-opacity-40 rounded-sm">Search Weather</h1>
        </div>
        <div class="relative z-10 w-full mx-auto">
            <form>
                <div class="xl:w-1/2 lg:w-[60%] md:w-[70%] sm:w-[70%] xs:w-[90%] mx-auto flex gap-2 md:mt-6 xs:mt-4 mx-4">
                    <input type="text" class="border border-gray-400 w-full p-2 rounded-md text-xl pl-2"
                            placeholder="" />
                    <button type="submit" class="px-[10px] p-[10px] bg-blue-500 text-lg text-white rounded-md font-semibold">Search</button>
                </div>
            </form>
        </div>
    </div>
</section>

  )
}


