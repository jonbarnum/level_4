import axios from "axios";

function Axios_post(inputData, setLoading, setSavedUglyPics, setInputData){
 
    const newUglyPic = inputData;
    delete newUglyPic._id
    return axios.post("https://api.vschool.io/jonathanbarnum/thing", newUglyPic)
    .then(response => {
        setInputData((prevState) => ({
                ...prevState,
                title: '',
                imgUrl: '',
                description: '',
            }));
        setSavedUglyPics((prevState) => ([
            ...prevState,
            newUglyPic
        ]));
        console.log(response.data);
        setLoading(false)
    })
    .catch(error => 
        console.log(error),
        setLoading(false)
        )
}

export default Axios_post