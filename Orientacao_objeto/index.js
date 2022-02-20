//# para variáveis privadas, só funciona no node js 13 ou superior
//_ usado convenção da comunidade para indicar que aquela propriedade é privada, mesmo q ela não seja de fato

import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta/Conta.js";
import {Gerente} from "./Funcionarios/Gerente.js";
import {Diretor} from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./Conta/SistemaAutenticacao.js";
import {Funcionario} from "./Funcionarios/Funcionario.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupança } from "./Conta/ContaPoupança.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

const diretor = new Diretor("Rodrigo",10000,12345678900);
const gerente = new Gerente("Ricardo",5000,12345678901);
diretor.cadastrarSenha("123456789");
gerente.cadastrarSenha("987654321");
const estaLogadaDiretor = SistemaAutenticacao.login(diretor, "123456789");
const estaLogadaGerente = SistemaAutenticacao.login(gerente, "987654321");
console.log("Diretor esta logado: " + estaLogadaDiretor);
console.log("Gerente esta logado: " + estaLogadaGerente);



// -------------------------ÁREA DE CLIENTES------------------------
// //const cliente1 = new Cliente();
// //cliente1.nome = "Ricardo";
// //cliente1.cpf = 11122233309;
// const cliente1 = new Cliente("Ricardo", "12345678988");

// let numeroDeContas = 0;

// const contaCorrenteRicardo = new ContaCorrente(0, cliente1, 1001);

// const contaPoupanca = new ContaPoupança(50, cliente1, 1001);

// const contaSalario = new ContaSalario(cliente1);

// contaCorrenteRicardo.depositar(500);
// contaCorrenteRicardo.sacar(100);
// contaPoupanca.sacar(10);
// //let conta = new Conta(0, cliente1, 1001);
// contaSalario.depositar(100);
// contaSalario.sacar(10);
// //console.log(conta);
// //console.log(contaPoupanca);
// console.log(contaSalario);
// /*console.log("\n");
// console.log(contaCorrenteRicardo);
// console.log("\n");*/

// /*contaCorrenteRicardo.teste();*/



// /*contaCorrenteRicardo.depositar(-1);
// contaCorrenteRicardo.depositar(100);
// let valorSacado = contaCorrenteRicardo.sacar(50);
// contaCorrenteRicardo.depositar(500);
// contaCorrenteRicardo.transferir(200,contaCorrenteAlice);

// console.log("O valor sacado foi:"+valorSacado);
// console.log(contaCorrenteRicardo);
// console.log(contaCorrenteAlice);*/
