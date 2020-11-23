$(document).ready(function() {

	if (document.cookie.indexOf("lvl2=") >= 0) {
		$('#bateau').animate({left: 28 + '%', top: 8 +'%'}, 3000);
	}

	if (document.cookie.indexOf("lvl3=") >= 0) {
		$('#bateau').animate({left: 51.3 + '%', top: 7 +'%'}, 3000);
	}

	if (document.cookie.indexOf("lvl4=") >= 0) {
		$('#bateau').animate({left: 73.5 + '%', top: 14 +'%'}, 3000);
	}

	if (document.cookie.indexOf("lvl5=") >= 0) {
		$('#bateau').animate({left: 87.5 + '%', top: 40 +'%'}, 3000);
	}
	if (document.cookie.indexOf("lvl6=") >= 0) {
		$('#bateau').animate({left: 71 + '%', top: 55 +'%'}, 3000);
	}
	if (document.cookie.indexOf("lvl7=") >= 0) {
		$('#bateau').animate({left: 51.5 + '%', top: 45 +'%'}, 3000);
	}
	if (document.cookie.indexOf("lvl8=") >= 0) {
		$('#bateau').animate({left: 30 + '%', top: 40 +'%'}, 3000);
	}
	if (document.cookie.indexOf("lvl9=") >= 0) {
		$('#bateau').animate({left: 10.5 + '%', top: 43 +'%'}, 3000);
	}
	if (document.cookie.indexOf("lvl10=") >= 0) {
		$('#bateau').animate({left: 2 + '%', top: 80 +'%'}, 3000);
	}
	if (document.cookie.indexOf("lvl11=") >= 0) {
		$('#bateau').animate({left: 20 + '%', top: 75 +'%'}, 3000);
	}
	if (document.cookie.indexOf("lvl12=") >= 0) {
		$('#bateau').animate({left: 40 + '%', top: 75 +'%'}, 3000);
	}
	if (document.cookie.indexOf("lvlboss=") >= 0) {
		$('#bateau').animate({left: 58 + '%', top: 75 +'%'}, 3000);
	}


	$('#bateau').click(function(){
		if (document.cookie.indexOf("lvl1=") >= 0) {
	      document.location.href="../niveaux/1/basehtml.html";
	    }
		if (document.cookie.indexOf("lvl2=") >= 0) {
				document.location.href="../niveaux/2/basehtml.html";
		  }
		if (document.cookie.indexOf("lvl3=") >= 0) {
			  document.location.href="../niveaux/3/basehtml.html";
			}
		if (document.cookie.indexOf("lvl4=") >= 0) {
		  	document.location.href="../niveaux/4/basehtml.html";
		  }
		if (document.cookie.indexOf("lvl5=") >= 0) {
				document.location.href="../niveaux/5/basehtml.html";
			}
		if (document.cookie.indexOf("lvl6=") >= 0) {
				document.location.href="../niveaux/6/basehtml.html";
			}
		if (document.cookie.indexOf("lvl7=") >= 0) {
				document.location.href="../niveaux/7/basehtml.html";
			}
		if (document.cookie.indexOf("lvl8=") >= 0) {
		    document.location.href="../niveaux/8/basehtml.html";
		  }
		if (document.cookie.indexOf("lvl9=") >= 0) {
				document.location.href="../niveaux/9/basehtml.html";
		  }
		if (document.cookie.indexOf("lvl10=") >= 0) {
			  document.location.href="../niveaux/10/basehtml.html";
			}
		if (document.cookie.indexOf("lvl11=") >= 0) {
		  	document.location.href="../niveaux/11/basehtml.html";
		  }
		if (document.cookie.indexOf("lvl12=") >= 0) {
				document.location.href="../niveaux/12/basehtml.html";
			}
		if (document.cookie.indexOf("lvlboss=") >= 0) {
				document.location.href="../niveaux/boss/basehtml.html";
			}
});






	});
