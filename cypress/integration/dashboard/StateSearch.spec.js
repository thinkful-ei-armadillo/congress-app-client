describe("StateSearch", function() {
	it("visits the home page", function() {
		cy.visit("/");
	});
	it("Uses StateSearch and has results", function() {
		cy.visit("/");
		cy.get("[data-cy=state-search]").select("AK");
		cy.get("[data-cy=search-result]").contains("Sen. Lisa Murkowski");
	});
});
