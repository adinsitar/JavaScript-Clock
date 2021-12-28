"use strict";

let fullDate = document.getElementById("date");
let clock = document.getElementById("clock");

function getTime() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.toLocaleString("default", { month: "short" });
  let today = date.getDate();
  let day = date.toLocaleString("locale", { weekday: "long" });
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  if (second < 10 || second === 0) {
    second = "0" + second;
  }
  if (minute < 10 || minute === 0) {
    minute = "0" + parseInt(minute);
  }
  if (hour < 10 || hour === 0) {
    hour = "0" + parseInt(hour);
  }

  fullDate.innerHTML = `${day} ${today}/${month}/${year}`;
  clock.innerHTML = `${hour}:${minute}:${second}`;
}

setInterval(getTime, 1000);
