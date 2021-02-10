function hitungpiring (age,perday) {
var maxage = 89;
var totalan  = (perday*365) * (maxage - age);
var pesan ='anda membutuhkan '+ totalan +' piring untuk bertahan hidup selama'+ maxage;
console.log (pesan);
}


hitungpiring (23,34)
