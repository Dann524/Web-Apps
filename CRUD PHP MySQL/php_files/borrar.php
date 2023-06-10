<?php
include ("conexion.php");
$id=$_GET['id'];

$borrar="DELETE FROM clientesdatos WHERE ID='$id'";
$resultado=mysqli_query($conexion,$borrar);
if ($resultado) 
	{
		echo "<script language='JavaScript'>
		alert('Los datos se eliminaron correctamente');
		location.assign('../tabla_RUD.php');
		</script>";
	}
	else
	{
		echo "<script language='JavaScript'>
		alert('Ocurrió un error');
		</script>";
	}
?>