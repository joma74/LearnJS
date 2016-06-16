function log({
    firstName,
    lastName
}){
    console.log(firstName + " " + lastName);
}

log({
    firstName: "Scott",
    lastName: "Tyler"
});

log(); // TypeError: Cannot read property 'firstName' of undefined
