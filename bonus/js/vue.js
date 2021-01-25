// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// // Bonus: Aggiungere un’immagine presa anch’essa da un data assieme al valore alt dell'attributo. 
// Poi aggiungete all'immagine una classe sempre presa dal data.

var print = new Vue({
    el: '.element',
    data: {
    items:[
        {
            "user":"Luca",
            "email":"luca@gmail.com",
            "password":"luca",
            "stato":"on"
        },
        {
            "user":"Luca",
            "email":"luca@gmail.com",
            "password":"luca",
            "stato":"on"
        },
        {
            "user":"licci",
            "email":"licci@gmail.com",
            "password":"liccu",
            "stato":"on"
        },
        {
            "user":"Lorenzo",
            "email":"lorenzo@gmail.com",
            "password":"lore",
            "stato":"off"
        }
    ]

    },
    
    });