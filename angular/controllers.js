// CONTROLLERS
antariweather.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService){
 	
	$scope.city = cityService.city;

	$scope.$watch('city', function(){
		cityService.city = $scope.city;
	});

	$scope.submit = function(){
		$location.path('/forecast');
	};
}]);

antariweather.controller('myLocController', ['$scope', "$routeParams",'cityService', 'weatherService', 'geoService', function($scope, $routeParams, cityService, weatherService, geoService){

	$scope.position = {
		latitude:40.730610,
		longitude:-73.935242
 	}

	if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      $scope.$apply(function(){
        $scope.position.latitude = position.coords.latitude;
        $scope.position.longitude = position.coords.longitude;
      });
    });
 	


 	var geolocation = geoService.GetCity($scope.position.latitude, $scope.position.longitude);
 
	var myLocation = geolocation.$promise.then(function(data){

		if(data.status === "OK"){
			$scope.weatherResult = weatherService.GetWeather(data.results[0].address_components[0].long_name, $scope.days);
		}
		else{
			$scope.weatherResult = weatherService.GetWeather(cityService.city, $scope.days);
		}
	});

	$scope.days = $routeParams.days || '7';
	
	$scope.convertToCelsius = function(degK){
		return Math.round(degK - 273.15);
	}

	$scope.convertToDate = function(dt){
		return new Date(dt * 1000)
	}
	$scope.degToCompass = function(deg) {
    var val = Math.floor((deg / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
	}
	$scope.getIcon = function(desc) {
    	if(desc == 'clear sky'){
			return "/images/icons/icon-2.svg";
		}
		else if(desc == 'scattered clouds'){
			return "/images/icons/icon-7.svg";
		}
		else if(desc == 'broken clouds'){
			return "/images/icons/icon-5.svg";
		}
		else if(desc == 'shower rain'){
			return "/images/icons/icon-10.svg";
		}
		else if(desc == 'thunderstorm'){
			return "/images/icons/icon-11.svg";
		}
		else if(desc == 'snow'){
			return "/images/icons/icon-14.svg";
		}
		else if(desc == 'mist'){
			return "/images/icons/icon-9.svg";
		}
		else {
			return "/images/icons/icon-5.svg";
		}
	}


 // 	$scope.position = {
 // 		latitude:14.406422099999999,
 // 		longitude:120.94050569999997
 // 	}

 // 	var geolocation = geoService.GetCity($scope.position.latitude, $scope.position.longitude);
 
	// geolocation.$promise.then(function(data){
	// 		$scope.city = data.results[0].address_components[0].long_name;
	// });

	// $scope.city = cityService.city;

	// $scope.$watch('city', function(){
	// 	cityService.city = $scope.city;
	// });

	// $scope.submit = function(){
	// 	$location.path('/forecast');
	// };
}]);

antariweather.controller('forecastController', ['$scope', "$routeParams",'cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService){
	
	$scope.city = cityService.city;
	$scope.days = $routeParams.days || '7';
	
	$scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);
	$scope.convertToCelsius = function(degK){
		return Math.round(degK - 273.15);
	}

	$scope.convertToDate = function(dt){
		return new Date(dt * 1000)
	}
	$scope.degToCompass = function(deg) {
    var val = Math.floor((deg / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
	}
	$scope.getIcon = function(desc) {
    	if(desc == 'clear sky'){
			return "/images/icons/icon-2.svg";
		}
		else if(desc == 'scattered clouds'){
			return "/images/icons/icon-7.svg";
		}
		else if(desc == 'broken clouds'){
			return "/images/icons/icon-5.svg";
		}
		else if(desc == 'shower rain'){
			return "/images/icons/icon-10.svg";
		}
		else if(desc == 'thunderstorm'){
			return "/images/icons/icon-11.svg";
		}
		else if(desc == 'snow'){
			return "/images/icons/icon-14.svg";
		}
		else if(desc == 'mist'){
			return "/images/icons/icon-9.svg";
		}
		else {
			return "/images/icons/icon-5.svg";
		}
	}
	}]);