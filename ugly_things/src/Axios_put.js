import axios from "axios";

function Axios_put(savedUglyPics, setSavedUglyPics, setLoading, _id, index){
    const savedImage = savedUglyPics.find((savedUglyPic) => savedUglyPic._id === _id) 
        savedImage.title = savedImage.editState.title 
        savedImage.description = savedImage.editState.description

    axios.put(`https://api.vschool.io/jonathanbarnum/thing/${savedImage._id}`, savedImage)
        .then(response => {
            setSavedUglyPics((prevState) => ([
                ...prevState.slice(0, index), 
                savedImage,
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

export default Axios_put