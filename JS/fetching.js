const url = "https://api.github.com/users/murari-kris"; 
const res = fetch(url);

res.then((resp) => {
    return resp.json(); 
})
.then((data) => {
    console.log("Data:", data); 
})
.catch((err) => {
    console.log("Error:", err);
})
.finally(() => {
    console.log("Fetch done successfully");
});
