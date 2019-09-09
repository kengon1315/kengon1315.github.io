var app1 = angular.module('app1', []);

app1.controller('ctrl1', function($scope){

	$scope.items = [{ Menu: "Pets", Drop: true, Choices:[ "Collar",
											"Clothes",
											"Beds"], Fav: ["Images/Collar.jpg",
																"Images/Leash.jpg",
																"Images/DogCostume.jpg"]},
					{ Menu: "Baby", Drop: true, Choices:[ "Tops",
											 "Pants",
											 "Shirts",
											 "Acessories",
											 "Towels"], Fav: ["Images/Bib.jpg",
																"Images/BabyShoes.jpg",
																"Images/BabyHats.jpg"]},
					{ Menu: "Games", Drop: true, Choices:["Dominos",
											 "Jenga",
											 "Chess",
											 "Checkers",
											 "Monopoly",
											 "More..."], Fav: ["Images/Jenga.jpg",
																"Images/Checkers.jpg",
																"Images/Monopoly.jpg"]},
					{ Menu: "Garden", Drop: true, Choices:["Decorations",
											 "Tools",
											 "Seeds",
											 "More...",], Fav: ["Images/Bib.jpg",
																"Images/BabyShoes.jpg",
																"Images/BabyHats.jpg"]},
					{ Menu: "Home Decor", Drop: true, Choices:["Bedrooms",
											 "Wall Decor",
											 "Pillows",
											 "Blankets",
											 "Table Decor",
											 "Bookshelf",
											 "Office",
											 "Outdoor",
											 "Windows",
											 "More.."], Fav: ["Images/Bib.jpg",
																"Images/BabyShoes.jpg",
																"Images/BabyHats.jpg"]},
					{ Menu: "Home"}];
					
	
	
	$scope.checkUrl = function(imgUrl){
		if(imgUrl == ""){
			return "https://www.sarugbyshop.co.za/modules/core/img/no-image.jpg";
		}
		else{
			return imgUrl;
		}
	};
});