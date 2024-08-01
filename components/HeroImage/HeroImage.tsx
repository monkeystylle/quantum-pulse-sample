import React from 'react';
import Image from 'next/image';
import heroImage from '../../public/images/hero-image.png';

type Props = {};

const HeroImage = (props: Props) => {
  return (
    <div
      className="relative  text-white w-full h-[650px]"
      style={{ border: '1px solid blue' }}
    >
      <Image alt="hero image" src={heroImage} fill />
      <div className=" flex flex-col gap-4 absolute left-0 top-[50%] -translate-y-1/2   bg-[#2d425a]/60   p-6  ">
        <p>Quantum Pulse Consulting: Empowering Futures, Digitally Defined</p>
        <h6 className="text-4xl font-bold">
          Progress &amp; Innovate With Quantum Pulse
        </h6>
        <p className="text-sm font-[200]">
          Where your business digital aspirations become groundbrealing
          realities , setting you apart in todays market
        </p>
      </div>
    </div>
  );
};

export default HeroImage;
