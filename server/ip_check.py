from flask import Flask, request, jsonify

app = Flask(__name__)

status_data = {"status": "kein-problem"}  # Default Status

@app.route('/check-ip', methods=['POST', 'GET'])
def check_ip():
    client_ip = request.remote_addr
    if client_ip == "2.202.105.245":  # Beispiel-IP prüfen
        return jsonify({"status": status_data["status"], "admin": True})
    else:
        return jsonify({"status": client_ip, "admin": False})


@app.route('/change-status', methods=['POST'])
def change_status():
    global status_data
    data = request.get_json()
    if "status" in data:
        status_data["status"] = data["status"]
        return jsonify({"status": status_data["status"]})
    return jsonify({"error": "Ungültige Anfrage"}), 400


if __name__ == "__main__":
    app.run(debug=True)
