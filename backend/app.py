from flask import Flask, request, jsonify
from flask_cors import CORS
from nltk import word_tokenize
# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

# Tokenization endpoint
@app.route('/tokenize', methods=['POST'])
def tokenize():
    data = request.json
    sentence = data.get('sentence')

    if not sentence:
        return jsonify({'error': 'No sentence provided'}), 400

    # Simple tokenizer: split sentence into words
    tokens = word_tokenize(sentence)
    return jsonify({'tokens': tokens})
    
    

@app.route('/hello')
def hello_world():
    return "Hello, World! I'm working with Python", 200


if __name__ == '__main__':
    app.run(debug=True)
    

