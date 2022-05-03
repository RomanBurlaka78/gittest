    let prom;
    let colorBtn;
    let block = document.querySelector(".block");
function divsPrompt() {
    const blockInner = document.createElement("div");
    
    
    blockInner.classList.add("block-inner");
    // colorBtn = blockInner.style.background;
     
    block.append(blockInner);

     changeHexColor();

  function changeHexColor() {
    const hexArray = ['A','B','C', 'D','E','F','0','1','2','3','4','5','6','7','8','9'];
    let hexColor = "#";
    
    for(let i=0; i<6; i++) {
    hexColor +=hexArray[Math.floor(Math.random() * hexArray.length)];
    }
    
    blockInner.textContent = hexColor;
    blockInner.style.background= hexColor;
    document.body.style.backgroundColor = hexColor; 
    // console.log(hexColor);
  }
}

function onclickButton() {

    prom =prompt("Ile zgenerowac blokow", "Podaj liczbe");
    block.innerHTML = "";

    for(let i=1; i<=prom; i++) {
    divsPrompt(i) ;

    }



}
