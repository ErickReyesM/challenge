describe('Bitso Automation Challenge', () => {

    it('Verify Deposit Error Displayed', () => {
        cy.url().should('include', '/wallet')
        cy.fixture('wallet').then((walletElemt) => {
            walletElemt.buttons.forEach(exButton => {
                cy.get(walletElemt.buttonClass, { timeout: 10000 }).eq(exButton).click();
                cy.get(walletElemt.depositButton).click();
                cy.get(walletElemt.btcFunding).click();
                cy.get(walletElemt.errorModal).should('be.visible').and('contain', 'Oops! Something went wrong')
                cy.get(walletElemt.closeModalButton).click();
            })
        });
    });
});