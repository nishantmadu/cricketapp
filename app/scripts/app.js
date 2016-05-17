var angularApp = angular.module('cricketApp', ['ngResource','ngRoute']);

angularApp.config(function ($routeProvider) {
  $routeProvider
  .when ('/', {
    templateUrl: 'app/templates/main.html',
    controller: 'HomeController'
  })
  .when ('/matchdetails', {
    templateUrl: 'details.html',
    controller: 'DetailsController'
  })
});


angularApp.controller("HomeController",['$resource','$filter',function($resource,$filter){
  var vm=this;
    var cricketResource = $resource('http://cricapi.com/api/cricket');
    vm.cricketResponse = cricketResource.get();
    console.log(vm.cricketResponse);

}]);
