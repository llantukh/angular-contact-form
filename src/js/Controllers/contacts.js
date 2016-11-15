const SERVER_URL = 'https://class-server.herokuapp.com/collections/';

function ContactController ($scope, $http) {
  $scope.contacts = [];
  $scope.errors = {};

  function init () {};

  init();

  $scope.validateName = function (name) {};

  $scope.validateEmail = function (email) {};

  $scope.validateWebsite = function (website) {};

  $scope.validateMessage = function (message) {};

  $scope.addContact = function (contact) {};
}

ContactController.inject = ['$scope','$http'];
export { ContactController };
