let spinners = ['\r|  ', '\r/   ', '\r-   ', '\r\\   ', '\r|  '];
let time = 100;
for (let i = 0; i < 2; i++) {
  for (let i = 0; i < spinners.length; i++) {
    time = time + 200;
    setTimeout(() => { process.stdout.write(spinners[i]) }, time);
  }
}
setTimeout(() => { console.log() }, 2150);
