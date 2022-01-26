import axios from "axios";

function Axios_delete(setSavedUglyPics, setLoading, index){

    axios.delete('https://api.vschool.io/jonathanbarnum/thing/<thingId>')
        .then(response => {
            setSavedUglyPics((prevState) => ([
                ...prevState.slice(0, index),
                ...prevState.slice(index + 1)
            ]));
            console.log(response.data);
            setLoading(false)
        })
        .catch(error => 
            console.log(error),
            setLoading(false)
            )
}

export default Axios_delete