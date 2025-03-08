import React from 'react';
//import nav data
import {navData} from '../data'

//import components
import Socials from './Socials';

const NavMobile = () => {
  const { items } = navData;
  return <nav className='w-full h-full flex flex-col
   justify-evenly overflow-hidden'>
      <ul className='flex flex-col justify-center items-center gap-y-6 py-6 mb-8'>
        {items.map((item, index) => {
          return <li key={index}>
            <a href={item.href}>{item.name}</a>
          </li>
        })}
      </ul>
      <div className='text-2xl font-primary uppercase'>

      </div>
    </nav>;
};

export default NavMobile;
