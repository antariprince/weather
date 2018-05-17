// DIRECTIVES
antariweather.directive("weatherReport", function(){
	return {
		restrict: 'E',
		templateUrl: 'directives/weatherpanel.htm',
		replace: true,
		scope: {
			weatherDay: "=",
			convertToStandard: "&",
			convertToDate: "&",
			dateFormat: "@"
		},
		link: function(s, e, a) {
		var desc = s.weatherDay.weather[0].description;
		if(desc == 'clear sky'){
			e.find('img').attr('src',"/images/icons/icon-2.svg");
		}
		else if(desc == 'scattered clouds'){
			e.find('img').attr('src',"/images/icons/icon-7.svg");
		}
		else if(desc == 'broken clouds'){
			e.find('img').attr('src',"/images/icons/icon-5.svg");
		}
		else if(desc == 'shower rain'){
			e.find('img').attr('src',"/images/icons/icon-10.svg");
		}
		else if(desc == 'thunderstorm'){
			e.find('img').attr('src',"/images/icons/icon-11.svg");
		}
		else if(desc == 'snow'){
			e.find('img').attr('src',"/images/icons/icon-14.svg");
		}
		else if(desc == 'mist'){
			e.find('img').attr('src',"/images/icons/icon-9.svg");
		}
		else {
			e.find('img').attr('src',"/images/icons/icon-5.svg");
		}
	    }
	}
})

antariweather.directive("searchBar", function(){
	return {
		restrict: 'E',
		templateUrl: 'directives/searchbar.htm',
		replace: true,
		link: function(s, e, a) {
			var randomBanner = [
			'/images/banner.png',
			'/images/banner2.png',
			'/images/banner5.png',
			'/images/banner6.png'
			];
			e.css({'background-image' : 'url(' + randomBanner[Math.floor(Math.random() * randomBanner.length)] + ')'});
	    }
	}
})