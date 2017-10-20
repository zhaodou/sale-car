/**
 * Created by SXDELL on 2017/10/19.
 */
app.controller('tabController',["$scope","baseServer",function($scope,baseServer){
    baseServer.getData('get',"http://localhost:8989/?data").then(function(result){
        $scope.data = result.data;
    })
}])