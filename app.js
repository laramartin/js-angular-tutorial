(function(){
	 // angularJS is called by angular
	 // "store" is the app name
	 // [] are the dependencies
	var app = angular.module("store", []);

		// Controllers are where we define the app's behavior
		// by defining functions and values
		// 2nd argument is a function that is called when 
		// StoreController is called
	app.controller("StoreController", function(){
		this.products = gems;
	});

	var gems = [{
			name: "Dodecahedron", 
			price: 2.95,
			description: "Dodecahedron description.",
			images: [
			{
				full: "dodecahedron-01-full.jpg", 
				thumb: "dodecahedron-01-thumb.jpg"
			},
			{
				full: "dodecahedron-02-full",
				thumb: "dodecahedron-02-thumb"
			}],
			canPurchase: false,
			soldOut: true,
		},
		{
			name: "Pentagonal Gem", 
			price: 5.95,
			description: "Pentagonal Gem description.",
			images: [
			{
				full: "Pentagonal-01-full.jpg", 
				thumb: "Pentagonal-01-thumb.jpg"
			},
			{
				full: "Pentagonal-02-full",
				thumb: "Pentagonal-02-thumb"
			}],
			canPurchase: false,
			soldOut: true,
		}
	];

})();
