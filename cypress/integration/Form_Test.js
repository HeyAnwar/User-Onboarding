describe('NewForm', () => {
    beforeEach(() => cy.visit('http://localhost:3000/'))
    describe('filling form', () => {
        it('can recognize the name entered', () => {
            cy.get('input[name=name]')
            cy.type('Edward Fernandez')
            cy.should('have.value', 'Edward Fernandez')
            cy.get('input[name=email]').type('EdwardFernandez@gmail.com')
            cy.get('input[name=password]').type('password').click()
            cy.get('input:invalid').should('have.length', 8)
            cy.get('#password').then(($input) => {
              expect($input[0].validationMessage).to.eq('this field is required')})
            cy.get('[type=ToS]').check()
            cy.get('button').submit().click()

        })
    describe('Disable button upon error', () => {
        it('submit button disabled', () => {
    cy.get('button').submit().should('be.disabled')})
        })
    })
}) 