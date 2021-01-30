export class SignInModule {
  // LocationDive
  littleSearch () {
    return cy.get('[data-testid=little-search-icon]')
  }

  searchedDiv () {
    return cy.xpath('/html/body/div[4]/div/div/div/div[1]/div[1]/div/header/div/div[2]/div[2]/div/div/div/form/div/div')
  }

  locationDiv () {
    return cy.xpath('/html/body/div[4]/div/div/div/div[1]/div[1]/div/header/div/div[2]/div[2]/div/div/div/form/div/div/div[1]')
  }

  locationInput () {
    return cy.get('[data-testid=structured-search-input-field-query]')
  }

  // Date Div

  datefullDiv () {
    return cy.xpath('/html/body/div[4]/div/div/div/div[1]/div[1]/div/header/div/div[2]/div[2]/div/div/div/form/div/div/div[3]')
  }

  checkinDiv () {
    return cy.get('[data-testid=structured-search-input-field-split-dates-0] > ._seuyf > ._uh2dzp')
  }

  CheckInOutInput (date) {
    return cy.get('[data-testid=datepicker-day-' + date + '] > ._f8btejl')
  }

  guestDiv () {
    return cy.get('[data-testid=structured-search-input-field-guests-button] > ._seuyf > ._wtz1co')
  }

  adultPlus () {
    return cy.get('[data-testid=stepper-adults-increase-button] > ._8ovatg')
  }

  childplue () {
    return cy.get('[data-testid=stepper-children-increase-button] > ._8ovatg')
  }

  searchButton () {
    return cy.get('[data-testid=structured-search-input-search-button]')
  }

  showMore () {
    return cy.xpath('//*[@id="ExploreLayoutController"]/div/div[1]/div[1]/div[2]/div/div[2]/div/div/div/div/div/div/div[1]/div[2]/a')
  }

  listItems (x) {
    return cy.get(':nth-child(' + x + ') > ._gig1e7 > [itemprop="itemListElement"] > :nth-child(4) > :nth-child(1) > ._8s3ctt > ._gjfol0')
  }

  listGuestCount (x) {
    return cy.xpath('//*[@id="ExploreLayoutController"]/div/div[1]/div[1]/div[2]/div/div[3]/div/div/div[2]/div/div/div/div/div[' + x + ']/div/div/div/div/div[2]/div[2]/div[3]')
  }

  guest () {
    return cy.get('._tqmy57 > :nth-child(2) > :nth-child(1)')
  }

  houseCheckBox () {
    return cy.get('[id=filterItem-property_types-checkbox-property_type_id-2]')
  }

  guestCount (x) {
    return cy.xpath('//body/div[4]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[' + x + ']/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]')
  }

  moreFilter () {
    return cy.get('[data-testid=menuItemButton-dynamicMoreFilters]')
  }

  kitchen () {
    return cy.get('[id=filterItem-amenities-checkbox-amenities-8]')
  }

  moreFilterPopupSubmit () {
    return cy.get('[data-testid=more-filters-modal-submit-button]')
  }

  kitchenUnderAmenities () {
    return cy.xpath('//div[contains(text(),"Kitchen")]')
  }

  mapFirstLlocation () {
    return cy.xpath('//*[@id="ExploreLayoutController"]/div/div[2]/aside/div/div[1]/div/div/div[1]/div[3]/div/div[4]/div[1]/div/button')
  }
}

export default SignInModule
