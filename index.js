
var nombreJugador;

$("#facil, #intermedio, #dificil").on("click", function(){
  nombreJugador = $("#inputNombre").val()
  console.log(nombreJugador)
  if (nombreJugador !=""){
    $("#login").hide();
    $("#container").show();
    console.log("campo lleno")
    } else{
      $("#error").show();
      console.log("campo vacio")
    }
    $("#nombre").append(nombreJugador)

});
var nivelFacil;
var intentosFacil;

$("#facil").on("click", function() {
  nivelFacil = $("#facil").val()
  intentosFacil = 18
  $(".nivel").append(nivelFacil)
  $("#nivelIntentos").append(intentosFacil)
});

var nivelMedio;
var intentosMedio;

$("#intermedio").on("click", function() {
  nivelMedio = $("#intermedio").val()
  intentosMedio = 12
  $(".nivel").append(nivelMedio)
  $("#nivelIntentos").append(intentosMedio)
});

var nivelDificil;
var intentosDificil;

$("#dificil").on("click", function() {
  nivelDificil = $("#dificil").val()
  intentosDificil = 9
  $(".nivel").append(nivelDificil)
  $("#nivelIntentos").append(intentosDificil)
});
//const niveles = {
 // nivelFacil: intentosFacil,
 // nivelMedio: intentosMedio,
 // nivelDificil: intentosDificil
//}
const niveles = {
  this: nivelFacil,
  this: nivelMedio,
  this: nivelDificil
}
const intentos = {
  this: intentosFacil,
  this: intentosMedio,
  this: intentosDificil
}
var jugadores = [];

var jugador = [
 nombre = nombreJugador,
 nivel = niveles,
 cantidadIntentos = intentos
]

function pushJugador() {
jugadores.push(jugador);
}
pushJugador();


const imagenes = [
  {src: "imagenes/epelante.jpg", id:"1"},
  {src: "imagenes/alce.jpg", id:"2"},
  {src: "imagenes/nena.jpg", id:"3"},
  {src: "imagenes/peces.jpg", id:"4"},
  {src: "imagenes/unichancho.jpg", id:"5"},
  {src: "imagenes/zapas.jpg", id:"6"},
  {src: "imagenes/epelante.jpg", id:"1"},
  {src: "imagenes/alce.jpg", id:"2"},
  {src: "imagenes/nena.jpg", id:"3"},
  {src: "imagenes/peces.jpg", id:"4"},
  {src: "imagenes/unichancho.jpg", id:"5"},
  {src: "imagenes/zapas.jpg", id:"6"},
  ];
  
 










//function tablero(){
//  $("#game").append("<div class='card'></div>")
// var imgtapada = $(".card").show(imageInitial)
 // if  (imgtapada.on("click")) {
 //   return imgback
 // }
  
  //$(".card").append("<div class='card2'></div>")
 // var imgback = $(".card2").show(images)
//}

//location.reload()