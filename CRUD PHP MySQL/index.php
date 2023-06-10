<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Insertar datos</title>
</head>
<body>
	<?php
	if (isset($_POST['enviar'])) 
	{
		$nombre=$_POST['nombre'];
		$correo=$_POST['correo'];
		$edad=$_POST['edad'];
		$nivel=$_POST['nivel'];
		$codpost=$_POST['cp'];

		include "php_files/conexion.php";
		$insertar = "INSERT INTO clientesdatos (ID, Nombre, Edad, Correo, Nivel, CP) VALUES ('', '$nombre', '$edad', '$correo', '$nivel', '$codpost')";
		// insert in database
		$resultado = mysqli_query($conexion, $insertar);
		if ($resultado) 
		{
			echo "<script language='JavaScript'>
				alert('Los datos se ingresaron correctamente');
				</script>";
		}
		else
		{
			echo "<script language='JavaScript'>
				alert('Ocurrió un error');
				</script>";
		}
	}
	?>
	<header></header>
	<main>
		<form method="post" action="<?=$_SERVER['PHP_SELF']?>">
			<label for="nombre">Nombre </label>
			<input type="text" name="nombre">
			<br>
			<label for="correo">E-mail</label>
			<input type="email" name="correo">
			<br>
			<label for="edad">Edad</label>
			<input type="number" name="edad" min="10" max="99">
			<br>
			<label for="nivel">Nivel </label>
			<input type="number" name="nivel" min="1" max="6">
			<br>
			<label for="cp">Código Postal</label>
			<input type="number" name="cp" min="0" max="99999">
			<br>
			<button type="submit" name="enviar">Enviar datos</button>
		</form>
	</main>
	<footer></footer>
</body>
</html>