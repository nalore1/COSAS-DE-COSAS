var app = angular.module('login',[]); //estandar para comenzar angular

app.controller('ctrlLogin', function ($scope, $window,  $http) { //con esto creamos un controlador

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
                var user = ({nombre: $scope.usuario, contraseña: $scope.contrasena})
              $http({
                  method: 'POST',
                  url: "http://localhost:8080/login",
                  data:user
                })
                .then(function(respuesta){
                    if(respuesta.data){
                        $window.sessionStorage["UsuarioCliente"] = $scope.usuario;
                        console.log("dato guardado")
                        console.log(respuesta.data)
                        if (respuesta.data.rol.id===1){
                        window.location.href = "file:///C:/Users/Administrator/Desktop/Front-End/html/5%20-PAGINA%20PRINCIPAL%20USUARIO%20-%20LORENIS.html"}
                        else{
                            window.location.href = "file:///C:/Users/Administrator/Desktop/Front-End/html/PAGINA%20PRINCIPAL%20ADMINISTRADOR%20-%20LORENIS.html"}
                    }else{
                        console.log(respuesta);
                        $scope.mostrarError = true;
                        $scope.mostrarLogin = true;
                        $scope.mensaje = "usuario o clave incorrecta";
                    }

                });
            }
    
        };
    }

    
);


