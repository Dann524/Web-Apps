<?php
$nombre=$_POST['nombre'];
$correo=$_POST['correo'];
$edad=$_POST['edad'];
$nivel=$_POST['nivel'];
$codpost=$_POST['cp'];

include "conexion.php";
$sql = "INSERT INTO clientesdatos (ID, Nombre, Edad, Correo, Nivel, CP) VALUES ('', '$nombre', '$edad', '$correo', '$nivel', '$codpost')";
// insert in database
$rs = mysqli_query($conexion, $sql);
if($rs)
 
{
 
echo "Contact Records Inserted";
 
}

?>