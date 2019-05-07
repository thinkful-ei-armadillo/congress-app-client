describe("MemberSearch smoke", function() {
	it("Does not do much", function() {
		expect(true).to.equal(true);
	});

	it("visits the home page", function() {
		cy.visit("/");
	});
});
describe("MemberSearch Happy", function() {
	it("Returna MemberSearch with a linked profile that opens when clicked", function() {
		cy.visit("/");
		cy.get("[data-cy=search]").type("alex{enter}");
		cy.get("[data-cy=search-result]").contains("Alex")
		cy.get("[data-cy=search-result] > :nth-child(1) > a").click();
		cy.get(".main-profile").within($section => {
			cy.get(".profile-picture");
			cy.get(".name");
			cy.get(".dob");
			cy.get(".member-social-media");
			cy.get(".seniority");
			cy.get(".next_election");
			cy.get(".total_votes");
			cy.get(".missed_votes");
			cy.get(".missed_votes_pct");
			cy.get("#profile-missed-votes-graph");
			cy.get(".votes_with_party_pct");
			cy.get("#profile-party-votes-graph");
			cy.get("[href='/compare']");
		});
	});
});
describe("MemberSearch Unhappy", function() {
	it("Searches and gets no results", function() {
		cy.visit("/");
		cy.get("[data-cy=search]").type("alexf{enter}");
		cy.get("#no-results-feedback").contains("No Results.");
	});
});
