import React from 'react';
import { Button } from '../ui/button';

import Image from 'next/image';
import fincialReportingImage from '../../public/images/financial-reporting-image.png';
import { ChevronRight } from 'lucide-react';

type Props = {};

const FinancialReportingSection = (props: Props) => {
  return (
    <section className="flex flex-col gap-4 text-white w-full h-[750px] py-16 ">
      <div className="flex justify-end pr-16">
        <Button variant="outline" className="bg-black px-16 rounded-none ">
          Services
        </Button>
      </div>

      <div className="flex h-[650px]  ">
        <div className="relative h-full flex-1">
          <Image alt="financial image" src={fincialReportingImage} fill />
        </div>
        <div className="h-full flex-1 flex flex-col gap-8 justify-center items-center ">
          <p className="text-5xl font-bold">Financial Reporting</p>
          <p className="px-16">
            At Quantum Pulse Consulting we provide detailed financial reports
            and timely weekly market insights to help our clients make informed
            investments decisions. Our reports cover key financial metrics,
            earnings analysis and sector trends, while our weekly updates offer
            concise summaries of market developments , economic indicators and
            investement opportunities . Stay ahead with our expert analysis and
            actionable insights.
          </p>
          <Button className="text-lg" variant="ghost">
            Learn More <ChevronRight size={24} className="ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
6;
export default FinancialReportingSection;
