document.getElementById('muunto').addEventListener('click', function(event) {
    event.preventDefault();
    // tallennetaan käyttäjän syöte muuttujaksi
    let syote = document.getElementById('asteet');
    // putsataan syote mahdollisten virheiden varalta
    let syoteArvo = syote.value.trim();

    // luodaan muuttuja tyhjennysbuttonille
    const button2 = document.getElementById('nollaa');
    
    
    


    // nollataan tietyt valinnat tyhjennä-buttonilla
    button2.addEventListener('click', function() {
        syote.value = '';
        document.getElementById('tulos').innerHTML = '';
        document.getElementById('abso').innerHTML = '';
        document.getElementById('valitse').selectedIndex = 0;

        let desimaalit = document.getElementsByName('desimaalit');
            for (var i = 0; i < desimaalit.length; i++) {
        desimaalit[i].checked = false;
    }

        return;
    
});



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
        muunnettuLuku = (syotettyLuku * 9/5 ) + 32;
    } else {
        muunnettuLuku = (syotettyLuku - 32 ) * 5/9;
    }
    
    // tähän vielä desimaalille vaihtoehdot
    let valittuDesimaaliElementti = document.querySelector('input[name="desimaalit"]:checked');

    if (valittuDesimaaliElementti) {
        // haetaan valitun desimaanlin id ja muunnetaan tallennettu arvo
        let valittuDesimaali = valittuDesimaaliElementti.id;
        let tallennettuArvo;

        if (valittuDesimaali === 'yksi') {
            tallennettuArvo = 1;
        } else if (valittuDesimaali === 'kaksi') {
            tallennettuArvo = 2;
        } else if (valittuDesimaali === 'kolme') {
            tallennettuArvo = 3;
        } else {
            tallennettuArvo = 0;
        }
        
    

       
        
        // absoluuttinen nollapisteen tarkistus
        if (muunnettuLuku > -273.15) {
            document.getElementById('tulos').innerHTML = muunnettuLuku.toFixed(tallennettuArvo).slice(0, 10); // maksimi merkkimäärä 10
        } else {
            document.getElementById('tulos').innerHTML = muunnettuLuku.toFixed(tallennettuArvo).slice(0, 10);
            document.getElementById('abso').innerHTML = 'Kylmempi kuin absoluuttinen nollapiste (273,15 C)!';
        }
    } else {
        // jos desimaalia ei ole valittu, näytetään alert
        alert('Valitse desimaalimäärä!');
    }
});

