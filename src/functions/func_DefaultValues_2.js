function log(userName={
    firstName : "Def",
    lastName : "ault"
}){
    console.log(userName);
}

console.log(log);

log({
    firstName: "Scott",
    lastName: "Tyler"
});

log();

log(undefined);

function log2({firstName, lastName} = {}){

    console.log(firstName + " " + lastName);
}

console.log(log2);

log2({
        firstName: "Scott",
        lastName: "Tyler"
    }
);

log2();

log2(undefined);


function log3(...names){

    for(let i in names){

        console.log(names[i]);
    }
}

console.log(log3);

log3("Scott",  "Tyler");

log3();

log3(undefined);

