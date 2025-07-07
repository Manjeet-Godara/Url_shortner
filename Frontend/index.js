const input=document.querySelector("#input")
const button=document.querySelector("#button") 
const output=document.querySelector("#output")
button.addEventListener("click",async ()=>{
    const val=input.value
    try{
        const a= await fetch("http://localhost:8000/shorten",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({url:val})
        })
        const a2=await a.text()
        console.log("successfully sent the request and the id is ",a2)
        output.innerText=`http://localhost:8000/shorten/${a2}`
    }
    catch(err){
        console.log("error occured")
        alert("Did not recieve updated url form the server")
    }
}) 
