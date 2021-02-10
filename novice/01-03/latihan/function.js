function makan ( nasi, air){
  return `saya makan ${nasi} dan saya minum ${air}`
  //retrun saya makan ${nasi} dan saya minum ${air}
}

makan ('nasi uduk' , 'es teh') 

function dewasa (age,nasi,air){
  console.log (typeof(age))
  if (typeof (age) == `number`){
if (age >=  20) {
  m1 = makan (nasi,air)
   //console.log ('waaahh udah gede')
  return `umur saya ${age} dan aku udah gede dan saya sekarang ${m1}`
}else{
}
else {
  console.log (' bayekk')
  return`aku mase bayeek ${age} tahun`
}
}



function jumlah (a,b){
  return a+b 
}

hasil = jumlah (8,5)
console.log (hasil + 12)

coi = dewasa(19,'jagung','es jeruk')
console.log(coi)



// function baru 
const nama = () => {
  console.log('zalfa')
}
 nama ()