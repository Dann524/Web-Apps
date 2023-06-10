<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>RUD</title>
</head>
<body>
	<table>
		<tr>
			<th>ID</th>
			<th>Nombre</th>
			<th>Edad</th>
			<th>Correo</th>
			<th>Nivel</th>
			<th>CP</th>
			<th colspan="2">Opciones</th>
		</tr>
		<form>
	<?php
	include "php_files/conexion.php";
	//Seleccionamos los datos de la BDD
	$result= mysqli_query($conexion, "SELECT * FROM clientesdatos");

	while ($row = mysqli_fetch_array($result)) 
	{
	    echo "<tr>";
	    echo "<td>" . $row['ID'] . "</td>";
	    echo "<td>" . $row['Nombre'] . "</td>";
	    echo "<td>" . $row['Edad'] . "</td>";
	    echo "<td>" . $row['Correo'] . "</td>";
	    echo "<td>" . $row['Nivel'] . "</td>";
	    echo "<td>" . $row['CP'] . "</td>";
	    echo "<td><a href='php_files/actualizar.php?id=".$row['ID']."'>Actualizar</a></td>";
	    echo "<td><a href='php_files/borrar.php?id=".$row['ID']."'>Borrar</a></td>";
	    echo "</tr>";
	}
	?>
	</form>
	</table>
</body>
</html>