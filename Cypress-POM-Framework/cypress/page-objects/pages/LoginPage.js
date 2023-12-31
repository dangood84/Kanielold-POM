import BasePage from '../BasePage'
export default class Login extends BasePage {
    static login(username, password) {
        cy.login(username, password)
    }

    static clickForgotPasswordLink() {
        cy.contains('Forgot your password ?').click()
    }

    static displayErrorMessage() {
        //cy.get('.alert-error').should('be.visible')
        cy.isVisible('.alert-error')
    }
}