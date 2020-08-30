<?php
try {
	$conexion = new PDO('mysql:host=localhost;dbname=zondescu_zonda1', 'zondescu_zonda','muyjosee22'); 
}catch(PDOException $e){
	echo 'Error' . $e->getMessage();
	die();
}
 ?>