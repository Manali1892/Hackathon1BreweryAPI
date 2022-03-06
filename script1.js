//Function to display name and type of brewery
async function search(name, type)
{
    try{
    let cc=document.getElementById("main").value;
    //console.log(cc);
    let res=await fetch(`https://api.openbrewerydb.org/breweries?by_city=${cc}`);
    let res1=await res.json();
    console.log(res1[0].name,res1[0].brewery_type);
    }
   catch(error){
        console.log("error");
    }
}   
//function to display address of brewery
async function search(address)
{
    try{
    let cc=document.getElementById("main").value;
    //console.log(cc);
    let res=await fetch(`https://api.openbrewerydb.org/breweries?by_city=${cc}`);
    let res1=await res.json();
    console.log("address_2",res1[0].address_2);
    console.log("address_3",res1[0].address_3);
    }
   catch(error){
        console.log("error");
    }
}  
//function to display website url.
async function search(url)
{
    try{
    let cc=document.getElementById("main").value;
    //console.log(cc);
    let res=await fetch(`https://api.openbrewerydb.org/breweries?by_city=${cc}`);
    let res1=await res.json();
    console.log("Website_Url",res1[0].website_url);
    }
   catch(error){
        console.log("error");
    }
}   
//Fuction to display phone no. of the brewery of particular city
async function search(phone)
{
    try{
    let cc=document.getElementById("main").value;
    //console.log(cc);
    let res=await fetch(`https://api.openbrewerydb.org/breweries?by_city=${cc}`);
    let res1=await res.json();
    console.log("Phone_no",res1[0].phone);
    }
   catch(error){
        console.log("error");
    }
}
