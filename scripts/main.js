const ADMIN_PASSWORD = "PythonAiV1";

async function loadStatus() {
  const response = await fetch('status/status.json');
  const data = await response.json();

  const statusText = document.getElementById('status-text');
  const statusBox = document.getElementById('status-box');

  statusText.textContent = data.status;

  // Setze die passende Klasse für den Status
  switch (data.status) {
    case "Kein Problem":
      statusBox.className = "status-green";
      break;
    case "Probleme":
      statusBox.className = "status-yellow";
      break;
    case "Kritische Probleme":
      statusBox.className = "status-red";
      break;
    case "GitHub API Fehler":
      statusBox.className = "status-purple";
      break;
    case "Abgeschaltet":
      statusBox.className = "status-gray";
      break;
    default:
      statusBox.className = "";
      statusText.textContent = "Unbekannter Status";
  }
}

function checkAdminPassword() {
  const password = document.getElementById('admin-password').value;
  const adminAccessDiv = document.getElementById('admin-access');

  if (password === ADMIN_PASSWORD) {
    adminAccessDiv.style.color = 'green';
    adminAccessDiv.textContent = 'Login erfolgreich! Admin-Bereich sichtbar.';
    document.getElementById('status-text').innerHTML =
      "<p>Admin-Steuerungsbereich geladen.</p>";
  } else {
    adminAccessDiv.style.color = 'red';
    adminAccessDiv.textContent = 'Falsches Passwort!';
  }
}

// Lade den Status, wenn die Seite geöffnet wird
window.onload = loadStatus;
