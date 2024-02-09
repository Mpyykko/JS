

document.addEventListener('DOMContentLoaded', function () {
  
    const kuva = document.getElementById('himmennys');

    setTimeout(function () {
        kuva.style.opacity = '1';
    }, 300);

    setInterval(function () {
        kuva.style.opacity = (kuva.style.opacity === '0.1') ? '1' : '0.1';
    }, 2000);
});