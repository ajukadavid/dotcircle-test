import { useState } from 'react';
import logo from './assets/logo.png';

function MobileMenu({ isOpen, closeMenu }) {
  return (
    <div className=' '>
       <div className={`fixed inset-x-0 top-0 z-20 bg-black transition-transform duration-300 transform ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex justify-end mt-8 mr-4">
        <button
          className="text-white text-2xl focus:outline-none"
          onClick={closeMenu}
        >
          &times;
        </button>
      </div>
      <ul className="text-white text-center">
        <li className="my-4"><a href="#">Case Studies</a></li>
        <li className="my-4"><a href="#">Services</a></li>
        <li className="my-4"><a href="#">About</a></li>
        <li className="my-4"><a href="#">Careers</a></li>
      </ul>
    </div>
    </div>
   
  );
}

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-black  fixed top-0 left-0 right-0 py-3">
      <div className="container mx-auto flex items-center  lg:px-8 justify-between">
        <img src={logo} alt="Logo" className="h-12" />

        <div className="lg:hidden flex items-center">
          <button
            className="text-white text-2xl focus:outline-none"
            onClick={toggleMobileMenu}
          >
            &#9776;
          </button>
        </div>

        <nav className="hidden lg:flex gap-6">
          <a href="#" className="text-white">Case Studies</a>
          <a href="#" className="text-white">Services</a>
          <a href="#" className="text-white">About</a>
          <a href="#" className="text-white">Careers</a>
        </nav>
        <button className='text-black bg-white px-6 py-2 border border-white rounded-md hidden lg:flex '>Start a Project</button>

      </div>
      <MobileMenu isOpen={isMobileMenuOpen} closeMenu={toggleMobileMenu} />
    </div>
  );
}

export default NavBar;
