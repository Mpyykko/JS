let kayttajanSyote = document.getElementById('syote');
let tulos = document.getElementById('muunnos');
const klikki = document.getElementById('klik');

function naytaMuunnos(){
    tulos.innerHTML = kayttajanSyote.value;
}

klikki.addEventListener('click', naytaMuunnos);