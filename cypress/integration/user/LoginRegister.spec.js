describe("User Login/Registry", function() {
	it("Registers a new account", function() {
		cy.visit("/register", {
			onBeforeLoad: win => {
				win.sessionStorage.clear();
			}
		});
		cy.get("[data-cy=full_name]").type("rocketPower");
		cy.get("[data-cy=user_name]").type("RProcks");
		cy.get("[data-cy=password]").type("rocketPower123!");
		cy.get("[data-cy=registration_form]").submit();
	});

	it("Requires a name", function() {
		cy.visit("/register", {
			onBeforeLoad: win => {
				win.sessionStorage.clear();
			}
		});
		// cy.get("[data-cy=full_name]").type("rocketPower");
		cy.get("[data-cy=user_name]").type("RProcks");
		cy.get("[data-cy=password]").type("rocketPower123!");
		cy.get("[data-cy=registration_form]").submit();
		cy.get("[data-cy=registration_form] .red").should(
			"contain",
			"Missing 'full_name' in request body"
		);
	});

	it("Requires a username", function() {
		cy.visit("/register", {
			onBeforeLoad: win => {
				win.sessionStorage.clear();
			}
		});
		cy.get("[data-cy=full_name]").type("rocketPower");
		// cy.get("[data-cy=user_name]").type("RProcks");
		cy.get("[data-cy=password]").type("rocketPower123!");
		cy.get("[data-cy=registration_form]").submit();
		cy.get("[data-cy=registration_form] .red").should(
			"contain",
			"Missing 'user_name' in request body"
		);
	});
	it("Requires a password", function() {
		cy.visit("/register", {
			onBeforeLoad: win => {
				win.sessionStorage.clear();
			}
		});
		cy.get("[data-cy=full_name]").type("rocketPower");
		cy.get("[data-cy=user_name]").type("RProcks");
		// cy.get("[data-cy=password]").type("rocketPower123!");
		cy.get("[data-cy=registration_form]").submit();
		cy.get("[data-cy=registration_form] .red").should(
			"contain",
			"Missing 'password' in request body"
		);
	});

	it("Logs in using the demo account", function() {
		cy.visit("/login");
		cy.get("[data-cy=user_name]").type("RProcks");
		cy.get("[data-cy=password]").type("rocketPower123!");
		cy.get("[data-cy=login_form]").submit();
	});
});
