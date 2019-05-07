describe("Following", function() {
	it("follows a member of congress", function() {
		cy.login();
		cy.visit("/profile/B001282");
		cy.get(".add-member-following").click();
	});

	it("renders following on dashboard when logged in", function() {
		cy.login();
		cy.visit("/dashboard");
		cy.get(".following-wrapper > :nth-child(1) > :nth-child(1) > b")
			.wait(400)
			.should("contain", "Congress Members I am following:");
	});

	it("unfollows a member of congress", function() {
		cy.login();
		cy.visit("/profile/B001282").wait(500);
		cy.get(".add-member-following").click();
		cy.visit("/dashboard");
		cy.get(".following-wrapper > :nth-child(1) > :nth-child(1) > b")
			.wait(400)
			.should("contain", "Not following anyone yet");
	});
});
