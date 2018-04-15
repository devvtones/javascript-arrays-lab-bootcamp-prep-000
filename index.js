const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield" ]

function destructivelyAppendKitten(kittens, thing){
  kittens.push(thing);
  return kittens;
}

function destructivelyAddElementToEndOfArray(kittens, candyString){
  kittens.push(candyString);
  return kittens;
}