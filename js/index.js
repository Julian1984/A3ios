document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
    document.addEventListener("backbutton", function(e){
       if($.mobile.activePage.is('#home') || $.mobile.activePage.is('#inicio') ){
           navigator.app.exitApp();
       }
       else {
           navigator.app.backHistory()
       }
    }, false);
}