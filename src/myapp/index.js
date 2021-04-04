import React from 'react'
import { useLocation, useHistory } from "react-router-dom";

const Index = () => {
   
    const location = useLocation();
    const history = useHistory();
    console.log(location);
    return (
        <div>
            <h1>Hello i Am {location.pathname.replace("/" , "")} page</h1>

            <button className="btn btn-primary"
            onClick={() => history.push('/index')}>
                Home Page
            </button>
          
        </div>
    )
}

export default Index
