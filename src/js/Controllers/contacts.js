const SERVER_URL = 'https://class-server.herokuapp.com/collections/lelas-contacts';

function ContactController ($scope, $http) {
  $scope.contacts = [];
  $scope.errors = {};

  function init () {
    $http.get(SERVER_URL).then(function (resp) {
      console.log(resp.data);
      $scope.contacts = resp.data;
    });
  };
  
  init();

  $scope.validateName = function (name) {
    if (name === '') {
      $scope.errors.name = "Name cannot be left empty."
    } else {
      $scope.errors.name = ''
    }
    return true
  };

  $scope.validateEmail = function (email) {
    if (!email.includes('@')) {
      $scope.errors.email = "Email must include @"
    } else {
      $scope.errors.email = ''
    }
    if (email === '') {
      $scope.errors.email = 'Email cannot be left empty.';
    }
    return true;
  };

  $scope.validateWebsite = function (website) {
    if (!website.startsWith('http')) {
      $scope.errors.website = "Website must start with http:// or https://."
    } else {
      $scope.errors.website = ''
    }
    if (website === '') {
      $scope.errors.website = 'Website cannot be left empty.';
    }
    return true;
  };

  $scope.validateMessage = function (message) {
    if (message === '') {
      $scope.errors.message = "Message cannot be left empty."
    } else {
      $scope.errors.message = ''
    }
    return true
  };

  $scope.addContact = function (contact) {
    $http.post(SERVER_URL, contact).then(function (resp) {
      let contact = resp.data;
      $scope.contacts.push(contact);
      console.log($scope.contacts);
    });
  };
};

ContactController.inject = ['$scope','$http'];
export { ContactController };
