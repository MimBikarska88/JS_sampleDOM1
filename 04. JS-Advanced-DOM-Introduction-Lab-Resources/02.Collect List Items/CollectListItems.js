function extractText() {
    const ulElement = document.getElementById('items');
    const text = ulElement.textContent;
    const textAreaElement = document.getElementById('result');
    textAreaElement.textContent = text;
}