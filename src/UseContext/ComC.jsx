import React, { useContext } from 'react';
import {BioData} from './ComA';


function ComC() {

    const Name = useContext(BioData);
    return (
        <>
                <h1>{Name}</h1>
        </>
    )
}

export default ComC;
