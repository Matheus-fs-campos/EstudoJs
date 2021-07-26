//# para variáveis privadas, só funciona no node js 13 ou superior
//_ usado convenção da comunidade para indicar que aquela propriedade é privada, mesmo q ela não seja de fato

import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
//const cliente1 = new Cliente();
//cliente1.nome = "Ricardo";
//cliente1.cpf = 11122233309;
const cliente1 = new Cliente("Ricardo", "12345678988");
const cliente2 = new Cliente("Alice", "42699940877");

let numeroDeContas = 0;

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);

const contaCorrenteAlice = new ContaCorrente(cliente2, 1001);
const contaCorrentelbice = new ContaCorrente(cliente2, 1001);
const contaCorrentelince = new ContaCorrente(cliente2, 1001);
const contaCorrentelicne = new ContaCorrente(cliente2, 1001);
const contaCorrentelicve = new ContaCorrente(cliente2, 1001);
const contaCorrentelivce = new ContaCorrente(cliente2, 1001);


console.log(contaCorrenteRicardo);
console.log("\n");
console.log(contaCorrenteAlice);
console.log("\n");
console.log(ContaCorrente.numeroDeContas);




/*contaCorrenteRicardo.depositar(-1);
contaCorrenteRicardo.depositar(100);
let valorSacado = contaCorrenteRicardo.sacar(50);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.transferir(200,contaCorrenteAlice);

console.log("O valor sacado foi:"+valorSacado);
console.log(contaCorrenteRicardo);
console.log(contaCorrenteAlice);*/
