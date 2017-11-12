angular.module('belajar', []).controller('operasi', function ($scope) {
  /*fungsi letak mengambil koordinat x dan y untuk menentukan warna apa pada bidang yang dilewati*/
  $scope.letak = function (koordinat) {
    $scope.x = koordinat.clientX;
    $scope.y = koordinat.clientY;
    if ($scope.x <= 100) {
      $scope.warna = 'merah';
    } else if ($scope.x <= 200) {
      $scope.warna = 'hijau';
    } else {
      $scope.warna = 'biru';
    }
  }
});
