angular.module('app')
.service('mainService', function() {

	var xo = 'X';

	var newGame = false;

	function onClickOnePlayer() {
		if (!$(this).html()) {
			$(this).html('X');
		}
		if (checkForWinner()) {
			return true;
		}
		setTimeout(function() {
			smartCompMove();
			checkForWinner();
		}, 500);
	}

	function onClickTwoPlayer() {
		$('.main div').on('click', function() {
			if (!$(this).html()) {
				$(this).html(xo);
			}
			
			if (xo === 'X') {
				xo = 'O';
			} else {
				xo = 'X';
			}
			checkForWinner();

		});
	}

	function resetOnePlayer() {
		$('.main div').html('');
		$('.top-line, .middle-line, .bottom-line, .vertical-line, .slash-line').css('display', 'none');
		if (newGame) {
			$('.main div').on('click', onClickOnePlayer);
		}
	}

	function resetTwoPlayer() {
		$('.main div').html('');
		$('.top-line, .middle-line, .bottom-line, .vertical-line, .slash-line').css('display', 'none');
		if (newGame) {
			$('.main div').on('click', onClickTwoPlayer);
		}
	}

	function checkForWinner() {
		if ($('.top-left').html() && $('.top-left').html() === $('.top-middle').html() && $('.top-left').html() === $('.top-right').html()) {
			$('.top-line').css('display', 'block');
			$('.main div').unbind('click');
			newGame = true;
			return true;
		} else if ($('.middle-left').html() && $('.middle-left').html() === $('.middle-middle').html() && $('.middle-left').html() === $('.middle-right').html()) {
			$('.middle-line').css('display', 'block');
			$('.main div').unbind('click');
			newGame = true;
			return true;
		} else if ($('.bottom-left').html() && $('.bottom-left').html() === $('.bottom-middle').html() && $('.bottom-left').html() === $('.bottom-right').html()) {
			$('.bottom-line').css('display', 'block');
			$('.main div').unbind('click');
			newGame = true;
			return true;
		} else if ($('.top-left').html() && $('.top-left').html() === $('.middle-left').html() && $('.top-left').html() === $('.bottom-left').html()) {
			$('.vertical-line').css({'display': 'block', 'right': '100px'});
			$('.main div').unbind('click');
			newGame = true;
			return true;
		} else if ($('.top-middle').html() && $('.top-middle').html() === $('.middle-middle').html() && $('.top-middle').html() === $('.bottom-middle').html()) {
			$('.vertical-line').css({'display': 'block'});
			$('.main div').unbind('click');
			newGame = true;
			return true;
		} else if ($('.top-right').html() && $('.top-right').html() === $('.middle-right').html() && $('.top-right').html() === $('.bottom-right').html()) {
			$('.vertical-line').css({'display': 'block', 'left': '100px'});
			$('.main div').unbind('click');
			newGame = true;
			return true;
		} else if ($('.top-left').html() && $('.top-left').html() === $('.middle-middle').html() && $('.top-left').html() === $('.bottom-right').html()) {
			$('.slash-line').css({'display': 'block', 'transform': 'rotate(-45deg)'});
			$('.main div').unbind('click');
			newGame = true;
			return true;
		} else if ($('.bottom-left').html() && $('.bottom-left').html() === $('.middle-middle').html() && $('.bottom-left').html() === $('.top-right').html()) {
			$('.slash-line').css({'display': 'block', 'transform': 'rotate(45deg)'});
			$('.main div').unbind('click');
			newGame = true;
			return true;
		} else {
			newGame = false;
		}
	}

	function randomCompMove() {
		var blankSpaces = [];
		if ($('.top-left').html() === '') {
	    	blankSpaces.push($('.top-left'));
	  	}
	  	if ($('.top-middle').html() === '') {
	    	blankSpaces.push($('.top-middle'));
	  	}
	  	if ($('.top-right').html() === '') {
	    	blankSpaces.push($('.top-right'));
	  	}
	  	if ($('.middle-left').html() === '') {
	    	blankSpaces.push($('.middle-middle'));
	  	}
	  	if ($('.middle-right').html() === '') {
	    	blankSpaces.push($('.middle-right'));
	  	}
	  	if ($('.bottom-left').html() === '') {
	    	blankSpaces.push($('.bottom-left'));
	  	}
	  	if ($('.bottom-middle').html() === '') {
	    	blankSpaces.push($('.bottom-middle'));	
	   	}
	  	if ($('.bottom-right').html() === '') {
	    	blankSpaces.push($('.bottom-right'));
	  	}
	    
	  	var randomSpace = (Math.floor((Math.random() * blankSpaces.length)));
			  
	  	blankSpaces[randomSpace].html('O');
	  	checkForWinner();
	}

	function smartCompMove() {
		if (($('.top-left').html() === '') && (($('.top-middle').html() && $('.top-middle').html() === $('.top-right').html()) || ($('.middle-left').html() && $('.middle-left').html() === $('.bottom-left').html()) || ($('.middle-middle').html() && $('.middle-middle').html() === $('.bottom-right').html()))) {
			$('.top-left').html('O');
		} else if (($('.top-middle').html() === '') && (($('.top-left').html() && $('.top-left').html() === $('.top-right').html()) || ($('.bottom-middle').html() && $('.bottom-middle').html() === $('.middle-middle').html()))) {
			$('.top-middle').html('O');
		} else if (($('.top-right').html() === '') && (($('.top-middle').html() && $('.top-middle').html() === $('.top-left').html()) || ($('.middle-right').html() && $('.middle-right').html() === $('.bottom-right').html()) || ($('.middle-middle').html() && $('.middle-middle').html() === $('.bottom-left').html()))) {
			$('.top-right').html('O');
		} else if (($('.middle-left').html() === '') && (($('.middle-middle').html() && $('.middle-middle').html() === $('.middle-right').html()) || ($('.bottom-left').html() && $('.bottom-left').html() === $('.top-left').html()))) {
			$('.middle-left').html('O');
		} else if (($('.middle-middle').html() === '') && (($('.middle-left').html() && $('.middle-left').html() === $('.middle-right').html()) || ($('.bottom-middle').html() && $('.bottom-middle').html() === $('.top-middle').html()) || ($('.bottom-left').html() && $('.bottom-left').html() === $('.top-right').html()) || ($('.top-left').html() && $('.top-left').html() === $('.bottom-right').html()))) {
			$('.middle-middle').html('O');
		} else if (($('.middle-right').html() === '') && (($('.middle-middle').html() && $('.middle-middle').html() === $('.middle-left').html()) || ($('.bottom-right').html() && $('.bottom-right').html() === $('.top-right').html()))) {
			$('.middle-right').html('O');
		} else if (($('.bottom-left').html() === '') && (($('.bottom-middle').html() && $('.bottom-middle').html() === $('.bottom-right').html()) || ($('.middle-left').html() && $('.middle-left').html() === $('.top-left').html()) || ($('.middle-middle').html() && $('.middle-middle').html() === $('.top-right').html()))) {
			$('.bottom-left').html('O');
		} else if (($('.bottom-middle').html() === '') && (($('.bottom-left').html() && $('.bottom-left').html() === $('.bottom-right').html()) || ($('.middle-middle').html() && $('.middle-middle').html() === $('.top-middle').html()))) {
			$('.bottom-middle').html('O');
		} else if (($('.bottom-right').html() === '') && (($('.bottom-middle').html() && $('.bottom-middle').html() === $('.bottom-left').html()) || ($('.middle-right').html() && $('.middle-right').html() === $('.top-right').html()) || ($('.middle-middle').html() && $('.middle-middle').html() === $('.top-left').html()))) {
			$('.bottom-right').html('O');
		} else {
			randomCompMove();
		}
	}

	this.onePlayer = function() {
		$(document).ready(function() {

			$('.main div').on('click', function() {
				if (!$(this).html()) {
					$(this).html('X');
				}
				if (checkForWinner()) {
					return true;
				}
				setTimeout(function() {
					smartCompMove();
					checkForWinner();
				}, 500);
			})

			$('.new-game').on('click', function() {
				resetOnePlayer();
			})
		});
	}

	this.twoPlayer = function() {
		$(document).ready(function() {

			onClickTwoPlayer();

			$('.new-game').on('click', function() {
				resetTwoPlayer();
			})


		});

	}

});


