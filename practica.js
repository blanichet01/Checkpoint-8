const miLista = ["velma", "exploradora", "jane", "john", "harry"];

for ( i=0; i < miLista.length; i++){
  console.log(miLista[i]);
}

console.log('------------------');

var cont = 0;
while(cont < miLista.length){
  
  console.log(miLista[cont]);
  cont++;
}

console.log('------------------');

helloWorld = () => {console.log("Hola Mundo");} 

helloWorld(); 