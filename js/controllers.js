function DefaultCtrl($scope, $http){
    $scope.protocol = "http://",
    $scope.requestUrl = "noah.baidu.com/service-tree/v1/node/1",
    $scope.responseSource = "",

    $scope.sendRequest = function(){
       $http({method: 'GET', url: $scope.protocol+$scope.requestUrl}).
       success(function(data, status, headers, config) {
         console.log(data);
         console.log(status);
         console.log(headers);
         console.log(config);
         $scope.responseSource = data;
         }).
       error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
         console.log("errors");
         console.log(data);
         console.log(status);
         console.log(headers);
         console.log(config);
       });
    }
}