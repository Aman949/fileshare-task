import React from 'react';
import Details from './Details';

const Banner = () => {
  return (
    <div className='bg-gradient-to-r from-yellow-500 to-green-500 flex justify-around'>
      <div className='p-14'>
        <h1 className=' text-white font-bold text-4xl'>Let&apos;s Discuss
          <br />your project
        </h1>
        <p className=' text-white pt-10 text-xl'>Let&apos;s figure out how to create an effective application,<br />
          its cost and terms of its development
        </p>
      </div>
      <div>
        <Details />
      </div>
    </div>
  );
}

export default Banner;
