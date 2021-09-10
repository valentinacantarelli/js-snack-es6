// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

const mesi=["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"];
const a=parseInt(prompt("inserisci un numero tra 1 e 5"));
const b=parseInt(prompt("inserisci un numero tra 6 e 12"));


const mesiSezione=mesi.filter((mese,indice)=>{
    if(indice>=a && indice<=b){
        return true;
    }
    return false;
}
);

console.log(mesiSezione);