$(document).on('pagebeforeshow', '#update', function(){ 	
	if(userID == 0)
	{
		alert('Debes iniciar sesión para poder modificar tus datos');
		$.mobile.changePage("#login");
	}
	else
	{
	document.getElementById("usernameupd").value=nombreID;
	document.getElementById("surnameupd").value=apellidosID;
	document.getElementById("dniupd").value=dniID;
	document.getElementById("emailupd").value=emailID;
	document.getElementById("passwordupd").value=passwordID;
	document.getElementById("facultadupd").value = facultadID;
	document.getElementById("carreraupd").value=carreraID;
	
        $(document).on('click', '#submit3', function() { // catch the form's submit event
        if($('#usernameupd').val().length > 0 && $('#passwordupd').val().length > 0 && $('#dniupd').val().length > 0 && $('#emailupd').val().length > 0){
        	
            // Send data to server through ajax call
            // action is functionality we want to call and outputJSON is our data
            var user = $('#update-user').serialize();
            var user_ID_check = userID;
            
                      
                $.ajax(
                	{
                	url: 'http://www3.uah.es/catedra_vodafone/pruebas/adrian/update.php',
                    data: user+'&lid='+user_ID_check, // Convert a form to a JSON string representation
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
                           
                          	  alert(result);
                              $.mobile.changePage("#home");    
                                                  
             
                    },
                    error: function (request,error) {
                        // This callback function will trigger on unsuccessful action                
                        alert('Hay un problema en la conexión, por favor intentalo de nuevo!');
                    }
                });                   
        } else {
            alert('Por favor rellena todos los campos');
        }           
            return false; // cancel original event to prevent form submitting
        }); 
	}
});