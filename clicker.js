
const klikki = document.getElementById('cookie');
const displayCookies = document.getElementById('displayCookies');
const uusiPeli = document.getElementById('uusiPeli');
const upgrade = document.getElementById('upgrade');
const autoClicker = document.getElementById('autoClicker');
const displayAutoclickerCost = document.getElementById('displayAutoclickerCost');
const tuoppi = document.getElementById('naytaTuopit');
const promille = document.getElementById('naytaPromillet');








klikki.addEventListener('click', cookieClicked);
uusiPeli.addEventListener('click', aloitaUusiPeli);
upgrade.addEventListener('click', upgradeClicked);
autoClicker.addEventListener('click', autoClickerClicked);



let klikit = 40;
let multiplier = 1;
let multiplierCost = 25;
let autoClickers = 0;
let autoClickerCost = 35;
let tuopit = 0;
let promillet = 0.00;



function cookieClicked(){

    if (klikit >= multiplier) {
        klikit = klikit - multiplier;
       
    } 
 
 
    ilmoitusteksti.innerHTML = ('');

    if(klikit <= 40 && klikit > 30){
        document.getElementById('cookie').src = 'clicker-kuvat/tuoppitaysi2.png';
    }

    else if(klikit <= 30 && klikit >20){
        document.getElementById('cookie').src = 'clicker-kuvat/tuoppiekahorppy.png';
    }
    else if(klikit <= 20 && klikit >10){
        document.getElementById('cookie').src = 'clicker-kuvat/tuoppitokahorppy.png';
    }

    else if(klikit <= 10 && klikit >=1){
        document.getElementById('cookie').src = 'clicker-kuvat/tuoppikolmashorppy.png';
    }


    else if(klikit === 0){
        
        
        document.getElementById('cookie').src = 'clicker-kuvat/tuoppityhja.png';
        ilmoitusteksti.innerHTML = ('Tuoppi tyhjennetty!');
        tuopit = tuopit + 1;
        promillet = promillet + 0.25;
        


    }
    Tuopit();
    Promillet();

}


function displayCookiesAmount(){
displayCookies.innerHTML = (`Pisteet ${klikit}`);

}

function Tuopit(){
   naytaTuopit.innerHTML = (`Tuopit ${tuopit}`);
    
    }

function Promillet(){
    naytaPromillet.innerHTML = (`Promillet ${promillet}`);
         
    }
    




function aloitaUusiPeli() {
    klikit = 40;
    autoClickers = 0;
    tuopit = 0;
    promillet = 0;
    
    displayCookiesAmount();
    ilmoitusteksti.innerHTML = ('');
    document.getElementById('cookie').src = 'clicker-kuvat/tuoppitaysi2.png';
}

function upgradeClicked(){
    if (klikit >= multiplierCost){
        klikit = klikit - multiplierCost;

        displayCookiesAmount();
        
    }

    
    else {
        ilmoitusteksti.innerHTML = ('Ei tarpeeksi klikkejä!');
    }

}

function autoClickerClicked(){
    if (klikit >= autoClickerCost){
        klikit = klikit - autoClickerCost;
        autoplayActive = true;
        autoClickers = autoClickers + 1; 

    }
    else {
        ilmoitusteksti.innerHTML = ('Ei tarpeeksi klikkejä!');
    }

    

}

function startAutoplay(){

}


setInterval(function(){
    klikit = klikit - autoClickers;
   
    if(klikit ===0){
        klikit = 40;
        document.getElementById('cookie').src = 'clicker-kuvat/tuoppityhja.png';
        
    }

    if(klikit <= 40 && klikit > 30){
        document.getElementById('cookie').src = 'clicker-kuvat/tuoppitaysi2.png';
    }

    else if(klikit <= 30 && klikit >20){
        document.getElementById('cookie').src = 'clicker-kuvat/tuoppiekahorppy.png';
    }
    else if(klikit <= 20 && klikit >10){
        document.getElementById('cookie').src = 'clicker-kuvat/tuoppitokahorppy.png';
    }

    else if(klikit <= 10 && klikit >=1){
        document.getElementById('cookie').src = 'clicker-kuvat/tuoppikolmashorppy.png';
    }
   

    Tuopit();
    Promillet();
    displayCookiesAmount();
}, 300)


// ohjesivu

// näytetään ohjesivu

document.getElementById('naytaOhje').addEventListener('click', function() {
    document.getElementById('ohjesivu').style.display = 'block';
});

// suljetaan ohjesivu
document.getElementById('piilotaOhje').addEventListener('click', function() {
    document.getElementById('ohjesivu').style.display = 'none';
});


