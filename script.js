function makeboxes(n){
    const container = document.querySelector('#container');
    container.innerHTML = "";
    for(let i=0;i<n*n;i++){
        const box = document.createElement('div');
        box.className='cell';
        container.appendChild(box);
    }
}
makeboxes(6);