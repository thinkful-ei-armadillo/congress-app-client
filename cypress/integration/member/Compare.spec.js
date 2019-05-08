describe("CompareMembers", function() {
	it("visits the CompareMembers page", function() {
		cy.visit("/compare");
	});

	it("Uses Compare Members and returns search results for two members", function() {
		cy.visit("/compare");
		cy.get(
			":nth-child(1) > [data-cy=compare_form] > [data-cy=compare_search]"
		).type("Pat Roberts{enter}");
		cy.get("#compare-member-profile-container > :nth-child(1)").contains(
			"Pat Roberts, Senator, 2nd Class"
		);
		cy.get(":nth-child(8) > .compare-member-list-item > p").click();
		cy.get(".medium-profile").within($section => {
			cy.get(".medium-profile-picture");
			cy.get(".name");
			cy.get(".phonenum");
			cy.get(".missed_votes_pct");
			cy.get(".votes_with_party_pct");
		});
		cy.get(
			":nth-child(2) > [data-cy=compare_form] > [data-cy=compare_search]"
		).type("Lisa{enter}");
		cy.get("#compare-member-profile-container > :nth-child(2)").contains(
			"Lisa Murkowski, Senator, 3rd Class"
		);
		cy.get(":nth-child(4) > .compare-member-list-item > p").click();
		cy.get(".medium-profile").within($section => {
			cy.get(".medium-profile-picture");
			cy.get(".name");
			cy.get(".phonenum");
			cy.get(".missed_votes_pct");
			cy.get(".votes_with_party_pct");
		});
	});
});
