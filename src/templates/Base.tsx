import React, { useEffect, useRef, useState } from 'react';

import { ArrowSvg } from '../components/svgs/ArrawSvg';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';
import { AboutUsSection } from './AboutUsSection';
import { Footer } from './Footer';
import { GameSection } from './GameSection';
import { HomeSection } from './HomeSection';
import { PartnerSection } from './PartnerSection';

const Base = () => {
  const [position, setPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  useEffect(() => {
    window.scroll({
      top: position.top,
      left: position.left,
      behavior: 'smooth',
    });
  });

  const scrollTop = useRef<any>();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      window.scrollY > 100
        ? (scrollTop.current.style.display = 'flex')
        : (scrollTop.current.style.display = 'none');
    });
  });

  return (
    <Section className="max-w-screen-3xl relative">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <HomeSection />
      <AboutUsSection />
      <GameSection />
      <PartnerSection />
      {/* <Hero /> */}
      {/* <VerticalFeatures /> */}
      {/* <Banner /> */}
      <Footer />
      <div
        onClick={() => setPosition({ top: 0, left: 0 })}
        className="circle w-[67px] h-[67px] rotate-[180deg] cursor-pointer bg-white drop-shadow-landing rounded-full flex items-center justify-center fixed bottom-[30px] right-[50px] z-[99]"
        ref={scrollTop}
      >
        <ArrowSvg />
      </div>
    </Section>
  );
};

export { Base };
