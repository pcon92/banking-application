import React from 'react';

import colors from '../config/defaultStyles';

const SingleMessage = ({id, handleRead, handleFavourite, handleDelete, read, favourite, message }) => {

    if (read && favourite) {
        return (
            <>
            <div style={stylesSingleMessage.outerContainerReadFavourited}>
                <div style={stylesSingleMessage.messageContainerReadFavourited}>
                    {message}
                </div>
                <div style={stylesSingleMessage.buttonsContainer}>
                    <i style={stylesSingleMessage.readPressed} className="fab fa-readme fa-2x" onClick={() => handleRead(id)}></i>
                    <i style={stylesSingleMessage.favouritePressed} className="fas fa-star fa-2x" onClick={() => handleFavourite(id)}></i>
                    <i className="fas fa-trash-alt fa-2x" onClick={() => handleDelete(id)}></i>
                </div>
            </div>
        </>
        )
    }

    if (read) {
        return (
            <>
            <div style={stylesSingleMessage.outerContainerRead}>
                <div style={stylesSingleMessage.messageContainerRead}>
                    {message}
                </div>
                <div style={stylesSingleMessage.buttonsContainer}>
                    <i style={stylesSingleMessage.readPressed} className="fab fa-readme fa-2x" onClick={() => handleRead(id)}></i>
                    <i className="fas fa-star fa-2x" onClick={() => handleFavourite(id)}></i>
                    <i className="fas fa-trash-alt fa-2x" onClick={() => handleDelete(id)}></i>
                </div>
            </div>
        </>
        )
    }

    if (favourite) {
        return (
            <>
            <div style={stylesSingleMessage.outerContainerFavourited}>
                <div style={stylesSingleMessage.messageContainerFavourited}>
                    {message}
                </div>
                <div style={stylesSingleMessage.buttonsContainer}>
                    <i className="fab fa-readme fa-2x" onClick={() => handleRead(id)}></i>
                    <i style={stylesSingleMessage.favouritePressed} className="fas fa-star fa-2x" onClick={() => handleFavourite(id)}></i>
                    <i className="fas fa-trash-alt fa-2x" onClick={() => handleDelete(id)}></i>
                </div>
            </div>
        </>
        )
    }

    return (
        <>
            <div style={stylesSingleMessage.outerContainer}>
                <div style={stylesSingleMessage.messageContainer}>
                    {message}
                </div>
                <div style={stylesSingleMessage.buttonsContainer}>
                    <i className="fab fa-readme fa-2x" onClick={() => handleRead(id)}></i>
                    <i className="fas fa-star fa-2x" onClick={() => handleFavourite(id)}></i>
                    <i className="fas fa-trash-alt fa-2x" onClick={() => handleDelete(id)}></i>
                </div>
            </div>
        </>
    )
};

const stylesSingleMessage = {
    outerContainer: {
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
        borderLeft:  `4vw solid ${colors.lightYellow}`
    },
    outerContainerRead: {
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
        borderLeft:  `4vw solid ${colors.lightYellow}`
    }, 
    outerContainerFavourited: {
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
        borderLeft: `4vw solid ${colors.favouriteFlag}`
    }, 
    outerContainerReadFavourited: {
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
        borderLeft: `4vw solid ${colors.favouriteFlag}`
    },

    messageContainer: {
        width: "50%",
        display: "flex",
        alignItems: "center",
        paddingLeft: "1vw",
        overflowY: "auto",
        fontWeight: "bold"
    },
    messageContainerRead: {
        width: "50%",
        display: "flex",
        alignItems: "center",
        paddingLeft: "1vw",
        overflowY: "auto",
    },
    messageContainerFavourited: {
        width: "50%",
        display: "flex",
        alignItems: "center",
        paddingLeft: "1vw",
        overflowY: "auto",
        fontWeight: "bold"
    },
    messageContainerReadFavourited: {
        width: "50%",
        display: "flex",
        alignItems: "center",
        paddingLeft: "1vw",
        overflowY: "auto",
    },

    buttonsContainer: {
        width: "35%",
        height: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    readPressed: {
        opacity: "0.7"
    },
    favouritePressed: {
        color: `${colors.favouriteFlag}`
    }
};


export default SingleMessage;


/* 

const SingleMessage = ({id, handleRead, handleFavourite, handleDelete, messages }) => {

    if (messages[id].read && messages[id].favourite) {
        return (
            <>
            <div style={stylesSingleMessage.outerContainerReadFavourited}>
                <div style={stylesSingleMessage.messageContainerReadFavourited}>
                    {messages[id].message}
                </div>
                <div style={stylesSingleMessage.buttonsContainer}>
                    <i style={stylesSingleMessage.readPressed} className="fab fa-readme fa-2x" onClick={() => handleRead(id)}></i>
                    <i style={stylesSingleMessage.favouritePressed} className="fas fa-star fa-2x" onClick={() => handleFavourite(id)}></i>
                    <i className="fas fa-trash-alt fa-2x" onClick={() => handleDelete(id)}></i>
                </div>
            </div>
        </>
        )
    }

    if (messages[id].read) {
        return (
            <>
            <div style={stylesSingleMessage.outerContainerRead}>
                <div style={stylesSingleMessage.messageContainerRead}>
                    {messages[id].message}
                </div>
                <div style={stylesSingleMessage.buttonsContainer}>
                    <i style={stylesSingleMessage.readPressed} className="fab fa-readme fa-2x" onClick={() => handleRead(id)}></i>
                    <i className="fas fa-star fa-2x" onClick={() => handleFavourite(id)}></i>
                    <i className="fas fa-trash-alt fa-2x" onClick={() => handleDelete(id)}></i>
                </div>
            </div>
        </>
        )
    }

    if (messages[id].favourite) {
        return (
            <>
            <div style={stylesSingleMessage.outerContainerFavourited}>
                <div style={stylesSingleMessage.messageContainerFavourited}>
                    {messages[id].message}
                </div>
                <div style={stylesSingleMessage.buttonsContainer}>
                    <i className="fab fa-readme fa-2x" onClick={() => handleRead(id)}></i>
                    <i style={stylesSingleMessage.favouritePressed} className="fas fa-star fa-2x" onClick={() => handleFavourite(id)}></i>
                    <i className="fas fa-trash-alt fa-2x" onClick={() => handleDelete(id)}></i>
                </div>
            </div>
        </>
        )
    }

    return (
        <>
            <div style={stylesSingleMessage.outerContainer}>
                <div style={stylesSingleMessage.messageContainer}>
                    {messages[id].message}
                </div>
                <div style={stylesSingleMessage.buttonsContainer}>
                    <i className="fab fa-readme fa-2x" onClick={() => handleRead(id)}></i>
                    <i className="fas fa-star fa-2x" onClick={() => handleFavourite(id)}></i>
                    <i className="fas fa-trash-alt fa-2x" onClick={() => handleDelete(id)}></i>
                </div>
            </div>
        </>
    )
};

const stylesSingleMessage = {
    outerContainer: {
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
        borderLeft:  `4vw solid ${colors.lightYellow}`
    },
    outerContainerRead: {
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
        borderLeft:  `4vw solid ${colors.lightYellow}`
    }, 
    outerContainerFavourited: {
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
        borderLeft: `4vw solid ${colors.favouriteFlag}`
    }, 
    outerContainerReadFavourited: {
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
        borderLeft: `4vw solid ${colors.favouriteFlag}`
    },

    messageContainer: {
        width: "50%",
        display: "flex",
        alignItems: "center",
        paddingLeft: "1vw",
        overflowY: "auto",
        fontWeight: "bold"
    },
    messageContainerRead: {
        width: "50%",
        display: "flex",
        alignItems: "center",
        paddingLeft: "1vw",
        overflowY: "auto",
    },
    messageContainerFavourited: {
        width: "50%",
        display: "flex",
        alignItems: "center",
        paddingLeft: "1vw",
        overflowY: "auto",
        fontWeight: "bold"
    },
    messageContainerReadFavourited: {
        width: "50%",
        display: "flex",
        alignItems: "center",
        paddingLeft: "1vw",
        overflowY: "auto",
    },

    buttonsContainer: {
        width: "35%",
        height: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    readPressed: {
        opacity: "0.7"
    },
    favouritePressed: {
        color: `${colors.favouriteFlag}`
    }
};


export default SingleMessage;
*/