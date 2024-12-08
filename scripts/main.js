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
  const adminSection = document.getElementById('admin-section');

  if (password === ADMIN_PASSWORD) {
    // Zeige Admin-Buttons
    adminSection.innerHTML = `
      <h2>Admin-Bereich</h2>
      <div class="admin-buttons">
        <button class="green" onclick="updateStatus('Kein Problem')">Kein Problem</button>
        <button class="yellow" onclick="updateStatus('Probleme')">Probleme</button>
        <button class="red" onclick="updateStatus('Kritische Probleme')">Kritische Probleme</button>
        <button class="purple" onclick="updateStatus('GitHub API Fehler')">GitHub API Fehler</button>
        <button class="gray" onclick="updateStatus('Abgeschaltet')">Abgeschaltet</button>
      </div>
    `;
  } else {
    const errorMessage = document.createElement('div');
    errorMessage.style.color = 'red';
    errorMessage.textContent = 'Falsches Passwort!';
    adminSection.appendChild(errorMessage);
  }
}

async function updateStatus(newStatus) {
  const response = await fetch('status/status.json', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ status: newStatus }),
  });

  if (response.ok) {
    alert(`Status erfolgreich zu "${newStatus}" geändert.`);
    loadStatus(); // Aktualisiere den Status auf der Seite
  } else {
    alert('Fehler beim Ändern des Status.');
  }
}

// Lade den Status, wenn die Seite geöffnet wird
window.onload = loadStatus;
