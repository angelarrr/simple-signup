describe('optIn', function(){
	var scope,
		element,
		compiled,
		html;

	beforeEach(module('myApp'));
	beforeEach(module('template.html'));
	beforeEach(inject(function($rootScope, $compile){

		html = "";
		html += "<opt-in>";
		html += "<div class='brand-logo'></div>";
		html += "</opt-in>";

		scope = $rootScope.$new();
		compiled = $compile(html);
		element = compiled(scope);
		scope.$digest();

	}));

	it('should render element correctly', function(){
		expect(element.find('form').length).toBe(1);
		expect(element.find('input[type=text]').length).toBe(2);
		expect(element.find('input[type=email]').length).toBe(1);
		expect(element.find('input[type=submit]').length).toBe(1);
	})
})