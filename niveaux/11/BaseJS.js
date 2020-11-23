$(document).ready(function() {

	var angle = 0;
	var hauteurboule=-50;     //130
	var bloquage =0;
	var tourne = 0;
	$("body").css("overflow", "hidden");

	var murbouge=setInterval(murbouge, 0.00000000003)

		function murbouge() {
				var pos1 = getPositions($("#bordureT"));
				var pos2 = getPositions($(".murpierre2"));
				var pos3 = getPositions($(".murpierre3"));

			  var murpierrebordertop1Y = comparePositions(pos3[1], pos1[1]);
			  var murpierreborderbottom1Y = comparePositions(pos3[1], pos2[1]);

			  var murpierrebordertopmatch1 =  murpierrebordertop1Y;
			  var murpierreborderbottommatch1 =  murpierreborderbottom1Y;

			  if (murpierrebordertopmatch1) {
				  $('.murpierre3').stop()
				  $(".murpierre3").animate({top: '35.2' + '%'}, 2000, 'linear');
			  }

			  if (murpierreborderbottommatch1) {
				  $('.murpierre3').stop()
				  $(".murpierre3").animate({top: '0' + '%'}, 2000, 'linear');
			}
		}

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
			$('#explosion').fadeTo(0, 0);
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
	  var pos10 = getPositions($(".Tentree1"));
	  var pos11 = getPositions($(".Tsortie1"));
	  var pos12 = getPositions($(".Tentree2"));
	  var pos13 = getPositions($(".Tsortie2"));
	  var pos14 = getPositions($(".murmetal1"));
	  var pos15 = getPositions($(".levier1"));

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

	  var TentreeMatch1X = comparePositions(pos2[0], pos10[0]);
	  var TentreeMatch1Y = comparePositions(pos2[1], pos10[1]);

	  var TentreeMatch2X = comparePositions(pos2[0], pos12[0]);
	  var TentreeMatch2Y = comparePositions(pos2[1], pos12[1]);

	  var murmetalMatch1X = comparePositions(pos2[0], pos14[0]);
	  var murmetalMatch1Y = comparePositions(pos2[1], pos14[1]);

	  var levierMatch1X = comparePositions(pos2[0], pos15[0]);
	  var levierMatch1Y = comparePositions(pos2[1], pos15[1]);


	  var match = horizontalMatch && verticalMatch;

	  var borderLeftMatch = borderLeftMatchX && borderLeftMatchY;
	  var borderRightMatch = borderRightMatchX && borderRightMatchY;
	  var borderTopMatch = borderTopMatchX && borderTopMatchY;
	  var borderBottomMatch = borderBottomMatchX && borderBottomMatchY;

	  var murpierreMatch1 = murpierreMatch1X && murpierreMatch1Y;
	  var murpierreMatch2 = murpierreMatch2X && murpierreMatch2Y;
	  var murpierreMatch3 = murpierreMatch3X && murpierreMatch3Y;

	  var TentreeMatch1 = TentreeMatch1X && TentreeMatch1Y;
	  var TentreeMatch2 = TentreeMatch2X && TentreeMatch2Y;

	  var murmetalMatch1 = murmetalMatch1X && murmetalMatch1Y;
	  var levierMatch1 = levierMatch1X && levierMatch1Y;

	 if (match) {
		 $('#popup').animate({top: 30 + '%', left: 36 + '%'},0);
		 $('#popup').animate({opacity: 1},200);
		 document.cookie = "lvl12=true;expires=-1;path=/";
		 document.cookie = "lvl11=true;expires=Thu, 01 Jan 1970 00:00:01 GMT";
		 coffre = $('#coffre').attr('src','../../images/coffre-ouvert.png'); // si les deux variables sont vérifiées, la variable match est appellée dans la condition
		 $('#boule').stop(true, true);
		 $('#boule').css('opacity', '0');
	}

	if (TentreeMatch1) {
		$('#boule').stop();
		$('#canon').css('opacity', 0);
		$('#canonboule').rotate(90);
		$('#canonboule').position({
  		my: "bottom",
  		at: "bottom",
  		of: ".Tsortie1"
		});
		//$('#canonboule').css('top', -145 + '%')
		$('#boule').css('opacity', 1);
		$('#boule').css('top', 95 + '%');
		$('#boule').css('left', 50 + '%');
		$("#boule").animate({top: 0}, 'easeOutExpo');
	}

	if (TentreeMatch2) {
		$('#boule').stop();
		$('#canon').css('opacity', 0);
		$('#canonboule').rotate(-90);
		$('#canonboule').position({
  		my: "bottom",
  		at: "bottom",
  		of: ".Tsortie2"
		});
		$('#canonboule').css('left', 95 + '%')
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

	  if (murpierreMatch1) {
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


		if (murmetalMatch1) {
			if (bloquage == 2) {
				$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
				$('#popup2').animate({opacity: 1},200);
			}
		  $('#boule').stop()
		  $('#boule').attr('src','../../images/explosion.png');
		  $('#boule').width('100' + '%');
		  $('#boule').animate({ opacity: 0 }, 30);
			if (bloquage <= 1  && tourne == 1) {
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
			if (bloquage == 2) {
				$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
				$('#popup2').animate({opacity: 1},200);
			}
		  $('#boule').stop()
		  $('.murmetal1').animate({height: 0 + '%'}, 2000, 'easeOutSine');
		  $('#boule').css('top', 77 + '%');
		  $('#boule').css('left', 8.2 + '%');
		  $('.levier1').attr('src','../../images/levierferme.png');
		  $('#canonboule').css('top', -125 + '%');
		  $('#canonboule').css('left', 45 + '%');
		  $('#canonboule').rotate(0);
		  $('#canon').css('opacity', 1);
		  $('#boule').css('top', 72 + '%');
		  $('#boule').css('left', 49.3 + '%');
		  $('#boule').attr('src','../../images/boule.png');
		  $('#boule').css('top', 91.3 + '%');
		  $('#boule').css('left', 54.5 + '%');
		  $('#boule').css('opacity', 1);
		  angle = 0;
	  }

	  if (tourne == 0 && murpierreMatch2) {
		  $('#boule').width('10' + '%');
	  }


	}

	});
