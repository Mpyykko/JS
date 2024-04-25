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

// kopio rullientulokset-listasta
let rullienTulokset2 = [...rullienTulokset];

let pelikierrosKaynnissa = false;

let lukitukset = 0;
let kierrokset = 0;


// pääohjelma
async function pelikierros() {

   
    lukitsePanos();
    
   
    if (pelikierrosKaynnissa) {
       
        lukitsePanos();
        return;
    }

  
  
    pelikierrosKaynnissa = true;
  
    if (lukitukset < 1 || voitto < 1) {
        lukitseKaytossa();
    }

  
    // jos saldo ei riitä
    if (saldo < panos) {
        voittoTeksti.innerHTML = 'Not enough balance!';
    }

    // jos saldo riittää
    if (saldo > 0 && panos <= saldo) {
        kierrokset += 1;
        saldo = saldo - panos;
        console.log('Pelikierros alkaa')
  
        naytaSaldo();
        
        

        // jos mitään ei lukittu, pelataan ensimmäinen pelikierros
        if (!onLukittu1 && !onLukittu2 && !onLukittu3 && !onLukittu4) {
            await ekaPelikierros();
            rullienTulokset2 = [...rullienTulokset];
           
           
        }

        // jos ei voittoa ja joku rulla on lukittu, pelataan toinen kierros
        if (voitto < 1) {
            if (onLukittu1 || onLukittu2 || onLukittu3 || onLukittu4) {
                lukitseEikaytossa();
                lukitsePanos();
                await tokaPelikierros();
                lukotAuki();
                vapautaPanos();
                kierrokset = 0;

            }
         
     }  



        // ettei lukituksia peräkkäin
        if(lukitukset > 0){
            lukitseEikaytossa();
            lukitukset -= 1;
            
        }

        console.log(rullienTulokset);
      
        // 10 tai yli x panos on iso voitto
        if( voitto >= panos * 10){
            isovoitto();
           
        }

        saldo += voitto;
        rullienTulokset = [];
        
    }

    naytaUusiVoitto();
    
   
    pelikierrosKaynnissa = false;
    
    console.log('pelikierros ohi');
    console.log('lukitukset:', lukitukset);
    console.log('pelikierrokset:', kierrokset);
   
    
}

// pääohjelma loppuu


// voittosymbolit objekteiksi
const meloni = {
    html: "<img src='pelikuvat/melon.png'>",
    arvo: 1
};
const seiska = {
    html:  "<img src='pelikuvat/seiska.png'>",
    arvo : 2
};
const bar =  {
    html: "<img src='pelikuvat/bar.png'>",
    arvo: 3
};
const eselogo = {
    html: "<img src='pelikuvat/ese.png'>",
    arvo: 4
};
const lippu = {
    html: "<img src='pelikuvat/omalippu.png'>",
    arvo: 5
};
const tahti = {
    html: "<img src='pelikuvat/tahti.png'>",
    arvo: 6
};

const voittoKuviot = [meloni,seiska,bar,eselogo,lippu,tahti];


async function ekaPelikierros(){

    await rullatPyorii();

     // voitot jos ei lukita

    if (!onLukittu1 && !onLukittu2 && !onLukittu3 && !onLukittu4){
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

        }
   
}

async function tokaPelikierros() {

    console.log('toinen kierros');
    console.log('kopiolista ennen toista kierrosta', rullienTulokset2);
    
    // tallennetaan promiset
    let lupaukset = [];
    

    // jos lukitaan, asetetaan uusi kuvio promise-listalta kopiolistalle oikeaan indeksiin
    if (!onLukittu1) {
        lupaukset.push(rullaYksi().then(arvo => rullienTulokset2[0] = arvo));
    }
    if (!onLukittu2) {
        lupaukset.push(rullaKaksi().then(arvo => rullienTulokset2[1] = arvo));
    }
    if (!onLukittu3) {
        lupaukset.push(rullaKolme().then(arvo => rullienTulokset2[2] = arvo));
    }
    if (!onLukittu4) {
        lupaukset.push(rullaNelja().then(arvo => rullienTulokset2[3] = arvo));
    }

    // odotetaan kaikki rullat loppuun
    await Promise.all(lupaukset);

    // voitot valitaan kopiolistalta jos lukitaan joku

     // 4 melonia
     if (rullienTulokset2.every(val => val === 1)) {
        voitto += panos *10;

    }
    // 3 melonia
    else if (rullienTulokset2.slice(0, 3).every(val => val === 1)) {
        voitto += panos *5;

    }

    // 4 seiskaa
    if (rullienTulokset2.every(val => val === 2)) {
        voitto += panos *100;

    }  // 3 seiskaa
    else if (rullienTulokset2.slice(0, 3).every(val => val === 2)) {
        voitto += panos *50;

    }

    // 4 baria
    if (rullienTulokset2.every(val => val === 3)) {
        voitto += panos *75;

    }  // 3 baria
    else if (rullienTulokset2.slice(0, 3).every(val => val === 3)) {
        voitto += panos *40;

    }

    // 4 esedua
    if (rullienTulokset2.every(val => val === 4)) {
        voitto += panos *50;

    } // 3 esedua
    else if (rullienTulokset2.slice(0, 3).every(val => val === 4)) {
        voitto += panos *25;

    }

    // 4lippua
    if (rullienTulokset2.every(val => val === 5)) {
        voitto += panos *50;

    } // 3lippua
    else if (rullienTulokset2.slice(0, 3).every(val => val === 5)) {
        voitto += panos *25;

    }

    // 4 tähteä
    if (rullienTulokset2.every(val => val === 6)) {
        voitto += panos *10;

    } // 3 tähteä
    else if (rullienTulokset2.slice(0, 3).every(val => val === 6)) {
        voitto += panos *5;
      
    }
    console.log('kopiolista toisen kierroksen jälkeen', rullienTulokset2);

    
}

// pyöritysfunktio
let rullatPyorimassa = false;

function rullatPyorii() {
    bigwin.innerHTML = '';
    voittoTeksti.innerHTML = '';
    voitto = 0;

    rullatPyorimassa = true;

    
    return new Promise((resolve) => {
        lukitseEikaytossa();
        
        Promise.all([rullaYksi(), rullaKaksi(), rullaKolme(), rullaNelja()]).then(() => {
            rullatPyorimassa = false;
            lukitseKaytossa();
            resolve();
        });
    });
}


// animointi rullille

function vaihdaKuva(rullaElement, kuviot, kuvaIndex) {
    let kuvaHtml = kuviot[kuvaIndex].html;

    if (kuvaIndex === kuviot.length - 1) {
        // vikalle kuvalle eri animaatio
        kuvaHtml = kuvaHtml.replace('<img', '<img class="rulla-symboli2"');
    } else {
        // muille kuville pyörimisanimaatio
        kuvaHtml = kuvaHtml.replace('<img', '<img class="rulla-symboli"');
    }

    rullaElement.innerHTML = kuvaHtml;

    return kuvaIndex + 1;
}


// ekan rullan kuvion arvonta

async function rullaYksi() {
    let arvotutKuviot = [];
    let kuvaIndex = 0;
    let rullaElement = document.getElementById('rulla1');

    // 8 randomia kuvaa animaatioon
    for (let i = 0; i < 8; i++) {
        let indeksi = Math.floor(Math.random() * voittoKuviot.length);
        arvotutKuviot.push(voittoKuviot[indeksi]);
    }

    // lisätään viimeksi arvottu kuva voittokuvioksi
    rullienTulokset.push(arvotutKuviot[7].arvo);

    return new Promise((resolve) => {
        let rullaPyorii = setInterval(function () {
            kuvaIndex = vaihdaKuva(rullaElement, arvotutKuviot, kuvaIndex);
            if (kuvaIndex >= arvotutKuviot.length) {
                clearInterval(rullaPyorii);
                setTimeout(() => {
                    resolve(arvotutKuviot[7].arvo);
                }, 900);
            }
        }, 250);
    });
}


// tokan rullan kuvion arvonta
async function rullaKaksi() {
    let arvotutKuviot = [];
    let kuvaIndex = 0;
    let rullaElement = document.getElementById('rulla2');

    // 8 randomia kuvaa animaatioon
    for (let i = 0; i < 8; i++) {
        let indeksi = Math.floor(Math.random() * voittoKuviot.length);
        arvotutKuviot.push(voittoKuviot[indeksi]);
    }

    // lisätään viimeksi arvottu kuva voittokuvioksi
    rullienTulokset.push(arvotutKuviot[7].arvo);

    return new Promise((resolve) => {
        let rullaPyorii = setInterval(function () {
            kuvaIndex = vaihdaKuva(rullaElement, arvotutKuviot, kuvaIndex);
            if (kuvaIndex >= arvotutKuviot.length) {
                clearInterval(rullaPyorii);
                setTimeout(() => {
                    resolve(arvotutKuviot[7].arvo);
                }, 900);
            }
        }, 300);
    });
}

// kolmannen rullan kuvion arvonta
async function rullaKolme() {
    return new Promise((resolve) => {
        let arvotutKuviot = [];
        let kuvaIndex = 0;
        let rullaElement = document.getElementById('rulla3');

        // 8 randomia kuvaa animaatioon
        for (let i = 0; i < 8; i++) {
            let indeksi = Math.floor(Math.random() * voittoKuviot.length);
            arvotutKuviot.push(voittoKuviot[indeksi]);
        }

        // lisätään viimeksi arvottu kuva voittokuvioksi
        rullienTulokset.push(arvotutKuviot[7].arvo);

        let rullaPyorii = setInterval(function () {
            kuvaIndex = vaihdaKuva(rullaElement, arvotutKuviot, kuvaIndex);
            if (kuvaIndex >= arvotutKuviot.length) {
                clearInterval(rullaPyorii);
                setTimeout(() => {
                    resolve(arvotutKuviot[7].arvo);
                }, 900);
            }
        }, 350);
    });
}

// neljännen rullan kuvion arvonta
async function rullaNelja() {
    return new Promise((resolve) => {
        let arvotutKuviot = [];
        let kuvaIndex = 0;
        let rullaElement = document.getElementById('rulla4');

        // 8 randomia kuvaa animaatioon
        for (let i = 0; i < 8; i++) {
            let indeksi = Math.floor(Math.random() * voittoKuviot.length);
            arvotutKuviot.push(voittoKuviot[indeksi]);
        }

        // lisätään viimeksi arvottu kuva voittokuvioksi
        rullienTulokset.push(arvotutKuviot[7].arvo);

        let rullaPyorii = setInterval(function () {
            kuvaIndex = vaihdaKuva(rullaElement, arvotutKuviot, kuvaIndex);
            if (kuvaIndex >= arvotutKuviot.length) {
                clearInterval(rullaPyorii);
                setTimeout(() => {
                    resolve(arvotutKuviot[7].arvo);
                }, 900);
            }
        }, 400);
    });
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
       
    } else {
        
        // jos ei painettu
        lukitseNappi1.style.backgroundImage = "url('pelikuvat/hold2.png')";
        onLukittu1 = false;
        lukitukset = 0;
    
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
      
    } else {
        // jos ei painettu
        lukitseNappi2.style.backgroundImage = "url('pelikuvat/hold2.png')";
        onLukittu2 = false;
        lukitukset = 0;
     
      
       
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
     
    } else {
        // jos ei painettu
        lukitseNappi3.style.backgroundImage = "url('pelikuvat/hold2.png')";
        onLukittu3 = false;
        lukitukset = 0;
      
        
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
   
    } else {
        
        // jos ei painettu
        lukitseNappi4.style.backgroundImage = "url('pelikuvat/hold2.png')";
        onLukittu4 = false;
        lukitukset = 0;
   
        
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

async function lukotAuki(){

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