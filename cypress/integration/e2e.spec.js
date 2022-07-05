/// <reference types="cypress" />
import EnderecoPage from '../support/page_objects/Endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/produtos/page/9')
    });

    it('Deve adicionar produtos ao carrinho - Usando comando customizado', () => {
        cy.addProdutos('Bruno Compete Hoodie', 'XL', 'Blue', 4)
    });

})