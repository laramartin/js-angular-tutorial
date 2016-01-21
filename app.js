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

	app.controller("PanelController", function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
		});

	var gems = [{
			name: "Dodecahedron", 
			price: 2.95,
			description: "Dodecahedron description.",
			images: [
			{
				full: "dode01.jpg", 
				thumb: "dodecahedron-01-thumb.jpg"
			},
			{
				full: "dodecahedron-02-full",
				thumb: "dodecahedron-02-thumb"
			}],
			canPurchase: false,
			soldOut: true,
			reviews: [
			{
				stars: 5, 
				body: "I love this product!", 
				author: "joe@thomas.com"
			},
			{
				stars: 1, 
				body: "This product sucks", 
				author: "tim@hater.com"
			}],
		},
		{
			name: "Pentagonal Gem", 
			price: 5.95,
			description: "Pentagonal Gem description.",
			images: [
			{
				full: "penta01.jpg", 
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
