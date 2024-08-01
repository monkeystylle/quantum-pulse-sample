import HeroImage from '@/components/HeroImage';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col bg-black ">
      <Navbar />
      <HeroImage />
    </main>
  );
}
