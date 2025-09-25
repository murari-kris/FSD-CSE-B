const url="https://dummyjson.com/users";
const pr=fetch(url);
      pr.then((res)=>{
        return res.json();
      })

      .then((data)=>{

        data.users.forEach((da)=>{
            console.log("name=",da.firstName);
        console.log("email=",da.email);
        console.log("ip=",da.ip);
        console.log("Mac Address=",da.macAddress);
       



        })
        
      })

      