//Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

//Stampare i numeri da 1 a 100
for (var i = 1; i <= 100; i++) {
  // Se numero % 3 == 0 && numero % 5 == 0 stampo FizzBuzz
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");;
  }
  // Se numero % 3 == 0 stampo Fizz
  else if (i % 3 == 0){
    console.log("Fizz");;
  }
  // Se numero % 5 == 0 stampo Buzz
  else if (i % 5 == 0){
    console.log("Buzz");
  }
  else {
    console.log(i);
  }
};
