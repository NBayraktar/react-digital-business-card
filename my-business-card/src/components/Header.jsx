import React from 'react';
import Image from '../images/image.jpg';
export default function Header() {
  return (
    <header className='container'>
      <img src={Image} alt='My picture' className='header--img' />
    </header>
  );
}
