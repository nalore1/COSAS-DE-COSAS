var app = angular.module('login', []); //estandar para comenzar angular

app.controller('ctrlLogin', function ($scope, $window, $http) { //con esto creamos un controlador

    $scope.mostrarLogin = true;
    $scope.mostrarError = false;
    $scope.mensaje = "";
    $scope.modelUsuario = "";
    $scope.modelContrasena = "";



    $scope.hola = function () {
        if ($scope.usuario == "" && $scope.contrasena == "") {
            $scope.mostrarError = true;
            $scope.mostrarLogin = true;
            $scope.mensaje = "No puede dejar campos vacios";

        } else {
            var user = ({ usuarioCliente: $scope.modelUsuario, contrasena: $scope.modelContrasena });
            $http({
                method: 'POST',
                url: "http://localhost:8080",
                data: user
            })
                .then(function (respuesta) {
                if (respuesta.data) {
                        $window.sessionStorage["UsuarioCliente"] = $scope.modelUsuario;
                        console.log("Dato Guardado")
                        window.location.href = "C:\Users\Administrator\Desktop\Front-End\html\5 -PAGINA PRINCIPAL USUARIO - LORENIS"

                } else {
                        $scope.mostrarError = true;
                        $scope.mostrarLogin = true;
                        $scope.mensaje = "Usuario y/o Clave incorrectos";
                    

                }
        })

    }
}

});
