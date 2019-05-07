// check all props display
describe("Profile", function() {
	it("views Profile of given user and checks all props are there", function() {
		cy.visit("/");
	});
	it("views Profile of given user", function() {
		cy.visit("/profile/R000600");
	});
});
// check normal profile
// check medium profile

// check small profile

// check compare/follow buttons appear
// (is this part of compare/follow tests instead?)
