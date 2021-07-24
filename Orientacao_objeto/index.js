//# para variáveis privadas, só funciona no node js 13 ou superior
//_ usado convenção da comunidade para indicar que aquela propriedade é privada, mesmo q ela não seja de fato

import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 11122244409;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.agencia = 1001;
contaCorrenteAlice.cliente = cliente2;

const contaCorrenteJoao = new ContaCorrente();
contaCorrenteJoao.cliente = new Cliente();
contaCorrenteJoao.agencia = 1001;
contaCorrenteJoao.cliente.nome="Joao";
contaCorrenteJoao.cliente.cpf=12345678900;

console.log(contaCorrenteJoao.cliente);




/*contaCorrenteRicardo.depositar(-1);
contaCorrenteRicardo.depositar(100);
let valorSacado = contaCorrenteRicardo.sacar(50);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.transferir(200,contaCorrenteAlice);

console.log("O valor sacado foi:"+valorSacado);
console.log(contaCorrenteRicardo);
console.log(contaCorrenteAlice);*/
