function myDemo($scope) {
  $scope.fullname = "Nguyễn Đức Huy";
  $scope.tuoi = "20";
  $scope.giotinh = "Nam";
  $scope.dtb = "8";
  $scope.anh = "3.jpg";
}
var app = angular.module("myApp", []);
app.controller("MyCtrl", myDemo);

var app = angular.module("ThongTinAnh", []);
app.controller("ThongTin", function ($scope) {
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
});
