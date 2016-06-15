function loadProfiles(userName){
    if(userName.length > 3){
        var loadingMessage = "This might take a while";
        console.log(flashMessage);
    }else{
        var flashMessage = "Loading profiles";
    }
    console.log(loadingMessage); // yields "undefined"
    console.log(flashMessage); // yields "Loading profiles"
}

loadProfiles(["Scott", "Tyler"]);
