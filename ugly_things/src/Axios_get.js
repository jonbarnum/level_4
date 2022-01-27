import axios from "axios";

//put async in front of function when using await 
function Axios_get(setSavedUglyPics){

    axios.get('https://api.vschool.io/jonathanbarnum/thing').then((response) => {
        setSavedUglyPics(response.data)
    })
    .catch((error) => console.log(error))
}

export default Axios_get
