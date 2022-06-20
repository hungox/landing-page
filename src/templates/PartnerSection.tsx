import { useEffect, useState } from 'react';

import { useTranslation } from 'next-i18next';

import { SlideLeftSvg } from '../components/svgs/SlideLeftSvg';
import { SlideRightSvg } from '../components/svgs/SlideRightSvg';
import { Section } from '../layout/Section';

const PartnerSection = () => {
  const { t } = useTranslation('common');
  // const data = [
  //   {
  //     image: '/assets/images/ea-game.png',
  //   },
  //   {
  //     image: '/assets/images/game.png',
  //   },
  //   {
  //     image: '/assets/images/first-power-up.png',
  //   },
  //   {
  //     image: '/assets/images/walt-disney.png',
  //   },
  //   {
  //     image: '/assets/images/book-pro.png',
  //   },
  //   {
  //     image: '/assets/images/sega.png',
  //   },
  //   {
  //     image: '/assets/images/2k.png',
  //   },
  // ];
  const slideWidth = 260;

  const data = [
    {
      image: '/assets/images/ea-game.png',
    },
    {
      image: '/assets/images/game.png',
    },
    {
      image: '/assets/images/first-power-up.png',
    },
    {
      image: '/assets/images/walt-disney.png',
    },
    {
      image: '/assets/images/book-pro.png',
    },
    {
      image: '/assets/images/sega.png',
    },
    {
      image: '/assets/images/2k.png',
    },
  ];
  const { length } = data;
  data.push(...data);
  const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const createItem = (position, idx) => {
    const item = {
      styles: {
        transform: `translateX(${position * slideWidth}px)`,
      },
      image: data[idx]?.image,
    };

    switch (position) {
      case length + 4:
      case length + 2:
      case length + 3:
      case length + 1:
        item.styles = { ...item.styles };
        break;
      case length:
        break;
      default:
        item.styles = { ...item.styles, opacity: 0 };
        break;
    }

    return item;
  };

  const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
    const item = createItem(pos, idx, activeIdx);

    return (
      <li className="carousel__slide-item" style={item.styles}>
        <div className="carousel__slide-item-img-link">
          <img src={item.image} alt="" className="w-[260px] h-[100px]" />
        </div>
      </li>
    );
  };

  const keys = Array.from(Array(data.length).keys());

  const [items, setItems] = useState(keys);
  const [isTicking, setIsTicking] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const bigLength = items.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
      });
    }
  };

  const handleDotClick = (idx) => {
    if (idx < activeIdx) prevClick(activeIdx - idx);
    if (idx > activeIdx) nextClick(idx - activeIdx);
  };

  useEffect(() => {
    console.log('333');
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore

    const autoSlide = setInterval(() => {
      setItems((prev) => {
        return prev.map((_, i) => prev[(i - 1 + bigLength) % bigLength]);
      });
    }, 5000);
    return () => {
      clearInterval(autoSlide);
    };
  }, [items]);

  return (
    <Section
      id="partners"
      className="md:h-[478px] bg-gray-901 py-[40px] md:py-[120px] mt-[40px] md:mt-[130px]"
    >
      <div className="font-playfair text-black font-black text-[40px] md:text-6xl text-center leading-[80px] tracking-[3.6px]">
        {t('our-partners')}
      </div>
      <div className="mt-[40px] md:mt-[55px] relative">
        <div
          className="drop-shadow-landing absolute top-[40%] left-[10%] z-10"
          onClick={() => prevClick()}
        >
          <SlideLeftSvg />
        </div>
        <div className="carousel__container">
          <ul className="partner1 carousel__slide-list w-[251rem] md:w-[196rem]">
            {items.map((pos, i) => (
              <CarouselSlideItem
                key={i}
                idx={i}
                pos={pos}
                activeIdx={activeIdx}
              />
            ))}
          </ul>
        </div>
        <div
          className="drop-shadow-landing absolute right-[10%] top-[40%] z-10"
          onClick={() => nextClick()}
        >
          <SlideRightSvg />
        </div>
      </div>
    </Section>
  );
};

export { PartnerSection };
