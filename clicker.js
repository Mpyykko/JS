
const klikki = document.getElementById('cookie');
const displayCookies = document.getElementById('displayCookies');
const uusiPeli = document.getElementById('uusiPeli');
const upgrade = document.getElementById('upgrade');
const autoClicker = document.getElementById('autoClicker');
const displayAutoclickerCost = document.getElementById('displayAutoclickerCost');







klikki.addEventListener('click', cookieClicked);
uusiPeli.addEventListener('click', aloitaUusiPeli);
upgrade.addEventListener('click', upgradeClicked);
autoClicker.addEventListener('click', autoClickerClicked);



let klikit = 0;
let multiplier = 1;
let multiplierCost = 25;
let autoClickers = 0;
let autoClickerCost = 50;



function cookieClicked(){
    klikit = klikit + multiplier;
    displayCookiesAmount();
    ilmoitusteksti.innerHTML = ('');

    if(klikit >= 10 && klikit < 20){
        document.getElementById('cookie').src = 'clicker-kuvat/tuoppiekahorppy.png';
    }
    else if(klikit >=20 && klikit <30){
        document.getElementById('cookie').src = 'clicker-kuvat/tuoppitokahorppy.png';
    }

    else if(klikit >=30 && klikit <40){
        document.getElementById('cookie').src = 'clicker-kuvat/tuoppitokahorppy.png';
    }


    if(klikit >=50){
        
        klikit = 0;
        document.getElementById('cookie').src = 'clicker-kuvat/tuoppitaysi2.png'
        ilmoitusteksti.innerHTML = ('Tuoppi tyhjennetty!');


    }

}


function displayCookiesAmount(){
displayCookies.innerHTML = (`Pisteet ${klikit}`);

}




function aloitaUusiPeli() {
    klikit = 0;
    autoClickers = 0;
    
    displayCookiesAmount();
    ilmoitusteksti.innerHTML = ('');
    document.getElementById('cookie').src = 'clicker-kuvat/tuoppitaysi2.png';
}

function upgradeClicked(){
    if (klikit >= multiplierCost){
        klikit = klikit - multiplierCost;

        displayCookiesAmount();
        if(klikit >= 10 && klikit < 20){
            document.getElementById('cookie').src = 'clicker-kuvat/tuoppiekahorppy.png';
        }
        else if(klikit >=20 && klikit <30){
            document.getElementById('cookie').src = 'clicker-kuvat/tuoppitokahorppy.png';
        }
    
        else if(klikit >=30 && klikit <40){
            document.getElementById('cookie').src = 'clicker-kuvat/tuoppitokahorppy.png';
        }
    
    
       else{
        document.getElementById('cookie').src = 'clicker-kuvat/tuoppitaysi2.png';
       }
    }

    
    else {
        ilmoitusteksti.innerHTML = ('Ei tarpeeksi klikkejä!');
    }

}

function autoClickerClicked(){
    if (klikit >= autoClickerCost){
        klikit = klikit - autoClickerCost;
        displayCookiesAmount();
        autoClickers = autoClickers + 1
       

    }
    else {
        ilmoitusteksti.innerHTML = ('Ei tarpeeksi klikkejä!');
    }

}



setInterval(function(){
    klikit = klikit + autoClickers;
    displayCookiesAmount();
}, 100)


// ohjesivu

// näytetään ohjesivu

document.getElementById('naytaOhje').addEventListener('click', function() {
    document.getElementById('ohjesivu').style.display = 'block';
});

// suljetaan ohjesivu
document.getElementById('piilotaOhje').addEventListener('click', function() {
    document.getElementById('ohjesivu').style.display = 'none';
});


