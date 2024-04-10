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




// panos pienenee

const panosPienemmalle = document.getElementById('panosAlas-painike');
panosPienemmalle.addEventListener('click', vahennaPanosta);

// panos suurenee

const panosSuuremmalle = document.getElementById('panosYlos-painike');
panosSuuremmalle.addEventListener('click', suurennaPanosta);

// pääohjelma
function pelikierros(){
    if(saldo > 0 && panos <= saldo ){
        rullatPyorii();
        saldo = saldo - panos;
        naytaSaldo();
    }

   


}

// pääohjelma loppuu


// rullien pyöriminen


const meloni = "<img src='pelikuvat/melon.png' class='rulla-symboli'>";
const seiska = "<img src='pelikuvat/seiska.png' class='rulla-symboli'>";
const bar = "<img src='pelikuvat/bar.png' class='rulla-symboli'>";
const eselogo = "<img src='pelikuvat/ese.png' class='rulla-symboli'>";
const lippu = "<img src='pelikuvat/omalippu.png' class='rulla-symboli'>";
const play = "<img src='pelikuvat/play4.png' class='rulla-symboli'>";

const voittoKuviot = [1,2,3,4,5,6];

function rullatPyorii(){
    rulla1();
    rulla2();
    rulla3();
    rulla4();
    console.log(rulla1(),rulla2(),rulla3(),rulla4());

    // kolmen peräkkäisen kuvion voitto 
    if(rulla1() === rulla2() && rulla2() === rulla3() ){
        console.log('3 ekaa osui!!!');
    }
    


    
  
}

// ekan rullan kuvion arvonta
function rulla1(){

    let indeksi = Math.floor(Math.random() * voittoKuviot.length);
    const tulos = voittoKuviot[indeksi];

    if (tulos === 1) {
        document.getElementById('rulla1').innerHTML = meloni;
   
    } else if (tulos === 2) {
        document.getElementById('rulla1').innerHTML = seiska;
    } else if (tulos === 3) {
        document.getElementById('rulla1').innerHTML = bar;
    } else if (tulos === 4) {
        document.getElementById('rulla1').innerHTML = play;
    } else if (tulos === 5) {
        document.getElementById('rulla1').innerHTML = eselogo;
    } else if (tulos === 6) {
        document.getElementById('rulla1').innerHTML = lippu;
    }
  
    return tulos;

}
 

   

 


// tokan rullan kuvion arvonta
function rulla2(){

    let indeksi = Math.floor(Math.random() * voittoKuviot.length);
    const tulos = voittoKuviot[indeksi];

    if (tulos === 1) {
        document.getElementById('rulla2').innerHTML = meloni;
   
    } else if (tulos === 2) {
        document.getElementById('rulla2').innerHTML = seiska;
    } else if (tulos === 3) {
        document.getElementById('rulla2').innerHTML = bar;
    } else if (tulos === 4) {
        document.getElementById('rulla2').innerHTML = play;
    } else if (tulos === 5) {
        document.getElementById('rulla2').innerHTML = eselogo;
    } else if (tulos === 6) {
        document.getElementById('rulla2').innerHTML = lippu;
    }
  
    return tulos;

}
// kolmannen rullan kuvion arvonta
function rulla3(){

    let indeksi = Math.floor(Math.random() * voittoKuviot.length);
    const tulos = voittoKuviot[indeksi];

    if (tulos === 1) {
        document.getElementById('rulla3').innerHTML = meloni;
   
    } else if (tulos === 2) {
        document.getElementById('rulla3').innerHTML = seiska;
    } else if (tulos === 3) {
        document.getElementById('rulla3').innerHTML = bar;
    } else if (tulos === 4) {
        document.getElementById('rulla3').innerHTML = play;
    } else if (tulos === 5) {
        document.getElementById('rulla3').innerHTML = eselogo;
    } else if (tulos === 6) {
        document.getElementById('rulla3').innerHTML = lippu;
    }
  
    return tulos;

}
// neljännen rullan kuvion arvonta
function rulla4(){

    let indeksi = Math.floor(Math.random() * voittoKuviot.length);
    const tulos = voittoKuviot[indeksi];

    if (tulos === 1) {
        document.getElementById('rulla4').innerHTML = meloni;
   
    } else if (tulos === 2) {
        document.getElementById('rulla4').innerHTML = seiska;
    } else if (tulos === 3) {
        document.getElementById('rulla4').innerHTML = bar;
    } else if (tulos === 4) {
        document.getElementById('rulla4').innerHTML = play;
    } else if (tulos === 5) {
        document.getElementById('rulla4').innerHTML = eselogo;
    } else if (tulos === 6) {
        document.getElementById('rulla4').innerHTML = lippu;
    }
  
    return tulos;
}





// saldon päivitys-funktio
function naytaSaldo() {
    naytaUusisaldo.innerHTML = (`Saldo <br> ${saldo} €`);
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



