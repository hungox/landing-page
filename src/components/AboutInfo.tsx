import { useRouter } from 'next/router';

type IAboutInfoProps = {
  title: string;
  description: string;
  image: string;
};

const AboutInfo = (props: IAboutInfoProps) => {
  const router = useRouter();

  return (
    <div className="flex text-black flex-row gap-[24px]">
      <div className="w-[50px] h-[50px] min-w-[50px] min-h-[50px] rounded-full bg-primary-901 flex items-center justify-center">
        <img
          className="w-[24px] h-[24px]"
          src={`${router.basePath}${props.image}`}
          alt="Calendar-tick"
        />
      </div>
      <div className="flex flex-col space-y-[8px] leading-[30px]">
        <span className="font-bold text-2xl">{props.title}</span>
        <span className="text-gray-903 leading-[140%]">
          {props.description}
        </span>
      </div>
    </div>
  );
};

export { AboutInfo };
