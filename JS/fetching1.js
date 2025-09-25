const url="https://dummyjson.com/users";
const pr=fetch(url);
      pr.then((res)=>{
        return res.json();
      })

      .then((data)=>{

        data.users.forEach((da)=>{
            console.log("name=",data.users[0].firstName);
        console.log("email=",data.users[0].email);
        console.log("ip=",data.users[0].ip);
        console.log("Mac Address=",data.users[0].macAddress);
       



        })
        
      })