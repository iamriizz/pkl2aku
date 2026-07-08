<?php
require_once __DIR__ . '/auth.php';

if (is_logged_in()) {
    header('Location: index.php');
    exit;
}

$errors = [];
$identifier = '';
$remember = false;
$redirect = $_GET['redirect'] ?? 'index.php';
$successMessage = '';

if (isset($_GET['registered'])) {
    $successMessage = 'Pendaftaran berhasil. Silakan login dengan akun Anda.';
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $identifier = trim($_POST['identifier'] ?? '');
    $password = $_POST['password'] ?? '';
    $remember = isset($_POST['remember']);
    $redirect = $_POST['redirect'] ?? 'index.php';

    if ($identifier === '') {
        $errors[] = 'Email atau nama pengguna wajib diisi.';
    }
    if ($password === '') {
        $errors[] = 'Kata sandi wajib diisi.';
    }

    if (empty($errors)) {
        $stmt = $pdo->prepare('SELECT * FROM users WHERE email = :identifier OR username = :identifier LIMIT 1');
        $stmt->execute(['identifier' => $identifier]);
        $user = $stmt->fetch();

        if (!$user || !password_verify($password, $user['password'])) {
            $errors[] = 'Email / nama pengguna atau kata sandi salah.';
        } else {
            login_user((int)$user['id'], $remember);
            header('Location: ' . redirect_after_login('index.php'));
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
  <title>Login | Dimsum Narawi</title>
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
      <h1>Masuk</h1>
      <p>Silakan masuk untuk melanjutkan ke halaman Checkout.</p>

      <?php if ($successMessage !== ''): ?>
        <div class="alert alert-success">
          <?= escape($successMessage) ?>
        </div>
      <?php endif; ?>

      <?php if (!empty($errors)): ?>
        <div class="alert alert-danger">
          <ul>
            <?php foreach ($errors as $error): ?>
              <li><?= escape($error) ?></li>
            <?php endforeach; ?>
          </ul>
        </div>
      <?php endif; ?>

      <form method="post" action="login.php">
        <input type="hidden" name="redirect" value="<?= escape($redirect) ?>" />

        <label for="identifier">Email atau Nama Pengguna</label>
        <input id="identifier" name="identifier" type="text" value="<?= escape($identifier) ?>" required />

        <label for="password">Kata Sandi</label>
        <input id="password" name="password" type="password" required />

        <label class="checkbox-label">
          <input type="checkbox" name="remember" <?= $remember ? 'checked' : '' ?> />
          Ingat saya di perangkat ini
        </label>

        <button type="submit" class="btn btn-primary">Login</button>
      </form>

      <p class="auth-note">
        Belum punya akun? <a href="register.php?redirect=<?= escape($redirect) ?>">Daftar sekarang</a>
      </p>
      <p class="auth-note">
        <a href="index.php">Kembali ke beranda</a>
      </p>
    </section>
  </main>
</body>
</html>
