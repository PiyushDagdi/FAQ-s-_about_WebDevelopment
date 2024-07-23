const accordians = document.querySelectorAll('.accordian');


accordians.forEach(element => {

    const icon = element.querySelector('.icon');

    element.addEventListener('click', ()=>{
        if(icon.classList.contains('active')){
            icon.classList.remove('active');
        }
        else{
            icon.classList.add('active');
        }
    })
});
