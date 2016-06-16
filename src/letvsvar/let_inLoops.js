function loadProfiles(userNames){

    const MAX_USERS = 3;

    for(let index in userNames){
        const MAX_USERS = 5;
        console.log(userNames[index] + " is on index " + index);
        console.log("inner MAX_USERS: " + MAX_USERS);
    }

    console.log("outer MAX_USERS: "  + MAX_USERS);
}

loadProfiles(["Scott", "Tyler"]);
