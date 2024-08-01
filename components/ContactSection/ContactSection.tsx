import React from 'react';
import Image from 'next/image';
import questionsBgImage from '../../public/images/questions-bg-image.png';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

type Props = {};

const ContactSection = (props: Props) => {
  return (
    <section className="flex  text-white w-full h-[750px]  ">
      <div className="flex-[60%] h-full p-16">
        <p className="noto_serif text-8xl">GET IN </p>
        <p className="noto_serif text-8xl">TOUCH </p>
        <p className="text-2xl mt-24">Email:</p>
        <p className="noto_serif  ">arvin.anba.qpulse.tecj</p>
      </div>
      <div className="flex-[40%] relative h-full">
        <Image alt="questions bg-image" src={questionsBgImage} fill />
        <div className="absolute top-16 left-[50%] -translate-x-1/2 flex flex-col">
          <p className="noto_serif text-6xl">QUESTIONS? </p>
          <p className="noto_serif text-xl text-center mt-16  ">
            Head to our FAQ page here
          </p>
          <Button variant="ghost" className="self-center w-fit mt-8">
            <MoveRight size={64} className="ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
