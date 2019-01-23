var app = angular.module('RegistrateApp', []);

app.controller('ctrlRegistrate', function ($scope, $http,$sce) {

    $scope.trustSrc = function(src){
        return $sce.trustAsResourceUrl(src);
    }

    $scope.guardar = function () {
        var form_data = ({
            "id": 14,
            "nombre": $scope.nombre,
            "fechaNac": $scope.fechaNac,
            "genero": $scope.genero,
            "email":$scope.email,
            "rut":$scope.rut,
            "region":$scope.region,
            "contrasena":$scope.contrasena,
            "nombreUsuario":$scope.nombreUsuario,
            "nacionalidad":$scope.nacionalidad,
        });

        $http({
            method : 'POST',
            url : $scope.trustSrc("http://localhost:8080/almacenarUsuario"),
            data : form_data

        }).then(function (resp) {
            console.log(resp.data);
            window.location.href = "index.html";
        },function(error){
            console.log(error);
        });
    };
});
