angular.module('todo', []).controller('cl', function ($scope) {
  /*------------------------------------------
  deklarasi array baru
  nilai k untuk index array
  membuat fungsi untuk menambah data ke array
  isikan array dengan nilai masukkan
  setelah itu input masukkan dikosongkan
  menambah nilai k+1
  mengeluarkan jumlah data yang dimasukkan
  --------------------------------------------*/
  $scope.daftar = [];
  var k = 0;
  $scope.daftarkan = function () {
    $scope.daftar[k] = $scope.masukan;
    $scope.masukan = ''
    k++;
    $scope.jumlah = $scope.daftar.length;
  }
  //membuat fungsi untuk hapus todo
  $scope.hapus = function (ins) {
    $scope.daftars.splice(ins, 1)
    //update nilai jumlah
    $scope.jumlah = $scope.daftar.length;
    return $scope.jumlah;
  }
});