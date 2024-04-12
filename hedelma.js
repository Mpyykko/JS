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





// panos pienenee

const panosPienemmalle = document.getElementById('panosAlas-painike');
panosPienemmalle.addEventListener('click', vahennaPanosta);

// panos suurenee

const panosSuuremmalle = document.getElementById('panosYlos-painike');
panosSuuremmalle.addEventListener('click', suurennaPanosta);





let rullienTulokset =[];

// pääohjelma
function pelikierros(){

     // jos saldo ei riitä
     if(saldo < panos){
        voittoTeksti.innerHTML = 'Ei tarpeeksi saldoa!';
    };

    
    
    // jos saldo riittää
    if(saldo > 0 && panos <= saldo ){
        rullatPyorii();
        saldo = saldo - panos;

        // melonit
        if (rullienTulokset.every(val => val === 1)) {
            console.log('Neljä melonia!!!');
            voitto += panos *1000;
            voittoTeksti.innerHTML = 'Neljä melonia!';
        }
        else if (rullienTulokset.slice(0, 3).every(val => val === 1)) {
            console.log('Kolme melonia!!!');
            voitto += panos *100;
            voittoTeksti.innerHTML = 'Kolme melonia!';
        }

       

        
        // seiskat
        if (rullienTulokset.every(val => val === 2)) {
            console.log('Neljä seiskaa!!!');
            voitto += panos *1000;
            voittoTeksti.innerHTML = 'Neljä seiskaa!';
        }
        else if (rullienTulokset.slice(0, 3).every(val => val === 2)) {
            console.log('Kolme seiskaa!!!');
            voitto += panos *100;
            voittoTeksti.innerHTML = 'Kolme seiskaa!';
        }

        // barit
        if (rullienTulokset.every(val => val === 3)) {
            console.log('Neljä baria!!!');
            voitto += panos *1000;
            voittoTeksti.innerHTML = 'Neljä baria!';
        }
        else if (rullienTulokset.slice(0, 3).every(val => val === 3)) {
            console.log('Kolme baria!!!');
            voitto += panos *100;
            voittoTeksti.innerHTML = 'Kolme baria!';

        }

        // esedua
        if (rullienTulokset.every(val => val === 4)) {
            console.log('Neljä esedua!!!');
            voitto += panos *1000;
            voittoTeksti.innerHTML = 'Neljä esedua!';
        }
        else if (rullienTulokset.slice(0, 3).every(val => val === 4)) {
            console.log('Kolme esedua!!!');
            voitto += panos *100;
            voittoTeksti.innerHTML = 'Kolme esedua!';
        }

        // lippua
        if (rullienTulokset.every(val => val === 5)) {
            console.log('Neljä lippua!!!');
            voitto += panos *1000;
            voittoTeksti.innerHTML = 'Neljä lippua!';
        }
        else if (rullienTulokset.slice(0, 3).every(val => val === 5)) {
            console.log('Kolme lippua!!!');
            voitto += panos *100;
            voittoTeksti.innerHTML = 'Kolme lippua!';
        }

        // playta
        if (rullienTulokset.every(val => val === 6)) {
            console.log('Neljä playta!!!');
            voitto += panos *1000;
            voittoTeksti.innerHTML = 'Neljä playta!';
        }
        else if (rullienTulokset.slice(0, 3).every(val => val === 6)) {
            console.log('Kolme playta!!!');
            voitto += panos *100;
            voittoTeksti.innerHTML = 'Kolme playta!';

        }

      

       
        


       
        console.log(rullienTulokset);

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
const play = {
    html: "<img src='pelikuvat/play4.png' class='rulla-symboli'>",
    arvo: 6
};

const voittoKuviot = [meloni,seiska,bar,eselogo,lippu,play];



// pyöritysfunktio
function rullatPyorii(){
    
    voittoTeksti.innerHTML = '';
    voitto = 0;

    console.log(rulla1(),
    rulla2(),
    rulla3(),
    rulla4())
 
}




// ekan rullan kuvion arvonta
function rulla1(){


    let indeksi = Math.floor(Math.random() * voittoKuviot.length);
    const arvottuKuvio = voittoKuviot[indeksi];

    const element = document.getElementById('rulla1');
    element.innerHTML = arvottuKuvio.html;

    // lisätään arvottujen kuvioiden arvot listalle jossa niitä voidaan käsitellä
    rullienTulokset.push(arvottuKuvio.arvo);

    return arvottuKuvio.arvo;

}
 


// tokan rullan kuvion arvonta
function rulla2(){
   

    let indeksi = Math.floor(Math.random() * voittoKuviot.length);
    const arvottuKuvio = voittoKuviot[indeksi];

    document.getElementById('rulla2').innerHTML = arvottuKuvio.html;

    rullienTulokset.push(arvottuKuvio.arvo);

    return arvottuKuvio.arvo;
  

}
// kolmannen rullan kuvion arvonta
function rulla3(){
   

    let indeksi = Math.floor(Math.random() * voittoKuviot.length);
    const arvottuKuvio = voittoKuviot[indeksi];

    document.getElementById('rulla3').innerHTML = arvottuKuvio.html;

    rullienTulokset.push(arvottuKuvio.arvo);

    return arvottuKuvio.arvo;
  

}
// neljännen rullan kuvion arvonta
function rulla4(){
   

    let indeksi = Math.floor(Math.random() * voittoKuviot.length);
    const arvottuKuvio = voittoKuviot[indeksi];

    document.getElementById('rulla4').innerHTML = arvottuKuvio.html;

    rullienTulokset.push(arvottuKuvio.arvo);

    return arvottuKuvio.arvo;
  
  

}






// saldon päivitys-funktio
function naytaSaldo() {
    naytaUusisaldo.innerHTML = (`Saldo <br> ${saldo} €`);
}

// voitto päivitys-funktio
function naytaUusiVoitto() {
    naytaVoitto.innerHTML = (`Voitto <br> ${voitto} €`);
}

// panoksen päivitys-funktio
function vahennaPanosta() {
    if(panos >1){
    panos--;
    naytaUusipanos.innerHTML = (`Panos <br> ${panos} €`);
    }
}

// panoksen päivitys-funktio
function suurennaPanosta() {
    if(panos <10 ){
    panos++;
    naytaUusipanos.innerHTML = (`Panos <br> ${panos} €`);
    }
}


// rullan lukitus

document.getElementById('lukitse1').addEventListener('click', lukitus);


function lukitus() {
    const painike = document.getElementById('lukitse1');
    let nykyinenKuva = painike.style.backgroundImage;

    if (nykyinenKuva.includes('hold.png')) {
        painike.style.backgroundImage = 'url(pelikuvat/holded.png)';
    } else {
        painike.style.backgroundImage = 'url(pelikuvat/hold.png)';
    }
}


document.getElementById('lukitse1').addEventListener('click', lukitus);



