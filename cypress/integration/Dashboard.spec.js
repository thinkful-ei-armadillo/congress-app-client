describe("Dashboard", function() {
	it("Does not do much", function() {
		expect(true).to.equal(true);
	});

	it("views PublicDashboard", function() {
		cy.visit("/");
	});
});
