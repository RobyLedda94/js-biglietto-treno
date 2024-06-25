// Messaggio alert di prova
alert("Javascript calcolo biglietto treno");


// CHIEDIAMO AL CLIENTE QUANTI KILOMETRI DEVE PERCORRERE

let distanza = parseInt(prompt('Quanti km devi percorrere'));
console.log(distanza);


// CHIEDIAMO L'ETA' AL CLIENTE

let eta = parseInt(prompt('Quanti anni hai?'));
console.log(eta);


// COSTO DEL BIGLIETTO PER KM

let costo = 0.21;
console.log(costo);

// CALCOLO COSTO DEL BIGLIETTO

let costoIniziale = distanza * costo;
console.log(costoIniziale);


// APPLICAZIONE SCONTO IN BASE ALL'ETA'

let sconto = 0;

if (eta < 18){
    sconto = 20;


} else if (eta > 65){
    sconto = 40;
}


// CALCOLO DELLO SCONTO

let prezzoScontato = (costoIniziale * sconto) / 100;
console.log(prezzoScontato);


// CALCOLO DEL PREZZO FINALE

let prezzoFinale = costoIniziale - prezzoScontato;
console.log(prezzoFinale);




