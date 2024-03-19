let pelaajaLista = [];
const pelaajasyotetty = document.getElementById('pelaajanaytto');
const pelaajatInput = document.getElementById('pelaajat');




//////////////////////////////////////////////////////////////////////////////////////

function pelaajalisatty(toiminto) {
    const pelaajanNimi = pelaajatInput.value;
    

    if (toiminto === 'lisaa') {
        // Tarkista, onko jo lisätty neljä pelaajaa
        if (pelaajaLista.length < 4) {
            // Lisää pelaaja listaan, jos neljä pelaajaa ei ole vielä saavutettu
            if (pelaajanNimi.trim() !== '') {
                pelaajaLista.push(pelaajanNimi);
                naytaPelaajat();
                console.log(pelaajaLista);
            }
        } else {
            // Näytä viesti, jos pelaajien enimmäismäärä on saavutettu
            pelaajainfo.innerHTML = 'Pelaajat täynnä';
        }
    }

    naytaButtoni();

    pelaajatInput.value = ''; // Tyhjennä input-kenttä
}
//////////////////////////////////////////////////////////////////////////////////////



// Tällä funktiolla hallinnoidaan miten pelaajalista näytetään ruudulla
function naytaPelaajat() {
    pelaajasyotetty.innerHTML = 'Pelaajat:';

    pelaajaLista.forEach((pelaajanNimi, index) => {
        const pelaajaP = document.createElement('p');
        pelaajaP.textContent = `${index + 1}. ${pelaajanNimi}`;
        pelaajaP.classList.add('pelaaja-nimi');
        pelaajasyotetty.appendChild(pelaajaP);
    });  
}

//////////////////////////////////////////////////////////////////////////////////////


// Aloita peli-painike tulee näkyviin vasta kun vähintään kaksi pelaajaa on syötetty 
function naytaButtoni() {
    const aloitaButton = document.getElementById('aloitapeli-button');
    if (pelaajaLista.length >= 2) {
        aloitaButton.style.display = 'block'; // Näytä nappi
    } else {
        aloitaButton.style.display = 'none'; // Piilota nappi
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

    kukaPelaa.innerHTML  = `Vuorossa: ${pelaajaLista[nykyinenPelaajaIndeksi]}`;
}

//////////////////////////////////////////////////////////////////////////////////////

function naytaPelikentta() {

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
            yksiNoppa.style.backgroundColor = 'rgb(127, 25, 25)';
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
            kaksiNoppaa.style.backgroundColor = 'rgb(127, 25, 25)';
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
// uuden  pelin aloitus
function uusiPeli(){
    naytaKotivalikko();
    document.getElementById('aloitusnaytto').style.display = 'block';

    // pelimuodon valinnat nollataan
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

    document.getElementById('pelaajan-pisteet').innerHTML =(`Pelaaja: 0`);
    

    noppienSumma += tulos;
    if(noppienSumma !=1){

        yhteispisteet += noppienSumma;
    }

    if (noppienSumma > 1 && tulos === 1) {
        noppienSumma = 0;
        noppienSummanaytto.innerHTML = (`Sait ykkösen! <br> ${noppienSumma}`);

        // päivitä pelaajan vuoro
        nykyinenPelaajaIndeksi = (nykyinenPelaajaIndeksi + 1) % pelaajaLista.length;
        paivitaPelaajanNimi();
    }

    naytaSumma();
    

    


}


//////////////////////////////////////////////////////////////////////////////////////

function naytaSumma(){
    noppienSummanaytto.innerHTML = (`Summa: ${noppienSumma}`);
    if(noppienSumma >= 100){
        noppienSummanaytto.innerHTML = 'Sata ylitetty!'
        return;
    }
}

//////////////////////////////////////////////////////////////////////////////////////

// kerää-toiminto



let keraa = document.getElementById('eiheita');
keraa.addEventListener('click', function() {
    alaHeita();
   
});

function alaHeita(){
    
    nykyinenPelaajaIndeksi = (nykyinenPelaajaIndeksi + 1) % pelaajaLista.length;
    paivitaPelaajanNimi();
    noppienSumma = 0;
    
    naytaSumma();
    
    document.getElementById('pelaajan-pisteet').innerHTML =(`Pelaaja: ${yhteispisteet}`);


}

//////////////////////////////////////////////////////////////////////////////////////







