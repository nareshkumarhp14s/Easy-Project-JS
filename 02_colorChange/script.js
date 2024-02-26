const main = document.querySelector('.main');
const buttons = document.querySelectorAll('.button');

buttons.forEach(function (button){
    button.addEventListener('click', function(e){
        if(e.target.id === 'blue'){
            main.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'green'){
            main.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white'){
            main.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'purple'){
            main.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'red'){
            main.style.backgroundColor = e.target.id;
        }
    })
})