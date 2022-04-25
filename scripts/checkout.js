// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let walletamt=JSON.parse(localStorage.getItem("amount"))||[];
  console.log(walletamt);

   document.getElementById("wallet").append(walletamt);



function confirmtkt(){


  let name=document.getElementById("user_name").value;
  let seats=document.getElementById("number_of_seats").value;

// arr.push(obj)
// console.log(arr);
let cost=seats*100;
console.log(cost)
if(cost>walletamt){
  alert("Insufficient Balance !")
  window.location.reload();
}
else{
  walletamt=walletamt-cost;
  console.log(cost)
  localStorage.setItem("amount",JSON.stringify(walletamt))
  window.location.reload();
  alert("Booking Successful!")
}
}




  let moviearr=JSON.parse(localStorage.getItem("movie"));
console.log(moviearr)
 

   
    let poster=document.createElement("img")
    poster.src=moviearr.Poster

    let title=document.createElement("p")
    title.innerText=moviearr.Title

document.getElementById("movie").append(poster,title)