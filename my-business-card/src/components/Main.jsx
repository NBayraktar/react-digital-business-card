import React from 'react';

export default function Main() {
  return (
    <main>
      <div className='container'>
        <section className='section1'>
          <h1 className='sec1--h1'>Nazim Bayraktar</h1>
          <h3 className='sec1--h3'>Frontend Developer</h3>
          <p className='sec1--p'>nbayraktar.website</p>
          <div className='btn--wraper'>
            <button className='btn'>Email</button>
            <button className='btn btn--linkedin'>Linkedin</button>
          </div>
        </section>
        <section className='section2'>
          <h2 className='sec2--h2'>About</h2>
          <p className='sec2--p'>
            I am a frontedn developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and I am always looking for new things
            to learn.
          </p>
        </section>
        <section className='section3'>
          <h2 className='sec3--h2'>Interest</h2>
          <p className='sec3--p'>
            Reading, internet and coffee fanatic. Cycling and walkign in the
            forest.
          </p>
        </section>
      </div>
    </main>
  );
}
