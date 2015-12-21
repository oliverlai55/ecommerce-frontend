var ecommerceApp = angular.module('ecommerce', []);

	ecommerceApp.controller('ecommerce-controller', function ($scope, $http){
		$scope.ninja = "DigitalCrafts students";

		$scope.weatherJSON = [];
		$http.get('http://localhost:3000').then(function (theData){
			//then tells it to first get data before $scope runs it
			$scope.weatherJSON = theData.data;

			var calvinTemp = theData.data.main.temp;
			var FahrenTempRaw = (calvinTemp - 273.15)*1.8 +32;
			$scope.FahrenTemp = FahrenTempRaw.toFixed(0);
			console.log(FahrenTempRaw.toFixed(0));

			console.log(theData.data);
			console.log(theData.data.sys.country);
		})

	});
