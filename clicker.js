const klikki = document.getElementById('cookie');
const displayCookies = document.getElementById('displayCookies');
const uusiPeli = document.getElementById('uusiPeli');
const upgrade = document.getElementById('upgrade');
const tuoppi = document.getElementById('naytaTuopit');
const promille = document.getElementById('naytaPromillet');


klikki.addEventListener('click', cookieClicked);
uusiPeli.addEventListener('click', aloitaUusiPeli);
upgrade.addEventListener('click', upgradeClicked);

let klikit = 40;
let multiplier = 1;
let multiplierCost = 1;
let tuopit = 0;
let promillet = 0.00;


function cookieClicked() {
    if (klikit >= 1) {
        klikit = klikit - multiplier;
    } 
    ilmoitusteksti.innerHTML = ('');

    if (klikit <= 40 && klikit > 30) {
        document.getElementById('cookie').src = 'clicker-kuvat/tuoppitaysi2.png';
    } else if (klikit <= 30 && klikit > 20) {
        document.getElementById('cookie').src = 'clicker-kuvat/tuoppiekahorppy.png';
    } else if (klikit <= 20 && klikit > 10) {
        document.getElementById('cookie').src = 'clicker-kuvat/tuoppitokahorppy.png';
    } else if (klikit <= 10 && klikit >= 2) {
        document.getElementById('cookie').src = 'clicker-kuvat/tuoppikolmashorppy.png';
    } else if (klikit === 1) {
        document.getElementById('cookie').src = 'clicker-kuvat/tuoppityhja.png';


    } else if (klikit === 0) {
       
        klikit = 40;
        tuopit++;
        promillet += 0.25;
      
        displayCookiesAmount();
        Tuopit();
        Promillet();
        gameOver();
       
        document.getElementById('cookie').src = 'clicker-kuvat/tuoppitaysi2.png';
    }
    
    displayCookiesAmount();

    if(promillet === 0.25){
        level1();
    }
    else if(promillet === 0.5){
        level2();
    }
    else if(promillet === 1){
        level3();
    }
    else if(promillet >= 1.5){
        level4();
    }
}


function displayCookiesAmount() {
    displayCookies.innerHTML = (`Klikit ${klikit}`);
}

function Tuopit() {
    naytaTuopit.innerHTML = (`Kolikot ${tuopit}`);
}

function Promillet() {
    naytaPromillet.innerHTML = (`Promillet ${promillet}`);
}

// Uuden pelin aloitus

function aloitaUusiPeli() {
    document.getElementById('cookie').classList.remove('animated1','animated2','animated3','animated4');
    klikki.addEventListener('click', cookieClicked);
    klikit = 40;
    tuopit = 0;
    promillet = 0.00;
    displayCookiesAmount();
    ilmoitusteksti.innerHTML = ('');
    document.getElementById('cookie').src = 'clicker-kuvat/tuoppitaysi2.png';
    Tuopit();
    Promillet();

}

// Tähän tuplanopeus


    
   


function upgradeClicked() {
    if (tuopit >= multiplierCost) {
        tuopit = tuopit - multiplierCost;
        Tuopit();
        displayCookiesAmount();
        ilmoitusteksti.innerHTML = ('Ostettu tuplanopeus!');

        klikit = klikit - 1;


    } else {
        ilmoitusteksti.innerHTML = ('Ei tarpeeksi kolikoita!');
    }
}

// Vaikeustasoja

function level1(){
    document.getElementById('cookie').classList.add('animated1');
}

function level2(){
    document.getElementById('cookie').classList.add('animated2');
}
function level3(){
    document.getElementById('cookie').classList.add('animated3');
}
function level4(){
    document.getElementById('cookie').classList.add('animated4');
}


// Game over
function gameOver(){
    if(promillet >= 2){
        klikki.removeEventListener('click', cookieClicked);
        ilmoitusteksti.innerHTML = ('Pääsit pelin läpi. Olet melkoinen juoppo!');
        document.getElementById('cookie').classList.remove('animated1','animated2','animated3','animated4');

    }
}

// ohjesivu

// näytetään ohjesivu

document.getElementById('naytaOhje').addEventListener('click', function() {
    document.getElementById('ohjesivu').style.display = 'block';
});

// suljetaan ohjesivu
document.getElementById('piilotaOhje').addEventListener('click', function() {
    document.getElementById('ohjesivu').style.display = 'none';
});


//Kauppasivut

// näytetään kauppasivu

document.getElementById('naytaOhje2').addEventListener('click', function() {
    document.getElementById('ohjesivu2').style.display = 'block';
  
   
});

// suljetaan ohjesivu
document.getElementById('piilotaOhje2').addEventListener('click', function() {
    document.getElementById('ohjesivu2').style.display = 'none';

});



