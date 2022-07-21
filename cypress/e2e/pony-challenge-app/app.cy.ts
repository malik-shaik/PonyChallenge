describe('Tests home screen of Pony Challenge app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should display all components in home page', () => {
    cy.get('[data-testid="top-banner"]').should('be.visible')
    cy.get('[data-testid="title-banner"]').should('be.visible')
    cy.get('[data-testid="difficultyLevel"]').should('be.visible')
    cy.get('[data-testid="difficultyLevel"]').should('be.visible')
    cy.get('[data-testid="slider"]').should('be.visible')
    cy.get('[data-testid="slider"]').should('be.visible')
    cy.get('[data-testid="height"]').should('be.visible')
    cy.get('[data-testid="width"]').should('be.visible')
    cy.get('[data-testid="select"]').should('be.visible')
    cy.get('[data-testid="select"]').should('have.length', 2)
    cy.get('[data-testid="pony-picker-label"]').should('be.visible')
    cy.get('[data-testid="pony-picker"]').should('be.visible')
    cy.get('button').should('be.visible')
  })

  it('Should not display maze if user did not create the maze by clicking Create Maze button', () => {
    cy.get('[data-testid="maze"]').should('not.exist')
  })

  it('Should load maze and its components when Create Maze button clicked', () => {
    cy.contains('Create maze').click()
    cy.get('[data-testid="maze"]').should('exist')
    cy.get('[data-testid="pony"]').should('exist')
    cy.get('[data-testid="domokun"]').should('exist')
    cy.get('[data-testid="exit"]').should('exist')
  })
})
