describe("Following", function() {
	it("follows a member of congress", function() {
		cy.login();
		cy.visit("/profile/B001282");
    cy.get(".add-member-following").click()
    // cy.visit('/')
	});
	// it.skip("renders following on dashboard when logged in");
});
