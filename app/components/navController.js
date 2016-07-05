angular.module('refbookApp')
    .controller ('navController', ['$scope', '$location', 'navService', function ( $scope, $location, navService ) {
    
    $scope.navItems = navService.navItems

    $scope.getClass = function (path) {
        return ($location.path().substr(0, path.length) === path) ? 'active' : '';
    }

}]);
