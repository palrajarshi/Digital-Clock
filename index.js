const updtime = () => {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  ampm.innerHTML = h >= 12 ? "PM" : "AM";
  h > 12 ? (h = h - 12) : h;
  h < 10 ? (h = "0" + h) : h;
  m < 10 ? (m = "0" + m) : m;
  s < 10 ? (s = "0" + s) : s;

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
};
setInterval(updtime, 1000);
