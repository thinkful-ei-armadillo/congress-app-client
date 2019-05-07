describe("CompareMembers", function() {
	it("visits the CompareMembers page", function() {
		cy.visit("/compare");
	});

	it("Uses MemberSearch and is linked", function() {
		cy.visit("/");
		cy.get("[data-cy=search]").type("alex{enter}");
	});
});
