import { ReactNode } from 'react';

type IAboutNumberBoxProps = {
  text: string;
  children: ReactNode;
  className?: string;
};

const AboutNumberBox = (props: IAboutNumberBoxProps) => {
  return (
    <div
      className={`text-black font-bold flex flex-col gap-[4px]${
        props.className ? ` ${props.className}` : ''
      }`}
    >
      <span className="text-[44px] md:text-[80px] leading-[98px] text-primary-902">
        {props.children}
      </span>
      <span className="text-2xl leading-[30px]">{props.text}</span>
    </div>
  );
};

export { AboutNumberBox };
