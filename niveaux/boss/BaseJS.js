$(document).ready(function() {

	var angle = 0;
	var hauteurboule=90.7;
	var bloquage =0;
	var tourne = 0;
	var hp = 100;
	var wave = 0;
	var hit = 0;
	$("body").css("overflow", "hidden");

 	var repet=setInterval(checkCollisions, 0.3);

	kraken();

	function kraken() {
		$('#kraken').animate({opacity: 1},1000);
		$('#kraken').animate({top: 10 + '%', left: 15 + '%'},1500);
		$('#kraken').animate({opacity: 1},1000);
		$('#krakenR').animate({opacity: 1},3500);
		$('#krakenR').animate({opacity: 0.4},1000);
		$('#krakenR').animate({opacity: 1},100);
		$('.poulpe1').animate({opacity: 0}, 4600);				//4600
		$('.poulpe1').animate({top: 30 + '%', left: 20 + '%'}, 0);
		$('.poulpe1').animate({opacity: 1}, 200);
		var Repet=setInterval(checkCollisions, 0.3)
		$('.poulpe1').animate({top: 62 + '%', left: 43.6 + '%', borderSpacing: 800 }, {
    step: function(now,fx) {
      $('.poulpe1').css('transform','rotate('+now+'deg)');
    },
    duration:3000
},2500, 'linear');

	}

	document.addEventListener('keydown', doKeyDown, true);

	function doKeyDown(e) {

		if (e.keyCode == 39) {
			var tourne = 1;
			$('#boule').css('opacity', 1);
			$('#boule').width('20%');
			$('#boule').css('top', 90.7 + '%');
			$('#boule').css('left', 38.5 + '%');
			$('#boule').css('zIndex', -1);							//-700 hauteurboule
			$('#canon').css('top', 89.8 + '%');
			$('#canon').css('left', -5 + '%');
			$('#canon').css('width', 80 + '%');
			angle+=5;
			$("#canonboule").rotate({
				angle: angle,
				center: ["bottom center"]
			});

		}



		if (e.keyCode == 37) {
			var tourne = 1;
			$('#boule').css('opacity', 1);
			$('#boule').width('20%');
			$('#boule').css('top', 90.7 + '%');
			$('#boule').css('left', 38.5 + '%');
			$('#boule').css('zIndex', -1);
			$('#canon').css('top', 89.8 + '%');
			$('#canon').css('left', -5 + '%');
			$('#canon').css('width', 80 + '%');
			angle-=5;
			$("#canonboule").rotate({
				angle: angle,
				center: ["bottom center"]
			});

		}


		if (e.keyCode == 32) {
			var Repet=setInterval(checkCollisions, 0.3)
			var boum = $("#boum")[0];
			boum.play();
			$("#boule").animate({top: 0}, 'easeOutExpo'), function(){clearInterval(Repet)};
			explosion = $('#explosion').attr('src','../../images/explosion.png');
			$('#explosion').css('opacity',1);
			$("#canon").animate({top: 974}, 30, 'easeOutExpo');
			$("#canon").animate({top: 964}, 400, 'easeOutExpo');
			$('#explosion').fadeTo(1000, 0);
			bloquage = bloquage + 1;
		}
	}

	function getPositions(elt) {
	  var elt = $(elt);
	  var pos = elt.position();
	  var width = elt.width();
	  var height = elt.height();
	  return [ [ pos.left, pos.left + width ]	/*pos[0]*/, [ pos.top, pos.top + height ] /*pos[1]*/ ];
	}

	function comparePositions(p1, p2) {

		if (p1[0] < p2[0]) {
			var x1 = p1;
		} 	else {
				var x1 = p2
			}

		if (p1[0] < p2[0]) {
			var x2 = p2;
		} 	else {
				var x2 = p1
			}

		if (x1[1] > x2[0] || x1[0] === x2[0]) {
			return true;
		}
			else {
				return false;
			}
	}

	function checkCollisions(){
		var pos1 = getPositions($("#kraken"));														// pos=[pos0, pos1]
	  var pos2 = getPositions($("#boule"));
	  var pos3 = getPositions($("#bordureL"));
	  var pos4 = getPositions($("#bordureR"));
	  var pos5 = getPositions($("#bordureT"));
	  var pos6 = getPositions($("#bordureB"));
		var pos7 = getPositions($("#canon"));
		var pos8 = getPositions($(".poulpe1"));
		var pos9 = getPositions($(".poulpe2"));
		var pos10 = getPositions($(".poulpe3"));
		var pos11 = getPositions($(".poulpe4"));
		var pos12 = getPositions($(".poulpe5"));
		var pos13 = getPositions($(".poulpe6"));
		var pos14 = getPositions($(".poulpe7"));
		var pos15 = getPositions($(".poulpe8"));
		var pos16 = getPositions($(".poulpe9"));
		var pos17 = getPositions($(".poulpe10"));
		var pos18 = getPositions($(".poulpe11"));
		var pos19 = getPositions($(".poulpe12"));

		var canon1MatchX = comparePositions(pos7[0], pos8[0]);
		var canon1MatchY = comparePositions(pos7[1], pos8[1]);
		var canon2MatchX = comparePositions(pos7[0], pos9[0]);
		var canon2MatchY = comparePositions(pos7[1], pos9[1]);
		var canon3MatchX = comparePositions(pos7[0], pos10[0]);
		var canon3MatchY = comparePositions(pos7[1], pos10[1]);
		var canon4MatchX = comparePositions(pos7[0], pos11[0]);
		var canon4MatchY = comparePositions(pos7[1], pos11[1]);
		var canon5MatchX = comparePositions(pos7[0], pos12[0]);
		var canon5MatchY = comparePositions(pos7[1], pos12[1]);
		var canon6MatchX = comparePositions(pos7[0], pos13[0]);
		var canon6MatchY = comparePositions(pos7[1], pos13[1]);
		var canon7MatchX = comparePositions(pos7[0], pos14[0]);
		var canon7MatchY = comparePositions(pos7[1], pos14[1]);
		var canon8MatchX = comparePositions(pos7[0], pos15[0]);
		var canon8MatchY = comparePositions(pos7[1], pos15[1]);
		var canon9MatchX = comparePositions(pos7[0], pos16[0]);
		var canon9MatchY = comparePositions(pos7[1], pos16[1]);
		var canon10MatchX = comparePositions(pos7[0], pos17[0]);
		var canon10MatchY = comparePositions(pos7[1], pos17[1]);
		var canon11MatchX = comparePositions(pos7[0], pos18[0]);
		var canon11MatchY = comparePositions(pos7[1], pos18[1]);
		var canon12MatchX = comparePositions(pos7[0], pos19[0]);
		var canon12MatchY = comparePositions(pos7[1], pos19[1]);

		var poulpe1MatchX = comparePositions(pos2[0], pos8[0]);
		var poulpe1MatchY = comparePositions(pos2[1], pos8[1]);
		var poulpe2MatchX = comparePositions(pos2[0], pos9[0]);
		var poulpe2MatchY = comparePositions(pos2[1], pos9[1]);
		var poulpe3MatchX = comparePositions(pos2[0], pos10[0]);
		var poulpe3MatchY = comparePositions(pos2[1], pos10[1]);
		var poulpe4MatchX = comparePositions(pos2[0], pos11[0]);
		var poulpe4MatchY = comparePositions(pos2[1], pos11[1]);
		var poulpe5MatchX = comparePositions(pos2[0], pos12[0]);
		var poulpe5MatchY = comparePositions(pos2[1], pos12[1]);
		var poulpe6MatchX = comparePositions(pos2[0], pos13[0]);
		var poulpe6MatchY = comparePositions(pos2[1], pos13[1]);
		var poulpe7MatchX = comparePositions(pos2[0], pos14[0]);
		var poulpe7MatchY = comparePositions(pos2[1], pos14[1]);
		var poulpe8MatchX = comparePositions(pos2[0], pos15[0]);
		var poulpe8MatchY = comparePositions(pos2[1], pos15[1]);
		var poulpe9MatchX = comparePositions(pos2[0], pos16[0]);
		var poulpe9MatchY = comparePositions(pos2[1], pos16[1]);
		var poulpe10MatchX = comparePositions(pos2[0], pos17[0]);
		var poulpe10MatchY = comparePositions(pos2[1], pos17[1]);
		var poulpe11MatchX = comparePositions(pos2[0], pos18[0]);
		var poulpe11MatchY = comparePositions(pos2[1], pos18[1]);
		var poulpe12MatchX = comparePositions(pos2[0], pos19[0]);
		var poulpe12MatchY = comparePositions(pos2[1], pos19[1]);

	  var borderLeftMatchX = comparePositions(pos2[0], pos3[0]);
	  var borderLeftMatchY = comparePositions(pos2[1], pos3[1]);

	  var borderRightMatchX = comparePositions(pos2[0], pos4[0]);
	  var borderRightMatchY = comparePositions(pos2[1], pos4[1]);

	  var borderTopMatchX = comparePositions(pos2[0], pos5[0]);
	  var borderTopMatchY = comparePositions(pos2[1], pos5[1]);

	  var borderBottomMatchX = comparePositions(pos2[0], pos6[0]);
	  var borderBottomMatchY = comparePositions(pos2[1], pos6[1]);

	  var bossMatchX = comparePositions(pos2[0], pos1[0]);
	  var bossMatchY = comparePositions(pos2[1], pos1[1]);

		var canon1Match = canon1MatchX && canon1MatchY;
		var canon2Match = canon2MatchX && canon2MatchY;
		var canon3Match = canon3MatchX && canon3MatchY;
		var canon4Match = canon4MatchX && canon4MatchY;
		var canon5Match = canon5MatchX && canon5MatchY;
		var canon6Match = canon6MatchX && canon6MatchY;
		var canon7Match = canon7MatchX && canon7MatchY;
		var canon8Match = canon8MatchX && canon8MatchY;
		var canon9Match = canon9MatchX && canon9MatchY;
		var canon10Match = canon10MatchX && canon10MatchY;
		var canon11Match = canon11MatchX && canon11MatchY;
		var canon12Match = canon12MatchX && canon12MatchY;
		var poulpe1Match = poulpe1MatchX && poulpe1MatchY;
		var poulpe2Match = poulpe2MatchX && poulpe2MatchY;
		var poulpe3Match = poulpe3MatchX && poulpe3MatchY;
		var poulpe4Match = poulpe4MatchX && poulpe4MatchY;
		var poulpe5Match = poulpe5MatchX && poulpe5MatchY;
		var poulpe6Match = poulpe6MatchX && poulpe6MatchY;
		var poulpe7Match = poulpe7MatchX && poulpe7MatchY;
		var poulpe8Match = poulpe8MatchX && poulpe8MatchY;
		var poulpe9Match = poulpe9MatchX && poulpe9MatchY;
		var poulpe10Match = poulpe10MatchX && poulpe10MatchY;
		var poulpe11Match = poulpe11MatchX && poulpe11MatchY;
		var poulpe12Match = poulpe12MatchX && poulpe12MatchY;

	  var borderLeftMatch = borderLeftMatchX && borderLeftMatchY;
	  var borderRightMatch = borderRightMatchX && borderRightMatchY;
	  var borderTopMatch = borderTopMatchX && borderTopMatchY;
	  var borderBottomMatch = borderBottomMatchX && borderBottomMatchY;

	  var bossMatch = bossMatchX && bossMatchY;

		if (poulpe1Match) {
			$('.poulpe1').stop();
			$('.poulpe1').animate({opacity: 0},200);
			$('#boule').stop();
			$('#boule').css('top', 90.7 + '%');
			$('.poulpe1').animate({top: -100 + '%'},0);
		}

		if (poulpe2Match) {
			$('.poulpe2').stop();
			$('.poulpe2').animate({opacity: 0},200);
			$('#boule').stop();
			$('#boule').css('top', 90.7 + '%');
			$('.poulpe2').animate({top: -100 + '%'},0);
		}

		if (poulpe3Match) {
			$('.poulpe3').stop();
			$('.poulpe3').animate({opacity: 0},200);
			$('#boule').stop();
			$('#boule').css('top', 90.7 + '%');
			$('.poulpe3').animate({top: -100 + '%'},0);
		}

		if (poulpe4Match) {
			hit = hit + 1;
			$('#boule').stop();
			$('#boule').css('top', 90.7 + '%');
				if (hit == 2) {
			$('.poulpe4').stop();
			$('.poulpe4').animate({opacity: 0},200);
			$('#boule').stop();
			$('#boule').css('top', 90.7 + '%');
			$('.poulpe4').animate({top: -100 + '%'},0);
			}
		}

		if (poulpe5Match) {
			hit = hit + 1;
			$('#boule').stop();
			$('#boule').css('top', 90.7 + '%');
				if (hit == 4) {
			$('.poulpe5').stop();
			$('.poulpe5').animate({opacity: 0},200);
			$('#boule').stop();
			$('#boule').css('top', 90.7 + '%');
			$('.poulpe5').animate({top: -100 + '%'},0);
			}
		}

		if (poulpe6Match) {
			hit = hit + 1;
			$('#boule').stop();
			$('#boule').css('top', 90.7 + '%');
				if (hit == 6) {
			$('.poulpe6').stop();
			$('.poulpe6').animate({opacity: 0},200);
			$('#boule').stop();
			$('#boule').css('top', 90.7 + '%');
			$('.poulpe6').animate({top: -100 + '%'},0);
			}
		}

		if (poulpe7Match) {
			$('.poulpe7').stop();
			$('.poulpe7').animate({opacity: 0},200);
			$('#boule').stop();
			$('#boule').css('top', 90.7 + '%');
			$('.poulpe7').animate({top: -100 + '%'},0);
		}

		if (poulpe8Match) {
			$('.poulpe8').stop();
			$('.poulpe8').animate({opacity: 0},200);
			$('#boule').stop();
			$('#boule').css('top', 90.7 + '%');
			$('.poulpe8').animate({top: -100 + '%'},0);
		}

		if (poulpe9Match) {
			$('.poulpe9').stop();
			$('.poulpe9').animate({opacity: 0},200);
			$('#boule').stop();
			$('#boule').css('top', 90.7 + '%');
			$('.poulpe9').animate({top: -100 + '%'},0);
		}

		if (poulpe10Match) {
			$('.poulpe10').stop();
			$('.poulpe10').animate({opacity: 0},200);
			$('#boule').stop();
			$('#boule').css('top', 90.7 + '%');
			$('.poulpe10').animate({top: -100 + '%'},0);
		}

		if (poulpe11Match) {
			$('.poulpe11').stop();
			$('.poulpe11').animate({opacity: 0},200);
			$('#boule').stop();
			$('#boule').css('top', 90.7 + '%');
			$('.poulpe11').animate({top: -100 + '%'},0);
		}

		if (poulpe12Match) {
			hit = hit + 1;
			$('#boule').stop();
			$('#boule').css('top', 90.7 + '%');
				if (hit == 8) {
			$('.poulpe12').stop();
			$('.poulpe12').animate({opacity: 0},200);
			$('#boule').stop();
			$('#boule').css('top', 90.7 + '%');
			$('.poulpe12').animate({top: -100 + '%'},0);
			}
		}


		if (canon1Match) {
			$('.poulpe1').stop();
			$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
			$('#popup2').animate({opacity: 1},200);
		}

		if (canon2Match) {
			$('.poulpe2').stop();
			$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
			$('#popup2').animate({opacity: 1},200);
		}

		if (canon3Match) {
			$('.poulpe3').stop();
			$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
			$('#popup2').animate({opacity: 1},200);
		}

		if (canon4Match) {
			$('.poulpe4').stop();
			$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
			$('#popup2').animate({opacity: 1},200);
		}

		if (canon5Match) {
			$('.poulpe5').stop();
			$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
			$('#popup2').animate({opacity: 1},200);
		}

		if (canon6Match) {
			$('.poulpe6').stop();
			$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
			$('#popup2').animate({opacity: 1},200);
		}

		if (canon7Match) {
			$('.poulpe7').stop();
			$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
			$('#popup2').animate({opacity: 1},200);
		}

		if (canon8Match) {
			$('.poulpe8').stop();
			$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
			$('#popup2').animate({opacity: 1},200);
		}

		if (canon9Match) {
			$('.poulpe9').stop();
			$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
			$('#popup2').animate({opacity: 1},200);
		}

		if (canon10Match) {
			$('.poulpe10').stop();
			$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
			$('#popup2').animate({opacity: 1},200);
		}

		if (canon11Match) {
			$('.poulpe11').stop();
			$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
			$('#popup2').animate({opacity: 1},200);
		}

		if (canon12Match) {
			$('.poulpe12').stop();
			$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
			$('#popup2').animate({opacity: 1},200);
		}

	  if (borderTopMatch) {
			$('#boule').stop();
			$('#boule').css('top', 90.7 + '%');
	  }

	  if (borderBottomMatch) {
			$('#boule').stop();
			$('#boule').css('top', 90.7 + '%');
	  }

	  if (borderLeftMatch) {
			$('#boule').stop();
			$('#boule').css('top', 90.7 + '%');
	  }

	  if (borderRightMatch) {
			$('#boule').stop();
			$('#boule').css('top', 90.7 + '%');
}

	  if (bossMatch) {
			hp = hp - 20;
		  $('#boule').stop();
			$('#boule').css('top', 90.7 + '%');
			$('#HPBarin').animate({width: hp + '%'}, 2000, 'linear');
			if (wave == 4) {
				$('#krakenR').animate({opacity: 0},1000);
				$('#kraken').animate({top: -100 + '%', left: 50 + '%', borderSpacing: 2000 }, {
		    step: function(now,fx) {
		      $('#kraken').css('transform','rotate('+now+'deg)');
		    },
		    duration:3000
		},2500, 'linear');
		$('#popup').animate({top: 30 + '%', left: 36 + '%'},3000);
		$('#popup').animate({opacity: 1},200);
			}
			if (wave == 3) {
				wave = wave + 1;
				$('#kraken').animate({opacity:0},500).animate({top: 5 + '%', left: 85 + '%'},500);
				$('#kraken').animate({opacity:1},500);
				$('#kraken').animate({opacity:1},1500);
				$('#krakenR').animate({opacity: 1},2500);
				$('#krakenR').animate({opacity: 0.4},1000);
				$('#krakenR').animate({opacity: 1},100);
				$('#kraken').animate({top: 50 + '%'},3000);
				$('.poulpe7').animate({opacity: 0}, 3500);
				$('.poulpe7').animate({top: 5 + '%', left: 90 + '%'}, 0);
				$('.poulpe7').animate({opacity: 1}, 200);
				$('.poulpe7').animate({top: 58 + '%', left: 43.6 + '%', borderSpacing: 800 }, {
		    step: function(now,fx) {
		      $('.poulpe7').css('transform','rotate('+now+'deg)');
		    },
		    duration:3000
		},2500, 'linear');
				$('.poulpe8').animate({opacity: 0}, 4100);
				$('.poulpe8').animate({top: 23 + '%', left: 90 + '%'}, 0);
				$('.poulpe8').animate({opacity: 1}, 200);
				$('.poulpe8').animate({top: 58 + '%', left: 43.6 + '%', borderSpacing: 800 }, {
				step: function(now,fx) {
					$('.poulpe8').css('transform','rotate('+now+'deg)');
				},
				duration:3000
		},2500, 'linear');
				$('.poulpe9').animate({opacity: 0}, 4700);
				$('.poulpe9').animate({top: 41 + '%', left: 90 + '%'}, 0);
				$('.poulpe9').animate({opacity: 1}, 200);
				$('.poulpe9').animate({top: 58 + '%', left: 43.6 + '%', borderSpacing: 800 }, {
				step: function(now,fx) {
					$('.poulpe9').css('transform','rotate('+now+'deg)');
				},
				duration:3000
		},2500, 'linear');
				$('.poulpe10').animate({opacity: 0}, 5300);
				$('.poulpe10').animate({top: 59 + '%', left: 90 + '%'}, 0);
				$('.poulpe10').animate({opacity: 1}, 200);
				$('.poulpe10').animate({top: 58 + '%', left: 43.6 + '%', borderSpacing: 800 }, {
				step: function(now,fx) {
					$('.poulpe10').css('transform','rotate('+now+'deg)');
				},
				duration:3000
		},2500, 'linear');
				$('.poulpe11').animate({opacity: 0}, 5900);
				$('.poulpe11').animate({top: 77 + '%', left: 90 + '%'}, 0);
				$('.poulpe11').animate({opacity: 1}, 200);
				$('.poulpe11').animate({top: 58 + '%', left: 43.6 + '%', borderSpacing: 800 }, {
				step: function(now,fx) {
					$('.poulpe10').css('transform','rotate('+now+'deg)');
				},
				duration:3000
		},2500, 'linear');
				$('#kraken').animate({opacity:0},500).animate({top: 30 + '%', left: 5 + '%'},0);
				$('#kraken').animate({opacity:0},500);
				$('#kraken').animate({opacity:1},500);
				$('#kraken').animate({opacity:1},1500);
				$('#krakenR').animate({opacity: 1},4000);
				$('#krakenR').animate({opacity: 0.4},1000);
				$('#krakenR').animate({opacity: 1},100);
				$('.poulpe12').animate({opacity: 0}, 8500);
				$('.poulpe12').animate({top: 50 + '%', left: 8 + '%', width: 10 + '%'}, 0);
				$('.poulpe12').animate({opacity: 1}, 200);
				$('.poulpe12').animate({top: 50 + '%', left: 43.6 + '%', borderSpacing: 800 }, {
				step: function(now,fx) {
					$('.poulpe12').css('transform','rotate('+now+'deg)');
				},
				duration:3000
		},2500, 'linear');
			}
			if (wave == 2) {
				wave = wave + 1;
				$('#kraken').animate({opacity:0},500).animate({top: 20 + '%', left: 85 + '%'},500);
				$('#kraken').animate({opacity:1},500);
				$('#kraken').animate({opacity:1},1500);
				$('#krakenR').animate({opacity: 1},2500);
				$('#krakenR').animate({opacity: 0.4},1000);
				$('#krakenR').animate({opacity: 1},100);
				$('.poulpe5').animate({opacity: 0}, 3500);
				$('.poulpe5').animate({top: 45 + '%', left: 89 + '%', width: 10 + '%'}, 0);
				$('.poulpe5').animate({opacity: 1}, 200);
				$('.poulpe5').animate({top: 58 + '%', left: 43.6 + '%', borderSpacing: 800 }, {
		    step: function(now,fx) {
		      $('.poulpe5').css('transform','rotate('+now+'deg)');
		    },
		    duration:3000
		},2500, 'linear');
				$('#kraken').animate({opacity: 1}, 500);
				$('#kraken').animate({opacity:0},500).animate({top: 35 + '%', left: 5 + '%'},500);
				$('#kraken').animate({opacity:1},500);
				$('#krakenR').animate({opacity: 1},1500);
				$('#krakenR').animate({opacity: 0.4},1000);
				$('#krakenR').animate({opacity: 1},100);
				$('.poulpe6').animate({opacity: 0}, 6000);
				$('.poulpe6').animate({top: 60 + '%', left: 9 + '%', width: 10 + '%'}, 0);
				$('.poulpe6').animate({opacity: 1}, 200);
				$('.poulpe6').animate({top: 58 + '%', left: 43.6 + '%', borderSpacing: 800 }, {
		    step: function(now,fx) {
		      $('.poulpe6').css('transform','rotate('+now+'deg)');
		    },
		    duration:3000
		},2500, 'linear');
			}
			if (wave == 1) {
				wave = wave + 1;
				$('#kraken').animate({opacity:0},500).animate({top: 20 + '%', left: 5 + '%'},500);
				$('#kraken').animate({opacity:1},500);
				$('#kraken').animate({opacity:1},1500);
				$('#krakenR').animate({opacity: 1},2500);
				$('#krakenR').animate({opacity: 0.4},1000);
				$('#krakenR').animate({opacity: 1},100);
				$('.poulpe4').animate({opacity: 0}, 3500);
				$('.poulpe4').animate({top: 40 + '%', left: 10 + '%', width: 10 + '%'}, 0);
				$('.poulpe4').animate({opacity: 1}, 200);
				$('.poulpe4').animate({top: 58 + '%', left: 43.6 + '%', borderSpacing: 800 }, {
		    step: function(now,fx) {
		      $('.poulpe4').css('transform','rotate('+now+'deg)');
		    },
		    duration:3000
		},2500, 'linear');
			}
			if (wave == 0) {
			wave = wave + 1;
			$('#kraken').animate({opacity:0},500).animate({top: 50 + '%', left: 80 + '%'},500);
			$('#kraken').animate({opacity:1},500);
			$('#kraken').animate({opacity:1},1500);
			$('#krakenR').animate({opacity: 1},2500);
			$('#krakenR').animate({opacity: 0.4},1000);
			$('#krakenR').animate({opacity: 1},100);
			$('.poulpe2').animate({opacity: 0}, 3500);
			$('.poulpe2').animate({top: 75 + '%', left: 84 + '%'}, 0);
			$('.poulpe2').animate({opacity: 1}, 200);
			$('.poulpe2').animate({top: 58 + '%', left: 43.6 + '%', borderSpacing: 800 }, {
	    step: function(now,fx) {
	      $('.poulpe2').css('transform','rotate('+now+'deg)');
	    },
	    duration:3000
	},2500, 'linear');
			$('#kraken').animate({opacity: 1}, 500);
			$('#kraken').animate({top: 20 + '%'}, 1000);
			$('.poulpe3').animate({opacity: 0}, 5000);
			$('.poulpe3').animate({top: 40 + '%', left: 84 + '%'}, 0);
			$('.poulpe3').animate({opacity: 1}, 200);
			$('.poulpe3').animate({top: 58 + '%', left: 43.6 + '%', borderSpacing: 800 }, {
	    step: function(now,fx) {
	      $('.poulpe3').css('transform','rotate('+now+'deg)');
	    },
	    duration:3000
	},2500, 'linear');
	  }
	}

	}

	});
