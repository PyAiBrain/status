function changeStatus(newStatus) {
  fetch('/change-status', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ status: newStatus }),
  })
    .then(response => response.json())
    .then(data => {
      alert(`Status aktualisiert: ${data.status}`);
    })
    .catch(error => console.error('Fehler beim Ändern des Status:', error));
}
