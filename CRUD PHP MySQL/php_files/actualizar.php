<!DOCTYPE html>
<html>
<head>
	<?php
	include "conexion.php";
	if (isset($_POST['enviar'])) 
	{
		$id=$_POST['id'];
		$nombre=$_POST['nombre'];
		$edad=$_POST['edad'];
		$correo=$_POST['correo'];
		$nivel=$_POST['nivel'];
		$cp=$_POST['cp'];	
		$actualizar = "UPDATE clientesdatos SET Nombre='$nombre', Edad='$edad', Correo='$correo', Nivel='$nivel', CP='$cp' WHERE ID='$id'";
		$resultado=mysqli_query($conexion,$actualizar);
		if ($resultado) 
		{
			echo "<script language='JavaScript'>
				alert('Los datos se actualizaron correctamente');
				location.assign('../tabla_RUD.php');
				</script>";
		}
		else
		{
			echo "<script language='JavaScript'>
				alert('Ocurrió un error');
				</script>";
		}
	}
	else
	{
		$id=$_GET['id'];
		$consulta="SELECT * FROM clientesdatos WHERE id='".$id."'";
		$resultado=mysqli_query($conexion,$consulta);
		$fila=mysqli_fetch_assoc($resultado);
		$id=$fila["ID"];
		$nombre=$fila["Nombre"];
		$edad=$fila["Edad"];
		$correo=$fila["Correo"];
		$nivel=$fila["Nivel"];
		$cp=$fila["CP"];
	}
	//mysqli_close($conexion);
	?>
	<meta charset="utf-8">
	<title>Actualizar Registro</title>
</head>
<body>
	
	<form action="<?=$_SERVER['PHP_SELF']?>" method="post">
		<label for="id">ID</label>
		<input type="text" name="id" value="<?php echo($id); ?>" readonly>
		<br>
		<label for="nombre">Nombre</label>
		<input type="text" name="nombre" value="<?php echo($fila["Nombre"]); ?>">
		<br>
		<label for="edad">Edad</label>
		<input type="text" name="edad" value="<?php echo($edad); ?>">
		<br>
		<label for="correo">Correo</label>
		<input type="text" name="correo" value="<?php echo($correo); ?>">
		<br>
		<label for="nivel">Nivel</label>
		<input type="text" name="nivel" value="<?php echo($nivel); ?>">
		<br>
		<label for="cp">Código Postal</label>
		<input type="text" name="cp" value="<?php echo($cp); ?>">
		<br>
		<input type="submit" name="enviar" value="ACTUALIZAR">
		<a href="../tabla_RUD.php">Regresar</a>
	</form>
</body>
</html>