<<<<<<< HEAD
//Classe abstrata, não pode ser construida apenas herdada
export class Conta {

    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta){
           throw new Error("você não deveria instanciar um obj do tipo conta diretamente: Classe abstrata");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        console.log(this.constructor);
    }

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

    //metodo abstrato feito para ser sobrescrito, toda classe q herda de conta tem q ter o metodo sacar
    sacar(valor) {
        throw new Error("O método sacar da conta é abstrato");
    }

    _sacar(valor,taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        } else {
            return 0;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            console.log("Valor negativo")
            return;
        } else {
            this._saldo += valor;
        }
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valor);
    }

}
=======
export class Conta {

    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

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


    sacar(valor) {
        let taxa = 1;
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        } else {
            console.log("Sem _saldo");
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            console.log("Valor negativo")
            return;
        } else {
            this._saldo += valor;
        }
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valor);
    }

}
>>>>>>> 610ddbbf0c9dc94095c89620b52a7f988057ac9c
