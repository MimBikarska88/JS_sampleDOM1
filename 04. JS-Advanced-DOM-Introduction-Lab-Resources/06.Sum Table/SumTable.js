function sumTable() {

    const cellElements = Array.from(document.querySelectorAll('table tr td:nth-child(2)'));
    cellElements[cellElements.length - 1].textContent = '';
    console.log(cellElements);
    let sum = 0;
    for (let i = 0; i < cellElements.length - 1; ++i) {
        sum += Number(cellElements[i].textContent);
    }
    cellElements[cellElements.length - 1].textContent = sum;
}