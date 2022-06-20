import { useState } from 'react';

import { useTranslation } from 'next-i18next';

import { ArrowRightSvg } from './svgs/ArrowRightSvg';

type ITextBoxProps = {
  className?: string;
  transparent?: boolean;
};

const TextBox = (props: ITextBoxProps) => {
  const [value, setValue] = useState('');
  const { t } = useTranslation('common');

  return (
    <div className={`relative${props.className ? ` ${props.className}` : ''}`}>
      <input
        value={value}
        placeholder={t('email')}
        onChange={(e) => setValue(e.target.value)}
        className={`w-full border-none outline-0 py-[18px] pl-[14px] rounded-[8px] pr-[50px]${
          props.transparent ? ' bg-transparent pl-white' : ' pl-black'
        }`}
      />
      <ArrowRightSvg
        className={`absolute right-[14px] top-[30%] cursor-pointer${
          props.transparent ? ' fill-white' : ' fill-black'
        }`}
      />
      <style jsx>
        {`
          .pl-black::placeholder {
            color: #545454;
            opacity: 1;
          }
          .pl-white::placeholder {
            color: #adadad;
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
};
export { TextBox };
