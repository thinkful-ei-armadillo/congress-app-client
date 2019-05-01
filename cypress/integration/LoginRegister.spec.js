describe("User Login/Registry", function() {
	it("Does not do much", function() {
		expect(true).to.equal(true);
	});
	it("visits the login page", function() {
		cy.visit("/login");
	});

	it("visits the register page", function() {
		cy.visit("/register");
	});

	it("Uses MemberSearch and is linked", function() {
		cy.visit("/");
		cy.get("[data-cy=search]").type("alex{enter}");
	});
});
