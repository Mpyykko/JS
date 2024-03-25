let pelaajaLista = [];
const pelaajasyotetty = document.getElementById('pelaajanaytto');
const pelaajatInput = document.getElementById('pelaajat');
const pelaajainfo = document.getElementById('pelaajainfo');




//////////////////////////////////////////////////////////////////////////////////////

function pelaajalisatty(toiminto) {
    const pelaajanNimi = pelaajatInput.value.trim(); 

    if (toiminto === 'lisaa') {
        // maksimipelaajamäärä 4
        if (pelaajaLista.length < 4) {
            if (pelaajanNimi !== '') {
                // luodaan pelaajista objekti
                const uusiPelaaja = { nimi: pelaajanNimi, pisteet: 0 };
                pelaajaLista.push(uusiPelaaja);
                naytaPelaajat();
            }
        } else {
            // ilmoitus jo pelaajat täynnä
            pelaajainfo.innerHTML = 'Pelaajat täynnä';
        }
    }

    naytaButtoni();

    pelaajatInput.value = ''; // Tyhjennä input-kenttä
}
//////////////////////////////////////////////////////////////////////////////////////

// Tällä funktiolla hallinnoidaan miten pelaajalista näytetään ruudulla

function naytaPelaajat() {
    // Tyhjennä pelaajasyöte
    pelaajasyotetty.innerHTML = '';
    
    // lisää pelaajan nimi näytölle
    pelaajaLista.forEach(function(pelaaja) {
        pelaajasyotetty.innerHTML += `<p>${pelaaja.nimi}</p>`;
    });
}

//////////////////////////////////////////////////////////////////////////////////////




// Aloita peli-painike tulee näkyviin vasta kun vähintään kaksi pelaajaa on syötetty 
function naytaButtoni() {
    const aloitaButton = document.getElementById('aloitapeli-button');
    if (pelaajaLista.length >= 2) {
        aloitaButton.style.display = 'block';
    } else {
        aloitaButton.style.display = 'none'; 
    }
}

//////////////////////////////////////////////////////////////////////////////////////

// siirtymä valikosta toiseen
function naytaToinenValikko() {
    // Piilota kotivalikko
    document.getElementById('aloitusnaytto').style.display = 'none';
    document.getElementById('noppanaytto').style.display = 'none';
    // Näytä toinen valikko
    document.getElementById('pelivalikko2').style.display = 'block';
}
//////////////////////////////////////////////////////////////////////////////////////

// 
let nykyinenPelaajaIndeksi = 0;

let kukaPelaa = document.getElementById('kukaPelaa-naytto');

function paivitaPelaajanNimi() {
    let pelaajienNimetJaPisteet = '';

    pelaajaLista.forEach(function(pelaaja, indeksi) {
        pelaajienNimetJaPisteet += `${pelaaja.nimi}: ${pelaaja.pisteet}<br>`;
        
        // Tarkistetaan, onko pelaaja nykyinen pelaaja ja päivitetään vuorossa olevan pelaajan nimi
        if (indeksi === nykyinenPelaajaIndeksi) {
            kukaPelaa.textContent = `Vuorossa: ${pelaaja.nimi}`;
        }
    });

    document.getElementById('pelaajan-pisteet').innerHTML = pelaajienNimetJaPisteet;
}

//////////////////////////////////////////////////////////////////////////////////////

function naytaPelikentta() {

    document.getElementById('tulosnaytto').innerHTML = "<img src='sikanoppa-kuvat/kuusi.png'>";

    

   
    // Näytetään vuorossa oleva pelaaja
    paivitaPelaajanNimi();
    // Piilota muut valikot
    document.getElementById('aloitusnaytto').style.display = 'none';
    document.getElementById('pelivalikko2').style.display = 'none';
    

    // Näytä toinen valikko
    document.getElementById('pelikentta').style.display = 'block';
    document.getElementById('noppanaytto').style.display = 'block';
}
//////////////////////////////////////////////////////////////////////////////////////



// yhden nopan pelin valinta
const yksiNoppa = document.getElementById('yhdellanopalla');
const kaksiNoppaa = document.getElementById('kahdellanopalla');
const seuraavaButton = document.getElementById('seuraava');

let onkoYksiNoppaaValittu = false;
let onkoKaksiNoppaaValittu = false;

function yksiNoppaaValittu() {
    if (!onkoKaksiNoppaaValittu) {
        if (!onkoYksiNoppaaValittu) {
            yksiNoppa.style.backgroundColor = 'rgb(13, 1, 85)';
            onkoYksiNoppaaValittu = true;
        } else {
            yksiNoppa.style.backgroundColor = '';
            onkoYksiNoppaaValittu = false;
        }
    }
    paivitaSeuraavaButton();
    
}

yksiNoppa.addEventListener('click', yksiNoppaaValittu);

// kahden nopan pelin valinta
function kaksiNoppaaValittu() {
    if (!onkoYksiNoppaaValittu) {
        if (!onkoKaksiNoppaaValittu) {
            kaksiNoppaa.style.backgroundColor = 'rgb(13, 1, 85))';
            onkoKaksiNoppaaValittu = true;
        } else {
            kaksiNoppaa.style.backgroundColor = '';
            onkoKaksiNoppaaValittu = false;
        }
    }
    paivitaSeuraavaButton();
}

kaksiNoppaa.addEventListener('click', kaksiNoppaaValittu);


//////////////////////////////////////////////////////////////////////////////////////

// seuraava-painikkeen päivitys

function paivitaSeuraavaButton() {
    if (onkoYksiNoppaaValittu || onkoKaksiNoppaaValittu) {
        seuraavaButton.disabled = false;
    } else {
        seuraavaButton.disabled = true;
    }
}

//////////////////////////////////////////////////////////////////////////////////////

// siirtymä kotivalikkoon
function naytaKotivalikko() {
    
    // tyhjennetään mahdolliset syötteet

    pelaajainfo.innerHTML = '';
    pelaajasyotetty.innerHTML = '';
    pelaajaLista = [];
    naytaButtoni();

    // piilota nykyinen valikko
    document.getElementById('pelivalikko2').style.display = 'none';
    // piilota nykyinen valikko
    document.getElementById('pelikentta').style.display = 'none';

    // Näytä kotivalikko
    document.getElementById('aloitusnaytto').style.display = 'block';

    document.getElementById('seuraava').disabled = true;
    yksiNoppa.style.backgroundColor = '';
    onkoYksiNoppaaValittu = false;

    kaksiNoppaa.style.backgroundColor = '';
    onkoKaksiNoppaaValittu = false;
    
}

//////////////////////////////////////////////////////////////////////////////////////


// muuttujia
const nopat = [1,2,3,4,5,6];
let noppienSummanaytto = document.getElementById('noppien-summa');
let noppienSumma = 0;

let pelajaanPisteNaytto = document.getElementById('pelaajan-pisteet');

let pistelista = [];





// yhden nopan heitto


let yhteispisteet = 0;


function heitaNoppaa() {
    noppaPyorii();
    paivitaPelaajanNimi();

    let indeksi = Math.floor(Math.random() * nopat.length);
    const tulos = nopat[indeksi];

    if (tulos === 1) {
        document.getElementById('tulosnaytto').innerHTML = "<img src='sikanoppa-kuvat/yksi.png'>";
    } else if (tulos === 2) {
        document.getElementById('tulosnaytto').innerHTML = "<img src='sikanoppa-kuvat/kaksi.png'>";
    } else if (tulos === 3) {
        document.getElementById('tulosnaytto').innerHTML = "<img src='sikanoppa-kuvat/kolme.png'>";
    } else if (tulos === 4) {
        document.getElementById('tulosnaytto').innerHTML = "<img src='sikanoppa-kuvat/nelja.png'>";
    } else if (tulos === 5) {
        document.getElementById('tulosnaytto').innerHTML = "<img src='sikanoppa-kuvat/viisi.png'>";
    } else {
        document.getElementById('tulosnaytto').innerHTML = "<img src='sikanoppa-kuvat/kuusi.png'>";
    }

    noppienSumma += tulos;

   
    
    // Näytä noppien summa

    
    setTimeout(naytaSumma, 900);

    if (noppienSumma > 1 && tulos === 1) {
        noppienSumma = 0;
        
        noppienSummanaytto.innerHTML = (`${pelaajaLista[nykyinenPelaajaIndeksi].nimi} sai ykkösen! <br> Pisteet: ${noppienSumma}`);
        

        // päivitä pelaajan vuoro
        nykyinenPelaajaIndeksi = (nykyinenPelaajaIndeksi + 1) % pelaajaLista.length;
        paivitaPelaajanNimi();

       
    }

    
   
}

let keraa = document.getElementById('eiheita');
keraa.addEventListener('click', function() {
    alaHeita();

    
    
});


//////////////////////////////////////////////////////////////////////////////////////

function naytaSumma(){
    noppienSummanaytto.innerHTML = (`Pisteet: ${noppienSumma}`);  
}

//////////////////////////////////////////////////////////////////////////////////////

// kerää-toiminto

function alaHeita(){
    // Lisätään noppien summa pelaajan pisteisiin, jos noppien summa on yli 1
    if (noppienSumma >1 ) {
        pelaajaLista[nykyinenPelaajaIndeksi].pisteet += noppienSumma;
        yhteispisteet += noppienSumma;

        if (pelaajaLista[nykyinenPelaajaIndeksi].pisteet >= 100) {
            gameOver();
          
        }

    }


    
    // Päivitä nykyisen pelaajan indeksi seuraavaan pelaajaan
    nykyinenPelaajaIndeksi = (nykyinenPelaajaIndeksi + 1) % pelaajaLista.length;

     
     paivitaPelaajanNimi();

      noppienSumma = 0;
      noppienSummanaytto.innerHTML = (`Pisteet: ${noppienSumma}`);


}



//////////////////////////////////////////////////////////////////////////////////////

// peli päättyy toiminto
function gameOver(){
    document.getElementById('tulosnaytto').innerHTML ='Voittaja on';
    document.getElementById('noppien-summa').innerHTML ='';
    document.getElementById('kukaPelaa-naytto').innerHTML ='';
    document.getElementById('voittajan-nimi').innerHTML =`<span class='voittaja'> <br> ${pelaajaLista[nykyinenPelaajaIndeksi].nimi}! </span>`;
    document.getElementById('eiheita').disabled = true;
    document.getElementById('heita').disabled = true;
    
    kukaPelaa.textContent ='';
    

   
}

//////////////////////////////////////////////////////////////////////////////////////

// uuden  pelin aloitus
function uusiPeli(){
    yhteispisteet = 0;
    noppienSummanaytto.innerHTML = '';
    noppienSumma = 0;

    pelaajaLista.forEach(function(pelaaja) {
        pelaaja.pisteet = 0;
    });

    nykyinenPelaajaIndeksi = 0;

    document.getElementById('pelaajan-pisteet').innerHTML = '';
    document.getElementById('tulosnaytto').innerHTML ='';
    document.getElementById('voittajan-nimi').innerHTML ='';

    document.getElementById('eiheita').disabled = false;
    document.getElementById('heita').disabled = false;

    paivitaPelaajanNimi();
  

 
}

//////////////////////////////////////////////////////////////////////////////////////
// animaatio nopille

function noppaPyorii() {
    let noppa = document.getElementById('tulosnaytto');
    noppa.style.animation = 'pyorahdys 1s ease';
    setTimeout(function() {
      noppa.style.animation = '';
    }, 1000);
  }

  //////////////////////////////////////////////////////////////////////////////////////




