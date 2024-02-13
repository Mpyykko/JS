document.getElementById('muunna').addEventListener('click', function(event) {
    event.preventDefault();
    // tallennetaan käyttäjän syöte muuttujaksi
    let syote = document.getElementById('asteet');
    // putsataan syote mahdollisten virheiden varalta
    let syoteArvo = syote.value.trim();

    // tarkistetaan että syöte ei ole tyhjä tai ei-numeraalinen
    if (syoteArvo === '' || isNaN(syoteArvo)) {
        alert('Syötä numero!');
        // jos virheellinen syöte, nollataan input-kenttä
        syote.value = '';
        return;
    }

    // Muunnetaan syöte numeroksi
    let syotettyLuku = parseFloat(syoteArvo);

    // alustetaan muunnettu luku
    let muunnettuLuku;
    // määritellään mihin muutetaan
    if (document.getElementById('valitse').value === 'celsius') {
        muunnettuLuku = (syotettyLuku * 1.8) + 32;
    } else {
        muunnettuLuku = (syotettyLuku - 32) * 1.8; 
    }
    
    // tähän vielä desimaalille vaihtoehdot
    // miten napataan valittu desimaali muuttujaksi?
    let valittuDesimaali = 3;

    if (muunnettuLuku > -273.15){

        document.getElementById('tulos').innerHTML = muunnettuLuku.toFixed(valittuDesimaali);
    }
    // tähän joku muutos vielä
    else{
        document.getElementById('tulos').innerHTML = muunnettuLuku.toFixed(valittuDesimaali);
        document.getElementById('abso').innerHTML = ('Kylmempi kuin absoluuttinen nollapiste (-273,15)!');
    }
});
