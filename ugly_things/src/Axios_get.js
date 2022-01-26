import axios from "axios";

//put async in front of function when using await 
function Axios_get(){

    return axios.get('https://api.vschool.io/jonathanbarnum/thing')
        .catch(error => console.log(error))

    // try {
    //     const response = await axios.get('https://api.vschool.io/jonathanbarnum/thing')
    // } catch (err) {
    //     console.log(err)
    // }
}

export default Axios_get
