
function register(cb){
    setTimeout(() => {
        console.log("register.end");
        cb();
    }, 2000);

}

function sendemail(cb){
    setTimeout(() => {
        console.log("send email.end");
        cb();
    }, 2000);

}

function login(cb){
    setTimeout(() => {
        console.log("login.end");
        cb();
        
    }, 2000);

}

function getDate(cb){
    setTimeout(() => {
        console.log("date.end");
        cb();
        
    }, 2000);

}

function displayData(){
    setTimeout(()=>{
        console.log("display data");
        
    },2000)
}
//callback Hell
register(()=>{
    sendemail(()=>{
        login(()=>{
            getDate(()=>{
                displayData();

            });
        });
    });

});

console.log("other application");



