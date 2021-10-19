<<<<<<< HEAD
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {

    static numeroDeContas=0;
   
    constructor(saldoInicial,cliente, agencia){
        super(saldoInicial, cliente, agencia); 
        ContaCorrente.numeroDeContas += 1;
    }  
    //sobrescrevendo o comportamento de sacar da classe mãe
    sacar(valor) {
        const taxa = 1.1;
        return this._sacar(valor,taxa);
    }

=======
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {

    static numeroDeContas=0;
   
    constructor(saldoInicial,cliente, agencia){
        super(saldoInicial, cliente, agencia); 
        ContaCorrente.numeroDeContas += 1;
    }   
>>>>>>> 610ddbbf0c9dc94095c89620b52a7f988057ac9c
}