<?php
$pdo = new PDO("mysql:host=localhost;dbname=seubanco", "usuario", "senha");

$termo = $_GET['query'];
$stmt = $pdo->prepare("SELECT nome FROM produtos WHERE nome LIKE ? LIMIT 10");
$stmt->execute(["%$termo%"]);

echo json_encode($stmt->fetchAll(PDO::FETCH_COLUMN));
?>