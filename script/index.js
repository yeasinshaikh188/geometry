
function calculatTriangle() {
    const inputBase = getInput('triangle-base');
    const inputHeight = getInput('triangle-height');
    const area = 0.5 * inputBase * inputHeight;
    const getValue = document.getElementById('va');
    getValue.innerText = area;

   

}

function getInput (e) {
    const input  = document.getElementById(e); 
    const inputValue = input.value;
    const inputChange = parseFloat(inputValue);
    return inputChange;
}

