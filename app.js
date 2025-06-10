angular.module('GovReportApp', [])
.directive('fileModel', ['$parse', function ($parse) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var model = $parse(attrs.fileModel);
      element.bind('change', function() {
        scope.$apply(() => model(scope).arquivo = element[0].files[0]);
      });
    }
  };
}])
.controller('LoginController', ['$scope', function($scope) {
  $scope.user = { email: '', password: '' };

  $scope.login = function() {
    if ($scope.user.email && $scope.user.password) {
      alert('Login simulado para: ' + $scope.user.email);
      // Redirecionar para tela de envio (em app real)
      window.location.href = "upload.html";
    }
  };
}])
.controller('UploadController', ['$scope', function($scope) {
  $scope.doc = {};
  $scope.documentos = [];

  $scope.uploadDocument = function() {
    if ($scope.doc.tipo && $scope.doc.titulo && $scope.doc.descricao && $scope.doc.arquivo) {
      const novoDoc = {
        tipo: $scope.doc.tipo,
        titulo: $scope.doc.titulo,
        data: new Date()
      };
      $scope.documentos.push(novoDoc);
      alert("Documento enviado com sucesso!");

      // Limpa o formulário
      $scope.doc = {};
      document.querySelector('input[type="file"]').value = null;
    }
  };
}]);
