describe("Dashboard", function() {
	it("Does not do much", function() {
		expect(true).to.equal(true);
	});

	it("views PublicDashboard", function() {
		cy.visit("/");
	});
});
describe("Private Dashboard", function() {
	it("renders private dashboard", () => {
		cy.login();
		cy.visit("/");
	});
});
// smoke tests for components that render on this page
// ensure that titles read how they should
// ensure that list components have list items
// privatedashboard smoke test (set logged in user as implemented, don't use UI to log in)
