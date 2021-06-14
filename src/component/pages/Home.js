import React,{ useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom'

const Home = () => {

    const [numbers, setNumbers] = useState(4);

    const onChange = (e) => setNumbers(e.target.value);

    return (
        <div className="home-container">
            <form className="form">
                <div className="form-container">
                    <div>
                        <label htmlFor="number">人数</label>
                        <input type="number" name="number" value={numbers} onChange={onChange}/>
                        <span>人</span>
                    </div>
                    <div>
                        <Link 
                            to={`/play/${numbers}`}
                            className="btn btn-dark btn-sm my-1">
                            More
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Home

