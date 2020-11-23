$(document).ready(function() {

	var angle = 0;
	var hauteurboule=-50;     //130
	var bloquage =0; // nombre de boules n+1 pour en ajouter //
	$("body").css("overflow", "hidden");

	var murbouge=setInterval(murbouge, 0.00000003) ;

  function murbouge() {
        var pos5 = getPositions($(".murpierre1"));
        var pos6 = getPositions($("#bordureL"));
        var pos7 = getPositions($(".murpierre3"));
        var pos8 = getPositions($("#bordureR"));
        var pos9 = getPositions($(".murpierre2"));

		var murpierreborderright1X = comparePositions(pos5[0], pos7[0]);

		var murpierreborderleft1X = comparePositions(pos6[0], pos7[0]);

		var murpierreborderright1Xb = comparePositions(pos5[0], pos9[0]);

		var murpierreborderleft1Xb = comparePositions(pos8[0], pos9[0]);

		var murpierreborderrightmatch1 =  murpierreborderright1X;
		var murpierreborderleftmatch1 =  murpierreborderleft1X;

		var murpierreborderrightmatch1b =  murpierreborderright1Xb;
		var murpierreborderleftmatch1b =  murpierreborderleft1Xb;

      if (murpierreborderrightmatch1) {
          $('.murpierre3').stop() ;
          $(".murpierre3").animate({left: '0' + '%'}, 800, 'linear');
      }

      if (murpierreborderleftmatch1) {
          $('.murpierre3').stop() ;
          $(".murpierre3").animate({left: '50' + '%'}, 800, 'linear');
      }


	 if (murpierreborderrightmatch1b) {
          $('.murpierre2').stop() ;
          $(".murpierre2").animate({left: '88' + '%'}, 800, 'linear');
      }

      if (murpierreborderleftmatch1b) {
          $('.murpierre2').stop() ;
          $(".murpierre2").animate({left: '20' + '%'}, 800, 'linear');
      }
  }









	document.addEventListener('keydown', doKeyDown, true);



	function doKeyDown(e) {

		if (e.keyCode == 39 && bloquage <= 1) {
			$('#boule').width('28%');
			$('#boule').css('top', 90.2 + '%');
			$('#boule').css('left', 54.5 + '%');
			$('#boule').css('zIndex', -1);							//-700 hauteurboule
			angle+=5;
			$("#canonboule").rotate({
				angle: angle,
				center: ["bottom center"]
			});
		}



		if (e.keyCode == 37 && bloquage <= 1) {
			$('#boule').width('28%');
			$('#boule').css('top', 90.2 + '%');
			$('#boule').css('left', 54.5 + '%');
			$('#boule').css('zIndex', -1);
			angle-=5;
			$("#canonboule").rotate({
				angle: angle,
				center: ["bottom center"]
			});
		}


		if (e.keyCode == 32 && bloquage <= 1) {
			var Repet=setInterval(checkCollisions, 0.00000003) ;
			var boum = $("#boum")[0];
			boum.play();
			$("#boule").animate({top: 0}, 'easeOutExpo', function(){clearInterval(Repet)});
			explosion = $('#explosion').attr('src','../../images/explosion.png');
			$('#explosion').css('opacity',1);
			$("#canon").animate({top: 1280}, 30, 'easeOutExpo');
			$("#canon").animate({top: 1262}, 400, 'easeOutExpo');
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
	  var coffrep = document.getElementById("coffrep");
	  var pos1 = getPositions(coffre); 															// pos=[pos0, pos1]
	  var pos1bis = getPositions(coffrep);
	  var pos2 = getPositions($("#boule"));
	  var pos3 = getPositions($("#bordureL"));
	  var pos4 = getPositions($("#bordureR"));
	  var pos5 = getPositions($("#bordureT"));
	  var pos6 = getPositions($("#bordureB"));
	  var pos7 = getPositions($(".murpierre1"));
	  var pos8 = getPositions($(".murpierre2"));
	  var pos9 = getPositions($(".murpierre3"));
	  var pos10 = getPositions($(".murbois1"));
	  var pos11= getPositions($(".murbois2"));

	  var horizontalMatch = comparePositions(pos1[0], pos2[0]);									// compare largeur du coffre/boule
	  var verticalMatch = comparePositions(pos1[1], pos2[1]); 	  								// compare hauteur coffre/boule

	  var horizontalMatch2 = comparePositions(pos1bis[0], pos2[0]);
	  var verticalMatch2 = comparePositions(pos1bis[1], pos2[1]);

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

	  var murboisMatch1X = comparePositions(pos2[0], pos10[0]);
	  var murboisMatch1Y = comparePositions(pos2[1], pos10[1]);

	  var murboisMatch2X = comparePositions(pos2[0], pos11[0]);
	  var murboisMatch2Y = comparePositions(pos2[1], pos11[1]);

	  var match = horizontalMatch && verticalMatch;	    // pour le coffre normal
	  var match2 = horizontalMatch2 && verticalMatch2;	// pour le coffre qui explose

	  var borderLeftMatch = borderLeftMatchX && borderLeftMatchY;
	  var borderRightMatch = borderRightMatchX && borderRightMatchY;
	  var borderTopMatch = borderTopMatchX && borderTopMatchY;
	  var borderBottomMatch = borderBottomMatchX && borderBottomMatchY;

	  var murpierreMatch1 = murpierreMatch1X && murpierreMatch1Y;
	  var murpierreMatch2 = murpierreMatch2X && murpierreMatch2Y;
	  var murpierreMatch3 = murpierreMatch3X && murpierreMatch3Y ;
	  var murboisMatch1 = murboisMatch1X && murboisMatch1Y;                  // ne pas oublier de changer les valeurs des murs bois/pierre
	  var murboisMatch2 = murboisMatch2X && murboisMatch2Y ;
	  var murpierreMatch3 = murpierreMatch3X && murpierreMatch3Y ;

	 if (match) {
		 coffre = $('#coffre').attr('src','../../images/coffre-ouvert.png'); // si les deux variables sont vérifiées, la variable match est appellée dans la condition
		 $('#boule').stop(true, true);
		 $('#boule').css('opacity', '0');
		 document.cookie = "lvl8=true;expires=-1;path=/";
		 document.cookie = "lvl7=true;expires=Thu, 01 Jan 1970 00:00:01 GMT";
		 $('#popup').animate({top: 30 + '%', left: 36 + '%'},0);
		 $('#popup').animate({opacity: 1},200);
	}

     if (match2) {
		 coffrep = $('#coffrep').attr('src','../../images/explosion.png'); // si les deux variables sont vérifiées, la variable match est appellée dans la condition
		 $('#boule').stop(true, true);
		 $('#boule').css('opacity', '0');
		 $('#popup3').animate({top: 30 + '%', left: 36 + '%'},0);
		 $('#popup3').animate({opacity: 1},200);
	}

	  if (murboisMatch1) {
			if (bloquage ==2) {
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
			$('#boule').css('top', 90.2 + '%');
			$('#boule').css('left', 54.5 + '%');
			$('#boule').css('zIndex', -1);
			$('#boule').attr('src','../../images/boule.png');
			$('#boule').animate({ opacity: 1 }, 0);
		  }
	  }

	  if (murboisMatch2) {
			if (bloquage ==2) {
				$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
				$('#popup2').animate({opacity: 1},200);
			}
		  $('#boule').stop()
		  $('#boule').attr('src','../../images/explosion.png');
		  $('#boule').width('100' + '%');
		  $('#boule').animate({ opacity: 0 }, 30);
		  $('.murbois2').animate({ opacity: 0 }, 30);
		  $('.murbois2').animate({top: -500}, 0);

		  if (bloquage <= 1) {
		  $('#boule').width('28%');
			$('#boule').css('top', 90.2 + '%');
			$('#boule').css('left', 54.5 + '%');
			$('#boule').css('zIndex', -1);
			$('#boule').attr('src','../../images/boule.png');
			$('#boule').animate({ opacity: 1 }, 0);
		   }
		}

	  if (borderTopMatch) {
		  $('#boule').stop()
		  $('#boule').attr('src','../../images/explosion.png');
		  $('#boule').width('100' + '%');
		  $('#boule').animate({ opacity: 0 }, 30);

		  if (bloquage <= 1) {
		  $('#boule').width('28%');
			$('#boule').css('top', 90.2 + '%');
			$('#boule').css('left', 54.5 + '%');
			$('#boule').css('zIndex', -1);
			$('#boule').attr('src','../../images/boule.png');
			$('#boule').animate({ opacity: 1 }, 0);
	    }

	  }

	  if (borderBottomMatch) {
			if (bloquage ==2) {
				$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
				$('#popup2').animate({opacity: 1},200);
			}
		  $('#boule').stop()
		  $('#boule').attr('src','../../images/explosion.png');
		  $('#boule').width('100' + '%');
		  $('#boule').animate({ opacity: 0 }, 30);

		  if (bloquage <= 1) {
		  $('#boule').width('28%');
			$('#boule').css('top', 90.2 + '%');
			$('#boule').css('left', 54.5 + '%');
			$('#boule').css('zIndex', -1);
			$('#boule').attr('src','../../images/boule.png');
			$('#boule').animate({ opacity: 1 }, 0);

			}

	  }

	  if (borderLeftMatch) {
			if (bloquage ==2) {
				$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
				$('#popup2').animate({opacity: 1},200);
			}
		  $('#boule').stop()
		  $('#boule').attr('src','../../images/explosion.png');
		  $('#boule').width('100' + '%');
		  $('#boule').animate({ opacity: 0 }, 30);

		  if (bloquage <= 1) {
		  $('#boule').width('28%');
			$('#boule').css('top', 90.2 + '%');
			$('#boule').css('left', 54.5 + '%');
			$('#boule').css('zIndex', -1);
			$('#boule').attr('src','../../images/boule.png');
			$('#boule').animate({ opacity: 1 }, 0);
			}
	  }

	  if (borderRightMatch) {
			if (bloquage ==2) {
				$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
				$('#popup2').animate({opacity: 1},200);
			}
		  $('#boule').stop()
		  $('#boule').attr('src','../../images/explosion.png');
		  $('#boule').width('100' + '%');
		  $('#boule').animate({ opacity: 0 }, 30);

		  if (bloquage <= 1) {
		  $('#boule').width('28%');
			$('#boule').css('top', 90.2 + '%');
			$('#boule').css('left', 54.5 + '%');
			$('#boule').css('zIndex', -1);
			$('#boule').attr('src','../../images/boule.png');
			$('#boule').animate({ opacity: 1 }, 0);
			}
	  }

	  if (murpierreMatch1) {
			if (bloquage ==2) {
				$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
				$('#popup2').animate({opacity: 1},200);
			}
		  $('#boule').stop()
		  $('#boule').attr('src','../../images/explosion.png');
		  $('#boule').width('100' + '%');
		  $('#boule').animate({ opacity: 0 }, 30);

		  if (bloquage <= 1) {
		  $('#boule').width('28%');
			$('#boule').css('top', 90.2 + '%');
			$('#boule').css('left', 54.5 + '%');
			$('#boule').css('zIndex', -1);
			$('#boule').attr('src','../../images/boule.png');
			$('#boule').animate({ opacity: 1 }, 0);
			}
	  }

	  if (murpierreMatch2) {
			if (bloquage ==2) {
				$('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
				$('#popup2').animate({opacity: 1},200);
			}
		  $('#boule').stop()
		  $('#boule').attr('src','../../images/explosion.png');
		  $('#boule').width('100' + '%');
		  $('#boule').animate({ opacity: 0 }, 30);

		  if (bloquage <= 1) {
		  $('#boule').width('28%');
			$('#boule').css('top', 90.2 + '%');
			$('#boule').css('left', 54.5 + '%');
			$('#boule').css('zIndex', -1);
			$('#boule').attr('src','../../images/boule.png');
			$('#boule').animate({ opacity: 1 }, 0);
			}
	  }

	 if (murpierreMatch3) {
		 if (bloquage ==2) {
			 $('#popup2').animate({top: 30 + '%', left: 36 + '%'},0);
			 $('#popup2').animate({opacity: 1},200);
		 }
		  $('#boule').stop()
		  $('#boule').attr('src','../../images/explosion.png');
		  $('#boule').width('100' + '%');
		  $('#boule').animate({ opacity: 0 }, 30);

		  if (bloquage <= 1) {
		  $('#boule').width('28%');
			$('#boule').css('top', 90.2 + '%');
			$('#boule').css('left', 54.5 + '%');
			$('#boule').css('zIndex', -1);
			$('#boule').attr('src','../../images/boule.png');
			$('#boule').animate({ opacity: 1 }, 0);
			}
	  }



	}

	});
