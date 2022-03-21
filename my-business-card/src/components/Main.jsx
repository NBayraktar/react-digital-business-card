import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function Main() {
  return (
    <main>
      <div className='container'>
        <section className='section1'>
          <h1 className='sec1--h1'>Nazim Bayraktar</h1>
          <h3 className='sec1--h3'>Frontend Developer</h3>
          <p className='sec1--p'>
            <a href='#' className='sec1--p'>
              nbayraktar.website
            </a>
          </p>
          <div className='btn--wraper'>
            <button className='btn'>
              <span>
                <FaEnvelope className='envel' />
                Email
              </span>
            </button>
            <button className='btn btn--linkedin'>
              <span>
                <FaLinkedin className='linkd' />
                Linkedin
              </span>
            </button>
          </div>
        </section>
        <section className='section2'>
          <h2 className='sec2--h2'>About</h2>
          <p className='sec2--p'>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and I am always looking for new things
            to learn.
          </p>
        </section>
        <section className='section3'>
          <h2 className='sec3--h2'>Interests</h2>
          <p className='sec3--p'>
            Reading, internet and coffee fanatic. Cycling and walkign in the
            forest.
          </p>
        </section>
      </div>
    </main>
  );
}
