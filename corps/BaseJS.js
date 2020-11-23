$(document).ready(function() {

	var angle = 0;				//angle du canon
	var bloquage =0;			//bloque le canon après x boulet tiré
	var tourne = 0;				//détermine si les flèches directionnelles ont été pressées
	$("body").css("overflow", "hidden");

	document.addEventListener('keydown', doKeyDown, true);

	function doKeyDown(e) {

		if (e.keyCode == 39 && bloquage == 0) {					//si on appuie sur la flèche de droite
			$('#boule').width('28%');
			$('#boule').css('top', 87 + '%');
			$('#boule').css('left', 54.5 + '%');					//modification des propriétés css afin de ré-adapter le canon une fois la div comportant le canon et la boule tournée
			$('#boule').css('zIndex', -1);
			angle+=5;																				//l'angle augmente de 5° à chaque appui sur la flèche
			$("#canonboule").rotate({
				angle: angle,																	//le canon est tourné de 5° à chaque appui sur la flèche
				center: ["bottom center"]
			});
		}


		if (e.keyCode == 37 && bloquage == 0) {					//même chose avec la flèche de gauche
			var tourne = 1;
			$('#boule').width('28%');
			$('#boule').css('top', 87 + '%');
			$('#boule').css('left', 54.5 + '%');
			$('#boule').css('zIndex', -1);
			angle-=5;
			$("#canonboule").rotate({
				angle: angle,
				center: ["bottom center"]
			});
		}


		if (e.keyCode == 32 && bloquage == 0) {											//quand la barre espace est pressée
			var Repet=setInterval(checkCollisions, 0.0001)						//On vérifie les collisions très rapidement pendant le déplacement du boulet
			var boum = $("#boum")[0];
			boum.play();
			$("#boule").animate({top: 0}, 'easeOutExpo', function(){clearInterval(Repet)});			//animation du boulet et arrêt de la détection des collisions
			explosion = $('#explosion').attr('src','../images/explosion.png');
			$('#explosion').css('opacity',1);
			$("#canon").animate({top: 955}, 30, 'easeOutExpo');				//effet de recul du canon
			$("#canon").animate({top: 944}, 400, 'easeOutExpo');
			$('#explosion').fadeTo(1000, 0);
			bloquage = 1;														//une fois la barre espace pressée, bloquage vaut 1 et le canon ne peut plus être activé
		}
	}

	function getPositions(elt) {			//on récupère la position d'un élement
	  var elt = $(elt);
	  var pos = elt.position();				//.position grâce à jquery ui
	  var width = elt.width();
	  var height = elt.height();
	  return [ [ pos.left, pos.left + width ]	/*pos[0]*/, [ pos.top, pos.top + height ] /*pos[1]*/ ];  //la fonction renvoie la largeur et la hauteur d'un élement
	}

	function comparePositions(p1, p2) {											//on compare la position de deux éléments

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



		if (x1[1] > x2[0] || x1[0] === x2[0]) {			//si il y a collision
			return true;														//booléen qui affecte à la fonction soit vrai ou faux
		}
			else {
				return false;
			}
	}

	function checkCollisions(){
	  var coffre = document.getElementById("coffre");
	  var pos1 = getPositions(coffre); 															//on récupère tous les élements dont on veut comparer les collisions
	  var pos2 = getPositions($("#boule"));
	  var pos3 = getPositions($("#bordureL"));
	  var pos4 = getPositions($("#bordureR"));
	  var pos5 = getPositions($("#bordureT"));
	  var pos6 = getPositions($("#bordureB"));


	  var horizontalMatch = comparePositions(pos1[0], pos2[0]);									// compare largeur du coffre/boule avec [0]
	  var verticalMatch = comparePositions(pos1[1], pos2[1]); 	  							// compare hauteur coffre/boule avec [1]

	  var borderLeftMatchX = comparePositions(pos2[0], pos3[0]);
	  var borderLeftMatchY = comparePositions(pos2[1], pos3[1]);

	  var borderRightMatchX = comparePositions(pos2[0], pos4[0]);
	  var borderRightMatchY = comparePositions(pos2[1], pos4[1]);

	  var borderTopMatchX = comparePositions(pos2[0], pos5[0]);
	  var borderTopMatchY = comparePositions(pos2[1], pos5[1]);

	  var borderBottomMatchX = comparePositions(pos2[0], pos6[0]);
	  var borderBottomMatchY = comparePositions(pos2[1], pos6[1]);

	  var match = horizontalMatch && verticalMatch;							// si comparePositions renvoie vrai pour la largeur et la hauteur, la fonction match est vérifiée

	  var borderLeftMatch = borderLeftMatchX && borderLeftMatchY;
	  var borderRightMatch = borderRightMatchX && borderRightMatchY;
	  var borderTopMatch = borderTopMatchX && borderTopMatchY;
	  var borderBottomMatch = borderBottomMatchX && borderBottomMatchY;


	 if (match) {
		 coffre = $('#coffre').attr('src','../images/coffre-ouvert.png'); 			// quand match est vérifié, on modifie les attributs du coffre
		 $('#boule').stop(true, true);
		 $('#boule').css('opacity', '0');
	}

	  if (borderTopMatch) {
		$('#boule').fadeTo(100, 0);
	  }

	  if (borderBottomMatch) {
		  $('#boule').fadeTo(100, 0);
	  }

	  if (borderLeftMatch) {
		  $('#boule').fadeTo(100, 0);
	  }

	  if (borderRightMatch) {
		  $('#boule').fadeTo(100, 0);
	  }

	}

	});
