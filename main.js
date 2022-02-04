'use strict';

const updateTime = () => {
  const time = new Date().toLocaleTimeString();
  const [hours, minutes, seconds] = time.split(':');

  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');

  hoursElement.innerHTML = hours;
  minutesElement.innerHTML = minutes;
  secondsElement.innerHTML = seconds;
};

updateTime();
setInterval(updateTime, 1000);
