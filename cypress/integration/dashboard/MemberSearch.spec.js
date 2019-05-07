describe("MemberSearch smoke", function() {
	it("Does not do much", function() {
		expect(true).to.equal(true);
	});

	it("visits the home page", function() {
		cy.visit("/");
	});
});
describe("MemberSearch Happy", function() {
	it("Returna MemberSearch with a linked profile that opens when clicked", function() {
		cy.visit("/");
		cy.get("[data-cy=search]").type("alex{enter}");
		cy.get("[data-cy=search-result]").contains("Alex")
		cy.get("[data-cy=search-result] > :nth-child(1) > a").click();
	});
});
describe("MemberSearch Unhappy", function() {
	it("Searches and gets no results", function() {
		cy.visit("/");
		cy.get("[data-cy=search]").type("alexf{enter}");
		cy.get("#no-results-feedback").contains("No Results.");
	});
});
