function myFunction(){
  var passenger =200;
  try{
    alert("Uang jajan mu "+ passenger +"Rupiah");
  }catch (e){
    alert("Eror:"+ e.description);
  }
}