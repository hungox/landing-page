import { useTranslation } from 'next-i18next';

import { CardGame } from '../components/CardGame';
import { Section } from '../components/layout/Section';

const GameSection = () => {
  const { t } = useTranslation('common');
  return (
    <Section
      id="games"
      className="px-[16px] md:px-[80px] mt-[40px] md:mt-[123px]"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <span className="font-playfair text-black font-black text-[40px] md:text-6xl leading-[80px] tracking-[3.6px]">
          {t('our-games')}
        </span>
        <div className="max-w-[860px] text-gray-903 leading-[140%] mt-[16px] md:mt-[24px]">
          {t('our-games-description')}
        </div>
      </div>

      <div className="w-full flex flex-row flex-wrap mt-[40px] md:mt-[80px] space-x-[16px] md:space-x-[40px]">
        <div className="w-[calc(50%-8px)] md:w-[calc(50%-20px)] flex flex-col space-y-[20px] md:space-y-[110px] md:flex-row flex-wrap md:space-x-[40px]">
          <div className="w-full md:w-[calc(50%-20px)] flex items-center flex-col space-y-[20px] md:space-y-[40px]">
            <CardGame
              title="E-Space"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              image="/assets/images/e-space.png"
            />
            <CardGame
              title="Pirates"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              image="/assets/images/pirates.png"
            />
            <CardGame
              title="Magic tree"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              image="/assets/images/magic-tree.png"
            />
          </div>
          <div className="w-full md:w-[calc(50%-20px)] flex items-center flex-col space-y-[20px] md:space-y-[40px] md:mt-[110px]">
            <CardGame
              title="Kingland"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              image="/assets/images/kingland.png"
            />
            <CardGame
              title="Witch Party"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              image="/assets/images/witch-party.png"
            />
            <CardGame
              title="Aborigines"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              image="/assets/images/aborigines.png"
            />
          </div>
        </div>
        <div className="w-[calc(50%-8px)] md:w-[calc(50%-20px)] mt-[50px] md:mt-0 flex flex-col space-y-[20px] md:space-y-[110px] md:flex-row flex-wrap md:space-x-[40px]">
          <div className="w-full md:w-[calc(50%-20px)] flex items-center flex-col space-y-[20px] md:space-y-[40px]">
            <CardGame
              title="The Last Game"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              image="/assets/images/the-last-game.png"
            />
            <CardGame
              title="Rocky"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              image="/assets/images/rocky.png"
            />
            <CardGame
              title="Cinderella"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              image="/assets/images/cinderella.png"
            />
          </div>
          <div className="w-full md:w-[calc(50%-20px)] flex items-center flex-col space-y-[20px] md:space-y-[40px] mt-[110px]">
            <CardGame
              title="G-Dragon"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              image="/assets/images/g-dragon.png"
            />
            <CardGame
              title="Blue Fire"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              image="/assets/images/blue-fire.png"
            />
            <CardGame
              title="Egypt Game"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              image="/assets/images/egypt-game.png"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export { GameSection };
