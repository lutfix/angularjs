angular.module('suit', []).controller('kontroller', function ($scope, $interval) {
  /*---------------------------------------------
  mendefinisikan nilai acak dan acaks
  nilai acak, ac, gambar dan fungsi ngacak
  untuk pemainnya disebelah kiri
  dan nilai acaks, acs, gambars dan fungsi ngacaks
  untuk lawannya disebelah kanan
  ac dan acs merupakan nilai yang akan di random
  dengan fungsi Math
  -----------------------------------------------*/
  $scope.acak = 'mulai';
  $scope.acaks = 'mulai';
  var ac = 1;
  var acs = 1;
  $scope.ngacak = function () {
    $scope.acak = Math.floor((Math.random() * 4) + 1);
    switch ($scope.acak) {
      case 1:
        $scope.acak = 'gunting'
        $scope.gambar = 'gunting.png'
        ac = 1;
        break;
      case 2:
        $scope.acak = 'batu'
        $scope.gambar = 'batu.png'
        ac = 2;
        break;
      default: $scope.acak = 'kertas'; ac = 3; $scope.gambar = 'kertas.png';
    }
  }
  $scope.ngacaks = function () {
    $scope.acaks = Math.floor((Math.random() * 4) + 1);
    switch ($scope.acaks) {
      case 1:
        $scope.acaks = 'gunting'
        $scope.gambars = 'gunting.png'
        acs = 1;
        break;
      case 2:
        $scope.acaks = 'batu'
        $scope.gambars = 'batu.png'
        acs = 2;
        break;
      default: $scope.acaks = 'kertas'; acs = 3; $scope.gambars = 'kertas.png'
    }
  }
  /*-----------------------------------------------
  fungsi mulai() akan melakukan fungsi pengacakan dengan timer
  dengan interval acaknya yang ditentukan selama 200ms
  fungsi henti() menghentikan proses pengacakan dan
  memberikan nilai you lose atau you win
  -------------------------------------------------*/
  $scope.mulai = function () {
    var jalan = $interval(function () {
      $scope.ngacak();
      $scope.ngacaks();
    }, 200, 0);
    $scope.henti = function () {
      $interval.cancel(jalan)
      if (ac == acs) {
        $scope.hasil = 'DRAW';
      } else if (ac == 3 && acs == 1) {
        $scope.hasil = 'YOU LOSE'
      } else if (ac == 1 && acs == 3) {
        $scope.hasil = 'YOU WIN'
      } else if (ac < acs) {
        $scope.hasil = 'YOU LOSE'
      }
    }
  }
  /*-----------------------------------------
  fungsi gabung() mengaktifkan fungsi toogle
  pada tombol
  -------------------------------------------*/
  $scope.toogle = 'a';
  $scope.tanda = 'Mulai';
  $scope.gabung = function () {
    if ($scope.toogle == 'a') {
      $scope.tanda = 'Henti';
      $scope.toogle = 'b';
      $scope.mulai();
    } else {
      $scope.tanda = 'Mulai';
      $scope.toogle = 'a';
      $scope.henti();
    }
  }
});