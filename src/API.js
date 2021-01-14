import {Login} from "./Components/Login.js";

let apiID = "tueojevf";
let apiKey = "sk_test_4yMVGpd0Eozb0g3Dg6j8vIdQsGIzeXMf";
class CHATAPI{

    constructor(){
        this.baseURL = "https://api.talkjs.com/v1/tueojevf/";
    }

    get(){
        fetch(this.baseURL).then(response => console.log(response));
    }

    postNewUser(userid){
        fetch(this.baseURL + userid, {
            method: "POST"
        })
    }
}

