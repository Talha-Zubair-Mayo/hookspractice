import React from 'react'
import { useLocation, useHistory } from "react-router-dom";

const About = () => {
    const location = useLocation();
    const history = useHistory();
    console.log(location);

    return (
        <div>

   <h1>Hello i Am {location.pathname.replace("/" , "")} page</h1>

        {
            location.pathname=== `/about/talha` ? <p>Hello Talha Zubair Mayo</p> :
            <p>Please Loginnnn</p>
        }

        <button className="btn btn-primary"
            onClick={() => history.push('/index')}>
                Go BAck
        </button>
           
        </div>
    )
}

export default About;
