<?php
     $destino = 'zondaescuela@gmail.com';
     $nombre = $_POST['nombre'];
     $telefono = $_POST['telefono'];
     $email = $_POST['email'];
     $mensaje = $_POST['mensaje'];
    
     $contenido = 'Nombre: '.$nombre.' Correo: '.$email.' Telefono: '. $telefono. ' Mensaje: '.$mensaje;
     if(mail($destino,'Contacto',$contenido)){
        header('Location: contacto.php');
     }else{
        header('Location: error.php');
     }
?>