angular.module('belajar', []).controller('kontroller', function ($scope) {
  /*-----------------------------------------
  mengosongkan inputan (hasil)
  fungsi angka() mengambil nilai dari tombol yang di klik
  fungsi back() menghapus satu karakter terakhir
  fungsi bersih() mengosongkan semua
  fungsi operasi() memisahkan bilangan dengan operand nya
  fungsi hitung() melakukan perhitungan baik +,-,x atau /
  */
  $scope.hasil = '';
  $scope.angka = function (ank) {
    $scope.hasil += ank;
  };
  $scope.back = function () {
    $scope.hasil = $scope.hasil.slice(0, -1);
  };
  $scope.bersih = function () {
    $scope.hasil = null;
    $scope.simpan.length = null;
  };
  $scope.simpan = [];
  $scope.operasi = function (op) {
    switch (op) {
      case '+':
        $scope.simpan[0] = '+';
        $scope.simpan[1] = parseFloat($scope.hasil);
        $scope.hasil = '';
        break;
      case '-':
        $scope.simpan[0] = '-';
        $scope.simpan[1] = parseFloat($scope.hasil);
        $scope.hasil = '';
        break;
      case '*':
        $scope.simpan[0] = 'x';
        $scope.simpan[1] = parseFloat($scope.hasil);
        $scope.hasil = '';
        break;
      case '/':
        $scope.simpan[0] = '/';
        $scope.simpan[1] = parseFloat($scope.hasil);
        $scope.hasil = '';
        break;
      default:
        $scope.simpan[0] = '';
        $scope.simpan[1] = '';
        $scope.simpan[2] = '';
    }
  };
  $scope.hitung = function () {
    $scope.simpan[2] = parseFloat($scope.hasil);
    switch ($scope.simpan[0]) {
      case ('+'):
        $scope.simpan[3] = $scope.simpan[1] + $scope.simpan[2];
        $scope.hasil = $scope.simpan[3];
        break;
      case ('-'):
        $scope.simpan[3] = $scope.simpan[1] - $scope.simpan[2];
        $scope.hasil = $scope.simpan[3];
        break;
      case ('x'):
        $scope.simpan[3] = $scope.simpan[1] * $scope.simpan[2];
        $scope.hasil = $scope.simpan[3];
        break;
      case ('/'):
        $scope.simpan[3] = $scope.simpan[1] / $scope.simpan[2];
        $scope.hasil = $scope.simpan[3];
        break;
      default:
        $scope.simpan[3] = null;
    }
  }
})