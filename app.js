angular.module('GovReportApp', [])
.controller('LoginController', ['$scope', function($scope) {
  $scope.user = {
    email: '',
    password: ''
  };

  $scope.login = function() {
    if ($scope.user.email && $scope.user.password) {
      alert('Login simulado para: ' + $scope.user.email);
      // Aqui você chamaria sua API de autenticação real.
    }
  };
}]);
