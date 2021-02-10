const saldo = ( saldo1, saldo2,saldo3,  callback) => {
  return callback  (saldo1,saldo2,saldo3)
}
const kalikk  = (a,b,c)=>{
  return a*b+c
} 
 s1= saldo (2, 300000, 60, kalikk)
console.log (s1) 
