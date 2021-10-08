//# para variáveis privadas, só funciona no node js 13 ou superior
//_ usado convenção da comunidade para indicar que aquela propriedade é privada, mesmo q ela não seja de fato

import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupança } from "./ContaPoupança.js";
//const cliente1 = new Cliente();
//cliente1.nome = "Ricardo";
//cliente1.cpf = 11122233309;
const cliente1 = new Cliente("Ricardo", "12345678988");

let numeroDeContas = 0;

const contaCorrenteRicardo = new ContaCorrente(0, cliente1, 1001);

const contaPoupanca = new ContaPoupança(50, cliente1, 1001);

contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

console.log(contaPoupanca);
console.log("\n");
console.log(contaCorrenteRicardo);
console.log("\n");




/*contaCorrenteRicardo.depositar(-1);
contaCorrenteRicardo.depositar(100);
let valorSacado = contaCorrenteRicardo.sacar(50);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.transferir(200,contaCorrenteAlice);

console.log("O valor sacado foi:"+valorSacado);
console.log(contaCorrenteRicardo);
console.log(contaCorrenteAlice);*/
