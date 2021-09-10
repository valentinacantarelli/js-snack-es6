// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadre=[
    {
        "nome":"inter",
        "puntiFatti":0,
        "falliSubiti":0
    },
    {
        "nome":"milan",
        "puntiFatti":0,
        "falliSubiti":0
    },
    {
        "nome":"juve",
        "puntiFatti":0,
        "falliSubiti":0
    },
    {
        "nome":"roma",
        "puntiFatti":0,
        "falliSubiti":0
    },
];

const random=(min,max)=>Math.floor(Math.random() * (max - min + 1) ) + min;
// let puntiFatti=random(1,20);
// let falliSubiti=random(1,40);


for(var i=0;i<squadre.length;i++){
    squadre[i].puntiFatti=random(1,20);
    squadre[i].falliSubiti=random(1,40);
}
     
const squadreeFallisubiti=[];
for(var i=0;i<squadre.length;i++){
    const{nome,falliSubiti}=squadre[i];
    const nuovoOggettoSquadre={
        nome,
        falliSubiti
    };
    squadreeFallisubiti.push(nuovoOggettoSquadre);
}
 
console.log(squadreeFallisubiti);