// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const biciCorsa=[
    {
    "nome":"rossa",
    "peso":9
},
{
    "nome":"verde",
    "peso":12
},
{
    "nome":"bianchi",
    "peso":17
},
{
    "nome":"blu",
    "peso":15
}

];
let biciLeggera=biciCorsa[0];
for(let i=0;i<biciCorsa.length;i++){
    if(biciCorsa[i].peso<biciLeggera.peso){
        biciLeggera=biciCorsa[i];
    };
}
const{nome,peso}=biciLeggera;
console.log(`la bici piu leggera è ${nome} e pesa ${peso}kg`);