function colorize() {
    let rowsElements = Array.from(document.querySelectorAll('table tr'));
    for (let i = 0; i < rowsElements.length; ++i) {
        if (i % 2 == 1) {
            rowsElements[i].style.backgroundColor = 'teal';
        }
    }
}