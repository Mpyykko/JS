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

//const voittoKuviot = [1,2,3,4,5,6,7];

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



