<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

require_once __DIR__ . '/db.php';

$currentUser = null;

function safe_redirect_url(string $url): string
{
    $url = trim($url);
    if ($url === '') {
        return 'index.php';
    }

    if (preg_match('#^(?:https?://|//)#i', $url)) {
        return 'index.php';
    }

    return $url;
}

function auth_get_current_user(): ?array
{
    global $pdo, $currentUser;

    if ($currentUser !== null) {
        return $currentUser;
    }

    if (!empty($_SESSION['user_id'])) {
        $stmt = $pdo->prepare('SELECT id, username, email, created_at FROM users WHERE id = :id');
        $stmt->execute(['id' => $_SESSION['user_id']]);
        $currentUser = $stmt->fetch();
        if ($currentUser) {
            return $currentUser;
        }
        unset($_SESSION['user_id']);
    }

    if (!empty($_COOKIE['remember'])) {
        $stmt = $pdo->prepare('SELECT id, username, email, created_at FROM users WHERE remember_token = :token AND remember_expires > NOW()');
        $stmt->execute(['token' => $_COOKIE['remember']]);
        $user = $stmt->fetch();
        if ($user) {
            $_SESSION['user_id'] = $user['id'];
            $currentUser = $user;
            return $currentUser;
        }
    }

    return null;
}

function login_user(int $user_id, bool $remember = false): void
{
    global $pdo;

    session_regenerate_id(true);
    $_SESSION['user_id'] = $user_id;

    if ($remember) {
        $token = bin2hex(random_bytes(32));
        $expires = date('Y-m-d H:i:s', time() + 60 * 60 * 24 * 30);

        setcookie('remember', $token, time() + 60 * 60 * 24 * 30, '/', '', false, true);

        $stmt = $pdo->prepare('UPDATE users SET remember_token = :token, remember_expires = :expires WHERE id = :id');
        $stmt->execute([
            'token' => $token,
            'expires' => $expires,
            'id' => $user_id,
        ]);
    }
}

function logout_user(): void
{
    global $pdo;

    $token = $_COOKIE['remember'] ?? null;
    if ($token !== null) {
        $stmt = $pdo->prepare('UPDATE users SET remember_token = NULL, remember_expires = NULL WHERE remember_token = :token');
        $stmt->execute(['token' => $token]);
        setcookie('remember', '', time() - 3600, '/', '', false, true);
    }

    if (!empty($_SESSION['user_id'])) {
        $stmt = $pdo->prepare('UPDATE users SET remember_token = NULL, remember_expires = NULL WHERE id = :id');
        $stmt->execute(['id' => $_SESSION['user_id']]);
    }

    $_SESSION = [];
    session_destroy();
}

function is_logged_in(): bool
{
    return auth_get_current_user() !== null;
}

function require_login(): void
{
    if (!is_logged_in()) {
        $requested = $_SERVER['REQUEST_URI'] ?? 'checkout.php';
        header('Location: login.php?redirect=' . rawurlencode($requested));
        exit;
    }
}

function redirect_after_login(string $default = 'checkout.php'): string
{
    $redirect = $_POST['redirect'] ?? $_GET['redirect'] ?? $default;
    return safe_redirect_url($redirect);
}
