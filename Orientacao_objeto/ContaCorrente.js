
export class ContaCorrente {
    agencia;
    cliente;


    _saldo = 0; //inicialização


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