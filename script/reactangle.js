function reacangleCalculate (){
      const getinpuWidth = getInput('reacangle-width');
      const getinpuI = getInput('reacangle-i');
      const getMainValue = getinpuWidth * getinpuI;

      const area = document.getElementById('reacangle');
      area.innerText = getMainValue;
}
