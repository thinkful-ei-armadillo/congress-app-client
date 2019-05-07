// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("login", () => {
	cy.request({
		method: "POST",
		url: "http://localhost:8000/api/auth/login",
		headers: {
			"content-type": "application/json"
		},
		body: {
				user_name: "demo123",
				password: "Demo123!"
		}
	}).then(res => {
		window.sessionStorage.setItem(
			"congress-client-auth-token",
			res.body.authToken
		);
	});
});
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
