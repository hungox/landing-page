import { useState } from 'react';

import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { LanguageDropdown } from '../LanguageDropdown';
import { Section } from '../layout/Section';
import { MenuCloseSvg } from '../svgs/MenuCloseSvg';
import { MenuSvg } from '../svgs/MenuSvg';

const Navbar = () => {
  const { t } = useTranslation('common');
  // const [hiddenClass, setHiddenClass] = useState('hidden');
  const [toggle, setToggle] = useState(false);

  const toggleMenuMobile = () => {
    setToggle(!toggle);
  };

  const onMenuClick = () => {
    if (toggle) {
      setToggle(!toggle);
    }
  };

  return (
    <Section>
      <div></div>
      <nav
        className={`px-[16px] py-[48px] md:px-[80px] md:py-[20px] absolute z-40 w-full ${
          toggle ? 'bg-white h-[100vh]' : ''
        } `}
      >
        <div className="flex flex-wrap justify-between items-center mx-auto">
          {!toggle && (
            <Link href="/" className="flex items-center">
              <img
                className="w-[108px] h-[64px]"
                src="/assets/images/logo.svg"
                alt="Logo"
              />
            </Link>
          )}
          {toggle && <LanguageDropdown left className="lang-dropdown-mobile" />}
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center text-sm md:hidden focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={toggleMenuMobile}
          >
            <span className="sr-only">Open main menu</span>
            {toggle && <MenuCloseSvg />}
            {!toggle && <MenuSvg />}
          </button>
          <div
            className={`${
              toggle ? 'mobile-menu bg-white text-black' : 'hidden text-white'
            } w-full md:block md:w-auto`}
            id="mobile-menu"
          >
            <ul
              className={`flex flex-col mt-4 md:flex-row md:space-x-[84px] md:mt-0 md:text-sm font-bold items-center uppercase ${
                toggle ? 'menu-ul-mobile' : ''
              }`}
            >
              <li>
                <Link href="#about-us">
                  <a onClick={onMenuClick}>{t('about-us')}</a>
                </Link>
              </li>
              <li>
                <Link href="#games">
                  <a onClick={onMenuClick}>{t('games')}</a>
                </Link>
              </li>
              <li>
                <Link href="#partners">
                  <a onClick={onMenuClick}>{t('partners')}</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a onClick={onMenuClick}>{t('contact-us')}</a>
                </Link>
              </li>
              {!toggle && (
                <li>
                  <LanguageDropdown />
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </Section>
  );
};

export { Navbar };
