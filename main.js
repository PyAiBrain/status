fetch('https://PyAiBrain.github.io/status/status.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const statusText = document.getElementById('status-text');
    
    switch (data.status) {
      case "kein-problem":
        statusText.textContent = "Kein Problem";
        statusText.className = 'kein-problem';
        break;
      case "probleme":
        statusText.textContent = "Probleme";
        statusText.className = 'probleme';
        break;
      case "kritische-probleme":
        statusText.textContent = "Kritische Probleme";
        statusText.className = 'kritische-probleme';
        break;
      case "github-api-fehler":
        statusText.textContent = "GitHub API Fehler";
        statusText.className = 'github-api-fehler';
        break;
      case "abgeschaltet":
        statusText.textContent = "Abgeschaltet";
        statusText.className = 'abgeschaltet';
        break;
      default:
        statusText.textContent = "Unbekannt";
        statusText.className = '';
    }
  })
  .catch(error => console.error('Fehler beim Abrufen der JSON:', error));

// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.textContent = document.body.classList.contains('dark-mode')
    ? 'Wechsel zu Light Mode'
    : 'Wechsel zu Dark Mode';
});