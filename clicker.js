
const cookie = document.getElementById('cookie');
const displayCookies = document.getElementById('displayCookies');
const uusiPeli = document.getElementById('uusiPeli');
const upgrade = document.getElementById('upgrade');
const autoClicker = document.getElementById('autoClicker');
const displayAutoclickerCost = document.getElementById('displayAutoclickerCost');


cookie.addEventListener('click', cookieClicked);
uusiPeli.addEventListener('click', aloitaUusiPeli);
upgrade.addEventListener('click', upgradeClicked);
autoClicker.addEventListener('click', autoClickerClicked);



let cookies = 0;
let multiplier = 1;
let multiplierCost = 25;
let autoClickers = 0;
let autoClickerCost = 50;

function cookieClicked(){
    cookies = cookies + multiplier;
    displayCookiesAmount();
}

function displayCookiesAmount(){
displayCookies.innerHTML = (`Pisteet ${cookies}`);

}

function aloitaUusiPeli() {
    cookies = 0;
    autoClickers = 0;
    displayCookiesAmount();
}

function upgradeClicked(){
    if (cookies >= multiplierCost){
        cookies = cookies - multiplierCost;
        displayCookiesAmount();

    }
    else {
        alert('Ei tarpeeksi pisteitä!')
    }
}

function autoClickerClicked(){
    if (cookies >= autoClickerCost){
        cookies = cookies - autoClickerCost;
        displayCookiesAmount();
        autoClickers = autoClickers + 1
       

    }
    else {
        alert('Ei tarpeeksi pisteitä!')
    }



}

setInterval(function(){
    cookies = cookies + autoClickers;
    displayCookiesAmount();
}, 100)

