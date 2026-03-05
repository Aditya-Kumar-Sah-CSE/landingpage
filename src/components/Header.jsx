import 'boxicons/css/boxicons.min.css';
const Header = () => {
//simple function to toggle the mobile menu

const toggleMobileMenu = () => {
const mobileMenu = document.getElementById('mobileMenu');
if (mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.remove('hidden');
} else {
    mobileMenu.classList.add('hidden');
}
}

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className='text-3xl md:text-4xl lg:text-5xl font-light m-0'>
        MECO
      </h1>
    <nav className='hidden md:flex items-center gap-12'>
        <a 
        data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000"
        className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href="#">COMPANY</a>
        <a
        data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
        className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href="#">FEATURES</a>
        <a
        data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000"
        className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href="#">RESOURCES</a>
        <a 
        data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2500"
        className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href="#">DOCS</a>
    </nav>
    <button className='hidden md:block bg-[#a7a7a7] text-black px-8 py-3 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50'>
sign in
    </button>
{/* Mobile  Menu button-visible only on mobile*/}
<button onClick={toggleMobileMenu} className='md:hidden text--3xl p-2  z-50'>
    <i class='bx bx-menu text-3xl'></i>
    </button>
{/* Mobile Menu -hidden by default*/}
<div id="mobileMenu" className='md:hidden fixed top-16 bottom-0 right-0 left-0 p-5 z-40 bg-black bg-opacity-70 backdrop-blur'>
    <nav className='flex flex-col gap-6 items-center'>
         <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href="#">COMPANY</a>
        <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href="#">FEATURES</a>
        <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href="#">RESOURCES</a>
        <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href="#">DOCS</a>
    
    </nav>
</div>

    </header>

  )
}

export default Header
