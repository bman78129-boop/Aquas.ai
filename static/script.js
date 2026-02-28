function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value;

    fetch('/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: message })
    })
    .then(response => response.json())
    .then(data => {
        const chatBox = document.getElementById('chatBox');
        chatBox.innerHTML += `<p><b>You:</b> ${message}</p>`;
        chatBox.innerHTML += `<p><b>Aquas:</b> ${data.reply}</p>`;
        input.value = '';
    });
}

function generateImage() {
    const prompt = document.getElementById('imagePrompt').value;

    fetch('/image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: prompt })
    })
    .then(response => response.json())
    .then(data => {
        const result = document.getElementById('imageResult');
        result.innerHTML = `<img src="${data.url}" width="400">`;
    });
}