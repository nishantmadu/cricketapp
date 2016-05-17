var angularApp = angular.module('cricketApp', ['ngResource','ngRoute']);

angularApp.config(function ($routeProvider) {
  $routeProvider
  .when ('/', {
    templateUrl: 'templates/main.html',
    controller: 'HomeController'
  })
  .when ('/matchdetails', {
    templateUrl: 'templates/forecast.html',
    controller: 'DetailsController'
  })
});


angularApp.controller("HomeController",['$resource','$filter',function($resource,$filter){
  var vm=this;
  vm.getCityTemperature = function(){
    console.log(vm.cityName);
    var cricketResource = $resource('http://http://cricapi.com/api/cricket',
    vm.cricketResponse = weatherResource.get();
    console.log(vm.cricketResponse);
   }
}]);

angularApp.controller("ForecastController",function($resource){
  var fm=this;

  fm.getCityForecast = function(){
    console.log(fm.cityName);
    var forecastResource = $resource('http://api.openweathermap.org/data/2.5/forecast',
      {q:fm.cityName,appid:'27d43832d2a4adcb97fcbfa23db130aa',cnt:10});
    fm.forecastResponse = forecastResource.get();
    console.log(fm.forecastResponse);
   }
});
