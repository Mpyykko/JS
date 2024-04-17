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

   

    


    // tyhejennetään edellisen kierroksen kuviot
    document.getElementById('rulla1').innerHTML = '';
    document.getElementById('rulla2').innerHTML = '';
    document.getElementById('rulla3').innerHTML = '';
    document.getElementById('rulla4').innerHTML = '';


    

     // jos saldo ei riitä
     if(saldo < panos){
        voittoTeksti.innerHTML = 'Not enough coins!';
    };

    
    
    // jos saldo riittää
    if(saldo > 0 && panos <= saldo ){

        

        rullatPyorii();
        saldo = saldo - panos;

        // melonit 4
        if (rullienTulokset.every(val => val === 1)) {
            voitto += panos *10;
            
           
        }
        // melonit 3
        else if (rullienTulokset.slice(0, 3).every(val => val === 1)) {
            voitto += panos *5;
           
            
           
            
        }

       

        
        // seiskat
        if (rullienTulokset.every(val => val === 2)) {
            voitto += panos *100;
          
           
        }
        else if (rullienTulokset.slice(0, 3).every(val => val === 2)) {
            voitto += panos *50;
           
           
            
        }

        // barit
        if (rullienTulokset.every(val => val === 3)) {
            voitto += panos *75;
           
           
        }
        else if (rullienTulokset.slice(0, 3).every(val => val === 3)) {
            voitto += panos *40;
            
          
           

        }

        // esedua
        if (rullienTulokset.every(val => val === 4)) {
            voitto += panos *50;
            
            

        }
        else if (rullienTulokset.slice(0, 3).every(val => val === 4)) {
            voitto += panos *25;
           
           
         
        }

        // lippua
        if (rullienTulokset.every(val => val === 5)) {
            voitto += panos *50;
           
           
        }
        else if (rullienTulokset.slice(0, 3).every(val => val === 5)) {
            voitto += panos *25;
           
           
          
        }

        // tähteä
        if (rullienTulokset.every(val => val === 6)) {
            voitto += panos *10;
            
            
        }
        else if (rullienTulokset.slice(0, 3).every(val => val === 6)) {
            voitto += panos *5;
           
           
          

        }

   
        console.log(rullienTulokset);

        // yli 10 x panos on iso voitto
        if( voitto > panos* 10){
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

// animaatioon neljä randomia kuvaa

let valitutKuvat = [];
function valitseKuvat() {
    
    for (let i = 0; i < 4; i++) {
        let indeksi = Math.floor(Math.random() * voittoKuviot.length);
        valitutKuvat.push(voittoKuviot[indeksi]);
    }
   
    return valitutKuvat;
}

// animointi noille 4 kuvalle




 // lisätään animointi rullille
    
 function animoiRulla(elementinNimi, animaatio) {
    const element = document.getElementById(elementinNimi);
 
    
    element.classList.add(animaatio);

 }


// ekan rullan kuvion arvonta
function rulla1(){
    

    let indeksi = Math.floor(Math.random() * voittoKuviot.length);
    const arvottuKuvio = voittoKuviot[indeksi];

    const element = document.getElementById('rulla1');
    element.innerHTML = arvottuKuvio.html;

    animoiRulla('rulla1', 'liukuu');
 
    // lisätään arvottujen kuvioiden arvot listalle jossa niitä voidaan käsitellä
    rullienTulokset.push(arvottuKuvio.arvo);

}
 


// tokan rullan kuvion arvonta
function rulla2(){
   

    let indeksi = Math.floor(Math.random() * voittoKuviot.length);
    const arvottuKuvio = voittoKuviot[indeksi];

    document.getElementById('rulla2').innerHTML = arvottuKuvio.html;

    rullienTulokset.push(arvottuKuvio.arvo);

    animoiRulla('rulla2', 'liukuu');

    

  
  

}
// kolmannen rullan kuvion arvonta
function rulla3(){
   

    let indeksi = Math.floor(Math.random() * voittoKuviot.length);
    const arvottuKuvio = voittoKuviot[indeksi];

    document.getElementById('rulla3').innerHTML = arvottuKuvio.html;
    
    animoiRulla('rulla3', 'liukuu');


    rullienTulokset.push(arvottuKuvio.arvo);


    
  

}
// neljännen rullan kuvion arvonta
function rulla4(){
   

    let indeksi = Math.floor(Math.random() * voittoKuviot.length);
    const arvottuKuvio = voittoKuviot[indeksi];

    document.getElementById('rulla4').innerHTML = arvottuKuvio.html;

    animoiRulla('rulla4', 'liukuu');

    rullienTulokset.push(arvottuKuvio.arvo);

 

}






// saldon päivitys-funktio
function naytaSaldo() {
    naytaUusisaldo.innerHTML = (`Coins <br> ${saldo} €`);
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
    
}

///////////////////////////////////////////////////////////////////////////


function suljeVoitot() {

  
    // toisin päin
 
  
    document.getElementById('peli-painikkeet').style.display = 'block';
   

    
    document.getElementById('peliohjeet').style.display = 'none';
    
}


