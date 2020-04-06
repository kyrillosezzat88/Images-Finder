import React,{useEffect , useState} from 'react';
import axios from 'axios'
import '../Styles/Details.css';
const ImgDetailes = (props) => {
    let imgID = props.match.params.Image_id;
    const Api = '15904505-b2759c091eeb01ad30cae943e';
    const [Image , setImage] = useState([ ]);
    useEffect(()=>{
        axios.get(`https://pixabay.com/api/?key=${Api}&id=${imgID}`)
            .then(res => {
                setImage(res.data.hits[0]);
            })
            .catch(err => console.log(err)); 
    },[]);
    return(
        <div className="details">
            <div className="img"><img src={Image.largeImageURL} alt="img"/></div>
            <div className="info">
                <h1>Uploaded By:{Image.user}</h1>
                <a target='_blank' href={Image.pageURL} download>Go To Download</a>
            </div>
        </div>
    )
}
export default ImgDetailes;