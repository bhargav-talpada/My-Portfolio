let menu = document.getElementById('menu');    //humburger
  let ham = document.querySelector('.ham');     //navbar

  menu.addEventListener('click', () => {
    ham.classList.toggle('active')
    menu.classList.toggle('active')
  })
  function remove() {
    ham.classList.remove('active');
  }

// Text Animation
const text = document.querySelector('.sec-text');
const textLoad = () =>{
    setTimeout(() => {
       text.textContent = "Web Developer";  
    }, 0);
    setTimeout(() => {
        text.textContent = "ReactJS Developer";  
     }, 4000);
}
textLoad();
setInterval(textLoad, 8000);