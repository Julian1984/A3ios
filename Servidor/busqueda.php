<?php
// Descomentar la siguiente linea si es que les da error el php al enviar la data
// header('Access-Control-Allow-Origin: *');

$server = "localhost";
$username = "wwwusr34";
$password = "t3fosm8j";
$database = "dbwwwusr34";

$con = mysql_connect($server, $username, $password) or die ("No se conecto: " . mysql_error());

mysql_select_db($database, $con);


$boton = $_POST["boton"];

$query = mysql_query("SELECT * from T_A3_programas where discapacidad='$boton'");
$ret = mysql_fetch_array($sql);

$id = $ret["id"];

//Completar con todos los campos de la bbdd

$respuesta["id"] = $id;


$res=mysql_num_rows($sql);

 
 if($res>0){
		  echo json_encode($respuesta);}
		else{
		  echo $denegado;
		  } 
			
		mysql_close($con);

?>