var app = angular.module('myApp',['ngRoute']);


app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:'./views/home.html',
            controller:'homeCtrl'
        })
        .when('/home',{
            templateUrl:'./views/home.html',
            controller:'homeCtrl'
        })
        .when('/leyuan',{
            templateUrl:'./views/leyuan.html',
            controller:'leyuanCtrl'
        })
        .when('/card',{
            templateUrl:'./views/card.html',
            controller:'cardCtrl'
        })
        .when('/mime',{
            templateUrl:'./views/mime.html',
            controller:'mimeCtrl'
        })
        .otherwise({redirectTo:'/'});
}]);