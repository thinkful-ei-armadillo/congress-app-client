describe("MemberSearch smoke", function() {
	it("Does not do much", function() {
		expect(true).to.equal(true);
	});

	it("visits the home page", function() {
		cy.visit("/");
	});
});
describe("MemberSearch Happy", function() {
	it("Uses MemberSearch and is linked", function() {
		cy.visit("/");
		cy.get("[data-cy=search]").type("alex{enter}");
		cy.get(".container > :nth-child(1) > a").click();
	});
});
describe("MemberSearch Unhappy", function() {
	it("Searches and gets no results", function() {
		cy.visit("/");
		cy.get("[data-cy=search]").type("alexf{enter}");
		cy.get(".member-search").contains("No results");
	});
		it("Uses MemberSearch and is linked", function() {
		cy.visit("/");
		cy.get("[data-cy=search]").type("alex{enter}");
	});
});
