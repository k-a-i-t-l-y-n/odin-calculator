const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator-keys");
const display = document.querySelector(".calculator-display");

//Add click eventListener to all buttons in .calculator-keys class
keys.addEventListener("click", e => {
    if(e.target.matches('button'))
    {
      const currentKey = e.target;
      const action = currentKey.dataset.action; //gets data-action of key

      if(action === "all-clear")
      {
          console.log("all clear");
      }
      if(action === "clear")
      {
          display.textContent = "0";
      }
      if(action === "delete")
      {
         const displayText = display.textContent;
         display.textContent = displayText.slice(0, -1);
      }
      if(action === "modulus" || 
      action === "squareRoot" ||
      action === "exponent" ||
      action === "divide" ||
      action === "multiply" || 
      action === "subtract"||
      action === "add")
      {
          console.log("key operation")
      }
      if(action === "decimal")
      {
        display.textContent += ".";  
      }
      if(action === "sign")
      {
          console.log("sign change");
      }
      if(action === "equal")
      {
          console.log("equal");
      }

      if(!action)
      {
          console.log("not action");
          if(display.textContent === "0")
          {
            display.textContent = currentKey.textContent;
          }
          else{
            display.textContent += currentKey.textContent;  
          }
      }
    }
})