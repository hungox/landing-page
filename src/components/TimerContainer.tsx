import { useTranslation } from 'next-i18next';

import { NumberBox } from './NumberBox';

type ITimerContainerProps = {
  days: number | string;
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
};

const TimerContainer = ({
  days,
  hours,
  minutes,
  seconds,
}: ITimerContainerProps) => {
  const { t } = useTranslation('common');
  // let daysFlip = false;
  // let hoursFlip = false;
  // let minutesFlip = false;
  // let secondsFlip = true;

  // if (seconds <= 0 && minutes <= 0 && hours <= 0 && days <= 0) {
  //   daysFlip = false;
  //   hoursFlip = false;
  //   minutesFlip = false;
  //   secondsFlip = false;
  // }

  if (seconds === 0) {
    if (minutes !== 0) {
      seconds = 59;
    }

    // secondsFlip = false;
    // minutesFlip = true;
  }
  if (minutes === 0) {
    if (hours !== 0) {
      minutes = 59;
    }

    // minutesFlip = false;
    // hoursFlip = true;
  }

  // if (hours === 0) {
  //   hoursFlip = false;
  //   if (days !== 0) {
  //     daysFlip = true;
  //   }
  // }

  if (days < 10) {
    days = `0${days}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return (
    <div className="w-full flex flex-wrap justify-between items-center text-black bg-white md:py-[26px] px-[24px] py-[24px] md:px-[39px] max-w-[756px] rounded-[21px] drop-shadow-landing">
      <NumberBox num={days} unit={t('days')} />
      <span className="text-[40px] md:text-[66px] leading-[79px]">:</span>
      <NumberBox num={hours} unit={t('hours')} />
      <span className="text-[40px] md:text-[66px] leading-[79px]">:</span>
      <NumberBox num={minutes} unit={t('minutes')} />
      <span className="text-[40px] md:text-[66px] leading-[79px]">:</span>
      <NumberBox num={seconds} unit={t('second')} />
    </div>
  );
};

export { TimerContainer };
