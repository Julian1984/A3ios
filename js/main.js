$(document).on('pagebeforeshow', '#login', function(){  
        $(document).on('click', '#submit', function() { // catch the form's submit event
        if($('#usuario').val().length > 0 && $('#password').val().length > 0){
            // Send data to server through ajax call
            // action is functionality we want to call and outputJSON is our data
            var username = $('#check-user').serialize();        
            
                $.ajax(
                	{
                	url: 'http://www3.uah.es/catedra_vodafone/A3/login.php',
                    data: username, // Convert a form to a JSON string representation
                    type: 'post',
                    dataType: 'json',
                    async: true,
                    beforeSend: function() {
                        // This callback function will trigger before data is sent
                        $.mobile.showPageLoadingMsg(true); // This will show ajax spinner
                    },
                    complete: function() {
                        // This callback function will trigger on data sent/received complete
                        $.mobile.hidePageLoadingMsg(); // This will hide ajax spinner
                    },
                    success: function (result) {
                           // resultObject.formSubmitionResult = result;
                    	if(result==0)
                    		{
                    		navigator.notification.alert('Usuario o contraseña invalidos',null,'A3', 'Aceptar');
                    		$.mobile.changePage("#login");
                    		}
                    	else
                    		{
                    		userID = result.id;
                    		nombreID = result.nombre;
                    		passID = result.contra;
                    		usuarioID = result.usu;
                    		passwordID = result.contra;
                    		discapacidadID = result.discapacidad;
                    		$.mobile.changePage("#home");  
                    		}
                                                  
             
                    },
                    error: function (request,error) {
                        // This callback function will trigger on unsuccessful action                
                        alert('Se ha producido un error al conectar, prueba de nuevo!');
                    }
                });                   
        } else {
            alert('Por favor rellena todos los campos');
        }           
            return false; // cancel original event to prevent form submitting
        });    
});