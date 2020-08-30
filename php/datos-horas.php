<?php
    require_once 'conexion.php';    
    $statement = $conexion->prepare("SELECT * FROM horario WHERE id != 8 AND id != 13 AND id != 14 AND id != 15 ORDER BY id ASC ");
    $statement->execute();
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
        $lunes = $row['lunes'];
        $martes = $row['martes'];
        $miercoles = $row['miercoles'];
        $jueves = $row['jueves'];
        $viernes = $row['viernes'];
        $sabado = $row['sabado'];
        $resultados['dias'][] = [
            "id" => $row['id'],
            "lunes" => $lunes,
            "martes" => $martes,
            "miercoles" => $miercoles,
            "jueves" => $jueves,
            "viernes" => $viernes,
            "sabado" => $sabado
        ];
        $dias = array($lunes,$martes, $miercoles, $jueves, $viernes, $sabado);
        $nom_dias = array('lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado');
        for ($i=0; $i <= 5; $i++) { 
            if($dias[$i] == 1){
                ${$nom_dias[$i]} = 'Libre';
            }else{
                ${$nom_dias[$i]} = 'Ocupado';
                
            }
        }
        $resultados['data'][] = [
            "id" => $row['id'],
            "lunes" => $lunes,
            "martes" => $martes,
            "miercoles" => $miercoles,
            "jueves" => $jueves,
            "viernes" => $viernes,
            "sabado" => $sabado
        ];
        // array_push($resultados,$usuario);
    }
    echo json_encode($resultados);
    
?> 
