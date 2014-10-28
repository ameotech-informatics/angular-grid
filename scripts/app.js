var app = angular.module('angulardemoapp',
    ['ui.bootstrap',
    'dashbaord-controllers',
    'ngRoute',
    'angulargrid']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
     when('/', {
         templateUrl: 'scripts/templates/dashboard.html',
         controller: 'dashboardCtrl'
     }).
     when('/showOrders', {
         templateUrl: 'templates/show-orders.html',
         controller: 'ShowOrdersController'
     }).
     otherwise({
         redirectTo: '/addOrder'
     });
}])

