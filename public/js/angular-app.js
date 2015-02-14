(function (angular) {
  var app = angular.module('friends', []);
  app.controller('friends-ctrl', function ($http, $scope) {
      var person = {friends:[{name:"John", message:"supp nigga", date:"5:32 pm", id:"23546",  status:0},{name:"pancho", message:"el body", date:"7:45 pm", id:"2345", status:0},{name:"pancho 2", message:"el body loco", date:"7:45 pm", id:"2345", status:0}]};
      $scope.person=person.friends;

  });
}(angular));