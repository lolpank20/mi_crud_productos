<?php
$servername = "localhost";  // Servidor de MySQL
$username = "root";         // Tu usuario de MySQL (por defecto "root")
$password = "";             // Tu contraseña de MySQL (puede estar vacía si no la has configurado)
$dbname = "mi_crud";        // El nombre de la base de datos a la que te vas a conectar

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Comprobar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
echo "Conectado correctamente";
?>
