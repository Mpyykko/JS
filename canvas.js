const canvas = document.querySelector('canvas');
// koko sivun levyinen ja korkuinen, ei reunoja
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c1 = canvas.getContext('2d');
let c2 = canvas.getContext('2d');
let c3 = canvas.getContext('2d');
let c4 = canvas.getContext('2d');

//c.fillRect(x, y, width, height);

c1.fillRect(100, 100, 100, 100);
c2.fillRect(400, 100, 50, 50);
c3.fillRect(100, 500, 100, 100);
c4.fillRect(600, 100, 100, 100);
