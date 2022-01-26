import axios from "axios";

function Axios_put(savedUglyPics, setSavedUglyPics, index, id, setLoading){
    const savedImage = savedUglyPics.find((savedUglyPic) => savedUglyPic._id === id) //how to get the id from api
        savedImage.title = savedImage.editState.title //editState undefined
        savedImage.description = savedImage.editState.description

    axios.get('https://api.vschool.io/jonathanbarnum/thing/_id', savedImage)
        .then(response => {
            setSavedUglyPics((prevState) => ([
                ...prevState.slice(0, index), // index or id from api
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