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

var bookmarkLeeg = "images/bookmark.png";
var bookmarkVol = "images/Iconsvol.png";
var gif = "images/bookmark.gif";
var gifReverse = "images/bookmarkreverse.gif";
var state = false;
var img = document.getElementById("img") /*of */; document.querySelector

	img.addEventListener("click", test);

//Toggle image bron: https://stackoverflow.com/questions/39892794/toggle-image-in-pure-javascript

function test(){
	if(state)/*if bookmark = vol*/{
	state = false;
	img.src = gifReverse;
	setTimeout(function(){img.src = bookmarkLeeg;},1000);
    
	}
  else /*if bookmark = leeg*/{
    state = true;
	img.src = gif;
	setTimeout(function(){img.src = bookmarkVol;},1000);
  }
}

