describe("testing form inputs", () => {
    beforeEach(function() {
        cy.visit("http://localhost:3003/Form")
    })
    it("testing", () => {
        //testing name
        cy.get('#name').type("Lebron James")
        .should("have.value", "Lebron James")

        cy.get('select')
      //.select("Medium").should('have.value', "Medium")
        
        //text box testing
        cy.get('textarea').type("i want extra cheese")
        .should("have.value", "i want extra cheese")
        //testing toppings
        cy.get(':nth-child(4) > input, :nth-child(3) > input, :nth-child(2) > input').check()
        .should("be.checked")

        cy.get('form').submit(onsubmit)

        cy.get('[href="/Home"]').click()
        cy.get('[href="/Form"]').click()
        cy.get('[href="/Home"]').click()
        cy.get('[href="/Form"]').click()

        cy.get('#name').type("OJ Simpson")
        .should("have.value", "OJ Simpson")
        .type(" Da Juice").should("have.value", "OJ Simpson Da Juice")
        .clear()

        cy.contains("must include atleast 2 characters")
        
    })
})