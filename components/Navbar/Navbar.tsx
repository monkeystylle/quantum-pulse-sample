import React from 'react';
import Image from 'next/image';
import NavbarLogo from '../../public/images/quantum-logo.png';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type Props = {};

const navLinkClass = cn(
  'hover:text-gray-400 hover:underline hover:underline-offset-8'
);

const Navbar = (props: Props) => {
  return (
    <nav
      className="w-screen px-8 py-2 flex items-center  text-white bg-[#040e17]"
      style={{ border: '1px solid red' }}
    >
      <Image alt="navbar-logo" src={NavbarLogo} width={200} height={75} />
      <div className="text-lg flex gap-6 ml-auto ">
        <Link className={navLinkClass} href="/">
          Quantum Pulse Consulting
        </Link>
        <Link className={navLinkClass} href="/users">
          About Us
        </Link>
        <Link className={navLinkClass} href="/">
          Experiences
        </Link>
        <Link className={navLinkClass} href="/users">
          Case Studies
        </Link>
        <Link className={navLinkClass} href="/users">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
