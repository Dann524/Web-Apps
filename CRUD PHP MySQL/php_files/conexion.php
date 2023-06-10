<?php
header("Content-Type: text/html;charset=utf-8");
$host = "localhost";
$user = "root";
$password = "";
$bd = "mercadolibre";
//Conexion a la BDd
$conexion = new mysqli($host,$user,$password,$bd);
//Activamos formato utf8 para caracteres especiales
$conexion->set_charset("utf8");
if (!$conexion) 
	{
		die("No se pudo conectar" . mysql_error());
	}
?>