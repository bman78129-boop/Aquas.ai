from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message')

    # Temporary reply (later you can connect AI here)
    return jsonify({'reply': f'Aquas says: You said "{user_message}"'})

@app.route('/image', methods=['POST'])
def image():
    data = request.json
    prompt = data.get('prompt')

    # Temporary image placeholder
    return jsonify({'url': 'https://via.placeholder.com/400x300.png?text=Aquas+Image'})

if __name__ == '__main__':
    app.run(debug=True)