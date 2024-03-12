// äänikomennot

// pelaa-painike
const pelaa = document.getElementById('pelaa-painike');
pelaa.addEventListener('click', pelikierros);

// muuttujat saldolle, panokselle ja voitoille
let saldo = 100;
const naytaUusisaldo = document.getElementById('saldo');
let panos = 1;
const naytaUusipanos = document.getElementById('panos');


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

function rullatPyorii(){
    const rullaSymbolit = document.querySelectorAll('.rulla-symboli');
    
    rullaSymbolit.forEach(function(symbol, index) {
        
        setTimeout(function() {
            symbol.style.animationPlayState = 'running';
        }, index * 10);



    });
   
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




