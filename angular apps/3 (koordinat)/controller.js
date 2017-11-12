angular.module('belajar', []).controller('operasi', function ($scope) {
  $scope.letak = function (koordinat) {
    $scope.x = koordinat.clientX;
    $scope.y = koordinat.clientY;
  }
});