function editElement(ref, match, replacer) {
    const text = ref.textContent;
    const matcher = new RegExp(match, 'g');
    ref.textContent = text.replace(match, replacer);
}