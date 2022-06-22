numbers = document.querySelectorAll(".numbers-container");

console.log(numbers);

numbers.forEach((button) => button.addEventListener("click", () => 
    {if(button.textContent == 7)    
        {console.log(button.textContent)}
})
);