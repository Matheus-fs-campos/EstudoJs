/* Ser autenticavel significa ter o metodo autenticar 
Ducktype aparece muito em iguagens fracamente tipadas 

*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if (SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && 
        autenticavel.autenticar instanceof Function;//as alocações de memoria são feitas através do par chave-valor, ai podemos procurar um metodo através desse operador in

    }
}