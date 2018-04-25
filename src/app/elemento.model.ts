export class Elemento {
    nome: string;
    id: string;
    status: Boolean = false;
    constructor(nome, id, status){
        this.nome = nome;
        this.id = id;
        this.status = status;
    }
}