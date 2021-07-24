console.log('trabalhando com listas');

const salvador = 'Salvador';
const sp = 'São paulo';
const rj = 'rio de janerio';
const idadeComprador = 18;
const estaAcompanhada = true;
let temPassagemComprada = true;
const destino = "Rio de Janeiro"

const cidades = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);


cidades.push('Curitiba');
console.log(cidades);
console.log(cidades);

const podeComprar = (idadeComprador >= 18) || (estaAcompanhada == true) == true;

let contador = 0;

while (contador < 4){
    if (cidades[contador] == destino){
        console.log(cidades[contador]+" é um destino existente")
        break;
    }
    contador += 1;
}

for(let cont = 0; cont <= 3 ; cont++){
    console.log(cont);
}