type INumberBoxProps = {
  num: string | number;
  unit: string;
};

const NumberBox = (props: INumberBoxProps) => {
  return (
    <div className="flex flex-col space-y-[16px] md:space-y-0 md:gap-[30px] min-w-[70px] md:min-w-[100px]">
      <span className="font-playfair font-black text-[36px] md:text-6xl leading-[30px] tracking-[4.8px]">
        {props.num}
      </span>
      <span className="font-bold leading-[19px] text-[12px] md:text-[16px]">
        {props.unit}
      </span>
    </div>
  );
};

export { NumberBox };
