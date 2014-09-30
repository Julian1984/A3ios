<?php
	
	$server = "localhost";
	$username = "wwwusr34";
	$password = "t3fosm8j";
	$database = "dbwwwusr34";

	
    $con = mysql_connect($server, $username, $password) or die ("No se conecto: " . mysql_error());

	mysql_select_db($database, $con);
  
    $denegado = 0;

	$usuario = $_POST['usuario'];
	$password = $_POST['password'];
	
	 $sql=mysql_query("select * from persona where usu='$usuario' and pass='$password'");
	 $ret = mysql_fetch_array($sql); //Obtenemos el array de la fila que nos devuelve
	 $id = $ret["id"]; // con esto seleccionamos el campo id de la fila devuelta
	 $nombre = $ret["Nombre"];
	 $passw = $ret["pass"];
	 $user = $ret["usuario"];
	 $Disc = $ret["id_discapacidad"];
	
	 

     $res=mysql_num_rows($sql); // numero de filas que cumplen los resultados
	 
	 $respuesta["id"] = $id;
	 $respuesta["usuario"] = $user;
	 $respuesta["Nombre"] = $nombre;
	 $respuesta["id_discapacidad"] = $Disc;

 
 
      if($res>0){
		  echo json_encode($respuesta);}
		else{
		  echo $denegado;} 
			
		mysql_close($con);

?>