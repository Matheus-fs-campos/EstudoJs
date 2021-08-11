import { Cliente } from "./Cliente.js";

export class ContaCorrente {

    static numeroDeContas=0;
    agencia;


    _cliente;
    _saldo = 200; //inicialização


    set cliente(novoValor){
        if (novoValor instanceof Cliente){
            this._cliente = novoValor;
        }

    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }   

    sacar(valor){
        if (this._saldo>=valor){
            this._saldo-=valor;
            return valor;
        } else {
            console.log("Sem _saldo");
        }
    }
    
    depositar(valor){
        if (valor <=0){
            console.log("Valor negativo")
            return;
        } else {
            this._saldo+=valor;
        }
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valor);
    }
};