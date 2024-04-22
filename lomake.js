// lomakkeen tyhjennys
function tyhjenna() {
    document.getElementById('lomake').reset();
    document.getElementById('lahetysviesti').innerHTML = '';

  }
// käyttäjänimen tarkistus
function kayttajanimenTarkistus(kayttaja){
    return kayttaja.length >=6;

  }
// salasanan tarkistus
function salasananTarkistus(salasana1) {
    // pituus vähintään 6 merkkiä, sisältääkö numeron,   sisältääkö kirjaimen,      sisältääkö ison kirjaimen   sisältääkö erikoismerkin
    if (salasana1.length >= 6 && /\d/.test(salasana1) && /[a-z]/.test(salasana1) && /[A-Z]/.test(salasana1) && /[!@£$€&%#]/.test(salasana1)) {
        return true;
    } else {
        return false;
    }
}

// täsmääkö salasanat

function salasananVarmistus(salasana1, salasana2){
    return salasana1 === salasana2;
}

// postinumeron tarkistus
function postinumeronTarkistus(postinumero){
    return postinumero.length === 5;

}

// sahköpostin tarkistus

function sahkopostinTarkistus(sahkoposti){
    return sahkoposti.includes('@.');

}

// pakollisten kenttien tarkistus

function pakollisetKentat(){
    // muuttujat
    let kayttaja = document.getElementById('kayttaja').value;
    let salasana1 = document.getElementById('salasana1').value;
    let salasana2 = document.getElementById('salasana2').value;
    let nimi = document.getElementById('nimi').value;
    let osoite = document.getElementById('osoite').value;
    let postinumero = document.getElementById('postinumero').value;
    let sahkoposti = document.getElementById('email').value;
    let nainen = document.getElementById('nainen');
    let mies =  document.getElementById('mies');
    let suomi = document.getElementById('suomi');
    let muuKieli = document.getElementById('muukieli');
    let maaValinta = document.getElementById('maa');



    // tarkistetaan onko pakolliset tyhjiä, jos joku on tyhjä niin palautetaan false
    if(kayttaja === '' || salasana1 ==='' || salasana2 ===''|| nimi ===''|| osoite ===''|| postinumero === ''|| sahkoposti ===''|| maaValinta.value === 'valinta'){
        document.getElementById('lahetysviesti').innerHTML = 'Tarkista pakolliset kentät';
        return false
    }
    // onko sukupuoli valittuna
    if (!nainen.checked && !mies.checked) {
        return false;
    }
    // onko kieli valittuna
    if (!suomi.checked && !muuKieli.checked) {
        return false;
    }

    return true;

}


// lomakkeen tarkistus (Pääohjelma)

  function kasitteleLomake(event) {
    event.preventDefault();
    // muuttujat
    let kayttaja = document.getElementById('kayttaja').value;
    let salasana1 = document.getElementById('salasana1').value;
    let salasana2 = document.getElementById('salasana2').value;
    let postinumero = document.getElementById('postinumero').value;
    let sahkoposti = document.getElementById('email').value;

    if (!pakollisetKentat()) {
        document.getElementById('lahetysviesti').innerHTML = 'Tarkista pakolliset kentät';
    }
    
    
    else if (!salasananTarkistus(salasana1)) {
        document.getElementById('lahetysviesti').innerHTML = 'Tarkista salasana. Salasanassa tulee olla vähintään 6 merkkiä ja sen täytyy sisältää vähintään 1 iso kirjain, 1 numero ja jokin erikoismerkki "!@£$€&%#"';
        document.getElementById('salasana1').value = '';
        document.getElementById('salasana2').value = ''; 
    }

    else if (!salasananVarmistus(salasana1, salasana2)) {
        document.getElementById('lahetysviesti').innerHTML = 'Salasanat eivät täsmää';
        document.getElementById('salasana1').value = '';
        document.getElementById('salasana2').value = ''; 
    }


    else if (!postinumeronTarkistus(postinumero)) {
        document.getElementById('lahetysviesti').innerHTML = 'Virheellinen postinumero';
    }

    else if (!sahkopostinTarkistus(sahkoposti)) {
        document.getElementById('lahetysviesti').innerHTML = 'Virheellinen sähköpostiosoite';
    }

    
    else if (!kayttajanimenTarkistus(kayttaja)) {
        document.getElementById('lahetysviesti').innerHTML = 'Liian lyhyt käyttäjätunnus';
        document.getElementById('kayttaja').value = ''; 
    }

    else{
        
        document.getElementById('lahetysviesti').innerHTML = 'Rekisteröityminen onnistui!';
        document.getElementById('lomake').reset();  
    }
  }







