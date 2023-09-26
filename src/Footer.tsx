
import footerLogo from './assets/footer-logo.png';

function Footer() {
  return (
    <>
      <footer className='bg-black pb-10 font-basic flex flex-col gap-6 mb-8 mt-10 px-5 md:px-20'>

        <div className='flex flex-col gap-4 text-center text-[#CCD7E1] mb-6'>
          <div>
            <img src={footerLogo} alt='Footer Logo' className='w-36 md:w-40 mx-auto' />
          </div>
          <div className='text-sm'>
            <span>We pride ourselves on our work ethic and our</span>
            <span>ability to think outside the box.</span>
          </div>
          <div className='flex items-center justify-center mt-4'>
          <span className='mr-2'>
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M14.625 15.5C12.8333 15.5 11.0869 15.1006 9.38583 14.3017C7.68417 13.5033 6.17722 12.4478 4.865 11.135C3.55222 9.82278 2.49667 8.31583 1.69833 6.61417C0.899445 4.91306 0.5 3.16667 0.5 1.375C0.5 1.125 0.583333 0.916667 0.75 0.75C0.916667 0.583333 1.125 0.5 1.375 0.5H4.75C4.94444 0.5 5.11806 0.5625 5.27083 0.6875C5.42361 0.8125 5.51389 0.972222 5.54167 1.16667L6.08333 4.08333C6.11111 4.27778 6.10778 4.45472 6.07333 4.61417C6.03833 4.77417 5.95833 4.91667 5.83333 5.04167L3.83333 7.08333C4.41667 8.08333 5.14583 9.02083 6.02083 9.89583C6.89583 10.7708 7.86111 11.5278 8.91667 12.1667L10.875 10.2083C11 10.0833 11.1633 9.98944 11.365 9.92667C11.5661 9.86444 11.7639 9.84722 11.9583 9.875L14.8333 10.4583C15.0278 10.5 15.1875 10.5936 15.3125 10.7392C15.4375 10.8853 15.5 11.0556 15.5 11.25V14.625C15.5 14.875 15.4167 15.0833 15.25 15.25C15.0833 15.4167 14.875 15.5 14.625 15.5Z'
                fill='white'
                fillOpacity='0.87'
              />
            </svg>
          </span>
            <span>+234 906 712 9989</span>
          </div>
          <div className='flex gap-4 items-center mt-2'>
          <svg
            width='18'
            height='12'
            viewBox='0 0 18 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6.17515 0.365868V11.9991H9.7871V6.2462C9.7871 4.7282 10.0727 3.25812 11.9549 3.25812C13.8111 3.25812 13.8341 4.99366 13.8341 6.34204V12H17.448V5.62041C17.448 2.48666 16.7734 0.0783691 13.1106 0.0783691C11.3521 0.0783691 10.1733 1.04341 9.69127 1.9567H9.6424V0.365868H6.17515ZM0.289062 0.365868H3.90677V11.9991H0.289062V0.365868Z'
              fill='white'
              fillOpacity='0.37'
            />
          </svg>
          <svg
            width='21'
            height='16'
            viewBox='0 0 21 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M20.0036 1.99208C19.2763 2.31108 18.5014 2.52253 17.6936 2.6252C18.5247 2.12897 19.159 1.3492 19.4572 0.409306C18.6823 0.871306 17.8268 1.19764 16.915 1.37975C16.1792 0.596306 15.1306 0.111084 13.9866 0.111084C11.767 0.111084 9.98011 1.91264 9.98011 4.1212C9.98011 4.43897 10.007 4.74453 10.073 5.03542C6.74 4.87286 3.79078 3.27542 1.80955 0.841973C1.46366 1.44208 1.26078 2.12897 1.26078 2.86842C1.26078 4.25686 1.97578 5.48764 3.04155 6.2002C2.39744 6.18797 1.76555 6.00097 1.23022 5.70642C1.23022 5.71864 1.23022 5.73453 
              1.23022 5.75042C1.23022 7.69864 2.61989 9.31686 4.44222 9.68964C4.11589 9.77886 3.76022 9.82164 3.39111 9.82164C3.13444 9.82164 2.87533 9.80697 2.63211 9.75319C3.15155 11.3409 4.62555 12.5081 6.37822 12.546C5.01422 13.613 3.28233 14.2559 1.40744 14.2559C1.07866 14.2559 0.763331 14.2412 0.447998 14.2009C2.22389 15.3461 4.32855 16 6.59822 16C13.9756 16 18.0089 9.88886 18.0089 4.59175C18.0089 4.41453 18.0028 4.24342 17.9942 4.07353C18.7899 3.50886 19.4584 2.80364 20.0036 1.99208Z'
              fill='white'
              fillOpacity='0.37'
            />
          </svg>
          <svg
            width='21'
            height='20'
            viewBox='0 0 21 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='ml-2'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M6.25354 0H13.7535C17.2048 0 20.0035 2.79875 20.0035 6.25V13.75C20.0035 17.2013 17.2048 20 13.7535 20H6.25354C2.80229 20 0.00354004 17.2013 0.00354004 13.75V6.25C0.00354004 2.79875 2.80229 0 6.25354 0ZM13.7535 18.125C16.166 18.125 18.1285 16.1625 18.1285 13.75V6.25C18.1285 3.8375 16.166 1.875 13.7535 1.875H6.25354C3.84104 1.875 1.87854 3.8375 1.87854 6.25V13.75C1.87854 16.1625 3.84104 18.125 6.25354 18.125H13.7535Z'
              fill='white'
              fillOpacity='0.37'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M5.00354 10C5.00354 7.23875 7.24229 5 10.0035 5C12.7648 5 15.0035 7.23875 15.0035 10C15.0035 12.7613 12.7648 15 10.0035 15C7.24229 15 5.00354 12.7613 5.00354 10ZM6.87854 10C6.87854 11.7225 8.28104 13.125 10.0035 13.125C11.726 13.125 13.1285 11.7225 13.1285 10C13.1285 8.27625 11.726 6.875 10.0035 6.875C8.28104 6.875 6.87854 8.27625 6.87854 10Z'
              fill='white'
              fillOpacity='0.37'
            />
            <circle cx='15.3807' cy='4.62523' r='0.66625' fill='white' fillOpacity='0.37' />
          </svg>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <ul className='flex flex-col gap-2'>
            <li className='text-[#1da99e]'>QUICK LINKS</li>
            <li className='text-[#a1a1aa]'>Home</li>
            <li className='text-[#a1a1aa]'>Our Services</li>
            <li className='text-[#a1a1aa]'>Our Team</li>
            <li className='text-[#a1a1aa]'>Contact us</li>
          </ul>
          <ul className='flex flex-col gap-2'>
            <li className='text-[#1da99e]'>SERVICES</li>
            <li className='text-[#a1a1aa]'>Web Development</li>
            <li className='text-[#a1a1aa]'>Mobile Development</li>
            <li className='text-[#a1a1aa]'>Blockchain Development</li>
            <li className='text-[#a1a1aa]'>UI UX Design</li>
            <li className='text-[#a1a1aa]'>Product Design</li>
            <li className='text-[#a1a1aa]'>Audit & IT Consultancy</li>
          </ul>
          <ul className='flex flex-col gap-2'>
            <li className='text-[#1da99e]'>LEGAL</li>
            <li className='text-[#a1a1aa]'>Terms & Conditions</li>
            <li className='text-[#a1a1aa]'>Privacy Policy</li>
            <li className='text-[#a1a1aa]'>Licensing</li>
          </ul>
        </div>

        <div className='mt-6'>
          <div className='w-full bg-[#a1a1aa] h-[1px]'></div>
          <div className='w-full flex justify-center text-[#a1a1aa]'>
            <span>Copyright <span> &#169;</span> DotCircle Labs. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
