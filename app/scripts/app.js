var angularApp = angular.module('cricketApp', ['ngResource','ngRoute']);

angularApp.config(function ($routeProvider) {
  $routeProvider
  .when ('/', {
    templateUrl: 'app/templates/main.html',
    controller: 'HomeController',
    controllerAs: 'vh'
  })
  .when ('/matchdetails/:uniqId', {
    templateUrl: 'app/templates/details.html',
    controller: 'DetailsController',
    controllerAs: 'dc'
  })
});


angularApp.controller("HomeController",['$resource','$filter',function($resource,$filter){
  var vm=this;
    var cricketResource = $resource('http://cricapi.com/api/cricket');
    vm.cricketResponse = cricketResource.get();
  
}]);

angularApp.controller("DetailsController",['$resource','$filter','$routeParams',
function($resource,$filter,$routeParams){
    var vm=this;
    var id = $routeParams.uniqId;
    var cricDetails = $resource('http://cricapi.com/api/cricketScore',{unique_id:id});
    vm.cricResponse = cricDetails.get();


}]);
