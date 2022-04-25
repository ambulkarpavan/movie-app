// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page




let walletamt=JSON.parse(localStorage.getItem("amount"))||[];
console.log(walletamt);

 document.getElementById("wallet").append(walletamt);


 //https://www.omdbapi.com/?s=tt3896198&apikey=4cf4e8f7



 let id;
async function searchmovies(){

try{
const query=document.getElementById("search").value;

const res= await fetch(`https://www.omdbapi.com/?s=${query}&apikey=4cf4e8f7`)

let data= await res.json();
console.log(data);

const movies=data.Search;
return movies;
console.log(movies);
//appenddata(movies)

}
catch(err){
console.log(err)
}
}

function appenddata(movies){

document.getElementById("movies").innerHTML=null;

movies.forEach(function(ele){

  let div=document.createElement("div")
 
  let poster=document.createElement("img")
  poster.src=ele.Poster

  let title=document.createElement("p")
  title.innerText=ele.Title
  
  let button=document.createElement("button")
  button.innerText="Book Now";
  button.style.class="book_now”"
  button.addEventListener("click",function(){
    bookmovie(ele);
  })

  div.append(poster,title,button)

  document.getElementById("movies").append(div)
})

}
async function main(){
let data=await searchmovies();

if(data==undefined){
  return false;
}
appenddata(data)

}

function debounce(fun,delay){
if(id){
clearTimeout(id);
}

id= setTimeout(function(){
  fun()
},delay)
}


function bookmovie(ele){

let book=ele
console.log(book);
localStorage.setItem("movie",JSON.stringify(book));
window.location.href="checkout.html"
}
