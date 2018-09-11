app.controller("affinCtrl", ["$scope", "affinService", function ($scope, affinService) {
    $scope.analyze = function () {
        $scope.res = affinService.getScore($scope.token);
    }

    $scope.clear = function(){
        $scope.res = null;
    }
}]);