const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield" ]

function destructivelyAppendKitten(kittens, thing){
  kittens.push("thing");
  return kittens;
}