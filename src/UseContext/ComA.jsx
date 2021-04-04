import React, { createContext } from 'react'
import ComB from './ComB'

const BioData = createContext();

function ComA() {

    return (
        <>
            <BioData.Provider  value="Hello  I am From Component A">
            <ComB />
            </BioData.Provider>
         
        </>
    )
}

export default ComA;
export {BioData};