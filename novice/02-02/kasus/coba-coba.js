const axios = require ('axios');

async function getUser(){
try { 
  let result=[];
  const response = await axios.get ("https://jsonplaceholder.typicode.com/users");
  const dataUser= await response.data;
    for( let k=0;k<dataUser.length;k++){
      if (dataUser [k].id %2 !=0){
    result=dataUser[k];
  }
  }
console.log(result);
}catch (error) {
  console.eror (error);

}
}
  
getUser();


  
