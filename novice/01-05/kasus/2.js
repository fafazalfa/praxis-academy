var animal= function ( ){};
animal.prototype.eat = function(){
      console.log (" meraka bertahan hidup dengan makan");
}

var hewan = function (){};
hewan.prototype = new animal ();
hewan.prototype.givelandak = function(){
  console.log(" dia memeberikan landak sebuah makanana");
};



var gajah = new hewan ();
gajah.eat();
gajah.givelandak();

console.log ( gajah instanceof hewan);
console.log ( gajah instanceof animal);
