function makeboxes(n){
    const container = document.querySelector('#container');
    container.innerHTML = "";
    for(let i=0;i<n*n;i++){
        const box = document.createElement('div');
        box.className='cell';
      const cellsize=(960/n);
      box.style.width=cellsize+"px";
      box.style.height=cellsize+"px";
box.addEventListener("mouseover", function () {
  box.style.backgroundColor = "black";
});
        container.appendChild(box);
    }
}
makeboxes(6);