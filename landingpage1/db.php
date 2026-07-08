<?php
$host = 'localhost';
$db_name = 'pklaku_auth';
$db_user = 'root';
$db_pass = '';

try {
    $pdo = new PDO("mysql:host={$host};dbname={$db_name};charset=utf8mb4", $db_user, $db_pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
} catch (PDOException $e) {
    exit('Koneksi database gagal: ' . $e->getMessage());
}
