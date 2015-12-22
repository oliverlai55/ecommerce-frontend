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


	//This will fire on ng-submit. We want to make a post request to the server
	//and send it username and password. They will be available in body.req
	//on the server
	$scope.login = function(){
	 // send a post request to the server
	 $http.post('http://localhost:3000/register', {username: $scope.username, password: $scope.password})
	    // handle success
	    .success(function (data, status) {
	    	if(data.err){
	    		$scope.loggedin = false;
	    		$scope.message = data.err;
	    	}
	    	if(data.status){
	    		//if registration success
				//do angualar stuff
				console.log("success");
				$scope.loggedin = true;
				//if loggedin = true, ng-hide from index.html will hide
				//because they made it through authentication 
				$scope.success = data.status
			} else {
				user = false;
			}
		})
	    // handle error
	    .error(function (data) {
	    	user = false;
	    });

	}
});
