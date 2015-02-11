(function (angular) {
  var app = angular.module('friends', []);
  app.controller('friends-ctrl', function ($http, $scope) {
      var person = {friends:[{name:"John", id:"23546", status:0},{name:"pancho", id:"2345", status:0}]};
      $scope.person=person.friends;

  });
}(angular));