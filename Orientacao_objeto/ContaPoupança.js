<<<<<<< HEAD
import { Conta } from "./Conta.js";

export class ContaPoupança extends Conta{

    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia);
    }

    sacar(valor) {
        const taxa = 1.02;
        return this._sacar(valor,taxa);
    }

=======
import { Conta } from "./Conta.js";

export class ContaPoupança extends Conta{

    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia);
    }

>>>>>>> 610ddbbf0c9dc94095c89620b52a7f988057ac9c
}