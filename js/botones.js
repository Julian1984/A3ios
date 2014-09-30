$(document).on('pagebeforeshow', '#botones', function(){ 
				
        $(document).on('click', '#submit2', function() { // catch the form's submit event
        // Send data to server through ajax call
            // action is functionality we want to call and outputJSON is our data
            var user = $('#boton').serialize();
            
                $.ajax(
                	{
                	url: 'http://www3.uah.es/catedra_vodafone/A3/busqueda.php',
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
                    	if(result < 0)
                    		{
                    		$.mobile.changePage("#listado"); 
							
                    		}
                    	else
                    		{
                    		navigator.notification.alert('Error. Vuelva a intentar elegir otra opcion',null,'A3', 'Aceptar');
                    		$.mobile.changePage("#listado"); 
                    		}
                                                  
             
                    },
                    error: function (request,error) {
                        // This callback function will trigger on unsuccessful action                
                        alert('Se ha producido un error al conectar, prueba de nuevo!');
                    }
                });                   
             $.mobile.changePage("#listado"); 
            return false; // cancel original event to prevent form submitting
        });  
	
});