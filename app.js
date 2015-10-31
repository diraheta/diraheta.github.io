// function lanzaAlerta(){
// 	alert("lsfdafsgasahjhasukasjaksa");
// }

// lanzaAlerta();

var comentarioUsuario = document.getElementById("val1").value
var palabraReservada = document.getElementById("val2").value


var resultado = comentarioUsuario.replace(new RegExp("/"+palabraReservada+"/g"));

document.getElementById("resultdo").value = resultado;


function censurar(){
	var comentarioUsuario = document.getElementById("val1").value

	var palabras = ["primo", "hijo", "papa", "enojo"]

	var resultado = comentarioUsuario;

	for(var i=0; i<palabras.length; i++){
		resultado=resultado.replace(new RegExp(palabras[i], "g"), "****");
	}
	document.getElementById("resultado")
}