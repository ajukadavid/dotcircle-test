import imgOne from '../assets/blog_1.svg'
import imgTwo from '../assets/blog_2.svg'
import imgThree from '../assets/blog_3.svg'

function Blog() {
    return (
      <div className='flex flex-col md:flex-row  gap-6 mt-10 px-4 w-full md:px-8'>
        <div className='flex-col md:gap-8 md:flex  w-full gap-6'>
          <div>
            <img src={imgOne} alt="Blog Image 1" />
          </div>
          <span className='text-xs md:text-sm'>JULY, 2023</span>
          <h3 className='text-lg md:text-3xl'>DotCircle Lab secures a $30m contract with Tesla Inc.</h3>
          <p className='text-sm md:text-base'>We take an innovative approach to problem-solving, allowing us to develop solutions that meet the specific needs of the client and deliver the best possible outcome in the most efficient manner.</p>
        </div>
        <div className='flex-col md:gap-8 md:flex  w-full gap-6'>
          <div>
            <img src={imgTwo} alt="Blog Image 2" />
          </div>
          <span className='text-xs md:text-sm'>JULY, 2023</span>
          <h3 className='text-lg md:text-3xl'>DotCircle Lab secures a $30m contract with Tesla Inc.</h3>
          <p className='text-sm md:text-base'>We take an innovative approach to problem-solving, allowing us to develop solutions that meet the specific needs of the client and deliver the best possible outcome in the most efficient manner.</p>
        </div>
        <div className='flex-col md:gap-8 md:flex  w-full gap-6'>
          <div>
            <img src={imgThree} alt="Blog Image 3" />
          </div>
          <span className='text-xs md:text-sm'>JULY, 2023</span>
          <h3 className='text-lg md:text-3xl'>DotCircle Lab secures a $30m contract with Tesla Inc.</h3>
          <p className='text-sm md:text-base'>We take an innovative approach to problem-solving, allowing us to develop solutions that meet the specific needs of the client and deliver the best possible outcome in the most efficient manner.</p>
        </div>
      </div>
    );
  }
  
  export default Blog;
  
