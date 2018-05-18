// SERVICES

antariweather.service('cityService',function(){
	this.city = "New York";
});

antariweather.service('geoService',['$resource', function($resource){
	this.GetCity = function(lat,lon){
		var geoApi = $resource("https://maps.googleapis.com/maps/api/geocode/json");
	return geoApi.get({ latlng: lat+','+lon, location_type: 'APPROXIMATE', result_type: "administrative_area_level_1", key: "AIzaSyAq_ocXnml-Jwuon9WF0OcJpZCHqiF1l1Q" });
	}
}]);

antariweather.service('weatherService',['$resource', function($resource){
	this.GetWeather = function(city, days){
		var weatherAPI = $resource("https://api.openweathermap.org/data/2.5/forecast",
		{
			callback: "JSON_CALLBACK"
		},
		{
			get: {method: "JSONP"}
		}
		);
	return weatherAPI.get({ q: city, cnt: days, APPID: "c7caa6ff1f01fd525cf0806438a2f41f" });
	};
}]);