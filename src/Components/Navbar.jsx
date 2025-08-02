import React, { useState } from 'react';
import logo from '../assets/image/apple_logo.svg';
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  Bars2Icon,
  XMarkIcon,
} from '@heroicons/react/24/solid';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Mobile View */}
      <nav className="md:hidden bg-gray-100 py-2">
        <div className="flex justify-between items-center px-4 py-2">
          <img src={logo} alt="Logo" style={{ height: '24px' }} />

          <ul className="flex gap-6">
            <li>
              <MagnifyingGlassIcon style={{ height: '20px', width: '24px', color: 'black' }} />
            </li>
            <li>
              <ShoppingBagIcon style={{ height: '20px', width: '24px', color: 'black' }} />
            </li>
            <li>
              {menuOpen ? (
                <XMarkIcon
                  onClick={toggleMenu}
                  style={{ height: '24px', width: '24px', color: 'black', cursor: 'pointer' }}
                />
              ) : (
                <Bars2Icon
                  onClick={toggleMenu}
                  className="md:hidden"
                  style={{ height: '25px', width: '30px', color: 'black', cursor: 'pointer' }}
                />
              )}
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden px-4 transition-all duration-500 ease-in-out overflow-hidden ${
            menuOpen ? 'h-auto opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-5'
          }`}
        >
          <ul className="flex flex-col gap-2 py-8 px-6">
            {[
              'Store',
              'Mac',
              'iPad',
              'iPhone',
              'Watch',
              'AirPods',
              'TV & Home',
              'Entertainment',
              'Accessories',
              'Support',
            ].map((item) => (
              <li key={item} className="text-black text-3xl font-semibold">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/*------------------desktop view-------------*/}
      <nav className="hidden md:flex justify-center items-center bg-gray-100 py-4 px-10">
        <img src={logo} alt="Logo" className="h-[15px] mr-[44px]" />
        <ul className="flex gap-8">
          {[
            'Store',
            'Mac',
            'iPad',
            'iPhone',
            'Watch',
            'AirPods',
            'TV & Home',
            'Entertainment',
            'Accessories',
            'Support',
          ].map((item) => (
            <li key={item} className="text-gray-600 font-normal text-[12px] hover:text-gray-900 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
        <div className="flex gap-6">
          <MagnifyingGlassIcon className="h-4 w-5 text-gray-600 ml-[35px]" />
          <ShoppingBagIcon className="h-4 w-5 text-gray-600" />
        </div>
      </nav>
    </>
  );
}


export default Navbar;
