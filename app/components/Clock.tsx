"use client";


import { useState, useEffect } from "react";

export function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // Convert time to lines format
    const hoursString = hours.toString().padStart(2, '0');
    const minutesString = minutes.toString().padStart(2, '0');
    const secondsString = seconds.toString().padStart(2, '0');

    return { hoursString, minutesString, secondsString };
  };

  const { hoursString, minutesString, secondsString } = formatTime(time);

  return (
    <div className="flex flex-col items-center justify-center h-[50vh] text-primary">
      <div className="text-4xl flex">
        {hoursString.split('').map((char, index) => (
          <span key={index} className="mr-1">{char}</span>
        ))}
        <span className="mx-2">:</span>
        {minutesString.split('').map((char, index) => (
          <span key={index} className="mr-1">{char}</span>
        ))}
        <span className="mx-2">:</span>
        {secondsString.split('').map((char, index) => (
          <span key={index} className="mr-1">{char}</span>
        ))}
      </div>
      <div className="mt-4 flex justify-between w-full px-20">
        {time.toString().split('').map((char, index) => (
          <div
            key={index}
            style={{
              height: '2px',
              width: '2px',
              backgroundColor: 'currentColor',
              marginRight: '1px',
            }}
          />
        ))}
      </div>
    </div>
  );
}
