import { useParams } from 'react-router-dom';
import './details.css'
let Details = () => {
    console.log(useParams())
    let id=useParams().id;
    return (
        <div className='my-container m-auto d-flex align-items-center flex-column justify-content-center'>
        <div class="head">
            <img class="imgg" src="../imgPM.jpeg" alt="img" />
            <h1 className='nam'>wafaa muhammad</h1>
            <p className='age'>23 years oldr</p>
            <p className='data'>Frontend developer</p>
            <p className='data'>ITI Graduate</p>

        </div>
    </div>

    )
}
export default Details;