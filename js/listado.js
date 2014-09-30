$(document).on('pageinit', '#listado', function(){      
   $.ajax({
         url: "https://itunes.apple.com/search?entity=software&term=%22special-education%22&country=es",
         dataType: 'jsonp',
         success: function(json_results){
         console.log(json_results);
			
			appInfo.result = json_results.results;
			
         $('#app-list').append('<ul data-role="listview"></ul>');
         listItems = $('#app-list').find('ul');

         $.each(json_results.results, function(i, key) {
			//console.log(JSON.stringify(key));
            // edit
            var //data = json_results.results[key],
			
                artworkUrl512 = key.artworkUrl512 || '',
                collectionName = key.collectionName || '',
                trackName = key.trackName || '',
				trackId = key.trackId || '',
                description = key.description || '';

            html = '<img src="' + artworkUrl512 + '"/>';
            //html += '<h3><a href="#">' + trackId + '</a></h3>';
            html += '' + trackName + '';
			//html += '<p>Id: ' + trackId + '</p>';
            //html += '<p>Descripcion: ' + description + '</p>';
		//	console.log('<li><a href="" data-id="' + key.trackId + '">' + html + '</li>');
            listItems.append('<li><a href="" data-id="' + key.trackId + '">' + html + '</li>');
	 
	 });
       //
         // Need to refresh list after AJAX call
         $('#app-list ul').listview();
      }
   
   });
});   
   
$(document).on('pagebeforeshow', '#headline', function(){      
    $('#app-data').empty();
	var web;
    $.each(appInfo.result, function(i, key) {
        if(key.trackId == appInfo.trackId) {
            $('#app-data').append('<li><img src="'+key.artworkUrl512+'"></li>');
			$('#app-data').append('<li><h1>Nombre: '+key.trackName+'</h1></li>');
			$('#app-data').append('<li>Precio: '+key.price+' euros</li>');
			//$('#app-data').append('<li>Resumen: '+key.description+'</li>');
			$('#textarea').val(key.description);			
            $('#app-data').listview('refresh');
            	web = key.trackViewUrl + this.id;	
				//console.log(web);
        }
    });

	$('#verify').click(function() {
		// window.location = web.trackViewUrl;
// });
		$(location).attr('href',web);

		// $.mobile.changePage( web, {
		// transition:"slide",
		// reverse: true, 
		// dataUrl:web
		// }); 
	});	
	
});

$(document).on('vclick', '#app-list li a', function(){  
    appInfo.trackId = $(this).attr('data-id');
    $.mobile.changePage( "#headline", { transition: "slide", changeHash: false });
});

var appInfo = {
    id : null,
    result : null
}



// $( ".mybtn" ).bind( "click", function(event, ui) {
    // event.preventDefault(); 
    // var url = $(this).data('www.nasa.gov');
    // location.replace(url);
// });