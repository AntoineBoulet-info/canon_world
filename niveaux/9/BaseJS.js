$(document).ready(function() {

	var angle = 0;
	var hauteurboule=-50;     //130
	var bloquage =0;
	var tourne = 0;
	$("body").css("overflow", "hidden");


	$('.murpierre4').animate({height: 19.7 + '%'}, 8000);


	document.addEventListener('keydown', doKeyDown, true);

	function doKeyDown(e) {

		if (e.keyCode == 39 && bloquage <= 1) {
			var tourne = 1;
			$('#boule').width('28%');
			$('#boule').css('top', 91.3 + '%');
			$('#boule').css('left', 54.5 + '%');
			$('#boule').css('zIndex', -1);							//-700 hauteurboule
			angle+=5;
			$("#canonboule").rotate({
				angle: angle,
				center: ["bottom center"]
			});
		}



		if (e.keyCode == 37 && bloquage <= 1) {
			var tourne = 1;
			$('#boule').width('28%');
			$('#boule').css('top', 91.3 + '%');
			$('#boule').css('left', 54.5 + '%');
			$('#boule').css('zIndex', -1);
			angle-=5;
			$("#canonboule").rotate({
				angle: angle,
				center: ["bottom center"]
			});
		}


		if (e.keyCode == 32 && bloquage <= 1) {
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
		var pos11 = getPositions($(".murbois1"));
		var pos12 = getPositions($(".Tentree"));
		var pos13 = getPositions($(".Tsortie"));


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

		var murboisMatch1X = comparePositions(pos2[0], pos11[0]);
	  var murboisMatch1Y = comparePositions(pos2[1], pos11[1]);

		var TentreeMatch1X = comparePositions(pos2[0], pos12[0]);
	  var TentreeMatch1Y = comparePositions(pos2[1], pos12[1]);


	  var match = horizontalMatch && verticalMatch;

	  var borderLeftMatch = borderLeftMatchX && borderLeftMatchY;
	  var borderRightMatch = borderRightMatchX && borderRightMatchY;
	  var borderTopMatch = borderTopMatchX && borderTopMatchY;
	  var borderBottomMatch = borderBottomMatchX && borderBottomMatchY;

	  var murpierreMatch1 = murpierreMatch1X && murpierreMatch1Y;
		var murpierreMatch2 = murpierreMatch2X && murpierreMatch2Y;
		var murpierreMatch3 = murpierreMatch3X && murpierreMatch3Y;
		var murpierreMatch4 = murpierreMatch4X && murpierreMatch4Y;

		var murboisMatch1 = murboisMatch1X && murboisMatch1Y;

		var TentreeMatch = TentreeMatch1X && TentreeMatch1Y;


	 if (match) {
		 $('#popup').animate({top: 30 + '%', left: 36 + '%'},0);
		 $('#popup').animate({opacity: 1},200);
		 document.cookie = "lvl10=true;expires=-1;path=/";
		 document.cookie = "lvl9=true;expires=Thu, 01 Jan 1970 00:00:01 GMT";
		 coffre = $('#coffre').attr('src','../../images/coffre-ouvert.png'); // si les deux variables sont vérifiées, la variable match est appellée dans la condition
		 $('#boule').stop(true, true);
		 $('#boule').css('opacity', '0');
	}

	if (TentreeMatch) {
		$('#boule').stop();
		$('#canon').css('opacity', 0);
		$('#canonboule').rotate(90);
		$('#canonboule').position({
  		my: "bottom",
  		at: "bottom",
  		of: ".Tsortie"
		});
		$('#boule').css('opacity', 1);
		$('#boule').css('top', 95 + '%');
		$('#boule').css('left', 50 + '%');
		$("#boule").animate({top: 0}, 'easeOutExpo');
	}

	  if (borderTopMatch) {
			if (bloquage == 2) {
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
			if (bloquage == 2) {
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
			if (bloquage == 2) {
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

	  if (murpierreMatch1) {
			if (bloquage == 2) {
				$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
				$('#popup2').animate({opacity: 1},200);
			}
		  $('#boule').stop()
		  $('#boule').attr('src','../../images/explosion.png');
		  $('#boule').width('100' + '%');
		  $('#boule').animate({ opacity: 0 }, 30);
			if (bloquage <= 1  && tourne == 0) {
			$('#boule').width('2.2%');
			$('#boule').css('top', 77 + '%');
			$('#boule').css('left', 8.2 + '%');
			$('#boule').css('zIndex', -1);
			$('#boule').attr('src','../../images/boule.png');
			$('#boule').animate({ opacity: 1 }, 0);
			}
	  }


		if (murpierreMatch2) {
			if (bloquage == 2) {
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


		if (murpierreMatch3) {
			if (bloquage == 2) {
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


		if (murpierreMatch4) {
			if (bloquage == 2) {
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


		if (murboisMatch1) {
			if (bloquage == 2) {
				$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
				$('#popup2').animate({opacity: 1},200);
			}
			$('#boule').stop()
			$('#boule').attr('src','../../images/explosion.png');
			$('#boule').width('100' + '%');
			$('#boule').animate({ opacity: 0 }, 30);
			$('.murbois1').animate({ opacity: 0 }, 30);
			$('.murbois1').animate({top: -500}, 0);

			if (bloquage <= 1) {
			$('#boule').width('28%');
			$('#boule').css('top', 91.3 + '%');
			$('#boule').css('left', 54.5 + '%');
			$('#boule').css('zIndex', -1);
			$('#boule').attr('src','../../images/boule.png');
			$('#boule').animate({ opacity: 1 }, 0);
			}
		}

	   if (tourne == 0 && murpierreMatch1) {
		   $('#boule').width('2.2' + '%');
	   }


	}

	});
