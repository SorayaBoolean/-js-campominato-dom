const startDom = document.getElementById ('start');
startDom.addEventListener ('click',
    function () {
        //prendo gridDom
const gridDom = document.getElementById ('grid')


//creo 100 square con ciclo for:

for (let i = 1; i <= 100 ; i++) {
   
    //creo un quadrato 
    const currentElement = createGridSquare (i);
   
     //evoco la funzione che mi genera sedici bombe random
     const BombeRandom = GeneraBombeCasuali (1, 16);

    //aggiungo event listner per click   
    currentElement.addEventListener ('click',
    function () {
            this.classList.toggle ('clicked');
            console.log(i);
        }
    );
    
    //lo aggiungo alla griglia
        gridDom.append (currentElement); 
}


    }
);










//Sezione funzioni:

//1. funzione che mi crea il grid con square
function createGridSquare (numero) {
    const currentElement = document.createElement ('div');
    currentElement.classList.add ('square');
    currentElement.append(numero)

   //metto questo ultimo elemento con classe square-div dentro i div con classe square
    return currentElement;
}



//2. funzione per creare 16 numeri casuali (bombe)


function GeneraBombeCasuali (){
        
}







