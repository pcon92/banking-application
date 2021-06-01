import React from 'react';
import {loremIpsum} from "lorem-ipsum";

const SingleMessage = ({id, handleRead, handleFavourite, handleDelete}) => {

    return (
        <>
            <div style={stylesSingleMessage.outerContainer}>
                <div style={stylesSingleMessage.messageContainer}>
                    {loremIpsum()}
                    </div>
                <div style={stylesSingleMessage.buttonsContainer}>
                    <i className="fab fa-readme" onClick={() => handleRead(id)}></i>
                    <i className="fas fa-star" onClick={() => handleFavourite(id)}></i>
                    <i className="fas fa-trash-alt" onClick={() => handleDelete(id)}></i>
                </div>
            </div>
        </>
    )
};

const stylesSingleMessage = {
    outerContainer: {
        display: "flex",
        justifyContent: "space-between",
        height: "100%"
    },
    messageContainer: {
        width: "50%",
        display: "flex",
        alignItems: "center",
        paddingLeft: "5vw",
        overflowY: "auto",
    },
    buttonsContainer: {
        width: "25%",
        height: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
    }
};

export default SingleMessage;
