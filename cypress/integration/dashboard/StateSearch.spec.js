describe("StateSearch smoke", function() {
	it("Does not do much", function() {
		expect(true).to.equal(true);
	});

	it("visits the home page", function() {
		cy.visit("/");
	});
});
describe("StateSearch Happy", function() {
	it("Uses StateSearch and has results", function() {
		cy.visit("/");
		cy.get("[data-cy=state-search]").select("AK");
		cy.get("[data-cy=state-search-result]").contains("Sen. Lisa Murkowski");
	});
});
