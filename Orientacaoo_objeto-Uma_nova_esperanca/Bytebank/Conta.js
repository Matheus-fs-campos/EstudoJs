export class Conta{
    constructor(saldo, cliente, agencia){
        this._saldo = saldo;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    setSaldo(saldo){
        this._saldo = saldo;
    }

    setCliente(cliente){
        this._cliente = cliente;
    }

    setAgencia(agencia){
        this._agencia = agencia
    }

    getSaldo(){
        return this._saldo;
    }

    getCliente(){
        return this._cliente
    }

    getAgencia(){
        return this._agencia;
    }

}