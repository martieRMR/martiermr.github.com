
/*

let links = document.querySelectorAll('a');

links.forEach()

*/

let links = document.querySelectorAll('.close');

//PARA CADA ELEMENTO QUE ESTE DENTRO DEL ARREGLO DE CLOSEBTN, REALIZAR ESTO (FUNCION)

links.forEach(function(ev){
    ev.addEventListener('click',function(ev){
        ev.preventDefault();

        let content = document.querySelector('.content');


        content.classList.remove('animate__fadeInDown');
        content.classList.remove('animate__animated');

        content.classList.add('animate__fadeOutUp');
        content.classList.add('animate__animated');
        
        setTimeout(function(){
            location.href = '../';
        },600)

        
    })
})
