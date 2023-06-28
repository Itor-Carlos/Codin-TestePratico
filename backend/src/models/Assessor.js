// Assessor.js
const { EntitySchema } = require('typeorm');
const { Pessoa, PessoaSchema } = require('./Pessoa');

class Assessor extends Pessoa {
    constructor(nome, email, area) {
        super(nome, email);
        this.area = area;
    }
}

const AssessorSchema = new EntitySchema({
    name: 'Assessor',
    target: Assessor,
    extends: () => PessoaSchema,
    columns: {
        area: {
            type: 'varchar',
            length: 50,
            nullable: false,
        },
    },
});

module.exports = { Assessor, AssessorSchema };
