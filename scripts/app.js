angular.module('app', [
        'angular-filters',
    ])
    .controller('MainCtrl', ['$scope',
        function($scope) {
            $scope.ilija = "Ilija";
        }
    ]);
