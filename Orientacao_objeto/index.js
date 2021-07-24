//# para variáveis privadas, só funciona no node js 13 ou superior
//_ usado convenção da comunidade para indicar que aquela propriedade é privada, mesmo q ela não seja de fato
class Cliente {
    nome;
    cpf;
};

class ContaCorrente {
    agencia;
    #saldo = 0; //inicialização

    sacar(valor){
        if (this.#saldo>=valor){
            this.#saldo-=valor;
        } else {
            console.log("Sem #saldo");
        }
    }
    
    depositar(valor){
        if (valor >0){
            this.#saldo+=valor;
        } else {
            console.log("Valor negativo")
        }
    }
};

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 11122244409;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.#saldo = 0;
contaCorrenteRicardo.depositar(200);
contaCorrenteRicardo.agencia = 1001;
console.log(contaCorrenteRicardo.#saldo);
contaCorrenteRicardo.depositar(100);
console.log(contaCorrenteRicardo.#saldo);
contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo);

