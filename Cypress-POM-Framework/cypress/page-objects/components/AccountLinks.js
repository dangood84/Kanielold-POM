export default class AccountLinks {
    static clickSummary() {
        cy.get('#account_summary_link').click()
    }

    static clickActivity() {
        cy.get('#account_activity_link').click()
    }

    static clickTransferFunds() {
        cy.get('#transfer_funds_link').click()
    }

    static clickPayBills() {
        cy.get('#pay_bills_link').click()
    }

    static clickMoneyMap() {
        cy.get('#money_map_link').click()
    }

    static clickOnlineStatements() {
        cy.get('#online_statements_link').click()
    }
}
