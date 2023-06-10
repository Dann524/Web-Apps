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
		<form action="php_files/actualizar.php">
	<?php
	include "php_files/conexion.php";
	//Seleccionamos los datos de la BDD
	$result= mysqli_query($conexion, "SELECT * FROM clientesdatos");

	while ($row = mysqli_fetch_array($result)) 
	{
	    echo "<tr>";
	    echo "<td>" . $row['ID'] . "</td>";
	    ?>
	    <!--td hidden><input name="<?php //echo $row['ID']; ?>"></td-->
	    <td><input value="<?php echo $row['Nombre']; ?>"></td>
	    <td><input value="<?php echo $row['Edad']; ?>"></td>
	    <td><input value="<?php echo $row['Correo']; ?>"></td>
	    <td><input value="<?php echo $row['Nivel']; ?>"></td>
	    <td><input value="<?php echo $row['CP']; ?>"></td>
	    <td><button type="submit" name="<?php echo $row['ID']; ?>">Actualizar</button> 
	    <?php
	    echo "<td><button>Borrar</button></td>";
	    echo "</tr>";
	}
	?>
	</form>
	</table>
</body>
</html>