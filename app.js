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
.controller('ConsultaPublicaController', ['$scope', function($scope) {
  $scope.filtro = { tipo: '', titulo: '' };

  // Simulação de dados que normalmente viriam do backend
  $scope.documentos = [
    {
      tipo: 'Formulário de Referência',
      titulo: '2024 - Atualização Anual',
      data: new Date('2024-04-20T14:30:00')
    },
    {
      tipo: 'Fato Relevante',
      titulo: 'Aquisição de Subsidiária XYZ',
      data: new Date('2024-06-01T09:15:00')
    },
    {
      tipo: 'DFP',
      titulo: 'Demonstrações Financeiras 2023',
      data: new Date('2024-03-15T16:00:00')
    }
  ];

  $scope.documentosFiltrados = function() {
    return $scope.documentos.filter(function(doc) {
      const tipoOK = !$scope.filtro.tipo || doc.tipo === $scope.filtro.tipo;
      const tituloOK = !$scope.filtro.titulo || doc.titulo.toLowerCase().includes($scope.filtro.titulo.toLowerCase());
      return tipoOK && tituloOK;
    });
  };
}]);
