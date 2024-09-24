
class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    fazerSom() {
        console.log(`${this.nome} está fazendo um som.`);
    }

    descrever() {
        console.log(`${this.nome} tem ${this.idade} anos.`);
    }
}


class Cachorro extends Animal {
    constructor(nome, idade, raca) {
        super(nome, idade);
        this.raca = raca;
    }

    fazerSom() {
        console.log(`${this.nome} está latindo!`);
    }

    mostrarRaca() {
        console.log(`${this.nome} é da raça ${this.raca}.`);
    }
}


class Gato extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade);
        this.cor = cor;
    }

    fazerSom() {
        console.log(`${this.nome} está miando!`);
    }

    mostrarCor() {
        console.log(`${this.nome} tem a cor ${this.cor}.`);
    }
}


const cachorro1 = new Cachorro("Rex", 5, "Labrador");
const cachorro2 = new Cachorro("Thor", 3, "Golden Retriever");
const gato1 = new Gato("Mia", 2, "Preto");


cachorro1.fazerSom();
cachorro2.mostrarRaca();
gato1.mostrarCor();

cachorro1.descrever();
gato1.fazerSom();
