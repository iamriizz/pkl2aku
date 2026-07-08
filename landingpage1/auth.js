const AUTH_USERS_KEY = 'kfc_users';
const AUTH_SESSION_KEY = 'kfc_session';
const ADMIN_SESSION_KEY = 'kfc_admin_session';
const ORDERS_STORAGE_KEY = 'kfc_orders';
const MENU_STORAGE_KEY = 'kfc_admin_menu';
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'sayaadminkfc1804';

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_USERS_KEY) || '[]');
  } catch (err) {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users));
}

function getCurrentUser() {
  const userId = localStorage.getItem(AUTH_SESSION_KEY);
  if (!userId) {
    return null;
  }
  const users = getUsers();
  return users.find((user) => user.id === userId) || null;
}

function setCurrentUser(userId) {
  localStorage.setItem(AUTH_SESSION_KEY, userId);
}

function logoutCurrentUser() {
  localStorage.removeItem(AUTH_SESSION_KEY);
}

function normalizeIdentifier(value) {
  return value.trim().toLowerCase();
}

function getQueryParams() {
  return Object.fromEntries(new URLSearchParams(window.location.search));
}

function getQueryParam(name) {
  return getQueryParams()[name] || '';
}

function showAlert(container, message, type = 'error') {
  if (!container) {
    return;
  }
  const className = type === 'success' ? 'alert alert-success' : 'alert alert-error';
  container.innerHTML = `<div class="${className}">${message}</div>`;
}

function clearAlert(container) {
  if (container) {
    container.innerHTML = '';
  }
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

function buildUserId() {
  if (window.crypto?.randomUUID) {
    return crypto.randomUUID();
  }
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}

function findUserByIdentifier(identifier) {
  const normalized = normalizeIdentifier(identifier);
  return getUsers().find(
    (user) => user.username.toLowerCase() === normalized || user.email.toLowerCase() === normalized,
  );
}

async function verifyLogin(identifier, password) {
  const user = findUserByIdentifier(identifier);
  if (!user) {
    return null;
  }
  const passwordHash = await hashPassword(password);
  return passwordHash === user.passwordHash ? user : null;
}

async function registerNewUser(username, email, password) {
  const normalizedEmail = normalizeIdentifier(email);
  const normalizedUsername = username.trim();

  if (normalizedUsername === '') {
    throw new Error('Nama pengguna wajib diisi.');
  }
  if (!/^[a-zA-Z0-9_]{3,30}$/.test(normalizedUsername)) {
    throw new Error('Nama pengguna harus 3-30 karakter, tanpa spasi, dan hanya boleh berisi huruf, angka, atau garis bawah.');
  }
  if (!validateEmail(normalizedEmail)) {
    throw new Error('Email tidak valid.');
  }
  if (password.length < 8) {
    throw new Error('Kata sandi minimal 8 karakter.');
  }

  const users = getUsers();
  const duplicate = users.find(
    (user) => user.username.toLowerCase() === normalizedUsername.toLowerCase() || user.email.toLowerCase() === normalizedEmail,
  );
  if (duplicate) {
    throw new Error('Nama pengguna atau email sudah terdaftar.');
  }

  const passwordHash = await hashPassword(password);
  const user = {
    id: buildUserId(),
    username: normalizedUsername,
    email: normalizedEmail,
    passwordHash,
    createdAt: new Date().toISOString(),
  };
  users.push(user);
  saveUsers(users);
  return user;
}

function redirectTo(path) {
  window.location.href = path;
}

function requireLogin() {
  const user = getCurrentUser();
  if (user) {
    return true;
  }
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const loginPage = `login.html?redirect=${encodeURIComponent(currentPage)}`;
  window.location.href = loginPage;
  return false;
}

function getOrders() {
  try {
    return JSON.parse(localStorage.getItem(ORDERS_STORAGE_KEY) || '[]');
  } catch (err) {
    return [];
  }
}

function saveOrders(orders) {
  localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
}

function getOrderByNumber(orderNumber) {
  return getOrders().find((order) => order.orderNumber === orderNumber || order.id === orderNumber) || null;
}

function addOrder(order) {
  const orders = getOrders();
  orders.unshift(order);
  saveOrders(orders);
  window.dispatchEvent(new Event('kfc:orders-updated'));
  return order;
}

function updateOrderStatus(orderNumber, status) {
  const orders = getOrders();
  const target = orders.find((order) => order.orderNumber === orderNumber || order.id === orderNumber);
  if (!target) {
    return false;
  }
  target.status = status;
  target.updatedAt = new Date().toISOString();
  saveOrders(orders);
  window.dispatchEvent(new Event('kfc:orders-updated'));
  return true;
}

function isAdminLoggedIn() {
  return localStorage.getItem(ADMIN_SESSION_KEY) === '1';
}

function setAdminLoggedIn() {
  localStorage.setItem(ADMIN_SESSION_KEY, '1');
}

function logoutAdmin() {
  localStorage.removeItem(ADMIN_SESSION_KEY);
}

function getAdminMenuItems() {
  try {
    return JSON.parse(localStorage.getItem(MENU_STORAGE_KEY) || '[]');
  } catch (err) {
    return [];
  }
}

function saveAdminMenuItems(items) {
  localStorage.setItem(MENU_STORAGE_KEY, JSON.stringify(items));
}

function addAdminMenuItem(item) {
  const items = getAdminMenuItems();
  items.push(item);
  saveAdminMenuItems(items);
  return item;
}

function removeAdminMenuItem(itemId) {
  const items = getAdminMenuItems().filter((item) => item.id !== itemId);
  saveAdminMenuItems(items);
  return items;
}

function showAdminPanel() {
  const adminSection = document.getElementById('admin-section');
  const adminAuthCard = document.getElementById('admin-auth-card');
  const adminDashboardView = document.getElementById('admin-dashboard-view');
  if (!adminSection) {
    return;
  }
  adminSection.classList.remove('hidden');
  adminSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  if (isAdminLoggedIn()) {
    adminAuthCard?.classList.add('hidden');
    adminDashboardView?.classList.remove('hidden');
  } else {
    adminAuthCard?.classList.remove('hidden');
    adminDashboardView?.classList.add('hidden');
  }
  renderAdminDashboard();
}

function renderAdminDashboard() {
  const adminAuthCard = document.getElementById('admin-auth-card');
  const adminDashboardView = document.getElementById('admin-dashboard-view');
  const adminOrdersList = document.getElementById('admin-orders-list');
  const adminOrdersListSecondary = document.getElementById('admin-orders-list-secondary');
  const adminStatusList = document.getElementById('admin-status-list');
  const adminMenuList = document.getElementById('admin-menu-list');
  const adminStatOrders = document.getElementById('admin-stat-orders');
  const adminStatPending = document.getElementById('admin-stat-pending');
  const adminStatCompleted = document.getElementById('admin-stat-completed');
  const adminTitle = document.getElementById('admin-title');

  if (!adminAuthCard && !adminDashboardView && !adminOrdersList && !adminMenuList) {
    return;
  }

  const orders = getOrders();
  const pendingCount = orders.filter((order) => order.status === 'Menunggu Konfirmasi').length;
  const completedCount = orders.filter((order) => order.status === 'Selesai').length;
  const orderRows = orders.length ? orders.map((order) => `
    <tr>
      <td><strong>${order.orderNumber}</strong><br />${order.customerName}</td>
      <td>${order.items.map((item) => `${item.name} x${item.quantity}`).join(', ')}</td>
      <td>${new Date(order.orderDate).toLocaleString('id-ID')}</td>
      <td>${order.status}</td>
      <td>${new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(order.totalAmount)}</td>
    </tr>`).join('') : '<tr><td colspan="5" class="admin-empty-state">Belum ada pesanan.</td></tr>';

  const statusRows = orders.length ? orders.map((order) => `
    <div class="admin-panel-card" style="margin-bottom: 12px;">
      <strong>${order.orderNumber}</strong>
      <p>${order.customerName} · ${order.phone}</p>
      <label for="status-${order.orderNumber}">Status</label>
      <select class="admin-status-select" id="status-${order.orderNumber}" data-order-number="${order.orderNumber}">
        <option value="Menunggu Konfirmasi" ${order.status === 'Menunggu Konfirmasi' ? 'selected' : ''}>Menunggu Konfirmasi</option>
        <option value="Diproses" ${order.status === 'Diproses' ? 'selected' : ''}>Diproses</option>
        <option value="Sedang Dikirim" ${order.status === 'Sedang Dikirim' ? 'selected' : ''}>Sedang Dikirim</option>
        <option value="Selesai" ${order.status === 'Selesai' ? 'selected' : ''}>Selesai</option>
        <option value="Dibatalkan" ${order.status === 'Dibatalkan' ? 'selected' : ''}>Dibatalkan</option>
      </select>
    </div>`).join('') : '<p class="admin-empty-state">Belum ada pesanan.</p>';

  if (adminStatOrders) adminStatOrders.textContent = String(orders.length);
  if (adminStatPending) adminStatPending.textContent = String(pendingCount);
  if (adminStatCompleted) adminStatCompleted.textContent = String(completedCount);
  if (adminTitle) adminTitle.textContent = isAdminLoggedIn() ? 'Dashboard Admin' : 'Admin Login';

  if (adminOrdersList) {
    adminOrdersList.innerHTML = orders.length ? `<table class="admin-table"><thead><tr><th>Pesanan</th><th>Menu</th><th>Tanggal</th><th>Status</th><th>Total</th></tr></thead><tbody>${orderRows}</tbody></table>` : '<p class="admin-empty-state">Belum ada pesanan.</p>';
  }
  if (adminOrdersListSecondary) {
    adminOrdersListSecondary.innerHTML = orders.length ? `<table class="admin-table"><thead><tr><th>Pesanan</th><th>Menu</th><th>Tanggal</th><th>Status</th><th>Total</th></tr></thead><tbody>${orderRows}</tbody></table>` : '<p class="admin-empty-state">Belum ada pesanan.</p>';
  }
  if (adminStatusList) {
    adminStatusList.innerHTML = statusRows;
  }

  if (adminMenuList) {
    const menuItems = getAdminMenuItems();
    adminMenuList.innerHTML = menuItems.length ? menuItems.map((item) => `
      <div class="admin-menu-item">
        <div>
          <strong>${item.name}</strong>
          <p>${item.description}</p>
        </div>
        <button class="btn btn-outline" data-menu-id="${item.id}" type="button">Hapus</button>
      </div>`).join('') : '<p class="admin-empty-state">Belum ada menu tambahan.</p>';
    adminMenuList.querySelectorAll('[data-menu-id]').forEach((button) => button.addEventListener('click', () => {
      removeAdminMenuItem(button.dataset.menuId);
      window.dispatchEvent(new Event('kfc:menu-updated'));
      renderAdminDashboard();
    }));
  }

  if (adminAuthCard && adminDashboardView) {
    adminAuthCard.classList.toggle('hidden', isAdminLoggedIn());
    adminDashboardView.classList.toggle('hidden', !isAdminLoggedIn());
  }

  document.querySelectorAll('.admin-status-select').forEach((select) => {
    select.addEventListener('change', (event) => {
      const orderNumber = event.currentTarget.dataset.orderNumber;
      const nextStatus = event.currentTarget.value;
      updateOrderStatus(orderNumber, nextStatus);
      renderAdminDashboard();
    });
  });
}

function renderHeaderAuth() {
  const user = getCurrentUser();
  const headerUser = document.getElementById('header-user');
  const logoutButton = document.getElementById('logout-button');
  const loginLink = document.getElementById('login-link');
  const registerLink = document.getElementById('register-link');
  const authLinks = document.getElementById('auth-links');

  if (!authLinks) {
    return;
  }

  if (user) {
    if (headerUser) {
      headerUser.textContent = `Halo, ${user.username}`;
      headerUser.classList.remove('hidden');
    }
    if (logoutButton) {
      logoutButton.classList.remove('hidden');
    }
    if (loginLink) {
      loginLink.classList.add('hidden');
    }
    if (registerLink) {
      registerLink.classList.add('hidden');
    }
  } else {
    if (headerUser) {
      headerUser.textContent = '';
      headerUser.classList.add('hidden');
    }
    if (logoutButton) {
      logoutButton.classList.add('hidden');
    }
    if (loginLink) {
      loginLink.classList.remove('hidden');
    }
    if (registerLink) {
      registerLink.classList.remove('hidden');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeaderAuth();

  const adminLoginLink = document.getElementById('admin-login-link');
  const adminLogoutButton = document.getElementById('admin-logout-button');
  const adminLoginForm = document.getElementById('admin-login-form');
  const adminMenuForm = document.getElementById('admin-menu-form');
  const adminLoginAlert = document.getElementById('admin-login-alert');

  if (adminLoginLink) {
    adminLoginLink.addEventListener('click', (event) => {
      event.preventDefault();
      if (isAdminLoggedIn()) {
        window.location.hash = 'admin-dashboard';
      }
      showAdminPanel();
    });
  }

  if (adminLogoutButton) {
    adminLogoutButton.addEventListener('click', () => {
      logoutAdmin();
      renderAdminDashboard();
      const adminSection = document.getElementById('admin-section');
      if (adminSection) {
        adminSection.classList.remove('hidden');
      }
      window.location.hash = 'admin-login';
    });
  }

  if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = document.getElementById('admin-username').value.trim();
      const password = document.getElementById('admin-password').value;
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        setAdminLoggedIn();
        renderAdminDashboard();
        window.location.hash = 'admin-dashboard';
        if (adminLoginAlert) {
          adminLoginAlert.innerHTML = '';
        }
      } else {
        if (adminLoginAlert) {
          adminLoginAlert.innerHTML = '<div class="alert alert-error">Username atau Password salah</div>';
        }
      }
    });
  }

  if (adminMenuForm) {
    adminMenuForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('admin-menu-name').value.trim();
      const category = document.getElementById('admin-menu-category').value;
      const price = Number(document.getElementById('admin-menu-price').value);
      const image = document.getElementById('admin-menu-image').value.trim() || 'assets/images/kfc-bucket.svg';
      const description = document.getElementById('admin-menu-desc').value.trim();
      if (!name || !description || !price) {
        return;
      }
      addAdminMenuItem({
        id: `custom-${Date.now()}`,
        category,
        name,
        description,
        price,
        image,
        rating: 4.7,
        calories: 'Menu baru',
        spicy: 'Original',
        stock: 'Tersedia',
        isCustom: true,
      });
      window.dispatchEvent(new Event('kfc:menu-updated'));
      renderAdminDashboard();
      adminMenuForm.reset();
    });
  }

  document.querySelectorAll('.admin-nav-btn').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.admin-nav-btn').forEach((tab) => tab.classList.remove('active'));
      button.classList.add('active');
      const target = button.dataset.adminView;
      document.querySelectorAll('.admin-view').forEach((view) => view.classList.add('hidden'));
      document.getElementById(`admin-view-${target}`)?.classList.remove('hidden');
      document.getElementById('admin-dashboard-view')?.classList.toggle('hidden', target !== 'dashboard');
      if (target === 'dashboard') {
        renderAdminDashboard();
      }
    });
  });

  if (window.location.hash === '#admin-login' || window.location.hash === '#admin' || window.location.hash === '#admin-dashboard') {
    showAdminPanel();
  }

  const redirectParam = getQueryParam('redirect');
  const loginLink = document.getElementById('login-link');
  const registerLink = document.getElementById('register-link');
  if (redirectParam) {
    if (loginLink) {
      loginLink.href = `login.html?redirect=${encodeURIComponent(redirectParam)}`;
    }
    if (registerLink) {
      registerLink.href = `register.html?redirect=${encodeURIComponent(redirectParam)}`;
    }
  }

  const logoutButton = document.getElementById('logout-button');
  if (logoutButton) {
    logoutButton.addEventListener('click', (event) => {
      event.preventDefault();
      logoutCurrentUser();
      redirectTo('index.html');
    });
  }

  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    const alertContainer = document.getElementById('login-alert');
    const redirectInput = document.getElementById('login-redirect');
    const redirectValue = getQueryParam('redirect') || 'index.html';

    if (redirectInput) {
      redirectInput.value = redirectValue;
    }

    const registered = getQueryParam('registered');
    if (registered === '1') {
      showAlert(alertContainer, 'Pendaftaran berhasil. Silakan login dengan akun Anda.', 'success');
    }

    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const identifier = document.getElementById('identifier').value.trim();
      const password = document.getElementById('password').value;
      const redirect = redirectInput?.value || 'index.html';

      clearAlert(alertContainer);

      if (!identifier || !password) {
        showAlert(alertContainer, 'Email atau nama pengguna dan kata sandi wajib diisi.');
        return;
      }

      const user = await verifyLogin(identifier, password);
      if (!user) {
        showAlert(alertContainer, 'Email / nama pengguna atau kata sandi salah.');
        return;
      }

      setCurrentUser(user.id);
      redirectTo(redirect);
    });
  }

  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    const alertContainer = document.getElementById('register-alert');
    const redirectInput = document.getElementById('register-redirect');
    const redirectValue = getQueryParam('redirect') || 'index.html';

    if (redirectInput) {
      redirectInput.value = redirectValue;
    }

    registerForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const username = document.getElementById('username').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;
      const passwordConfirm = document.getElementById('password_confirm').value;
      const redirect = redirectInput?.value || 'index.html';

      clearAlert(alertContainer);

      if (password !== passwordConfirm) {
        showAlert(alertContainer, 'Konfirmasi kata sandi tidak cocok.');
        return;
      }

      try {
        await registerNewUser(username, email, password);
        redirectTo(`login.html?registered=1&redirect=${encodeURIComponent(redirect)}`);
      } catch (err) {
        showAlert(alertContainer, err.message);
      }
    });
  }
});
