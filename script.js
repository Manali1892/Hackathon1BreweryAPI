async function search()
{
    try{
    let cc=document.getElementById("main").value;
    console.log(cc);
    let res=await fetch(`https://api.openbrewerydb.org/breweries?by_city=${cc}`);
    let res1=await res.json();
    console.log("brewery_name:",res1[0].name);
    console.log("brewery_type:",res1[0].brewery_type);
    console.log("Address_2:",res1[0].address_2);
    console.log("Address_3:",res1[0].address_3);
    console.log("Website_Url:",res1[0].website_url);
    console.log("Phone:",res1[0].phone);
    }
    catch(error)
    {
        console.log("Please enter correct city");
    }
}