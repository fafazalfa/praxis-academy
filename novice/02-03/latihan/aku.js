async function toUppercase(string){
  if (typeof string !== "sting"){
    throw TypeError("Wrong type given, expected in string");
  }
   return string.toUppercase();
}

toUppercase("abc")
.then (result => console.log (result))
.catch(Error => console.error(error.massage))
.finally(() => console.log ("Always runs!"));


toUppercase();