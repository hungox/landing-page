import { useTranslation } from 'next-i18next';

import { Section } from '../components/layout/Section';
import { TextBox } from '../components/TextBox';

const Footer = () => {
  const { t } = useTranslation('common');
  return (
    <Section>
      <Section className="footer-bg w-full flex flex-wrap font-montserrat text-sm pt-10 px-4 2xl:px-230 md:pt-104 md:h-[446px]">
        <div className="w-full md:w-2/5 flex flex-col items-center 2xl:items-start">
          <img
            className="footer-logo"
            src="/assets/images/logo.svg"
            alt="Logo"
          />
          <ul className="social">
            <li>
              <img src="/assets/images/twitter.svg" alt="Twitter" />
            </li>
            <li>
              <img src="/assets/images/facebook.svg" alt="Facebook" />
            </li>
            <li>
              <img src="/assets/images/linkedin.svg" alt="Linkedin" />
            </li>
          </ul>
        </div>
        <div className="w-full md:w-3/5 md:flex">
          <div className="w-full md:w-1/2 md:pr-[40px] mt-[70px] md:mt-0">
            <span className="text-2xl font-bold">{t('address')}</span>
            <div className="flex items-start mt-[20px] md:mt-[40px]">
              <img
                src="/assets/images/location.svg"
                alt="Location"
                className="mr-3"
              />
              <div className="flex flex-col space-y-[12px]">
                <span>
                  Valletta Buildings, South Street, Valletta - VLT 1103 Malta,
                  US
                </span>
                <span>{t('address-vietnam')}</span>
              </div>
            </div>
            <div className="flex items-center mt-[20px] md:mt-[40px]">
              <img
                src="/assets/images/mobile.svg"
                alt="Mobile"
                className="mr-3"
              />
              <div>(+1) 555-0108-000 or (+236) 555-0108</div>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-[70px] md:mt-0">
            <span className="font-montserrat text-2xl font-bold">
              {t('subscribe')}
            </span>
            <div className="mt-[20px] md:mt-[40px]">
              {t('subscribe-description')}
            </div>
            <div className="mt-[12px] mb-[80px]">
              <TextBox
                className="text-white rounded-[8px] border-white border"
                transparent
              />
            </div>
          </div>
        </div>
      </Section>
      <div className="text-center bg-black h-20 flex justify-center items-center text-white">
        {t('author')} - 2022 Copyright. Policy
      </div>
    </Section>
  );
};

export { Footer };
