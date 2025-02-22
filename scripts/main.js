const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');
const adaptBtn = document.querySelector('#adaptLink');
const adaptBtn1 = document.querySelector('#adaptBtn1');
const adaptBtn2 = document.querySelector('#adaptBtn2');
const adaptBtn3 = document.querySelector('#adaptBtn3');


navBtn.onclick = ()=>{
    
    if(nav.classList.toggle('open')){
        navBtnImg.src= "./assets/svg/utils/close.svg"
    }
    else{
        navBtnImg.src= "./assets/svg/utils/NAV.svg"
    }

}
console.table(adaptBtn)

adaptBtn.onclick = ()=>{
    navBtn.onclick();
}

adaptBtn1.onclick = ()=>{
    navBtn.onclick();
}
adaptBtn2.onclick = ()=>{
    navBtn.onclick();
}
adaptBtn3.onclick = ()=>{
    navBtn.onclick();
}
AOS.init({
    once: true,
});