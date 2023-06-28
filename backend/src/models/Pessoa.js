// Pessoa.js
const { EntitySchema } = require('typeorm');

class Pessoa {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }

    getId(){
        return this.id;
    }

    getNome(){
        return this.nome;
    }

    setNome(nome){
        this.nome = nome;
    }

    getEmail(){
        return this.email;
    }

    setEmail(email){
        return this.email = email;
    }
}

const PessoaSchema = new EntitySchema({
    name: 'Pessoa',
    target: Pessoa,
    columns: {
        id: {
            primary: true,
            generated: true,
            type: 'int',
        },
        nome: {
            type: 'varchar',
            length:45,
            nullable: false,
        },
        email: {
            type: 'varchar',
            length: 45,
            nullable: false,
        },
    },
});

module.exports = { Pessoa, PessoaSchema };
