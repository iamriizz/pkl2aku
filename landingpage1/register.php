<?php
require_once __DIR__ . '/auth.php';

if (is_logged_in()) {
    header('Location: index.php');
    exit;
}

$errors = [];
$username = '';
$email = '';
$redirect = $_GET['redirect'] ?? 'index.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';
    $passwordConfirm = $_POST['password_confirm'] ?? '';
    $redirect = $_POST['redirect'] ?? 'index.php';

    if ($username === '') {
        $errors[] = 'Nama pengguna wajib diisi.';
    } elseif (!preg_match('/^[a-zA-Z0-9_]{3,30}$/', $username)) {
        $errors[] = 'Nama pengguna harus 3-30 karakter, tanpa spasi, dan hanya boleh berisi huruf, angka, atau garis bawah.';
    }

    if ($email === '') {
        $errors[] = 'Email wajib diisi.';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Email tidak valid.';
    }

    if ($password === '') {
        $errors[] = 'Kata sandi wajib diisi.';
    } elseif (strlen($password) < 8) {
        $errors[] = 'Kata sandi minimal 8 karakter.';
    }

    if ($password !== $passwordConfirm) {
        $errors[] = 'Konfirmasi kata sandi tidak cocok.';
    }

    if (empty($errors)) {
        $stmt = $pdo->prepare('SELECT COUNT(*) FROM users WHERE username = :username OR email = :email');
        $stmt->execute(['username' => $username, 'email' => $email]);
        $exists = $stmt->fetchColumn();

        if ($exists) {
            $errors[] = 'Nama pengguna atau email sudah terdaftar.';
        } else {
            $stmt = $pdo->prepare('INSERT INTO users (username, email, password) VALUES (:username, :email, :password)');
            $stmt->execute([
                'username' => $username,
                'email' => $email,
                'password' => password_hash($password, PASSWORD_DEFAULT),
            ]);

            header('Location: login.php?registered=1&redirect=' . rawurlencode($redirect));
            exit;
        }
    }
}

function escape(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Daftar | Dimsum Narawi</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" integrity="sha384-1nE+9iSX0C2L+YI2QXR1P4f+cfIRjvNzYDfUs9ZbL1oKs5rKLTyjY8tfK2K1dl3z" crossorigin="anonymous" />
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header class="site-header auth-header">
    <div class="container header-inner">
      <div class="brand-group">
        <a class="brand" href="index.php">Dimsum Narawi</a>
        <span class="brand-tag">Original • Mentai • Bakar</span>
      </div>
      <nav class="site-nav">
        <a href="index.php">Beranda</a>
        <a href="index.php#menu">Menu</a>
        <a href="index.php#promo">Promo</a>
        <a href="index.php#about">Tentang</a>
        <a href="index.php#location">Lokasi</a>
      </nav>
      <div class="header-actions">
        <a class="btn btn-secondary" href="register.php?redirect=<?= urlencode($redirect) ?>">Daftar</a>
        <a class="btn btn-primary" href="login.php?redirect=<?= urlencode($redirect) ?>">Login</a>
      </div>
    </div>
  </header>
  <main class="auth-page">
    <section class="auth-card">
      <h1>Daftar</h1>
      <p>Buat akun baru untuk memesan dan mengamankan checkout Anda.</p>

      <?php if (!empty($errors)): ?>
        <div class="alert alert-danger">
          <ul>
            <?php foreach ($errors as $error): ?>
              <li><?= escape($error) ?></li>
            <?php endforeach; ?>
          </ul>
        </div>
      <?php endif; ?>

      <form method="post" action="register.php">
        <input type="hidden" name="redirect" value="<?= escape($redirect) ?>" />

        <label for="username">Nama Pengguna</label>
        <input id="username" name="username" type="text" value="<?= escape($username) ?>" required />

        <label for="email">Email</label>
        <input id="email" name="email" type="email" value="<?= escape($email) ?>" required />

        <label for="password">Kata Sandi</label>
        <input id="password" name="password" type="password" required />

        <label for="password_confirm">Konfirmasi Kata Sandi</label>
        <input id="password_confirm" name="password_confirm" type="password" required />

        <button type="submit" class="btn btn-primary">Daftar</button>
      </form>

      <p class="auth-note">
        Sudah punya akun? <a href="login.php?redirect=<?= escape($redirect) ?>">Login di sini</a>
      </p>
      <p class="auth-note">
        <a href="index.php">Kembali ke beranda</a>
      </p>
    </section>
  </main>
</body>
</html>
