$(document).ready(function() {

	var angle = 0;
	var hauteurboule=-50;     //130
	var bloquage =0;
	var tourne = 0;
	$("body").css("overflow", "hidden");


	$('.murpierre9').animate({height: 15.5 + '%'}, 7000);
	$('.murpierre10').animate({width: 20.35 + '%'}, 15000);
	$('.murpierre11').animate({height: 15.5 + '%'}, 12000);


	document.addEventListener('keydown', doKeyDown, true);

	function doKeyDown(e) {

		if (e.keyCode == 39 && bloquage <= 3) {
			var tourne = 1;
			$('#boule').width('28%');
			$('#boule').css('top', 91.3 + '%');
			$('#boule').css('left', 54.5 + '%');
			$('#boule').css('zIndex', -1);
			$('#boule').attr('src','../../images/boule.png');
			$('#boule').css('opacity', 1);
			angle+=5;
			$("#canonboule").rotate({
				angle: angle,
				center: ["bottom center"]
			});
		}



		if (e.keyCode == 37 && bloquage <= 3) {
			var tourne = 1;
			$('#boule').width('28%');
			$('#boule').css('top', 91.3 + '%');
			$('#boule').css('left', 54.5 + '%');
			$('#boule').css('zIndex', -1);
			$('#boule').attr('src','../../images/boule.png');
			$('#boule').css('opacity', 1);
			angle-=5;
			$("#canonboule").rotate({
				angle: angle,
				center: ["bottom center"]
			});
		}


		if (e.keyCode == 32 && bloquage <= 3) {
			var Repet=setInterval(checkCollisions, 0.00000000003)
			var boum = $("#boum")[0];
			boum.play();
			$("#boule").animate({top: 0}, 'easeOutExpo', function(){clearInterval(Repet)});
			explosion = $('#explosion').attr('src','../../images/explosion.png');
			$('#explosion').css('opacity',1);
			$("#canon").animate({top: 1469}, 30, 'easeOutExpo');
			$("#canon").animate({top: 1454}, 400, 'easeOutExpo');
			$('#explosion').fadeTo(1000, 0);
			bloquage = bloquage +1;
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

	  var coffre = document.getElementById("coffre");
	  var pos1 = getPositions(coffre); 															// pos=[pos0, pos1]
	  var pos2 = getPositions($("#boule"));
	  var pos3 = getPositions($("#bordureL"));
	  var pos4 = getPositions($("#bordureR"));
	  var pos5 = getPositions($("#bordureT"));
	  var pos6 = getPositions($("#bordureB"));
	  var pos7 = getPositions($(".murpierre1"));
	  var pos8 = getPositions($(".murpierre2"));
	  var pos9 = getPositions($(".murpierre3"));
	  var pos10 = getPositions($(".murpierre4"));
	  var pos11 = getPositions($(".murpierre5"));
	  var pos12 = getPositions($(".murpierre6"));
	  var pos13 = getPositions($(".murpierre7"));
	  var pos14 = getPositions($(".murpierre8"));
	  var pos15 = getPositions($(".murpierre9"));
	  var pos16 = getPositions($(".murpierre10"));
	  var pos17 = getPositions($(".murpierre11"));
	  var pos18 = getPositions($(".murmetal1"));
	  var pos19 = getPositions($(".murmetal2"));
	  var pos20 = getPositions($(".murmetal3"));
	  var pos21 = getPositions($(".levier1"));
	  var pos22 = getPositions($(".levier2"));
	  var pos23 = getPositions($(".levier3"));


	  var horizontalMatch = comparePositions(pos1[0], pos2[0]);									// compare largeur du coffre/boule
	  var verticalMatch = comparePositions(pos1[1], pos2[1]); 	  								// compare hauteur coffre/boule

	  var borderLeftMatchX = comparePositions(pos2[0], pos3[0]);
	  var borderLeftMatchY = comparePositions(pos2[1], pos3[1]);

	  var borderRightMatchX = comparePositions(pos2[0], pos4[0]);
	  var borderRightMatchY = comparePositions(pos2[1], pos4[1]);

	  var borderTopMatchX = comparePositions(pos2[0], pos5[0]);
	  var borderTopMatchY = comparePositions(pos2[1], pos5[1]);

	  var borderBottomMatchX = comparePositions(pos2[0], pos6[0]);
	  var borderBottomMatchY = comparePositions(pos2[1], pos6[1]);

	  var murpierreMatch1X = comparePositions(pos2[0], pos7[0]);
	  var murpierreMatch1Y = comparePositions(pos2[1], pos7[1]);

	  var murpierreMatch2X = comparePositions(pos2[0], pos8[0]);
	  var murpierreMatch2Y = comparePositions(pos2[1], pos8[1]);

	  var murpierreMatch3X = comparePositions(pos2[0], pos9[0]);
	  var murpierreMatch3Y = comparePositions(pos2[1], pos9[1]);

	  var murpierreMatch4X = comparePositions(pos2[0], pos10[0]);
	  var murpierreMatch4Y = comparePositions(pos2[1], pos10[1]);

	  var murpierreMatch5X = comparePositions(pos2[0], pos11[0]);
	  var murpierreMatch5Y = comparePositions(pos2[1], pos11[1]);

	  var murpierreMatch6X = comparePositions(pos2[0], pos12[0]);
	  var murpierreMatch6Y = comparePositions(pos2[1], pos12[1]);

	  var murpierreMatch7X = comparePositions(pos2[0], pos13[0]);
	  var murpierreMatch7Y = comparePositions(pos2[1], pos13[1]);

	  var murpierreMatch8X = comparePositions(pos2[0], pos14[0]);
	  var murpierreMatch8Y = comparePositions(pos2[1], pos14[1]);

	  var murpierreMatch9X = comparePositions(pos2[0], pos15[0]);
	  var murpierreMatch9Y = comparePositions(pos2[1], pos15[1]);

	  var murpierreMatch10X = comparePositions(pos2[0], pos16[0]);
	  var murpierreMatch10Y = comparePositions(pos2[1], pos16[1]);

	  var murpierreMatch11X = comparePositions(pos2[0], pos17[0]);
	  var murpierreMatch11Y = comparePositions(pos2[1], pos17[1]);

	  var murmetalMatch1X = comparePositions(pos2[0], pos18[0]);
	  var murmetalMatch1Y = comparePositions(pos2[1], pos18[1]);

	  var murmetalMatch2X = comparePositions(pos2[0], pos19[0]);
	  var murmetalMatch2Y = comparePositions(pos2[1], pos19[1]);

	  var murmetalMatch3X = comparePositions(pos2[0], pos20[0]);
	  var murmetalMatch3Y = comparePositions(pos2[1], pos20[1]);

	  var levierMatch1X = comparePositions(pos2[0], pos21[0]);
	  var levierMatch1Y = comparePositions(pos2[1], pos21[1]);

	  var levierMatch2X = comparePositions(pos2[0], pos22[0]);
	  var levierMatch2Y = comparePositions(pos2[1], pos22[1]);

	  var levierMatch3X = comparePositions(pos2[0], pos23[0]);
	  var levierMatch3Y = comparePositions(pos2[1], pos23[1]);


	  var match = horizontalMatch && verticalMatch;

	  var borderLeftMatch = borderLeftMatchX && borderLeftMatchY;
	  var borderRightMatch = borderRightMatchX && borderRightMatchY;
	  var borderTopMatch = borderTopMatchX && borderTopMatchY;
	  var borderBottomMatch = borderBottomMatchX && borderBottomMatchY;

	  var murpierreMatch1 = murpierreMatch1X && murpierreMatch1Y;
	  var murpierreMatch2 = murpierreMatch2X && murpierreMatch2Y;
	  var murpierreMatch3 = murpierreMatch3X && murpierreMatch3Y;
	  var murpierreMatch4 = murpierreMatch4X && murpierreMatch4Y;
	  var murpierreMatch5 = murpierreMatch5X && murpierreMatch5Y;
	  var murpierreMatch6 = murpierreMatch6X && murpierreMatch6Y;
	  var murpierreMatch7 = murpierreMatch7X && murpierreMatch7Y;
	  var murpierreMatch8 = murpierreMatch8X && murpierreMatch8Y;
	  var murpierreMatch9 = murpierreMatch9X && murpierreMatch9Y;
	  var murpierreMatch10 = murpierreMatch10X && murpierreMatch10Y;
	  var murpierreMatch11 = murpierreMatch11X && murpierreMatch11Y;

	  var murmetalMatch1 = murmetalMatch1X && murmetalMatch1Y;
	  var murmetalMatch2 = murmetalMatch2X && murmetalMatch2Y;
	  var murmetalMatch3 = murmetalMatch3X && murmetalMatch3Y;

	  var levierMatch1 = levierMatch1X && levierMatch1Y;
	  var levierMatch2 = levierMatch2X && levierMatch2Y;
	  var levierMatch3 = levierMatch3X && levierMatch3Y;




	 if (match) {
		 $('#popup').animate({top: 30 + '%', left: 36 + '%'},0);
		 $('#popup').animate({opacity: 1},200);
		 document.cookie = "lvlboss=true;expires=-1;path=/";
		 document.cookie = "lvl12=true;expires=Thu, 01 Jan 1970 00:00:01 GMT";
		 coffre = $('#coffre').attr('src','../../images/coffre-ouvert.png'); // si les deux variables sont vérifiées, la variable match est appellée dans la condition
		 $('#boule').stop(true, true);
		 $('#boule').css('opacity', '0');
	}

	  if (borderTopMatch) {
			if (bloquage == 4) {
				$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
				$('#popup2').animate({opacity: 1},200);
			}
		  $('#boule').stop()
		  $('#boule').attr('src','../../images/explosion.png');
		  $('#boule').width('100' + '%');
		  $('#boule').animate({ opacity: 0 }, 30);

			if (bloquage <= 1  && tourne == 1) {
			$('#boule').width('28%');
			$('#boule').css('top', 90.2 + '%');
			$('#boule').css('left', 54.5 + '%');
			$('#boule').css('zIndex', -1);
			$('#boule').attr('src','../../images/boule.png');
			$('#boule').animate({ opacity: 1 }, 0);
			}
			}


	  if (borderBottomMatch) {
			if (bloquage == 4) {
				$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
				$('#popup2').animate({opacity: 1},200);
			}
		  $('#boule').stop()
		  $('#boule').attr('src','../../images/explosion.png');
		  $('#boule').width('100' + '%');
		  $('#boule').animate({ opacity: 0 }, 30);
			if (bloquage <= 1  && tourne == 1) {
			$('#boule').width('28%');
			$('#boule').css('top', 90.2 + '%');
			$('#boule').css('left', 54.5 + '%');
			$('#boule').css('zIndex', -1);
			$('#boule').attr('src','../../images/boule.png');
			$('#boule').animate({ opacity: 1 }, 0);
			}
	  }

	  if (borderLeftMatch) {
			if (bloquage == 4) {
				$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
				$('#popup2').animate({opacity: 1},200);
			}
		  $('#boule').stop()
		  $('#boule').attr('src','../../images/explosion.png');
		  $('#boule').width('100' + '%');
		  $('#boule').animate({ opacity: 0 }, 30);
			if (bloquage <= 1  && tourne == 1) {
			$('#boule').width('28%');
			$('#boule').css('top', 90.2 + '%');
			$('#boule').css('left', 54.5 + '%');
			$('#boule').css('zIndex', -1);
			$('#boule').attr('src','../../images/boule.png');
			$('#boule').animate({ opacity: 1 }, 0);
			}
	  }

	  if (borderRightMatch) {
			if (bloquage == 4) {
				$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
				$('#popup2').animate({opacity: 1},200);
			}
		  $('#boule').stop()
		  $('#boule').attr('src','../../images/explosion.png');
		  $('#boule').width('100' + '%');
		  $('#boule').animate({ opacity: 0 }, 0);
			if (bloquage <= 1  && tourne == 1) {
			$('#boule').width('28%');
			$('#boule').css('top', 90.2 + '%');
			$('#boule').css('left', 54.5 + '%');
			$('#boule').css('zIndex', -1);
			$('#boule').attr('src','../../images/boule.png');
			$('#boule').animate({ opacity: 1 }, 0);
			}
	  }

	  if (murpierreMatch1) {
			if (bloquage == 4) {
				$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
				$('#popup2').animate({opacity: 1},200);
			}
		  $('#boule').stop()
		  $('#boule').animate({ opacity: 0 }, 0);
			if (bloquage <= 4  && tourne == 1) {
			$('#boule').width('2.2%');
			$('#boule').css('top', 77 + '%');
			$('#boule').css('left', 8.2 + '%');
			$('#boule').css('zIndex', -1);
			$('#boule').attr('src','../../images/boule.png');
			$('#boule').animate({ opacity: 1 }, 0);
			}
	  }

	  if (murpierreMatch2) {
			if (bloquage == 4) {
				$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
				$('#popup2').animate({opacity: 1},200);
			}
		  $('#boule').stop()
		  $('#boule').animate({ opacity: 0 }, 0);
			if (bloquage <= 4  && tourne == 1) {
			$('#boule').width('2.2%');
			$('#boule').css('top', 77 + '%');
			$('#boule').css('left', 8.2 + '%');
			$('#boule').css('zIndex', -1);
			$('#boule').attr('src','../../images/boule.png');
			$('#boule').animate({ opacity: 1 }, 0);
			}
	  }

	  if (murpierreMatch3) {
			if (bloquage == 4) {
				$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
				$('#popup2').animate({opacity: 1},200);
			}
		  $('#boule').stop()
		  //$('#boule').attr('src','../../images/explosion.png');
		  //$('#boule').width('100' + '%');
		  $('#boule').animate({ opacity: 0 }, 0);
			if (bloquage <= 4  && tourne == 1) {
			$('#boule').width('2.2%');
			$('#boule').css('top', 77 + '%');
			$('#boule').css('left', 8.2 + '%');
			$('#boule').css('zIndex', -1);
			$('#boule').attr('src','../../images/boule.png');
			$('#boule').animate({ opacity: 1 }, 0);
			}
	  }

	  if (murpierreMatch4) {
			if (bloquage == 4) {
				$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
				$('#popup2').animate({opacity: 1},200);
			}
		  $('#boule').stop()
		  //$('#boule').attr('src','../../images/explosion.png');
		  //$('#boule').width('100' + '%');
		  $('#boule').animate({ opacity: 0 }, 0);
			if (bloquage <= 4  && tourne == 1) {
			$('#boule').width('2.2%');
			$('#boule').css('top', 77 + '%');
			$('#boule').css('left', 8.2 + '%');
			$('#boule').css('zIndex', -1);
			$('#boule').attr('src','../../images/boule.png');
			$('#boule').animate({ opacity: 1 }, 0);
			}
	  }

	  if (murpierreMatch5) {
			if (bloquage == 4) {
				$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
				$('#popup2').animate({opacity: 1},200);
			}
		  $('#boule').stop()
		  $('#boule').attr('src','../../images/explosion.png');
		  $('#boule').width('100' + '%');
		  $('#boule').animate({ opacity: 0 }, 30);
			if (bloquage <= 4  && tourne == 1) {
			$('#boule').width('2.2%');
			$('#boule').css('top', 77 + '%');
			$('#boule').css('left', 8.2 + '%');
			$('#boule').css('zIndex', -1);
			$('#boule').attr('src','../../images/boule.png');
			$('#boule').animate({ opacity: 1 }, 0);
			}
	  }

	  if (murpierreMatch6) {
			if (bloquage == 4) {
				$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
				$('#popup2').animate({opacity: 1},200);
			}
		  $('#boule').stop()
		  $('#boule').attr('src','../../images/explosion.png');
		  $('#boule').width('100' + '%');
		  $('#boule').animate({ opacity: 0 }, 30);
			if (bloquage <= 4  && tourne == 1) {
			$('#boule').width('2.2%');
			$('#boule').css('top', 77 + '%');
			$('#boule').css('left', 8.2 + '%');
			$('#boule').css('zIndex', -1);
			$('#boule').attr('src','../../images/boule.png');
			$('#boule').animate({ opacity: 1 }, 0);
			}
	  }

	  if (murpierreMatch7) {
			if (bloquage == 4) {
				$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
				$('#popup2').animate({opacity: 1},200);
			}
		  $('#boule').stop()
		  $('#boule').attr('src','../../images/explosion.png');
		  $('#boule').width('100' + '%');
		  $('#boule').animate({ opacity: 0 }, 30);
			if (bloquage <= 4  && tourne == 1) {
			$('#boule').width('2.2%');
			$('#boule').css('top', 77 + '%');
			$('#boule').css('left', 8.2 + '%');
			$('#boule').css('zIndex', -1);
			$('#boule').attr('src','../../images/boule.png');
			$('#boule').animate({ opacity: 1 }, 0);
			}
	  }

	  if (murpierreMatch8) {
			if (bloquage == 4) {
				$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
				$('#popup2').animate({opacity: 1},200);
			}
		  $('#boule').stop()
		  $('#boule').attr('src','../../images/explosion.png');
		  $('#boule').width('100' + '%');
		  $('#boule').animate({ opacity: 0 }, 30);
			if (bloquage <= 4  && tourne == 1) {
			$('#boule').width('2.2%');
			$('#boule').css('top', 77 + '%');
			$('#boule').css('left', 8.2 + '%');
			$('#boule').css('zIndex', -1);
			$('#boule').attr('src','../../images/boule.png');
			$('#boule').animate({ opacity: 1 }, 0);
			}
	  }

	  if (murpierreMatch9) {
			if (bloquage == 4) {
				$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
				$('#popup2').animate({opacity: 1},200);
			}
		  $('#boule').stop()
		  $('#boule').attr('src','../../images/explosion.png');
		  $('#boule').width('100' + '%');
		  $('#boule').animate({ opacity: 0 }, 30);
			if (bloquage <= 4  && tourne == 1) {
			$('#boule').width('2.2%');
			$('#boule').css('top', 77 + '%');
			$('#boule').css('left', 8.2 + '%');
			$('#boule').css('zIndex', -1);
			$('#boule').attr('src','../../images/boule.png');
			$('#boule').animate({ opacity: 1 }, 0);
			}
	  }

	  if (murpierreMatch10) {
			if (bloquage == 4) {
				$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
				$('#popup2').animate({opacity: 1},200);
			}
		  $('#boule').stop()
		  $('#boule').attr('src','../../images/explosion.png');
		  $('#boule').width('100' + '%');
		  $('#boule').animate({ opacity: 0 }, 30);
			if (bloquage <= 4  && tourne == 1) {
			$('#boule').width('2.2%');
			$('#boule').css('top', 77 + '%');
			$('#boule').css('left', 8.2 + '%');
			$('#boule').css('zIndex', -1);
			$('#boule').attr('src','../../images/boule.png');
			$('#boule').animate({ opacity: 1 }, 0);
			}
	  }

	  if (murpierreMatch11) {
			if (bloquage == 4) {
				$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
				$('#popup2').animate({opacity: 1},200);
			}
		  $('#boule').stop()
		  $('#boule').attr('src','../../images/explosion.png');
		  $('#boule').width('100' + '%');
		  $('#boule').animate({ opacity: 0 }, 30);
			if (bloquage <= 4  && tourne == 1) {
			$('#boule').width('2.2%');
			$('#boule').css('top', 77 + '%');
			$('#boule').css('left', 8.2 + '%');
			$('#boule').css('zIndex', -1);
			$('#boule').attr('src','../../images/boule.png');
			$('#boule').animate({ opacity: 1 }, 0);
			}
	  }

	  if (murmetalMatch1) {
			if (bloquage == 4) {
				$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
				$('#popup2').animate({opacity: 1},200);
			}
		  $('#boule').stop()
		  $('#boule').attr('src','../../images/explosion.png');
		  $('#boule').width('100' + '%');
		  $('#boule').animate({ opacity: 0 }, 30);
			if (bloquage <= 4  && tourne == 1) {
			$('#boule').stop();
			$('#boule').width('2.2%');
			$('#boule').css('top', 77 + '%');
			$('#boule').css('left', 8.2 + '%');
			$('#boule').css('zIndex', -1);
			$('#boule').attr('src','../../images/boule.png');
			$('#boule').animate({ opacity: 1 }, 0);
			}
	  }

	  if (murmetalMatch2) {
			if (bloquage == 4) {
				$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
				$('#popup2').animate({opacity: 1},200);
			}
		  $('#boule').stop()
		  $('#boule').attr('src','../../images/explosion.png');
		  $('#boule').width('100' + '%');
		  $('#boule').animate({ opacity: 0 }, 30);
			if (bloquage <= 4  && tourne == 1) {
			$('#boule').stop();
			$('#boule').width('2.2%');
			$('#boule').css('top', 77 + '%');
			$('#boule').css('left', 8.2 + '%');
			$('#boule').css('zIndex', -1);
			$('#boule').attr('src','../../images/boule.png');
			$('#boule').animate({ opacity: 1 }, 0);
			}
	  }

	  if (murmetalMatch3) {
			if (bloquage == 4) {
				$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
				$('#popup2').animate({opacity: 1},200);
			}
		  $('#boule').stop()
		  $('#boule').attr('src','../../images/explosion.png');
		  $('#boule').width('100' + '%');
		  $('#boule').animate({ opacity: 0 }, 30);
			if (bloquage <= 4  && tourne == 1) {
			$('#boule').stop();
			$('#boule').width('2.2%');
			$('#boule').css('top', 77 + '%');
			$('#boule').css('left', 8.2 + '%');
			$('#boule').css('zIndex', -1);
			$('#boule').attr('src','../../images/boule.png');
			$('#boule').animate({ opacity: 1 }, 0);
			}
	  }

	  if (levierMatch1) {
			if (bloquage == 4) {
				$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
				$('#popup2').animate({opacity: 1},200);
			}
		  $('#boule').stop()
		  $('.murmetal1').animate({width: 0 + '%'}, 2000, 'easeOutSine');
		  $('#boule').css('top', 77 + '%');
		  $('#boule').css('left', 8.2 + '%');
		  $('.levier1').attr('src','../../images/levieractive.png');
	  }

	  if (levierMatch2) {
			if (bloquage == 4) {
				$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
				$('#popup2').animate({opacity: 1},200);
			}
		  $('#boule').stop()
		  $('.murmetal2').animate({width: 0 + '%'}, 2000);
		  $('#boule').css('top', 77 + '%');
		  $('#boule').css('left', 8.2 + '%');
		  $('.levier2').attr('src','../../images/levieractive.png');
	  }

	  if (levierMatch3) {
			if (bloquage == 4) {
				$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
				$('#popup2').animate({opacity: 1},200);
			}
		  $('#boule').stop()
		  $('.murmetal3').animate({width: 0 + '%'}, 2000);
		  $('#boule').css('top', 77 + '%');
		  $('#boule').css('left', 8.2 + '%');
		  $('.levier3').attr('src','../../images/levierferme.png');
	  }


	  if (tourne == 0 && murmetalMatch3) {
		  $('#boule').width('10' + '%');
	  }


	}

	});
