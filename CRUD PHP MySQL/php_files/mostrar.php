<?php
$host = "localhost";
$user = "root";
$password = "";
$bd = "mercadolibre";
    
$con = mysqli_connect($host,$user,$password,$bd);
mysqli_set_charset("UTF8",$con);

$query= "SELECT * FROM clientesdatos";

if ($result = $con->query($query)) 
{
    /* fetch associative array */
    while ($row = $result->fetch_assoc()) {
        $field1name = $row["ID"];
        $field2name = $row["Nombre"];
        $field3name = $row["Edad"];
        $field4name = $row["Correo"];
        $field5name = $row["Nivel"];
        $field6name = $row["CP"];

        echo $field1name.'<br>';
        echo $field2name.'<br>';
        echo $field3name.'<br>';
        echo $field4name.'<br>';
        echo $field5name.'<br>';
        echo $field6name.'<br>';
    }
    /* free result set */
    $result->free();
}

?>