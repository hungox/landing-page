import { useTranslation } from 'next-i18next';

import { AboutInfo } from '../components/AboutInfo';
import { AboutNumberBox } from '../components/AboutNumberBox';
import { Section } from '../layout/Section';

const AboutUsSection = () => {
  const { t } = useTranslation('common');

  return (
    <Section
      id="about-us"
      className="flex flex-col flex-wrap md:px-[20px] lg:px-[20px] xl:px-[100px] 2xl:px-[380px] mt-[40px] md:mt-[123px]"
    >
      <div className="flex flex-row flex-wrap md:space-x-[40px] w-full">
        <div className="flex flex-col md:w-[calc(50%-20px)] px-[16px] md:px-0">
          <div className="font-playfair text-black font-black text-[40px] md:text-6xl text-left leading-[80px] tracking-[3.6px]">
            {t('about-us')}
          </div>
          <span className="mt-[16px] md:mt-[40px] text-gray-903">
            {t('about-us-description')}
          </span>
          <div className="mt-[20px] md:mt-[90px] w-full flex flex-row justify-start md:flex-col md:space-y-[40px]">
            <AboutNumberBox text={t('users')} className="w-1/2">
              600<sub className="font-medium">M</sub>+
            </AboutNumberBox>
            <AboutNumberBox text={t('games')} className="w-1/2">
              135+
            </AboutNumberBox>
          </div>
        </div>
        <div className="flex bg-gray-902 flex-col gap-[40px] px-[16px] py-[40px] md:px-[75px] md:py-[113px] mt-[40px] md:mt-0 md:w-[calc(50%-20px)]">
          <AboutInfo
            title={t('24h')}
            image="/assets/images/calendar-tick.svg"
            description={t('24h-description')}
          />
          <AboutInfo
            title={t('design')}
            image="/assets/images/pen-tool-2.svg"
            description={t('design-description')}
          />
          <AboutInfo
            title={t('team')}
            image="/assets/images/people.svg"
            description={t('team-description')}
          />
        </div>
      </div>
      <div className="flex items-center flex-col mt-[40px] md:mt-[70px]">
        <img
          src="/assets/images/witch.png"
          className="w-[300px] md:w-[533px] md:h-[437px] z-10 up-down"
          alt=""
        />
        <img
          src="/assets/images/pin-map.png"
          className="mt-[-10px] md:mt-[-90px]"
          alt=""
        />
      </div>
    </Section>
  );
};

export { AboutUsSection };
