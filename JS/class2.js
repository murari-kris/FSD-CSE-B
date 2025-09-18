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

 
async function f1() {
  await register();     
  await sendemail();    
  await login();        
  await getDate();      
  await displayData();  
}

f1();


console.log("other application");




