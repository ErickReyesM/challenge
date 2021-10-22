class logInPage{
    login = (user, password) => {
        cy.fixture('login').then((loginElemet)=>{
            cy.get(loginElemet.emailOrID).type(user);
            cy.get(loginElemet.passwordInput).type(password);
            cy.get(loginElemet.loginButton).click()
        })
    }
}
export default new logInPage();