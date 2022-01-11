import {Conta} from './Conta.js';
import {Cliente} from './Cliente.js';

const Paulo = new Cliente('Paulo', 42608540891);

const contaPaulo = new Conta(5000, Paulo, 1001);

console.log(contaPaulo);
console.log("\n");
contaPaulo.setSaldo(2000);
console.log(contaPaulo);
console.log("\n");
console.log(contaPaulo.getCliente());