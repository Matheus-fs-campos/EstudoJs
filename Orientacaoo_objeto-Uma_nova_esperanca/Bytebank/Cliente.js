export class Cliente {
    constructor (nome, cpf){
        this._nome = nome;
        this._cpf = cpf;
    }

    setNome(nome){
        this._nome = nome;
    }

    setCpf(cpf){
        this._cpf = cpf;
    }

    getNome(){
        return this._nome;
    }

    getCpf(){
        return this._cpf;
    }
}