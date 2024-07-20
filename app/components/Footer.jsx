import React from 'react';
import { MdOutlinePhoneAndroid } from 'react-icons/md';
import { IoMailOutline, IoLocationOutline } from 'react-icons/io5';
import { CiFileOn } from 'react-icons/ci';
import Image from 'next/image';

const list = [
  {
    icon: <MdOutlinePhoneAndroid />,
    title: 'Contact nums',
    text: '+0454563464364',
  },
  {
    icon: <IoMailOutline />,
    title: 'Gmail',
    text: 'demo@gmail.com',
  },
  {
    icon: <IoLocationOutline />,
    title: 'Address',
    text: 'Mumbai India',
  },
  {
    icon: <CiFileOn />,
    title: 'Leave a request',
    text: 'Leave a request',
  },
];

const Footer = () => {
  return (
    <div className='h-auto py-10 px-5 m-5 bg-black text-white flex flex-col items-center justify-around rounded-xl'>
      <Image
        src='./logo-bg-3 2.png'
        height={280}
        width={280}
        alt='logo'
        className='mb-6'
      />
      <div className='flex flex-wrap gap-6 justify-center'>
        {list.map((item, index) => (
          <div key={index} className='flex flex-col items-center p-4 w-64'>
            <div className='flex items-center gap-2 mb-2'>
              <div className='text-2xl'>{item.icon}</div>
              <p className='font-semibold'>{item.title}</p>
            </div>
            <p className='text-center'>{item.text}</p>
          </div>
        ))}
      </div>
      <p className='mt-6 text-center'>We work throughout the world</p>
    </div>
  );
};

export default Footer;
