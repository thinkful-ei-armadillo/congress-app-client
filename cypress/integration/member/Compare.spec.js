describe("CompareMembers", function() {
	it("Does not do much", function() {
		expect(true).to.equal(true);
	});

	it("visits the CompareMembers page", function() {
		cy.visit("/compare");
	});

	it("Uses MemberSearch and is linked", function() {
		cy.visit("/");
		cy.get("[data-cy=search]").type("alex{enter}");
	});
});
