/**
 * Created by SXDELL on 2017/10/19.
 */
var app = angular.module('myApp',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/tab',{
            templateUrl:'App/temp/_tab.html'
        })
        .when('/tab1',{
            templateUrl:'App/temp/_tab1.html'
        })
        .otherwise({
            redirectTo:'/tab'
        });
})