let n;
function makeboxes(n){
    const container = document.querySelector('#container');
    container.innerHTML = "";
    for(let i=0;i<n*n;i++){
        const box = document.createElement('div');
        box.className='cell';  
        box.style.width = `calc(100% / ${n})`;
        box.style.height = `calc(100% / ${n})`;

        box.addEventListener("mouseover", function () {
          const randomColor=generateRandomRGBColor();  
          box.style.backgroundColor = randomColor;
        });

        container.appendChild(box);
    }
}

const choice = document.getElementById("btn");
choice.addEventListener('click', function(){
    n = window.prompt('Enter the number of rows and columns (0-100)');
    if(n <= 0 || n > 100)
        alert("Value should be between 1 - 100");
    else
        makeboxes(n);
});
makeboxes(16);
function generateRandomRGBColor(){
  const r=Math.floor(Math.random()*256);
  const g=Math.floor(Math.random()*256);
  const b=Math.floor(Math.random()*256);
  return `rgb(${r}, ${g}, ${b})`;
}
const clear = document.getElementById("clr-btn");
clear.addEventListener('click',function(){
       const container = document.querySelector('#container');
       const boxes=container.querySelectorAll(".cell");
       for(const box of boxes){
         box.style.backgroundColor = "white";
       }
});