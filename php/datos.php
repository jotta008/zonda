<?php
    require 'conexion.php';
    $statement = $conexion->prepare("SELECT * FROM students WHERE termino = 'No' ORDER BY idusuarios ASC");
    $statement->execute();
    $alumnos =  "<option value='0' disabled selected>Seleccionar alumno</option>";
    $alumnos .=  "<option value='Libre,1'>Horario Libre</option>";
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
       $alumnos .= "<option value='$row[nombre],$row[idusuarios]'>$row[nombre]</option>";
    }
    echo ($alumnos);
?>