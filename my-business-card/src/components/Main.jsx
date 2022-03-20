import React from 'react';

export default function Main() {
  return (
    <main className='container'>
      <section className='section section1'>
        <h1 className='sec1--h1'>Nazim Bayraktar</h1>
        <h3 className='sec1--h3'>Frontend Developer</h3>
        <p className='sec1--p'>nbayraktar.website</p>
        <div className='btn--wraper'>
          <button className='btn'>Email</button>
          <button className='btn btn--linkedin'>Linkedin</button>
        </div>
      </section>
      <section className='section section2'>
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem id
          explicabo architecto totam? Ex optio, rerum sed sit aliquid voluptates
          recusandae perspiciatis repellat tempore, labore beatae cupiditate
          dicta quasi accusamus!
        </p>
      </section>
      <section className='section section3'>
        <h2>Interest</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
          veritatis quaerat delectus cumque laudantium atque laborum, eius alias
          fugiat consequuntur vel possimus, a in assumenda? Excepturi modi quo
          quidem natus?
        </p>
      </section>
    </main>
  );
}
