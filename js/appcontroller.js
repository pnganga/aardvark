var myApp = angular.module('myApp',[]);
myApp.controller('myCtrl',function($scope){
// $scope is the owner of all variables and functions in a given controller.
$scope.phone = "+254715753308";
$scope.city = "Nairobi";
$scope.county = "Nairobi";


});


myApp.controller('myCars', function($scope){

	$scope.cars = [
		{brand:"Toyota",model:"hilux",type:"pickup",year:"2013",image:"../images/hilux.jpg"},
		{brand:"Nissan",model:"Wingroad",type:"StationWagon",year:"2010",image:"../images/wingroad.jpg"},
		{brand:"Subaru",model:"Legacy",type:"Sports",year:"2008",image:"../images/legacy.jpg"},
		{brand:"Range Rover",model:"Sport",type:"SUV",year:"2015",image:"../images/sport.jpg"}
	];



}); 
myApp.controller('userController', function($scope, $http){


	$scope.user = {};
	$scope.formSubmit = function(){

		console.log($scope.user);
		// call your node API
		$http.post ('', $scope.user).success(function(res){
			console.log("server found");



		})


		.error(function(res){
				console.log("server not found");



		});
		// communicate with your NODE API
		// pass your user object to the API
	};
});


myApp.controller('customersCtrl', function($scope, $http) {
  $http.get("http://www.w3schools.com/angular/customers.php")
  .success(function (response) {
  	console.log('hi');
  	$scope.movies = response;

  });
});
