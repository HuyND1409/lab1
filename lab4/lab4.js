function myDemo($scope) {
  $scope.fullname = "Nguyễn Đức Huy";
  $scope.tuoi = "20";
  $scope.giotinh = "Nam";
  $scope.dtb = "8";
  $scope.anh = "3.jpg";
}
var app = angular.module("myApp", []);
app.controller("MyCtrl", myDemo);

var app = angular.module("BaiTapLab4", []);
app.controller("BaiTapLab", function ($scope) {
  $scope.thongTins = [
    {
      ten: "Nguyễn Văn Tèo ",
      ngaysinh: "20-01-1995",
      gt: "Nam",
      diem: 8.5,
      photo: "3.jpg",
    },
    {
      ten: "Phạm Thị Nở",
      ngaysinh: "11-12-1985",
      gt: "Nữ",
      diem: 5.5,
      photo: "5.jpg",
    },
    {
      ten: "Trần Ngọc Quang",
      ngaysinh: "31-12-1980",
      gt: "Nam",
      diem: 7,
      photo: "7.jpg",
    },
  ];

  $scope.count = 0;
  $scope.myMouse = function () {
    $scope.count++;
  };
  $scope.sayHello = function () {
    $scope.hihi = $scope.test;
  };
  $scope.Tinh = function () {
    $scope.dt = ($scope.soA + $scope.soB) * 2;
    $scope.cv = $scope.soA * $scope.soB;
  };

  $scope.kQ = function () {
    $scope.cv = $scope.dai * $scope.rong;
    $scope.dt = ($scope.dai + $scope.rong) * 2;
  };
  $scope.xet = function () {
    if ($scope.diem < 5) {
      $scope.hl = "Rớt";
    } else {
      $scope.hl = "Đậu";
    }
  };
  $scope.xet2 = function () {
    a = Year($scope.nam);
    b = new Date().getFullYear();
    if (b - a < 18 || b - a >= 27) {
      $scope.hl = "Đậu";
    } else {
      $scope.hl = "Đậu";
    }
  };
  // $scope.Hieu = function(){
  //   $scope.kq = $scope.soA - $scope.soB ;
  // }
  // $scope.Tich = function(){
  //   $scope.kq = $scope.soA * $scope.soB ;
  // }
  // $scope.Thuong = function(){
  //   $scope.kq = $scope.soA / $scope.soB ;
  // }
});
