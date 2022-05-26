// Descrizione:
// Rifare l’esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
//  - text, una stringa che indica il testo del todo
//  - done, un booleano (true/false) che indica se il todo è stato fatto oppure no

// MILESTONE 1
// Stampare all’interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”: 
// cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, 
// che quindi viene aggiunto alla lista dei todo esistenti.

// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente 
//    (se done era uguale a false, impostare true e viceversa) ;
// 3 - migliorare il layout, visto che è a vostra libera interpretazione.


const toDoList = new Vue ({

    el : "#myList",

    data : {

        toDo : [

            {
                text : "Svegliarsi e fare la doccia",
                done : true
            },

            {
                text : "Accendere il computer",
                done : true
            },

            {
                text : "Preparare la colazione",
                done : false
            },

            {
                text : "Seguire lezione Boolean",
                done : true
            },

            {
                text : "Preparare il pranzo",
                done : true
            },

            {
                text : "Lavare i piatti",
                done : false
            },

            {
                text : "Studiare e svolgere esercizio pomeridiano",
                done : false
            },
        ],

        anotherDo : "",
    },

    methods : {

        removeItemList(i){
            this.toDo.splice(i, 1);
        },

        addToDo : function(){
            if (this.anotherDo !== "") {
                this.toDo.push({text: this.anotherDo, done: false})
            }
            this.anotherDo = "";
        },

        changeDone(i) {
            if (this.toDo[i].done === false){
                this.toDo[i].done = true;
            } else {
                this.toDo[i].done = false;
            }
        },

        // metodo alternativo
        // in html: @click="changeDone(item)"
        // in js: 
        //       changeDone(elem) {
        //          if (elem.done === false){
        //              elem.done = true;
        //          } else {
        //              elem.done = false;
        //          }
        //}
    }

})