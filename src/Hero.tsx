
function Hero() {

  return (
    <>
      <div className='flex flex-col w-full items-center justify-center'>
        <div className="flex gap-16 flex-col w-full items-center justify-center mt-40">
        <p className="text-8xl text-white"><span className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-[#0052CC] to-[#00C7F3]">Design. </span><span className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-800 to-purple-400">Develop. </span><span className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Maintain.</span></p>
        <p className="text-white text-lg">World class design and engineering teams to get your ideas and projects up and running quickly</p>
        <div className="flex gap-4">
        <button className='bg-white px-3 py-2 text-sm text-black border-white border rounded-md'>Start a project</button>
        <button className='bg-black px-3 py-2 text-sm text-white border-white border rounded-md'>Start a project</button>

        </div>
        </div>
            
      </div>
      
    </>
  )
}

export default Hero
