import React from 'react';
import Image from '../images/image.jpg';
export default function Header() {
  return (
    <header>
      <div className='container'>
        <img src={Image} alt='My picture' className='header--img' />
      </div>
    </header>
  );
}
