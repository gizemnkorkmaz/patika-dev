const greeting = document.querySelector(".greeting");
const clock = document.querySelector(".time-info");

const showInfo = () => {
  const name = prompt("What is your name?");
  greeting.innerHTML = `Hello ${name}!`;
};

const showTime = () => {
  const time = new Date();
  const day = time.getDay();
  const daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday ",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  clock.innerHTML = `It is ${time.toLocaleTimeString()} ${daylist[day]}`;
};

setInterval(showTime, 1000);
showInfo();
