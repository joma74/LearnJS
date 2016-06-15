function loadProfiles(userName){
    if(userName.length > 3){
        let loadingMessage = "This might take a while";
        console.log(flashMessage);
    }else{
        let flashMessage = "Loading profiles";
    }
    console.log(loadingMessage);
    console.log(flashMessage); 
}

loadProfiles(["Scott", "Tyler"]);
