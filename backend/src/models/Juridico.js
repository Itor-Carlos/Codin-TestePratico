// Juridico.js
const { EntitySchema } = require('typeorm');
const { Pessoa, PessoaSchema } = require('./Pessoa');

class Juridico extends Pessoa {
    constructor(nome, email, area, especialidade) {
        super(nome, email, area);
        this.especialidade = especialidade;
    }
}

const JuridicoSchema = new EntitySchema({
    name: 'Juridico',
    target: Juridico,
    extends: () => PessoaSchema,
    columns: {
        especialidade: {
            type: 'varchar',
            length: 45,
            nullable: false,
        },
    },
});

module.exports = { Juridico, JuridicoSchema };
