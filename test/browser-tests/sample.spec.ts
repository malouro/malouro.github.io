describe('Open page', () => {
	it('Stuff exists on page :)', () => {
		cy.visit('/')
		cy.contains('Mike')
	})
})
