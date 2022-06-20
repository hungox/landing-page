import { useState } from 'react';

import { useRouter } from 'next/router';

// type ILanguageDropdownProps = {
//   title: string;
//   description: string;
//   image: string;
// };

const LanguageDropdown = () => {
  const router = useRouter();

  const data = [
    {
      key: 'vi',
      name: 'Vietnamese',
      check: false,
      image: '/assets/images/vietnam.png',
    },
    { key: 'div' },
    {
      key: 'en',
      name: 'English',
      check: true,
      image: '/assets/images/united-states.png',
    },
  ];

  const [showMenu, setShowMenu] = useState(false);

  const onClick = () => setShowMenu(!showMenu);

  // const [liMenu, setLiMenu] = useState(null);

  const onSelectLanguage = (key: string) => {
    // Object.values(data).forEach((language) => {
    //   if (language!.key === key) {
    //     language.check = true;
    //   } else {
    //     language.check = false;
    //   }
    // });
    setShowMenu(!showMenu);
    router.push(`/${key}`);
  };


  const getFlagActive = () => {
    const lang = router.locale;
    const langObject = data.find((x) => x.key === lang);
    return langObject ? langObject.image : '/assets/images/united-states.png';
  };

  const listItems = data.map((item, index) => {
    if (item.key === 'div')
      return <li key="999" className="h-[1px] bg-gray-904 my-[3px]"></li>;
    return (
      <li className="cursor-pointer" key={index}>
        <div
          className="flex items-center space-x-[8px]"
          onClick={() => onSelectLanguage(item.key)}
        >
          <div className="min-w-[25px]">
            {item.key === router.locale && (
              <img src={`${router.basePath}/assets/images/check.svg`} alt="" />
            )}
          </div>
          <img src={`${router.basePath}${item.image}`} alt=""></img>
          <span>{item.name}</span>
        </div>
        {/* </Link> */}
      </li>
    );
  });

  return (
    <div className="dropdown relative">
      <div className="flex cursor-pointer justify-end" onClick={onClick}>
        <img
          className="mr-[14px]"
          src={`${router.basePath}${getFlagActive()}`}
          alt=""
        />
        <img
          className=""
          src={`${router.basePath}/assets/images/chevron-down.svg`}
          alt=""
        />
      </div>
      {showMenu && (
        <ul className="bg-white p-[10px] rounded-[8px] text-[10px] font-bold text-black absolute min-w-[170px] right-0">
          {listItems}
        </ul>
      )}
    </div>
  );
};

export { LanguageDropdown };
