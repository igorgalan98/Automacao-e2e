class EnderecoPage {


    editarEnderecoFaturamento(Nome, Sobrenome, Empresa, Pais, Endereco, Numero, Cidade, Estado, CEP, Celular, Email) {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()
        cy.get('#billing_first_name').clear().type(Nome)
        cy.get('#billing_last_name').clear().type(Sobrenome)
        cy.get('#billing_company').clear().type(Empresa)
        cy.get('#select2-billing_country-container').click().type(Pais).get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').clear().type(Endereco)
        cy.get('#billing_address_1').clear().type(Numero)
        cy.get('#billing_city').clear().type(Cidade)
        cy.get('#select2-billing_state-container').click().type(Estado + '{Enter}')//.get('[aria-selected="true"]').click()
        cy.get('#billing_postcode').clear().type(CEP)
        cy.get('#billing_phone').clear().type(Celular)
        cy.get('#billing_email').clear().type(Email)
        cy.get(':nth-child(2) > .button').click()
    }

    editarEnderecoEntrega() {
        //elementos + ações
    }

}

export default new EnderecoPage()