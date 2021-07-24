console.log('trabalhando com listas');

const salvador = 'Salvador';
const sp = 'São paulo';
const rj = 'rio de janerio';
const idadeComprador = 18;
const estaAcompanhada = true;
const temPassagemComprada = true;

const cidades = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);


cidades.push('Curitiba');
console.log(cidades);
cidades.splice(1, 1); /*contagem começa em 0*/
console.log(cidades);
console.log(cidades[2]);

if ((idadeComprador >= 18) || (estaAcompanhada == true)) {
    console.log("Boa viagem")
    cidades.splice(2)
    console.log(cidades);
}

/*else if (estaAcompanhada) {
    console.log("Esta acompanhado");
    cidades.splice(2);
    console.log(cidades);
}*/
else {
    console.log("menor de idade, nao pode vender");
}

/* == operador de igualdade */

console.log(idadeComprador == 18);
console.log(idadeComprador >= 5);
console.log(idadeComprador <= 50);

console.log("Embarque: \n\n");
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem")
}
else {
    console.log("nao pode embarcar")
}

