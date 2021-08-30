/* eslint-disable no-undef */
describe('Note app UI', () => {
  it('Should add a new note', () => {
    cy.visit('/')
    cy.get('[data-cy=btn-add]').click()
    cy.get('[data-cy=add-title]').type('Pet shop')
    cy.get('[data-cy=add-description]').type('Buscar o cachorro 15:00hrs')
    cy.get('[data-cy=select-category]').select('home')
    cy.get('[data-cy=btn-submit-note]').click()

    cy.get('[data-cy=card-note]').should('to.have.length', 1)
  })

  it('Should not accept the new note', () => {
    cy.visit('/')
    cy.get('[data-cy=btn-add]').click()
    cy.get('[data-cy=add-title]').type('Pet shop')
    cy.get('[data-cy=add-description]').type('Buscar o cachorro 15:00hrs')
    cy.get('[data-cy=btn-submit-note]').click({ force: true })
    cy.contains('Mandatory Category').should('have.length', 1)
  })

  it('Should cancel a new note', () => {
    cy.visit('/')
    cy.get('[data-cy=btn-add]').click()
    cy.get('[data-cy=add-title]').type('Supermercado')
    cy.get('[data-cy=add-description]').type('13:30hrs')
    cy.get('[data-cy=select-category]').select('home')
    cy.get('[data-cy=btn-cancel-note]').click()

    cy.get('[data-cy=card-note]').should('to.have.length', 0)
  })

  it('Should edit note', () => {
    cy.visit('/')
    cy.get('[data-cy=btn-add]').click()
    cy.get('[data-cy=add-title]').type('Pet shop')
    cy.get('[data-cy=add-description]').type('Buscar o cachorro 15:00hrs')
    cy.get('[data-cy=select-category]').select('home')
    cy.get('[data-cy=btn-submit-note]').click()

    cy.get('[data-cy=btn-edit-note]').click()
    cy.get('[data-cy=add-description]').clear()
    cy.get('[data-cy=add-description]').type('Buscar o cachorro 18:00hrs')
    cy.contains('UPDATE').should('have.length', 1)
    cy.get('[data-cy=btn-submit-note]').click()
    cy.contains('Buscar o cachorro 18:00hrs').should('have.length', 1)
  })

  it('Should cancel edit note', () => {
    cy.visit('/')
    cy.get('[data-cy=btn-add]').click()
    cy.get('[data-cy=add-title]').type('Pet shop')
    cy.get('[data-cy=add-description]').type('Buscar o cachorro 15:00hrs')
    cy.get('[data-cy=select-category]').select('home')
    cy.get('[data-cy=btn-submit-note]').click()

    cy.get('[data-cy=btn-edit-note]').click()
    cy.get('[data-cy=add-description]').clear()
    cy.get('[data-cy=add-description]').type('Buscar o cachorro 18:00hrs')
    cy.get('[data-cy=btn-cancel-note]').click()
    cy.contains('Buscar o cachorro 15:00hrs').should('have.length', 1)
  })

  it('Should delete note', () => {
    cy.visit('/')
    cy.get('[data-cy=btn-add]').click()
    cy.get('[data-cy=add-title]').type('Pet shop')
    cy.get('[data-cy=add-description]').type('Buscar o cachorro 15:00hrs')
    cy.get('[data-cy=select-category]').select('home')
    cy.get('[data-cy=btn-submit-note]').click()

    cy.get('[data-cy=btn-delete-note]').click()
    cy.get('[data-cy=btn-delete-note-popup').click()

    cy.get('[data-cy=card-note]').should('have.length', 0)
  })

  it('Should check note', () => {
    cy.visit('/')
    cy.get('[data-cy=btn-add]').click()
    cy.get('[data-cy=add-title]').type('Pet shop')
    cy.get('[data-cy=add-description]').type('Buscar o cachorro 15:00hrs')
    cy.get('[data-cy=select-category]').select('home')
    cy.get('[data-cy=btn-submit-note]').click()

    cy.get('[data-cy=check-note]').click()
  })

  it('Should uncheck note', () => {
    cy.visit('/')
    cy.get('[data-cy=btn-add]').click()
    cy.get('[data-cy=add-title]').type('Pet shop')
    cy.get('[data-cy=add-description]').type('Buscar o cachorro 15:00hrs')
    cy.get('[data-cy=select-category]').select('home')
    cy.get('[data-cy=btn-submit-note]').click()

    cy.get('[data-cy=check-note]').click()
    cy.get('[data-cy=check-note-icon]').click()
  })

  it('Should search note', () => {
    cy.visit('/')

    cy.get('[data-cy=btn-add]').click()
    cy.get('[data-cy=add-title]').type('Pet shop')
    cy.get('[data-cy=add-description]').type('Buscar o cachorro 15:00hrs')
    cy.get('[data-cy=select-category]').select('home')
    cy.get('[data-cy=btn-submit-note]').click()

    cy.get('[data-cy=btn-add]').click()
    cy.get('[data-cy=add-title]').type('Consulta médica')
    cy.get('[data-cy=add-description]').type('Dentista 17:00hrs')
    cy.get('[data-cy=select-category]').select('personal')
    cy.get('[data-cy=btn-submit-note]').click()

    cy.get('[data-cy=search-notes]').type('Pet shop')
  })

  it('Should filter note', () => {
    cy.visit('/')

    cy.get('[data-cy=btn-add]').click()
    cy.get('[data-cy=add-title]').type('Pet shop')
    cy.get('[data-cy=add-description]').type('Buscar o cachorro 15:00hrs')
    cy.get('[data-cy=select-category]').select('home')
    cy.get('[data-cy=btn-submit-note]').click()

    cy.get('[data-cy=btn-add]').click()
    cy.get('[data-cy=add-title]').type('Consulta médica')
    cy.get('[data-cy=add-description]').type('Dentista 17:00hrs')
    cy.get('[data-cy=select-category]').select('personal')
    cy.get('[data-cy=btn-submit-note]').click()

    cy.get('[data-cy=btn-add]').click()
    cy.get('[data-cy=add-title]').type('Projeto 1')
    cy.get('[data-cy=add-description]').type('Enviar relatório')
    cy.get('[data-cy=select-category]').select('work')
    cy.get('[data-cy=btn-submit-note]').click()
    cy.get('[data-cy=btn-add]').click()

    cy.get('[data-cy=add-title]').type('Projeto 2')
    cy.get('[data-cy=add-description]').type('Enviar relatório')
    cy.get('[data-cy=select-category]').select('work')
    cy.get('[data-cy=btn-submit-note]').click()

    cy.get('[data-cy=home-type]').click()
    cy.get('[data-cy=card-note]').should('have.length', 1)
    cy.get('[data-cy=work-type]').click()
    cy.get('[data-cy=card-note]').should('have.length', 2)
    cy.get('[data-cy=personal-type]').click()
    cy.get('[data-cy=card-note]').should('have.length', 1)
    cy.get('[data-cy=all-type]').click()
    cy.get('[data-cy=card-note]').should('have.length', 4)
  })
})
