import React from 'react';
import {loremIpsum} from "lorem-ipsum";

const SingleMessage = ({id}) => {

    return (
        <>
            <div>Message Number: {id}</div>
            <div>{loremIpsum()}</div>
        </>
    )
};

export default SingleMessage;
