import axios from "axios";

function Axios_delete(setSavedUglyPics, setLoading, savedUglyPics, index, _id){
    const savedImage = savedUglyPics.find((savedUglyPic) => savedUglyPic._id === _id) 


    axios.delete(`https://api.vschool.io/jonathanbarnum/thing/${savedImage._id}`)
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