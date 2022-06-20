import { useState } from 'react';

import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { LanguageDropdown } from '../components/LanguageDropdown';

const Navbar = () => {
  const { t } = useTranslation('common');
  // const [hiddenClass, setHiddenClass] = useState('hidden');
  const [toggle, setToggle] = useState(false);

  const toggleMenuMobile = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="px-[16px] py-[48px] md:px-[80px] md:py-[20px] absolute z-40 w-full">
      <div className="flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex items-center">
          <img
            className="w-[108px] h-[64px]"
            src="/assets/images/logo.svg"
            alt="Logo"
          />
        </Link>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={toggleMenuMobile}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            toggle ? 'mobile-menu bg-white text-black' : 'hidden text-white'
          } w-full md:block md:w-auto`}
          id="mobile-menu"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-[84px] md:mt-0 md:text-sm font-bold items-center  uppercase">
            <li>
              <Link href="#about-us">{t('about-us')}</Link>
            </li>
            <li>
              <Link href="#games">{t('games')}</Link>
            </li>
            <li>
              <Link href="#partners">{t('partners')}</Link>
            </li>
            <li>
              <Link href="#">{t('contact-us')}</Link>
            </li>
            <li>
              <LanguageDropdown />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
