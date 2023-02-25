const modal = document.getElementById('modal');
const open = document.getElementById('open');
const close = document.getElementById('close');
const link = document.getElementById('link');


open.addEventListener('click', () => {
    modal.classList.add('active');  
})
close.addEventListener('click', () => {
    modal.classList.remove('active');
})