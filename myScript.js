//start of javascript nav manu

var nav=document.getElementById('myNav');
var open=document.getElementById('openNav');
var close=document.getElementById('closeNav');

open.addEventListener('click',function(){
	nav.style.left= '0px';

})
close.addEventListener('click',function(){
	nav.style.left= '-250px';

})

//End of Nav menu

//javascript Slider

var slideItem=document.querySelectorAll('.slider-item');
var slideLeft=document.querySelector('.slide-left');
var slideRight=document.querySelector('.slide-right');

var current=0;
function reset(){
	for(var i=0;i<slideItem.length;i++){
		slideItem[i].style.display='none';
	}
}

function startSlide(){
	reset();
	slideItem[0].style.display='block';
}
startSlide();

function leftSlide(){
	reset();
	slideItem[current-1].style.display='block';
	current--;
}

function rightSlide(){
	reset();
	slideItem[current+1].style.display='block';
	current++;
}

slideLeft.addEventListener('click',function(){
	if(current===0){
		current=slideItem.length;
	}
	leftSlide();
})
slideRight.addEventListener('click',function(){
	if(current === slideItem.length -1){
		current = -1;
	}
	rightSlide();
})
//End of Slider