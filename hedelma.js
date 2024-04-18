// äänikomennot

// pelaa-painike
const pelaa = document.getElementById('pelaa-painike');
pelaa.addEventListener('click', pelikierros);

// muuttujat saldolle, panokselle ja voitoille
let saldo = 100;
const naytaUusisaldo = document.getElementById('saldo');
let panos = 1;
const naytaUusipanos = document.getElementById('panos');
let voitto = 0;
const naytaVoitto = document.getElementById('voitto');

let voittoTeksti = document.getElementById('voittoTeksti');

const lukitseNappi1 = document.getElementById('lukitse1');
lukitseNappi1.disabled = true;

const lukitseNappi2 = document.getElementById('lukitse2');
lukitseNappi2.disabled = true;

const lukitseNappi3 = document.getElementById('lukitse3');
lukitseNappi3.disabled = true;

const lukitseNappi4 = document.getElementById('lukitse4');
lukitseNappi4.disabled = true;

let lukitukset = 0;
let kierrokset = 0;

// panos pienenee

let panosPienemmalle = document.getElementById('panosAlas-painike');
panosPienemmalle.addEventListener('click', vahennaPanosta);

// panos suurenee

let panosSuuremmalle = document.getElementById('panosYlos-painike');
panosSuuremmalle.addEventListener('click', suurennaPanosta);

// iso voitto funktio

const bigwin = document.getElementById('iso-voitto');

// iso voitto objektiksi
const isovoittokuva = {
    html: "<img src='pelikuvat/isovoitto.png' class='iso-voitto'>",
    arvo: 10
};

function isovoitto(){

    bigwin.innerHTML = isovoittokuva.html;


}

let rullienTulokset =[];

// pääohjelma
function pelikierros(){

    kierrokset += 1;

    if(lukitukset <1){
        lukitseKaytossa();
    }
    else{
        lukitseEikaytossa();
    }


    console.log(lukitukset);

 
     // jos saldo ei riitä
     if(saldo < panos){
        voittoTeksti.innerHTML = 'Not enough money!';
    };


    // jos saldo riittää
    if(saldo > 0 && panos <= saldo ){

        rullatPyorii();
        saldo = saldo - panos;

        // 4 melonia
        if (rullienTulokset.every(val => val === 1)) {
            voitto += panos *10;

        }
        // 3 melonia
        else if (rullienTulokset.slice(0, 3).every(val => val === 1)) {
            voitto += panos *5;
 
        }

        // 4 seiskaa
        if (rullienTulokset.every(val => val === 2)) {
            voitto += panos *100;

        }  // 3 seiskaa
        else if (rullienTulokset.slice(0, 3).every(val => val === 2)) {
            voitto += panos *50;

        }

        // 4 baria
        if (rullienTulokset.every(val => val === 3)) {
            voitto += panos *75;

        }  // 3 baria
        else if (rullienTulokset.slice(0, 3).every(val => val === 3)) {
            voitto += panos *40;
  
        }

        // 4 esedua
        if (rullienTulokset.every(val => val === 4)) {
            voitto += panos *50;

        } // 3 esedua
        else if (rullienTulokset.slice(0, 3).every(val => val === 4)) {
            voitto += panos *25;

        }

        // 4lippua
        if (rullienTulokset.every(val => val === 5)) {
            voitto += panos *50;
 
        } // 3lippua
        else if (rullienTulokset.slice(0, 3).every(val => val === 5)) {
            voitto += panos *25;

        }

        // 4 tähteä
        if (rullienTulokset.every(val => val === 6)) {
            voitto += panos *10;

        } // 3 tähteä
        else if (rullienTulokset.slice(0, 3).every(val => val === 6)) {
            voitto += panos *5;
        }

        // ettei lukituksia peräkkäin
        if(lukitukset > 0){
            lukitseEikaytossa();
            lukitukset -= 1;
            
        }

        console.log(rullienTulokset);
      
        // 10 tai yli x panos on iso voitto
        if( voitto >= panos * 10){
            setTimeout(isovoitto,1000);
            voittoTeksti.innerHTML = (`You won ${voitto} !`);

        }

        saldo += voitto;
        naytaUusiVoitto();
        naytaSaldo();
 
        
    }


   rullienTulokset =[];

 
}
// pääohjelma loppuu

// rullien pyöriminen

// voittosymbolit objekteiksi
const meloni = {
    html: "<img src='pelikuvat/melon.png' class='rulla-symboli'>",
    arvo: 1
};
const seiska = {
    html:  "<img src='pelikuvat/seiska.png' class='rulla-symboli'>",
    arvo : 2
};
const bar =  {
    html: "<img src='pelikuvat/bar.png' class='rulla-symboli'>",
    arvo: 3
};
const eselogo = {
    html: "<img src='pelikuvat/ese.png' class='rulla-symboli'>",
    arvo: 4
};
const lippu = {
    html: "<img src='pelikuvat/omalippu.png' class='rulla-symboli'>",
    arvo: 5
};
const tahti = {
    html: "<img src='pelikuvat/tahti.png' class='rulla-symboli'>",
    arvo: 6
};

const voittoKuviot = [meloni,seiska,bar,eselogo,lippu,tahti];

// ajastettu pyöriminen


// pyöritysfunktio
function rullatPyorii(){


    bigwin.innerHTML = '';

    voittoTeksti.innerHTML = '';
    voitto = 0;

    // ajastetaan rullat pyörimään vuorotellen
   
   
        rullaYksi();

        rullaKaksi();
 
        rullaKolme();
   
        rullaNelja();
 
        setTimeout('lukotAuki()','1300');

      
    }
 



// animointi rullille¨



// ekan rullan kuvion arvonta

function rullaYksi(){
    let arvotutKuviot = [];
    
    
   
    
    // 5 randomia kuvaa animaatioon
    for (let i = 0; i < 5; i++) {
        let indeksi = Math.floor(Math.random() * voittoKuviot.length);
        arvotutKuviot.push(voittoKuviot[indeksi]);
    }

   

    // lisätään viimeksi arvottu kuva voittokuvioksi
  
    rullienTulokset.push(arvotutKuviot[4].arvo);
      

    let kuvaIndex = 0;


    function vaihdaKuva() {
        rulla1.innerHTML = arvotutKuviot[kuvaIndex].html;
        kuvaIndex++;

        // kun kaikki kuvat on näytetty, lopetetaan interval
        if (kuvaIndex >= arvotutKuviot.length) {
            clearInterval(rullaPyorii);
        }
    }

    vaihdaKuva();

    let rullaPyorii = setInterval(vaihdaKuva, 300);
}


// tokan rullan kuvion arvonta
function rullaKaksi(){
 
    let arvotutKuviot = [];

    // 5 randomia kuvaa animaatioon
    for (let i = 0; i < 5; i++) {
        let indeksi = Math.floor(Math.random() * voittoKuviot.length);
        arvotutKuviot.push(voittoKuviot[indeksi]);
    }

    // lisätään viimeksi arvottu kuva voittokuvioksi
    rullienTulokset.push(arvotutKuviot[4].arvo);

    let kuvaIndex = 0;


    function vaihdaKuva() {
        rulla2.innerHTML = arvotutKuviot[kuvaIndex].html;
        kuvaIndex++;

        // kun kaikki kuvat on näytetty, lopetetaan interval
        if (kuvaIndex >= arvotutKuviot.length) {
            clearInterval(rullaPyorii);
        }
    }

    vaihdaKuva();

    let rullaPyorii = setInterval(vaihdaKuva, 300);


}
// kolmannen rullan kuvion arvonta
function rullaKolme(){
    
    let arvotutKuviot = [];

    // 5 randomia kuvaa animaatioon
    for (let i = 0; i < 5; i++) {
        let indeksi = Math.floor(Math.random() * voittoKuviot.length);
        arvotutKuviot.push(voittoKuviot[indeksi]);
    }

    // lisätään viimeksi arvottu kuva voittokuvioksi
    rullienTulokset.push(arvotutKuviot[4].arvo);

    let kuvaIndex = 0;
   

    function vaihdaKuva() {
        rulla3.innerHTML = arvotutKuviot[kuvaIndex].html;
        kuvaIndex++;

        // kun kaikki kuvat on näytetty, lopetetaan interval
        if (kuvaIndex >= arvotutKuviot.length) {
            clearInterval(rullaPyorii);
        }
    }

    vaihdaKuva();

    let rullaPyorii = setInterval(vaihdaKuva, 300);


}
// neljännen rullan kuvion arvonta
function rullaNelja(){
   
    let arvotutKuviot = [];

    // 5 randomia kuvaa animaatioon
    for (let i = 0; i < 5; i++) {
        let indeksi = Math.floor(Math.random() * voittoKuviot.length);
        arvotutKuviot.push(voittoKuviot[indeksi]);
    }

    // lisätään viimeksi arvottu kuva voittokuvioksi
    rullienTulokset.push(arvotutKuviot[4].arvo);

    let kuvaIndex = 0;
   

    function vaihdaKuva() {
        rulla4.innerHTML = arvotutKuviot[kuvaIndex].html;
        kuvaIndex++;

        // kun kaikki kuvat on näytetty, lopetetaan interval
        if (kuvaIndex >= arvotutKuviot.length) {
            clearInterval(rullaPyorii);
        }
    }

    vaihdaKuva();

    let rullaPyorii = setInterval(vaihdaKuva, 300);


}



// saldon päivitys-funktio
function naytaSaldo() {
    naytaUusisaldo.innerHTML = (`Balance <br> ${saldo} €`);
}

// voitto päivitys-funktio
function naytaUusiVoitto() {
    naytaVoitto.innerHTML = (`Win <br> ${voitto} €`);
}

// panoksen päivitys-funktio
function vahennaPanosta() {
    if(panos >1){
    panos--;
    naytaUusipanos.innerHTML = (`Bet <br> ${panos} €`);
    }
}

// panoksen päivitys-funktio
function suurennaPanosta() {
    if(panos <10 ){
    panos++;
    naytaUusipanos.innerHTML = (`Bet <br> ${panos} €`);
    }
}

// lukitse-nappien aktivointi

// lukittu rulla 1
let onLukittu1 = false;


lukitseNappi1.addEventListener('click', function() {
    if (!onLukittu1) {
        // jos painettu, lukossa
        lukitseNappi1.style.backgroundImage = "url('pelikuvat/holded2.png')";
        onLukittu1 = true;
        lukitukset =1;
        lukitsePanos();

    } else {
        
        // jos ei painettu
        lukitseNappi1.style.backgroundImage = "url('pelikuvat/hold2.png')";
        onLukittu1 = false;
        lukitukset = 0;
        vapautaPanos();
        
       
    }
});

///////////////////////////////////////////////////////////////////////////
// lukittu rulla 2
let onLukittu2 = false;



lukitseNappi2.addEventListener('click', function() {
    if (!onLukittu2) {
        // jos painettu, lukossa
        lukitseNappi2.style.backgroundImage = "url('pelikuvat/holded2.png')";
        onLukittu2 = true;
        lukitukset =1;
        lukitsePanos();
    } else {
        // jos ei painettu
        lukitseNappi2.style.backgroundImage = "url('pelikuvat/hold2.png')";
        onLukittu2 = false;
        lukitukset = 0;
        vapautaPanos();
      
       
    }
});

///////////////////////////////////////////////////////////////////////////

// lukittu rulla 3
let onLukittu3 = false;


lukitseNappi3.addEventListener('click', function() {
    if (!onLukittu3) {
        // jos painettu, lukossa
        lukitseNappi3.style.backgroundImage = "url('pelikuvat/holded2.png')";
        onLukittu3 = true;
        lukitukset =1;
        lukitsePanos();
    } else {
        // jos ei painettu
        lukitseNappi3.style.backgroundImage = "url('pelikuvat/hold2.png')";
        onLukittu3 = false;
        lukitukset = 0;
        vapautaPanos();
        
    }
});

///////////////////////////////////////////////////////////////////////////

// lukittu rulla 4
let onLukittu4 = false;





lukitseNappi4.addEventListener('click', function() {
    if (!onLukittu4) {
        // jos painettu, lukossa
        lukitseNappi4.style.backgroundImage = "url('pelikuvat/holded2.png')";
        onLukittu4 = true;
        lukitukset =1;
        lukitsePanos();
    } else {
        
        // jos ei painettu
        lukitseNappi4.style.backgroundImage = "url('pelikuvat/hold2.png')";
        onLukittu4 = false;
        lukitukset = 0;
        vapautaPanos();
        
    }
});

///////////////////////////////////////////////////////////////////////////

// lukitusnapit käytössä 
function lukitseEikaytossa(){
    lukitseNappi1.disabled = true;
    lukitseNappi2.disabled = true;
    lukitseNappi3.disabled = true;
    lukitseNappi4.disabled = true;

}

// ei käytössä

function lukitseKaytossa(){
    lukitseNappi1.disabled = false;
    lukitseNappi2.disabled = false;
    lukitseNappi3.disabled = false;
    lukitseNappi4.disabled = false;

}

// panokset ei käytössä jos lukitus
function lukitsePanos(){
    panosPienemmalle.classList.add('panoslukittu');
    panosSuuremmalle.classList.add('panoslukittu');

   
}

function vapautaPanos(){
    panosPienemmalle.classList.remove('panoslukittu');
    panosSuuremmalle.classList.remove('panoslukittu');
}





///////////////////////////////////////////////////////////////////////////


// lukitusten vapautus

function lukotAuki(){

    lukitseNappi1.style.backgroundImage = "url('pelikuvat/hold2.png')";
    onLukittu1 = false;

    lukitseNappi2.style.backgroundImage = "url('pelikuvat/hold2.png')";
    onLukittu2 = false;

    lukitseNappi3.style.backgroundImage = "url('pelikuvat/hold2.png')";
    onLukittu3 = false;

    lukitseNappi4.style.backgroundImage = "url('pelikuvat/hold2.png')";
    onLukittu4 = false;
}

// voittotaulukko

function naytaVoitot() {

  
    // pelivalikko piiloon
 
  
    document.getElementById('peli-painikkeet').style.display = 'none';
   
   

    // näytetään voitot
    document.getElementById('peliohjeet').style.display = 'block';
    document.getElementById('peliohjeet').scrollTop = 0;
    
}

///////////////////////////////////////////////////////////////////////////


function suljeVoitot() {

  
    // toisin päin
 
  
    document.getElementById('peli-painikkeet').style.display = 'block';
   
    
   

    
    document.getElementById('peliohjeet').style.display = 'none';
    
}


///////////////////////////////////////////////////////////////////////////

const saldoaLisaa = document.getElementById('peli-otsikko');

saldoaLisaa.addEventListener('click',touhuTonni)




function touhuTonni(){
    saldo +=  1000;
  
    naytaSaldo();
}