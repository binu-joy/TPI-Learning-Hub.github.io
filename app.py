from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

OLLAMA_URL = "http://localhost:11434/api/generate"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/ask", methods=["POST"])
def ask():
    user_input = request.json.get("message")
    if not user_input:
        return jsonify({"response": "Please enter a message."})

    payload = {"model": "mistral", "prompt": user_input, "stream": False}
    response = requests.post(OLLAMA_URL, json=payload)

    if response.status_code == 200:
        return jsonify({"response": response.json()["response"]})
    else:
        return jsonify({"response": "Error: Could not reach Ollama."})

if __name__ == "__main__":
    app.run(debug=True)
