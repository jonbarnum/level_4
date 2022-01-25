import axios from "axios";

function Axios_post(inputData, setLoading, setSavedUglyPics, setInputData){
    const newInputData = {
        title: '',
        imgUrl: '',
        description: '',
        editState: {
            title: '',
            description: ''
        }
    };
    const newUglyPic = inputData;

    axios.post('https://api.vschool.io/jonathanbarnum/thing', newUglyPic)
    .then(response => {
        setInputData((prevState) => ({
                ...prevState,
                title: '',
                imgUrl: '',
                description: '',
                newInputData
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