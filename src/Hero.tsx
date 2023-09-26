import { useState, useEffect } from "react"
import heroImage from './assets/showreel.png'
import HeroImg from "./HeroImg";
function Hero() {
const values = [1, 2, 3];
const [index, setIndex] = useState(0);
const [currentValue, setCurrentValue] = useState(values[0]);
const updateValue = () => {
  const newIndex = (index + 1) % values.length;
  setIndex(newIndex);
  setCurrentValue(values[newIndex]);
};
useEffect(() => {
  const interval = setInterval(updateValue, 2000);
  return () => {
    clearInterval(interval);
  };
}, [index]);

const buttonStyle =
    currentValue === 1
      ? "bg-gradient-to-r from-[#0052CC] to-[#00C7F3]"
      : currentValue === 2
      ? "bg-gradient-to-r from-purple-800 to-purple-400"
      : "bg-gradient-to-r from-orange-400 to-yellow-400";


  return (
    <>
      <main className='flex  flex-col w-full items-center justify-center'>
        <div className="flex gap-16 flex-col w-full items-center justify-center mt-40">
        <p className="px-8 font-hero text-white">
            <span className={ currentValue === 1 ? 'font-extrabold text-7xl md:text-8xl  transition-all font-hero duration-1000 text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] to-[#00C7F3]' : 'text-white font-hero font-extrabold text-7xl md:text-8xl'}>Design. </span>
            <span className={ currentValue === 2 ? 'font-extrabold transition-all font-hero text-7xl md:text-8xl duration-1000 text-transparent  bg-clip-text bg-gradient-to-r from-purple-800 to-purple-400' : 'text-white font-hero  font-extrabold text-7xl md:text-8xl'} >Develop. </span>
            <span className={ currentValue === 3 ? 'font-extrabold transition-all font-hero text-7xl md:text-8xl  duration-1000 text-transparent  bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400' : 'text-white font-hero  font-extrabold text-7xl md:text-8xl'}>Maintain.</span></p>
        <p className="text-[#888888] text-center text-2xl font-basic">World class design and engineering teams to get your ideas and projects <br /> up and running quickly</p>
        <div className="flex gap-4">
        <button className='bg-white px-3 py-2 text-sm text-black border-white border rounded-md'>Start a project</button>
        <div className={`relative border border-transparent rounded-md p-[1px]  ${buttonStyle}`}>
        <div
    className={`absolute -inset-2 rounded-lg opacity-90 blur ${buttonStyle}` }
  ></div>
        <button
              className={`bg-black relative px-3 py-2 text-sm text-white rounded-md`}
            >
              Free Consultation
            </button> 
        </div>
               
        </div>
        </div>
            <div className="mt-20">
                <HeroImg src={heroImage}/>
            </div>
      </main>
      
    </>
  )
}

export default Hero
