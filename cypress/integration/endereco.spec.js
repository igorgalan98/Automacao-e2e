/// <reference types="cypress" />
import EnderecoPage from '../support/page_objects/Endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('funcionalidade endereços - faturamento e entrega', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
    });

    afterEach(() => {
        cy.screenshot()
    });


    it('deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Uau', 'know', 'some', 'Brasil', 'more', '1232', 'Vannil', 'Sao Paulo', '02860-001', '12312341234', 'akali@thatgirl.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

    });

    it.only('deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email)

        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

})