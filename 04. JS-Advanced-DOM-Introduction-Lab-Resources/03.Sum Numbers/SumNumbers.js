function calc() {
    // TODO: sum = num1 + num2
    const num1Element = document.getElementById('num1');
    const num2Element = document.getElementById('num2');
    const num3ResultElement = document.getElementById('sum');
    let sum = Number(num1Element.value) + Number(num2Element.value);
    num3ResultElement.value = sum;

}