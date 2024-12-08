async function checkAdminPassword() {
  const password = document.getElementById('admin-password').value;

  const response = await fetch('http://localhost:5000/check-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password }),
  });

  const result = await response.json();
  const adminAccessDiv = document.getElementById('admin-access');

  if (response.status === 200 && result.status === "success") {
    adminAccessDiv.style.color = 'green';
    adminAccessDiv.textContent = 'Login erfolgreich! Admin-Bereich sichtbar.';
    document.getElementById('status-text').innerHTML = "<p>Admin-Steuerungsbereich geladen.</p>";
  } else {
    adminAccessDiv.style.color = 'red';
    adminAccessDiv.textContent = 'Falsches Passwort!';
  }
}
