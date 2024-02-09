// luodaan array nimiä varten
const names = [];
// luodaan muuttuja joka pitää kirjaa syötetyistä nimistä käyttäjää varten 
let risingNumber = 1;

// funktio joka käy läpi toistaa 10 kertaa promptin ja lisää annetut nimet
// names-listaan huomioiden tyhjän syötteen

function friendlistv1(){
    while (risingNumber <=10) {
        let person = prompt(`Lisää ${risingNumber}. kaveri`);
        if (person === null) {
            break;
        }
        if (person.trim() === ''){
            alert('Ei voi antaa tyhjää');
            continue;
        }
        names.push(person);
        risingNumber++;
    }

    displayNames();
}
// funktio joka tulostaa listan näytölle
function displayNames() {

    const friendList = document.getElementById('friends1');
    friendList.innerHTML = '';
    // jos listalla on sisältöä, tulostetaan "Kaverisi:"
    if(names.length > 0){
        document.getElementById('kaverit').innerHTML = 'Kaverisi:';
    }
    // Iteroidaan names-arrays ja tulostetaan nimet ruudulle nätisti
    for (let i = 0; i < names.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `${i + 1}. ${names[i]}`;
        friendList.appendChild(listItem);
    }
}

