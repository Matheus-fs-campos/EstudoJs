export class Conta {
    constructor(saldo, cliente, agencia){
        this._saldo = saldo;
        this._cliente = cliente;
        this._agencia = agencia;
        //ContaCorrente.numeroDeContas += 1;
    }


    sacar(valor){
        let valorSacado = 0;
        let taxa = 1;
        valorSacado = taxa*valor;

        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }

    depositar(valor){
        if(valor <= 100)
        {
            return;
        } 
        this._saldo += valor;           
    }

    tranferir(valor, conta){
        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}