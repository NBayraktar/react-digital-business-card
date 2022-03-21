import React from 'react';
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagram,
  FaGithubSquare,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div className='container footer'>
        <a href='#' className='footer--a'>
          <FaTwitterSquare className='footer--icon' />
        </a>
        <a href='#' className='footer--a'>
          <FaFacebookSquare className='footer--icon' />
        </a>

        <a href='#' className='footer--a'>
          <FaInstagram className='footer--icon' />
        </a>

        <a href='#' className='footer--a'>
          <FaGithubSquare className='footer--icon' />
        </a>
      </div>
    </footer>
  );
}
