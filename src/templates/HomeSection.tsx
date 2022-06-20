import { useEffect, useState } from 'react';

import { useTranslation } from 'next-i18next';

import { TextBox } from '../components/TextBox';
import { TimerContainer } from '../components/TimerContainer';
import { Section } from '../layout/Section';
import { Navbar } from '../navigation/Navbar';

const HomeSection = () => {
  const { t } = useTranslation('common');

  const [time, setTime] = useState<number>(7);
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const timeToDays = time * 60 * 60 * 24 * 1000;

  const countDownDate = new Date().getTime() + timeToDays;

  useEffect(() => {
    const updateTime = setInterval(() => {
      const now = new Date().getTime();

      const difference = countDownDate - now;

      const newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      const newHours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const newMinutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);

      if (difference <= 0) {
        clearInterval(updateTime);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    });

    return () => {
      clearInterval(updateTime);
    };
  }, [time]);

  return (
    <Section className="relative">
      <Navbar />
      <div className="top-bg h-[85vh] md:h-[100vh] relative"></div>
      <div className="relative">
        <img
          className="absolute bottom-0 w-[800px] h-[800px]"
          src="/assets/images/fairy-man.png"
          alt=""
        />
        <img
          className="absolute z-10 bottom-[0%] w-full"
          src="/assets/images/top-bg-2.png"
          alt=""
        />
      </div>
      <div className="z-20 px-[16px] flex flex-col text-center items-center absolute w-full top-[25%] md:top-[20%]">
        <span className="font-black text-[40px] md:text-[80px] font-playfair mb-[21px] tracking-[0.6px] text-white">
          {t('we-getting-ready')}
        </span>
        <TimerContainer
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
        <div className="max-w-[560px] mt-[40px] md:mt-[97px] flex flex-col">
          <span className="text-white text-[18px] mb-[16px] md:mb-[32px]">
            {t('we-will')}
          </span>
          <TextBox className="text-black" />
        </div>
      </div>
    </Section>
  );
};

export { HomeSection };
