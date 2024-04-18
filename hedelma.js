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


// ohjesivu




// panos pienenee

const panosPienemmalle = document.getElementById('panosAlas-painike');
panosPienemmalle.addEventListener('click', vahennaPanosta);

// panos suurenee

const panosSuuremmalle = document.getElementById('panosYlos-painike');
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

   

    


  


    

     // jos saldo ei riitä
     if(saldo < panos){
        voittoTeksti.innerHTML = 'Not enough money!';
    };

    
    
    // jos saldo riittää
    if(saldo > 0 && panos <= saldo ){

       

          // tyhjennetään edellisen kierroksen kuviot
        document.getElementById('rulla1').innerHTML = '';
        document.getElementById('rulla2').innerHTML = '';
        document.getElementById('rulla3').innerHTML = '';
        document.getElementById('rulla4').innerHTML = '';

        

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

    if(voitto < 1){
        lukitseKaytossa();
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
   
    
   
    rulla1();
    rulla2();
    rulla3();
    rulla4();
    
    }
 








 // lisätään animointi rullille




// ekan rullan kuvion arvonta
function rulla1(){
    let arvotutKuviot = [];

    // 5 randomia kuvaa animaatioon
    for (let i = 0; i < 5; i++) {
        let indeksi = Math.floor(Math.random() * voittoKuviot.length);
        arvotutKuviot.push(voittoKuviot[indeksi]);
    }

    // lisätään viimeksi arvottu kuva voittokuvioksi
    rullienTulokset.push(arvotutKuviot[4].arvo);

    let kuvaIndex = 0;
    const element = document.getElementById('rulla1');

    function vaihdaKuva() {
        element.innerHTML = arvotutKuviot[kuvaIndex].html;
        kuvaIndex++;

        // kun kaikki kuvat on näytetty, lopetetaan interval
        if (kuvaIndex >= arvotutKuviot.length) {
            clearInterval(rulla1pyorii);
        }
    }

    vaihdaKuva();

    let rulla1pyorii = setInterval(vaihdaKuva, 300);


}




// tokan rullan kuvion arvonta
function rulla2(){
    let arvotutKuviot = [];

    // 5 randomia kuvaa animaatioon
    for (let i = 0; i < 5; i++) {
        let indeksi = Math.floor(Math.random() * voittoKuviot.length);
        arvotutKuviot.push(voittoKuviot[indeksi]);
    }

    // lisätään viimeksi arvottu kuva voittokuvioksi
    rullienTulokset.push(arvotutKuviot[4].arvo);

    let kuvaIndex = 0;
    const element = document.getElementById('rulla2');

    function vaihdaKuva() {
        element.innerHTML = arvotutKuviot[kuvaIndex].html;
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
function rulla3(){
    let arvotutKuviot = [];

    // 5 randomia kuvaa animaatioon
    for (let i = 0; i < 5; i++) {
        let indeksi = Math.floor(Math.random() * voittoKuviot.length);
        arvotutKuviot.push(voittoKuviot[indeksi]);
    }

    // lisätään viimeksi arvottu kuva voittokuvioksi
    rullienTulokset.push(arvotutKuviot[4].arvo);

    let kuvaIndex = 0;
    const element = document.getElementById('rulla3');

    function vaihdaKuva() {
        element.innerHTML = arvotutKuviot[kuvaIndex].html;
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
function rulla4(){
    let arvotutKuviot = [];

    // 5 randomia kuvaa animaatioon
    for (let i = 0; i < 5; i++) {
        let indeksi = Math.floor(Math.random() * voittoKuviot.length);
        arvotutKuviot.push(voittoKuviot[indeksi]);
    }

    // lisätään viimeksi arvottu kuva voittokuvioksi
    rullienTulokset.push(arvotutKuviot[4].arvo);

    let kuvaIndex = 0;
    const element = document.getElementById('rulla4');

    function vaihdaKuva() {
        element.innerHTML = arvotutKuviot[kuvaIndex].html;
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
    } else {
        
        // jos ei painettu
        lukitseNappi1.style.backgroundImage = "url('pelikuvat/hold2.png')";
        onLukittu1 = false;
    }
});

///////////////////////////////////////////////////////////////////////////
// lukittu rulla 2
let onLukittu2 = false;





lukitseNappi2.addEventListener('click', function() {
    if (!onLukittu2) {
        // jos ei painettu
        lukitseNappi2.style.backgroundImage = "url('pelikuvat/holded2.png')";
        onLukittu2 = true;
    } else {
        // jos painettu, lukossa
        lukitseNappi2.style.backgroundImage = "url('pelikuvat/hold2.png')";
        onLukittu2 = false;
    }
});

///////////////////////////////////////////////////////////////////////////

// lukittu rulla 3
let onLukittu3 = false;





lukitseNappi3.addEventListener('click', function() {
    if (!onLukittu3) {
        // jos ei painettu
        lukitseNappi3.style.backgroundImage = "url('pelikuvat/holded2.png')";
        onLukittu3 = true;
    } else {
        // jos painettu, lukossa
        lukitseNappi3.style.backgroundImage = "url('pelikuvat/hold2.png')";
        onLukittu3 = false;
    }
});

///////////////////////////////////////////////////////////////////////////

// lukittu rulla 4
let onLukittu4 = false;





lukitseNappi4.addEventListener('click', function() {
    if (!onLukittu4) {
        // jos ei painettu
        lukitseNappi4.style.backgroundImage = "url('pelikuvat/holded2.png')";
        onLukittu4 = true;
    } else {
        // jos painettu, lukossa
        lukitseNappi4.style.backgroundImage = "url('pelikuvat/hold2.png')";
        onLukittu4 = false;
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