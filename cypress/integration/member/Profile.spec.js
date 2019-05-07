// check all props display
describe("Profile", function() {
	it("views Profile of given member not logged in", function() {
		cy.visit("/profile/R000600", {
			onBeforeLoad: win => {
				win.sessionStorage.clear();
			}
		});
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
	it("views Profile of given member logged in", function() {
		cy.login();
		cy.visit("/profile/R000600");
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
			cy.get(".add-member-following");
		});
	});
});
// check normal profile
// check medium profile

// check small profile
