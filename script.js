async function getCountry(){
let country=document.getElementById("countryInput").value;
let url=`https://restcountries.com/v3.1/name/${country}`;
let response=await fetch(url);
let data=await response.json();
let c=data[0];
let capital=c.capital ? c.capital[0] : "N/A";
let population=c.population;
let flag=c.flags.png;
let region=c.region;
let currency=Object.values(c.currencies)[0].name;
let language=Object.values(c.languages)[0];

document.getElementById("result").innerHTML=
`
<h2>${c.name.common}</h2>
<img src="${flag}">
<p>Capital: ${capital}</p>
<p>Population: ${population}</p>
<p>Region: ${region}</p>
<p>Currency: ${currency}</p>
<p>Language: ${language}</p>
<button onclick="addFav('${c.name.common}')">⭐ Add Favorite</button>
`;
}

function addFav(country){
let li=document.createElement("li");
li.innerText=country;
document.getElementById("favList").appendChild(li);
}

function toggleMode(){
document.body.classList.toggle("light");
}