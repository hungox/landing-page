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
  const [position, setPosition] = useState({ top: 0, left: 0 });
  useEffect(() => {
    window.scroll({
      top: position.top,
      left: position.left,
      behavior: 'smooth',
    });
  });

  const [visibility, setVisibility] = useState(false);
  const scrollTop = useRef();
  useEffect(() => {
    window.addEventListener('scroll', (e) => {
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
        onClick={() =>
          setPosition({ ...position, position: { top: 0, left: 0 } })
        }
        className="circle"
        ref={scrollTop}
        className="w-[67px] h-[67px] rotate-[180deg] cursor-pointer bg-white drop-shadow-landing rounded-full flex items-center justify-center fixed bottom-[30px] right-[50px] z-[99]"
      >
        <ArrowSvg />
      </div>
    </Section>
  );
};

export { Base };
