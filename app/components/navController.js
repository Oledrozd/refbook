angular.module('refbookApp')
    .controller ('navController', ['$scope', 'navService', function ( $scope, navService ) {
    
    $scope.navItems = navService.navItems

}]);
