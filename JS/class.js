function register(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("register.end");
        resolve();
    }, 2000);
    

  })
    

}

function sendemail(cb){
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("email.end");
        resolve();
    }, 2000);
    

  })

}

function login(cb){
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("login.end");
        resolve();
    }, 2000);
    

  })

}

function getDate(cb){
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("getDATA.end");
        resolve();
    }, 2000);
    

  })

}

function displayData(){
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("display data");
        resolve();
    }, 2000);
    

  })
}

register()
.then(sendemail)
.then(login)
.then(getDate)
.then(displayData);
console.log("other application");



