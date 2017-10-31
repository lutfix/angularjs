angular.module('validasi', []).controller('cl', function ($scope) {
  //mendefinisikan nilai awal tampil dengan password
  $scope.tampil = 'password'
  /*------------------------------------------
  membuat fungsi-fungsi untuk menampilkan pesan
  jika form inputan password kurang dari 8 karakter
  maka akan muncul pesan 'password kurang dari 8...'
  dan akan muncul simbol x disampingnya
  --------------------------------------------*/
  $scope.cekpanjang = function () {
    if ($scope.pas.length == 0) {
      $scope.panjang = '';
      $scope.cek1 = '';
    }
    else if ($scope.pas.length < 8) {
      $scope.panjang = 'password kurang dari 8 karakter';
      $scope.cek1 = 'x'
    } else {
      $scope.panjang = ''
      $scope.cek1 = 'v'
    }
  }
  /*------------------------------------------
  funcsi cek untuk melakukan cek pada
  form re-type password
  jika inputan re-type password tidak sama
  dengan yang diinputkan pada password maka akan tampil
  pesan error dan tanda x
  tanda v jika memenuhi syarat
  --------------------------------------------*/
  $scope.cek = function () {
    if ($scope.pas == null || $scope.pass == null) {
      $scope.sama = ''
      $scope.cek2 = ''
    } else if ($scope.pas == $scope.pass) {
      $scope.sama = ''
      $scope.cek2 = 'v'
    } else {
      $scope.sama = 'password tidak sama'
      $scope.cek2 = 'x'
    }
  }
});