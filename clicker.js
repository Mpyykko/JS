const klikki = document.getElementById('cookie');
const displayCookies = document.getElementById('displayCookies');
const uusiPeli = document.getElementById('uusiPeli');
const tuplaklikki = document.getElementById('tuplaklikki');
const tuoppi = document.getElementById('naytaTuopit');
const promille = document.getElementById('naytaPromillet');
const promillejapois = document.getElementById('promillejapois');


klikki.addEventListener('click', cookieClicked);
uusiPeli.addEventListener('click', aloitaUusiPeli);
tuplaklikki.addEventListener('click', tuplanopeusKlikattu);
promillejapois.addEventListener('click', promilleKlikattu);



let klikit = 20;
let multiplier = 1;
let multiplierCost = 2;
let tuopit = 0;
let promillet = 0.00;

// pääohjelma alkaa

function cookieClicked() {
    
   

    if (klikit >= 1) {
        klikit = klikit - multiplier;
    }

    
    ilmoitusteksti.innerHTML = ('');

    if (klikit <= 20 && klikit > 15) {
        document.getElementById('cookie').src = 'clicker-kuvat/tuoppitaysi2.png';
    } else if (klikit <= 15 && klikit > 10) {
        document.getElementById('cookie').src = 'clicker-kuvat/tuoppiekahorppy.png';
    } else if (klikit <= 10 && klikit > 5) {
        document.getElementById('cookie').src = 'clicker-kuvat/tuoppitokahorppy.png';
    } else if (klikit <= 5 && klikit >= 2) {
        document.getElementById('cookie').src = 'clicker-kuvat/tuoppikolmashorppy.png';
    } else if (klikit === 1) {
        document.getElementById('cookie').src = 'clicker-kuvat/tuoppityhja.png';


    } else if (klikit === 0) {
       
        klikit = 20;
        tuopit++;
        promillet += 0.25;
      
        displayCookiesAmount();
        Tuopit();
        Promillet();
        document.getElementById('cookie').src = 'clicker-kuvat/tuoppitaysi2.png';
    }
    
    displayCookiesAmount();

    if(promillet >0.25 && promillet <= 0.5){
        level1();
   
    }
    
   else if( promillet === 0.75 || promillet === 1){
        level2();
      
    }
    else if(promillet >1 && promillet <= 1.5){
        level3();
 
    }
    else if(promillet > 1.5){
        level4();
   
    }
    else{
        level0()
      
    }


    

    if(tuplanopeus)
    {
        klikit -= 1;
    }


    if(tuopit === 10){
        gameOver();
    }

   
}

// pääohjelma loppuu


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
    klikit = 20;
    tuopit = 0;
    promillet = 0.00;
    displayCookiesAmount();
    ilmoitusteksti.innerHTML = ('');
    document.getElementById('cookie').src = 'clicker-kuvat/tuoppitaysi2.png';
    Tuopit();
    Promillet();
    tuplanopeus = false;
    document.getElementById('naytaOhje2').disabled = false;
   

}

// promilleja pois-toiminto



function promilleKlikattu() {
    if (tuopit < 1) {
        kauppateksti.innerHTML = ('Ei tarpeeksi kolikoita!');
        return;
    }

    if (promillet >= 0.5) {
        tuopit--;
        promillet -= 0.5;
        Promillet();
        Tuopit();
        kauppateksti.innerHTML = ('Ostettu!');
        if(level1){
            level0();
        }
        else if(level2){
            level1();
        }
        else if(level3){
            level2();
        }
        else if(level4){
            level3();
        }
      
    } 
    else {
        kauppateksti.innerHTML = ('Computer says no');
    }

    return promillet;
 
}


// Tähän tuplanopeus

let tuplanopeus = false;

    
function tuplanopeusKlikattu() {
    if (tuopit >= multiplierCost) {
        tuopit = tuopit - multiplierCost;
        Tuopit();
        displayCookiesAmount();
        kauppateksti.innerHTML = ('Ostettu tuplanopeus!');
        tuplanopeus = true;

        


    } else {
        kauppateksti.innerHTML = ('Ei tarpeeksi kolikoita!');
    }

   
}

// Vaikeustasoja

function level0(){
    document.getElementById('cookie').classList.remove('animated1','animated2','animated3','animated4');
}

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
        klikki.removeEventListener('click', cookieClicked);
        ilmoitusteksti.innerHTML = ('Pääsit pelin läpi. Olet melkoinen juoppo!');
        level0();
        tuplanopeus = false;
        document.getElementById('naytaOhje2').disabled = true;

}





//ohjesivut

document.getElementById('naytaOhje').addEventListener('click', function() {
   
    document.getElementById('ohjesivu').style.display = 'none';
    
    // tarkistetaan, onko taustakuva ladattu
    let taustakuva = new Image();

    taustakuva.onload = function() {
        document.getElementById('ohjesivu').style.display = 'block';
    };
    taustakuva.src = 'clicker-kuvat/peliohjetausta.png';
});

// suljetaan ohjesivu
document.getElementById('piilotaOhje').addEventListener('click', function() {
    document.getElementById('ohjesivu').style.display = 'none';
 
});


//kauppasivut

document.getElementById('naytaOhje2').addEventListener('click', function() {
   
    document.getElementById('ohjesivu2').style.display = 'none';
    
    // tarkistetaan, onko taustakuva ladattu
    let taustakuva = new Image();

    taustakuva.onload = function() {
        document.getElementById('ohjesivu2').style.display = 'block';
    };
    taustakuva.src = 'clicker-kuvat/kauppatausta.png';
});

// suljetaan kauppasivu
document.getElementById('piilotaOhje2').addEventListener('click', function() {
    document.getElementById('ohjesivu2').style.display = 'none';
    kauppateksti.innerHTML = ('');
});





