describe("User Login/Registry", function() {
	it("Does not do much", function() {
		expect(true).to.equal(true);
	});

	it("visits the login page and logs in using the demo account", function() {
		cy.visit("/login");
		cy.get("[data-cy=user_name]").type("demo123");
		cy.get("[data-cy=password]").type("Demo123!");
		cy.get("[data-cy=login_form]").submit();
	});

	it("visits the register page and creates a new account", function() {
		cy.visit("/register");
		cy.get("[data-cy=full_name]").type("rocketPower");
		cy.get("[data-cy=user_name]").type("RProcks");
		cy.get("[data-cy=password]").type("rocketPower123!");
		cy.get("[data-cy=registration_form]").submit();
	});


});
