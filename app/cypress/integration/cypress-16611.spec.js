
describe('Authentication flow', () => {
  it('Loads in secure context!', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy=Hello]').contains('Hello')
  })
})