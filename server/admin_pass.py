from flask import Flask, request, jsonify

app = Flask(__name__)

# Definiere das Admin-Passwort
ADMIN_PASSWORD = "PythonAiV1"

@app.route('/check-password', methods=["POST"])
def check_password():
    """
    Endpunkt zum Überprüfen des Passworts.
    - POST: {"password": "string"}
    - Antwort bei Erfolg: {"status": "success"}
    - Antwort bei Fehler: 403
    """
    data = request.json
    password = data.get("password", "")

    if password == ADMIN_PASSWORD:
        return jsonify({"status": "success"})
    else:
        return jsonify({"status": "error"}), 403


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
