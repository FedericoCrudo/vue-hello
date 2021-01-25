// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// // Bonus: Aggiungere un’immagine presa anch’essa da un data assieme al valore alt dell'attributo. 
// Poi aggiungete all'immagine una classe sempre presa dal data.

var print = new Vue({
    el: '.print',
    data: {
    message: 'Hello World',
    src:'img/immagine.jpg',
    alt:'immagine-prova'
    },
    });