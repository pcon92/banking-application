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
                    <div style={stylesSettings.fontSizeContainer}>
                        <h4>Font Size:</h4>
                        <label for="small"> Small </label>
                        <input type="radio" id="small" value="small" name="fontSize" />
                        <label for="medium"> Medium </label>
                        <input type="radio" id="medium" value="medium" name="fontSize" defaultChecked />
                        <label for="large"> Large </label>
                        <input type="radio" id="large" value="large" name="fontSize" />
                    </div>
                    <div style={stylesSettings.themeContainer}>
                    <h4>Theme:</h4>
                        <label for="yellow"> Yellow </label>
                        <input type="radio" id="yellow" value="yellow" name="theme" defaultChecked />
                        <label for="orange"> Orange </label>
                        <input type="radio" id="orange" value="orange" name="theme" />
                        <label for="blue"> Blue </label>
                        <input type="radio" id="blue" value="blue" name="theme" />
                    </div>
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
        justifyContent: "space-evenly",
        padding: 10
    },
    fontSizeContainer: {
        display: "flex",
        justifyContent: "space-evenly",
        padding: 5,
        border: "1px solid black"
    },
    themeContainer: {
        display: "flex",
        justifyContent: "space-evenly",
        padding: 5,
        border: "1px solid black"
    },
};

export default Settings;
