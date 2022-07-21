describe('Tests maze loading with given options', () => {
  it('Should load maze with selected height and pony', () => {
    cy.visit('http://localhost:3000')

    const mazeHeight = 18 // no of rows in maze
    const ponyName = 'Fluttershy'

    cy.get('[data-testid="select"]').should('have.length', 2)

    // change maze height
    cy.get('[data-testid="select"]')
      .eq(0)
      .parent()
      .click()
      .get(`ul > li[data-value=${mazeHeight}]`)
      .click()

    // select pony character
    cy.get(`[data-testid="pony-character-${ponyName}"]`).should('exist').click()

    cy.contains('Create maze').click()

    cy.get('[data-testid="maze"]').should('be.visible')

    cy.get('[data-testid="row"]')
      .should('be.visible')
      .should('have.length', mazeHeight)

    cy.get('[data-testid="pony"]')
      .should('be.visible')
      .should('have.attr', 'src')
      .should('include', ponyName)

    cy.get('[data-testid="domokun"]')
      .should('be.visible')
      .should('have.attr', 'src')
      .should('include', 'domokun')

    cy.get('[data-testid="exit"]')
      .should('be.visible')
      .should('have.attr', 'src')
      .should('include', 'door')
  })
})
