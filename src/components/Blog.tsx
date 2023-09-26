import imgOne from '../assets/blog_1.svg'
import imgTwo from '../assets/blog_2.svg'
import imgThree from '../assets/blog_3.svg'


function Blog() {

  return (
    <>
      <div className='flex gap-5 font-basic w-full mt-20'>
        <div className='flex-col  flex w-[400px] gap-4'>
            <div>
                <img src={imgOne} />
            </div>
            <span>JULY, 2023</span>
            <h3 className='text-3xl'>DotCircle Lab secures a $30m contract with Tesla Inc.</h3>
            <p>We take an innovative approach to problem-solving, this allows us to develop solutions that meet the specific needs of the client and deliver the best possible outcome in the most efficient manner.</p>
        </div>
        <div className='flex-col flex w-[400px] gap-4'>
            <div>
                <img src={imgTwo} />
            </div>
            <span>JULY, 2023</span>
            <h3 className='text-3xl'>DotCircle Lab secures a $30m contract with Tesla Inc.</h3>
            <p>We take an innovative approach to problem-solving, this allows us to develop solutions that meet the specific needs of the client and deliver the best possible outcome in the most efficient manner.</p>
        </div>
        <div className='flex-col flex w-[400px] gap-4'>
            <div>
                <img src={imgThree} />
            </div>
            <span>JULY, 2023</span>
            <h3 className='text-3xl'>DotCircle Lab secures a $30m contract with Tesla Inc.</h3>
            <p>We take an innovative approach to problem-solving, this allows us to develop solutions that meet the specific needs of the client and deliver the best possible outcome in the most efficient manner.</p>
        </div>
      </div>
      
    </>
  )
}

export default Blog
