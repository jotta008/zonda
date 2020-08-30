(function(){
$(document).ready(function(){
	var imgItems = $('.slider li').length;
	var imgPos = 1;
//	Paginacion
	for(i = 1; i <= imgItems; i++){
		$('.pagination').append('<li><span class="fa fa-circle"></span></li>');
	}
	$('.slider li').hide();
	$('.slider li:first').show();
	$('.pagination li:first').css({color: '#CC0000'});
	
	$('.pagination li').click(paginacion);
	
	setInterval(function(){
		next();
	},4000);
	
//	FUNCIONES
	
	function paginacion (){
		var paginacionPos = $(this).index() + 1;
		$('.slider li').hide();
		$('.slider li:nth-child('+ paginacionPos +')').fadeIn();
		$('.pagination li').css({color: 'rgba(133,133,133,0.70)'});
		$(this).css({color: '#CC0000'});
		imgPos = paginacionPos;
	}
	
	function next(){
		if(imgPos >= imgItems){
			imgPos = 1;
		}else{
			imgPos++;
		}
		$('.pagination li').css({color: '#858585'});
		$('.pagination li:nth-child('+ imgPos +')').css({color: '#CC0000'});
		$('.slider li').hide();
		$('.slider li:nth-child('+ imgPos +')').fadeIn();
	}	
	
	function prev(){
		if(imgPos <=1 ){
			imgPos = paginacion;
		}else{
			imgPos--;
		}
		$('.pagination li').css({color: 'rgba(133,133,133,0.70)'});
		$('.pagination li:nth-child('+ imgPos +')').css({color: '#CC0000'});
		$('.slider li').hide();
		$('.slider li:nth-child('+ imgPos +')').fadeIn();
	}
});
}())