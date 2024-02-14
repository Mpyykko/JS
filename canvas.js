const canvas = document.querySelector('canvas');
// koko sivun levyinen ja korkuinen, ei reunoja
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

//c.fillRect(x, y, width, height);

c.fillRect(100, 100, 100, 100);
c.fillRect(400, 100, 100, 100);
c.fillRect(100, 500, 100, 100);
c.fillRect(600, 100, 100, 100);
