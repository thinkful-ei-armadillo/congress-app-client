describe("Dashboard", function() {
	it("Does not do much", function() {
		expect(true).to.equal(true);
	});

	it("views PublicDashboard", function() {
		cy.visit("/");
	});
});
// smoke tests for components that render on this page
// ensure that clicking all buttons submits events or navigates to the correct pages
