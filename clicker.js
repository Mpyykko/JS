
const cookie = document.getElementById('cookie');
const displayCookies = document.getElementById('displayCookies');

cookie.addEventListener('click', cookieClicked);

let cookies = 0;
let multiplier = 1;

function cookieClicked(){
    cookies = cookies + multiplier;
    displayCookiesAmount();
}

function displayCookiesAmount(){
displayCookies.innerHTML = (`Pisteet ${cookies}`);

}
