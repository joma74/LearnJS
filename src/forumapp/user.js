import API from "./api";


let User = { findRecent };

function findRecent() {
    
    return API.fetch("activeUsers");
}

export default User;
