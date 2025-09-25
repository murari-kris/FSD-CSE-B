const url="https://dummyjson.com/users";
const f1=async()=>{
        try{
        const res=await fetch(url);
        const jsondata=await res.json();
        jsondata.users.forEach((data)=>{
            console.log("Name=",data.firstName);
            console.log("email=",data.email);
            console.log("Name=",data.ip);
            console.log("Name=",data.macAddress);

        })
    }
    catch(err){
        console.error("Error=",error.message);
    }
      }
      f1();