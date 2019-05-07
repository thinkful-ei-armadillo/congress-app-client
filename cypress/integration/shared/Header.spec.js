// test all nav buttons, title content

describe("Header", function() {
	it("renders not logged in", function() {
		cy.visit("/", {
			onBeforeLoad: win => {
				win.sessionStorage.clear();
			}
		});
		cy.get(".title > a").should("contain", "MyCongress.io");
		cy.get("#compare-button").should("contain", "Compare Members");
		cy.get("#login-button").should("contain", "Login");
		cy.get("#register-button").should("contain", "Register");
	});
	it("renders logged in", function() {
		cy.login();
		cy.visit("/");
		cy.get(".title > a").should("contain", "MyCongress.io");
		cy.get("#compare-button").should("contain", "Compare Members");
		cy.get("#logout-button").should("contain", "Logout");
	});
});
