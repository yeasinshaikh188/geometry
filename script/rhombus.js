function getRhombusInput(){
    const rhombusInputBase = getInput('Rhombus-base');
    const rhombusInputHight = getInput('Rhombus-height');
    const getRhombusInputValue = rhombusInputBase * rhombusInputHight;
    

    const area = document.getElementById('rhombus');
    area.innerText = getRhombusInputValue;
}