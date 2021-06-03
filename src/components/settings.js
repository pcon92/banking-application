import React from 'react';

// import components
import Navbar from './Navbar';
import colors from '../config/defaultStyles';

const Settings = () => {

    return (
        <>
            <Navbar/>
            <div style={stylesSettings.background}>
                <div style={stylesSettings.settingsBox}>
                    <h4>Font Size:</h4>
                    <h4>Theme:</h4>
                </div>
            </div>
        </>
    )
};

const stylesSettings = {
    background: {
        alignItems: "center",
        backgroundColor: colors.yellow,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
        width: "100vw"
    },
    settingsBox: {
        backgroundColor: colors.lightgreyLowAlpha,
        height: "50vh",
        width: "50vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 10
    },
};

export default Settings;
