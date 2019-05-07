describe("MemberSearch smoke", function() {
	it("visits the home page", function() {
		cy.visit("/");
	});
});
describe("MemberSearch Happy", function() {
	it("Uses MemberSearch and is linked", function() {
		cy.visit("/");
		cy.get("[data-cy=search]").type("alex{enter}");
		cy.get("[data-cy=state-search-result] > :nth-child(1) > a").click();
	});
});
describe("MemberSearch Unhappy", function() {
	it("Searches and gets no results", function() {
		cy.visit("/");
		cy.get("[data-cy=search]").type("alexf{enter}");
		cy.get(".member-search").contains(
			"No Results. Please Retry With a New Search."
		);
	});
	it("Uses MemberSearch and is linked", function() {
		cy.visit("/");
		cy.get("[data-cy=search]").type("alex{enter}");
	});
});
