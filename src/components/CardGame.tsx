import { useRouter } from 'next/router';

type ICardGameProps = {
  title: string;
  description: string;
  image: string;
};

const CardGame = (props: ICardGameProps) => {
  const router = useRouter();

  return (
    <div className=" text-white font-montserrat relative drop-shadow-landing relative h-[268px] md:h-[560px] w-full max-w-[410px] max-h-[560px]">
      <img
        className="w-full h-full rounded-[10px]"
        src={`${router.basePath}${props.image}`}
        alt={props.title}
      />
      <div className="absolute inset-x-0 bottom-0 flex flex-col p-[8px] md:gap-[16px] md:px-8 md:pb-10">
        <span className="text-[24px] md:text-5xl md:leading-[60px] font-bold">{props.title}</span>
        <span className="text-[12px]">{props.description}</span>
      </div>
    </div>
  );
};

export { CardGame };
