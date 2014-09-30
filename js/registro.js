$(document).on('pagebeforeshow', '#registro', function(){ 
	
        $(document).on('click', '#submit2', function() { // catch the form's submit event
        if($('#usernamereg').val().length > 0 && $('#passwordreg').val().length > 0 && $('#dnireg').val().length > 0 && $('#emailreg').val().length > 0){
            // Send data to server through ajax call
            // action is functionality we want to call and outputJSON is our data
            var user = $('#reg-user').serialize();
            
            
                $.ajax(
                	{
                	url: 'http://www3.uah.es/catedra_vodafone/pruebas/adrian/registro.php',
                    data: user, // Convert a form to a JSON string representation
                    type: 'post',                   
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
                    	if(result > 0)
                    		{
                    		navigator.notification.alert('Usuario ya registrado',null,'Jornadas Vodafone', 'Aceptar');
                            $.mobile.changePage("#entrada"); 
                    		}
                    	else
                    		{
                    		navigator.notification.alert('Registro realizado correctamente',null,'Jornadas Vodafone', 'Aceptar');
                    		$.mobile.changePage("#login");
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