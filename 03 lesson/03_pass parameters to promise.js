// function that will return a promise:
const checkUserDetails = (userName, userPass) =>{
    return new Promise((resolve, reject)=>{
        let pass = "12345678", user = 'Alex';
        (userName === user && userPass === pass) ? resolve("Logged in") : 
        reject("Error! Please try again");
    })
}

checkUserDetails("Alex","12345678")
    .then(msg => console.log(msg))
    .catch(msg => console.log(msg));
// Logged in