//fonctions

function etape1() { 
    
    document.getElementById('centre').style.display='block' ;
    document.getElementById('myButton').style.display='none' ;
}


function etape2() {
	
let recherche = document.querySelector('input').value;
	recherche = recherche.replace(/\s/g,"+");
	window.location.replace("https://www.google.fr/#q="+recherche);
}

setTimeout(function() {
	alert("Regarde mon site si tu aimes : www.hello.fr") ; } , 10000);



//évenements

myButton.onclick = function() {
	etape1() ;
}

lancerRecherche.onclick = function(){
	etape2();

}