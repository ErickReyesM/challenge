import beneficiariesPage from '../support/pages/beneficiaries';

describe('Bitso Automation Challenge', () => {

    it('Verify Incorrect NIP error', () => {
        cy.visit('/r/user/beneficiaries/add');
        beneficiariesPage.fillForm();
        cy.get('#pin').type('1234');
        cy.get('div.modal-content form button[type=primary]').click();
        cy.get('div[type=error]').should('be.visible').and('contain', 'Incorrect PIN')
    });

});
