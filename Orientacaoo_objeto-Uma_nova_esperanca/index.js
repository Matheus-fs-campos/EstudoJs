import {Cliente} from "./Cliente.js";
import {Conta} from "./Conta.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const cliente2 = new Cliente("Ana", 99922233309);

const contaCorrenteRicardo = new Conta(0, cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupancaAna = new Conta(100, cliente2, 1001);
contaPoupancaAna.depositar(7000);
contaPoupancaAna.sacar(1000);

let valor = 200;
contaCorrenteRicardo.tranferir(valor, contaPoupancaAna);

console.log(contaCorrenteRicardo);
console.log("\n");
console.log(contaPoupancaAna);