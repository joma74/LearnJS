var loadProfiles = function (userNames){

    const MAX_USERS = 3;

    let result = "";

    for(let index in userNames){
        const MAX_USERS = 5;
        result = result + userNames[index] + " ";
    }

    return result.trim();
}

module.exports = {
    loadProfiles: loadProfiles
}