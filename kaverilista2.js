// Alustetaan kaverilista
let friendList = [];

// Tehdään funktio jolla hallinoidaan buttonien toimintoja
function manageFriend(toiminto) {

    const friendInput = document.getElementById('friendInput');
    const friendName = friendInput.value;

    // Jos syöte ei ole tyhjä, lisätään nimi listalle
    if (toiminto === 'add') {
        if (friendName !== '') {
            friendList.push(friendName);
        }
    // Poistetaan haluttu nimi
    } else if (toiminto === 'remove') {
        const indexToRemove = friendList.indexOf(friendName);
        if (indexToRemove !== -1) {
            friendList.splice(indexToRemove, 1);
        }
    // Järjestetään kaverilista
    } else if (toiminto === 'sort') {
        friendList.sort();
    }

    displayFriends();
    // Tyhjennetään lopuksi input seuraavaa syötettä varten
    friendInput.value = '';
}

// Tällä funktiolla hallinnoidaan miten kaverilista näytetään ruudulla
function displayFriends() {
    document.getElementById('friends2').innerHTML = 'Kaverisi:';
    const friends2 = document.getElementById('friends1');
    friends2.innerHTML = '';
    friendList.forEach((friend, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${friend}`;
        friends2.appendChild(listItem);
    });
}
