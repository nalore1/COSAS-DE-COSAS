var app = angular.module('login',[]); //estandar para comenzar angular

app.controller('ctrlLogin', function ($scope) { //con esto creamos un controlador

        $scope.mostrarLogin = true;
        $scope.mostrarError = false;
        $scope.mensaje = "";
        $scope.usuario= "";
        $scope.contrasena = "";
        
    
       
        $scope.hola = function() {    
            if( $scope.usuario == "" &&  $scope.contrasena == "" ){
                $scope.mostrarError = true;
                $scope.mostrarLogin = true;
                $scope.mensaje = "No puede dejar campos vacios";    
                
            }else{ 

            if( ($scope.usuario == "admin" &&  $scope.contrasena=="123456") || $scope.usuario == "nalore1" && $scope.contrasena=="123456") {
                    $scope.mostrarError = false;
                    $scope.mostrarLogin = false;                       
            }else{
                    $scope.mostrarError = true;
                    $scope.mostrarLogin = true;
                    $scope.mensaje = "Usuario y/o Clave incorrectos";
                }
    
        };
    }
    
    });

