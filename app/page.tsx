import ContactSection from '@/components/ContactSection';
import FinancialReportingSection from '@/components/FinancialReportingSection';
import HeroImage from '@/components/HeroImage';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col bg-black  ">
      <Navbar />
      <HeroImage />
      <FinancialReportingSection />
      <ContactSection />
      <h6>sample</h6>
    </main>
  );
}
