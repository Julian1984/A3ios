$(document).on('pageinit', '#listado', function(){      
    var url = 'https://itunes.apple.com',
        mode = 'entity=software&term=spotify',
        buscar = encodeURI('katesimko') + '&country=es',        
        key = '&api_key=470fd2ec8853e25d2f8d86f685d2270e';        
    
    $.ajax({
        url: url + mode ,
        dataType: "jsonp",
        async: true,
        success: function (json_results) {
		console.log(json_results);
            //ajax.parseJSONP(result);
		
		$('#app-list').append('<ul data-role="listview"></ul>');
         listItems = $('#app-data').find('ul');
		  $.each(json_results.results, function(key) {
		  var data = json_results.results[key],
                artworkUrl60 = data.artworkUrl60 || '',
                collectionName = data.collectionName || '',
                artistName = data.artistName || '',
                releaseDate = data.releaseData || '';

            html = '<img src="' + artworkUrl60 + '"/>';
            html += '<h3><a href="#">' + collectionName + '</a></h3>';
            html += '<p>From: ' + artistName + '</p>';
            html += '<p>Created: ' + releaseDate + '</p>';
            listItems.append('<li>' + html + '</li>');
         });
$('#app-list ul').listview();
     }
    },
        // error: function (request,error) {
            // alert('Network error has occurred please try again!');
        }
    });         
);


// $(document).on('pagebeforeshow', '#headline', function(){      
    // $('#app-data').empty();
     // $.each(appInfo.result, function(i, row) {
         // if(row.id == appInfo.id) {
            // $('#app-data').append('<li><img src="http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w185'+row.poster_path+'"></li>');
            // $('#app-data').append('<li>Nombre Programa: <b>' + +' </b></li>');
            // $('#app-data').append('<li>Precio: <b>' + row.price +' </b></li>');
            // $('#app-data').append('<li>Tipo Discapacidad:<b>' + +' </b></li>');   
            // $('#app-data').append('<li>Resumen:<b>' + row.description +' </b></li>');      			
            // $('#app-data').listview('refresh');            
         // }
     // });    
// });

// $(document).on('vclick', '#app-list li a', function(){  
    // appInfo.id = $(this).attr('data-id');
    // $.mobile.changePage( "#headline", { transition: "slide", changeHash: false });
// });

// var appInfo = {
    // id : null,
    // result : null
// }

// var ajax = {  
    // parseJSONP:function(result){  
        // appInfo.result = result.results;
         // $.each(result.results, function(i, row) {
            // console.log(JSON.stringify(row));
			// $('#app-list').append('<li><a href="" data-id="' + row.id + '"><img src="http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w185'+row.poster_path+'"/><h3>' + row.title + '</h3><p>' + row.vote_average + '/10</p></a></li>');
         // });
        // $('#app-list').listview('refresh');
    // }
// }
