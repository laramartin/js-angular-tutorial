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
			canPurchase: false,
			soldOut: true,
		},
		{
			name: "Pentagonal Gem", 
			price: 5.95,
			description: "Pentagonal Gem description.",
			canPurchase: false,
			soldOut: true,
		}
	];

})();
