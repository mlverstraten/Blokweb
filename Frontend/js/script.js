var button = document.querySelector('div > button'); //formulier laten open klappen en dicht.
var main = document.querySelector('section > form');

main.classList.add('close');

button.addEventListener('click', function() {
    main.classList.toggle('close');
 
    if(main.classList.contains('close')) {
        button.textContent = "Filter"
    }

    else {
        button.textContent = "Filter X"
    }
});

var buttonzoeken = document.querySelector('div > input');

buttonzoeken.addEventListener('click', function() {
    
})
