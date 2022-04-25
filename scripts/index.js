// Store the wallet amount to your local storage with key "amount"
let sum=JSON.parse(localStorage.getItem("amount"))

document.getElementById("wallet").append(sum);
function addamount(){
  


  document.getElementById("wallet").innerHTML=null
 
 let amount= document.getElementById("amount").value;
sum=sum + +(amount);
console.log(sum)
document.getElementById("wallet").append(sum);

localStorage.setItem("amount",JSON.stringify(sum))


}
