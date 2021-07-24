console.log('trabalhando com listas');

const salvador = 'Salvador';
const sp= 'São paulo';
const rj ='rio de janerio';

const cidades = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);


cidades.push('Curitiba');
console.log(cidades);
cidades.splice(1,1); /*contagem começa em 0*/
console.log(cidades);
console.log(cidades[2]);

