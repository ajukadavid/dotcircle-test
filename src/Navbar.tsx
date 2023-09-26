import logo from './assets/logo.png'
function NavBar() {

  return (
    <>
      <div className="w-full fixed py-3 bg-black top-0 left-0 right-0 flex items-center px-10 justify-between">
       <img src={logo} />
       <ul className='flex text-white gap-16'>
        <li>Case Studies</li>
        <li>Services</li>
        <li>About</li>
        <li>Careers</li>
        </ul>
        <button className='bg-white px-3 py-2 text-sm text-black border-white border rounded-md'>Start a project</button>
      </div>
      
    </>
  )
}

export default NavBar
