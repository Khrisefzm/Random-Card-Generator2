function generateCard(){
    let diamond = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="red" class="bi bi-diamond-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435z"/></svg>';
    let heart = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="red" class="bi bi-suit-heart-fill" viewBox="0 0 16 16"><path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/></svg>';
    let spade = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-suit-spade-fill" viewBox="0 0 16 16"><path d="M7.184 11.246A3.5 3.5 0 0 1 1 9c0-1.602 1.14-2.633 2.66-4.008C4.986 3.792 6.602 2.33 8 0c1.398 2.33 3.014 3.792 4.34 4.992C13.86 6.367 15 7.398 15 9a3.5 3.5 0 0 1-6.184 2.246 19.92 19.92 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a19.919 19.919 0 0 0 1.582-2.907z"/></svg>';
    let clover = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-suit-club-fill" viewBox="0 0 16 16"><path d="M11.5 12.5a3.493 3.493 0 0 1-2.684-1.254 19.92 19.92 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a19.919 19.919 0 0 0 1.582-2.907 3.5 3.5 0 1 1-2.538-5.743 3.5 3.5 0 1 1 6.708 0A3.5 3.5 0 1 1 11.5 12.5z"/></svg>';
    let icon="";
    let numberForIcon = Math.floor(Math.random()*4+1);
    //Cambiando íconos
    if(numberForIcon==1) icon=diamond;
    if(numberForIcon==2) icon=heart;
    if(numberForIcon==3) icon=spade;
    if (numberForIcon==4) icon=clover;
    let iconClass= document.getElementsByClassName("icon");
    for (let i=0; i<iconClass.length;i++){
        let element = iconClass[i];
        element.innerHTML=`${icon}`
    }
    
    
}

let btn1 = document.getElementById("btn1");
btn1.addEventListener('click',generateCard);