/// <reference types="Cypress" />
import SignInDetail from '../Pages/AirbnbLocators'
const airbin = new SignInDetail()
let dateforcheckin
let dateforcheckout
const TotalGuest = 3
const PropertiesPerPage = 19
let location
beforeEach(() => {
  cy.fixture('LocationInput.json').then((Location) => {
    location = Location.Location
  })
  cy.visit(Cypress.env('Login'))
  cy.viewport(1366, 768)
})
describe('Test Suite', function () {
  it('Verify properties of first page can accomodate required guest', function () {
    cy.scrollTo('center')
    cy.wait(10000)
    airbin.littleSearch().click()
    airbin.locationInput().type(location)
    airbin.checkinDiv().click()
    dateforcheckin = Cypress.moment().add(7, 'day').format('YYYY-MM-DD')
    dateforcheckout = Cypress.moment().add(14, 'day').format('YYYY-MM-DD')
    airbin.CheckInOutInput(dateforcheckin).click()
    airbin.CheckInOutInput(dateforcheckout).click()
    airbin.guestDiv().click()
    airbin.adultPlus().click()
    airbin.adultPlus().click()
    airbin.childplue().click()
    cy.wait(1000)
    airbin.searchButton().click()
    airbin.showMore().click()
    for (let index = 1; index <= PropertiesPerPage; index++) {
      airbin.listItems(index).should('have.attr', 'href')
      airbin.guestCount(index + 1).should('be.visible').text().then((guestText) => {
        const guest = parseInt(guestText[0])
        expect(guest).to.be.gte(TotalGuest)
      })
    }
  })

  it.only(' Check Amenities Section Showing Seleced Fileter', function () {
    cy.scrollTo('center')
    cy.wait(10000)
    airbin.littleSearch().click()
    airbin.locationInput().type(location)
    airbin.checkinDiv().click()
    dateforcheckin = Cypress.moment().add(7, 'day').format('YYYY-MM-DD')
    dateforcheckout = Cypress.moment().add(14, 'day').format('YYYY-MM-DD')
    airbin.CheckInOutInput(dateforcheckin).click()
    airbin.CheckInOutInput(dateforcheckout).click()
    airbin.guestDiv().click()
    airbin.adultPlus().click()
    airbin.adultPlus().click()
    airbin.childplue().click()
    cy.wait(1000)
    airbin.searchButton().click().wait(500)
    airbin.moreFilter().should('be.visible').click()
    airbin.kitchen().check()
    airbin.moreFilterPopupSubmit().click()
    airbin.showMore().click()
    cy.wait(1000)
    cy.url().then((listUrls) => {
      airbin.listItems(1).should('have.attr', 'href').then((href) => {
        cy.visit(href)
        airbin.kitchenUnderAmenities().should('be.visible')
          .and('contain', 'Kitchen')
      })
    })
  })

  it('Check hovering on First Item its location color change on Map', function () {
    cy.scrollTo('center')
    cy.wait(10000)
    airbin.littleSearch().click()
    airbin.locationInput().type(location)
    airbin.checkinDiv().click()
    dateforcheckin = Cypress.moment().add(7, 'day').format('YYYY-MM-DD')
    dateforcheckout = Cypress.moment().add(14, 'day').format('YYYY-MM-DD')
    airbin.CheckInOutInput(dateforcheckin).click()
    airbin.CheckInOutInput(dateforcheckout).click()
    airbin.guestDiv().click()
    airbin.adultPlus().click()
    airbin.adultPlus().click()
    airbin.childplue().click()
    airbin.searchButton().click()
    airbin.showMore().click()
    cy.wait(1000)
    airbin.listItems(1).trigger('mouseover')
    airbin.mapFirstLlocation().should('be.visible')
      .and('have.css', 'color', 'rgb(72, 72, 72)')
      .click()
  })
})
