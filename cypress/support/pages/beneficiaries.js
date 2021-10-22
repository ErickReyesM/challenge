class beneficiariesPage{
    constructor(){
        this.firstName, this.lastName, this.dob = NaN
        this.percentage = Math.floor(Math.random() * (100 - 1) + 1);
        this.kinship = Math.floor(Math.random() * 3);
    }
     
    fillForm = function(){
        cy.request('GET', 'https://randomuser.me/api/').then((response)=>{
            this.firstName = response.body.results[0].name.first;
            this.lastName = response.body.results[0].name.last;
            this.dob = new Date(response.body.results[0].dob.date);
        });
        cy.fixture('beneficiaries').then((beneficiariesElement) => {
            cy.get(beneficiariesElement.firstName, { timeout: 10000 }).type(this.firstName);
            cy.get(beneficiariesElement.lastName).type(this.lastName);

            cy.get(beneficiariesElement.dayInput).type(this.dob.getDay().toString()+'{enter}');
            cy.get(beneficiariesElement.monthInput).click();
            cy.get('#react-select-3-option-' + this.dob.getMonth().toString()).click()
            cy.get(beneficiariesElement.yearInput).type(this.dob.getFullYear().toString()+'{enter}');


            cy.get(beneficiariesElement.kinshipDisplay).click();
            cy.get('#react-select-5-option-' + this.kinship.toString()).click();

            cy.get(beneficiariesElement.percentage).type(this.percentage.toString());

            cy.get(beneficiariesElement.addButton).click();
        });
    }
}
export default new beneficiariesPage();