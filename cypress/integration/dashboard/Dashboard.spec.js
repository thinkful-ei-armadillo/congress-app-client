describe("Dashboard", function() {
	it("views PublicDashboard", function() {
		cy.visit("/", {
			onBeforeLoad: () => {
				window.sessionStorage.clear();
			}
		});
		cy.get(".col1").within($section => {
			cy.get("[data-cy=search]");
			cy.get("[data-cy=state-search]");
			cy.get("#missed-votes-graph");
			cy.get(".congress-status-component header").within($section => {
				cy.get("h2").should("contain", "What's happening on the floor?");
			});
			cy.get(".committees-component").within($section => {
				cy.get("h2").should("contain", "Committees");
			});
		});
		cy.get(".col2").within($section => {
			cy.get(".LeaderBoard > :nth-child(4)").within($section => {
				cy.get("div a.name .name");
				cy.get("div .stats .missed_votes_pct");
			});
		});
	});
});
describe("Private Dashboard", function() {
	it("views PrivateDashboard", () => {
		cy.login();
		cy.visit("/");
		// Column 1
		cy.get(".col1").within($section => {
			cy.get("[data-cy=search]");
			cy.get("[data-cy=state-search]");
			cy.get("#missed-votes-graph");
			cy.get(".congress-status-component header").within($section => {
				cy.get("h2").should("contain", "What's happening on the floor?");
			});
			cy.get(".committees-component").within($section => {
				cy.get("h2").should("contain", "Committees");
			});
		});

		// Column 2
		cy.get(".col2").within($section => {
			cy.get(".LeaderBoard > :nth-child(4)").within($section => {
				cy.get("div a.name .name");
				cy.get("div .stats .missed_votes_pct");
			});
		});
	});
});
