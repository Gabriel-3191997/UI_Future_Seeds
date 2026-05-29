import React from "react";
// import { Link } from "react-router-dom";


class Navbar extends React.Component {
    state = {
        isMenuOpen: false,
    }

    toggleMenu = () => {
        this.setState((prevState) => ({ isMenuOpen: !prevState.isMenuOpen }))
    }

    render() {
        const { isMenuOpen } = this.state

        return (
            <>
            
<nav className="bg-white fixed w-full z-20 top-0 start-0 border-0">
  <div className="relative max-w-screen-xl flex flex-wrap items-center justify-between mx-auto min-h-20 md:min-h-32 p-4">
    <a href="https://flowbite.com/" className="flex flex-col items-start leading-tight rtl:space-x-reverse">
        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-7" alt="Flowbite Logo" /> */}
        <span className="block md:text-3xl text-2xl text-heading font-semibold font-serif whitespace-nowrap md:mx-10">Future Seeds</span>
        
        <span className="block text-sm sm:text-base font-serif md:mx-10">Community Farmers</span>
    </a>
    <button onClick={this.toggleMenu} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading" aria-controls="navbar-default" aria-expanded={isMenuOpen}>
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
    </button>
    <div className={`${isMenuOpen ? 'block' : 'hidden'} absolute left-0 right-0 top-full w-full bg-white px-4 pb-4 shadow-md md:static md:block md:w-auto md:bg-transparent md:px-0 md:pb-0 md:shadow-none`} id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border-0 font-serif border-default rounded-base bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
        <li>
          <a href="#" className="block py-2 px-3  bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Services</a>
        </li>
        {/* <li>
          <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Pricing</a>
        </li> */}
        <li>
          <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

            </>

        );
    }
}

export default Navbar;
