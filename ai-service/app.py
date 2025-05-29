from flask import Flask, request, jsonify
from flask_cors import CORS
from utils import nlp, ocr, recommend, whisper_ai

app = Flask(__name__)
CORS(app)

@app.route('/summarize', methods=['POST'])
def summarize():
    text = request.json.get("text")
    return jsonify(summary=nlp.summarize_text(text))

@app.route('/sentiment', methods=['POST'])
def sentiment():
    text = request.json.get("text")
    return jsonify(sentiment=nlp.analyze_sentiment(text))

@app.route('/ocr/scan', methods=['POST'])
def scan_ocr():
    file = request.files['file']
    return jsonify(text=ocr.extract_text(file))

@app.route('/recommend', methods=['POST'])
def recommend_students():
    data = request.json
    return jsonify(matches=recommend.get_recommendations(data['user'], data['others']))

@app.route('/voice/transcribe', methods=['POST'])
def transcribe_voice():
    file = request.files['file']
    file.save("temp.wav")
    return jsonify(text=whisper_ai.transcribe("temp.wav"))

if __name__ == '__main__':
    app.run(debug=True, port=8000)
