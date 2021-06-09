import React from 'react';

// import components
import Navbar from './Navbar';

import themedStyles from '../styles/themes.module.css';
import styles from '../styles/settings.module.css';

const Settings = ( {fontSize, setFontSize, theme, setTheme, unreadMessages}) => {

    const changeFontSize = (val) => {
        setFontSize([`${val*0.8}rem`, `${val}rem`, `${val*1.2}rem`,`${val*1.8}rem`])
    };
    
    const changeTheme = (val) => {
        setTheme([`${val}0`, `${val}1`, `${val}2`, `${val}3`])
    };

    // font sizes used in this component
    const fontSizeMed = {fontSize: `${fontSize[1]}`};
    const fontSizeLge = {fontSize: `${fontSize[2]}`};
    
    return (
        <>
            <Navbar
            theme={theme}
            fontSize={fontSize}
            unreadMessages={unreadMessages}/>
            <div className={`${styles.background} ${themedStyles[theme[0]]} ${themedStyles[theme[3]]}`}>
                <div className={`${styles.settingsBox} ${themedStyles[theme[2]]}`}>
                    <div className={styles.fontSizeContainer}>
                        <div className={styles.optionBoxTitle}>
                            <h4 style={fontSizeLge}>Font Size:</h4>
                        </div>
                        <div className={styles.optionBox}>
                            <button type="button" onClick={() => changeFontSize(0.8)}
                                className={styles.optionButton}
                                style={fontSize[1] === '0.8rem' 
                                ? {opacity: 1, textDecoration: "underline", fontSize: `${fontSizeMed.fontSize}`} 
                                : {opacity: 0.7, fontSize: `${fontSizeMed.fontSize}`}}>Small</button>
                        </div>
                        <div className={styles.optionBox}>
                            <button type="button" onClick={() => changeFontSize(1)}
                                className={styles.optionButton}
                                style={fontSize[1] === '1rem' 
                                ? {opacity: 1, textDecoration: "underline", fontSize: `${fontSizeMed.fontSize}`} 
                                : {opacity: 0.7, fontSize: `${fontSizeMed.fontSize}`}}>Medium</button>
                        </div>
                        <div className={styles.optionBox}>
                            <button type="button" onClick={() => changeFontSize(1.2)}
                                className={styles.optionButton}
                                style={fontSize[1] === '1.2rem' 
                                ? {opacity: 1, textDecoration: "underline", fontSize: `${fontSizeMed.fontSize}`} 
                                : {opacity: 0.7,  fontSize: `${fontSizeMed.fontSize}`}}>Large</button>
                        </div>
                    </div>
                    <div className={styles.themeContainer}
                    >
                        <div className={styles.optionBoxTitle}>
                            <h4 style={fontSizeLge}>Theme:</h4>
                        </div>
                        <div className={styles.optionBox}>
                            <button type="button" onClick={() => changeTheme('yellow')}
                                className={styles.optionButton}
                                style={theme[0] === 'yellow0' 
                                ? {opacity: 1, textDecoration: "underline", fontSize: `${fontSizeMed.fontSize}`} 
                                : {opacity: 0.7, fontSize: `${fontSizeMed.fontSize}`}}>Yellow</button>
                        </div>
                        <div className={styles.optionBox}>
                            <button type="button" onClick={() => changeTheme('blue')}
                                className={styles.optionButton}
                                style={theme[0] === 'blue0' 
                                ? {opacity: 1, textDecoration: "underline", fontSize: `${fontSizeMed.fontSize}`} 
                                : {opacity: 0.7, fontSize: `${fontSizeMed.fontSize}`}}>Blue</button>
                        </div>
                        <div className={styles.optionBox}>
                            <button type="button" onClick={() => changeTheme('orange')}
                                className={styles.optionButton}
                                style={theme[0] === 'orange0' 
                                ? {opacity: 1, textDecoration: "underline", fontSize: `${fontSizeMed.fontSize}`} 
                                : {opacity: 0.7, fontSize: `${fontSizeMed.fontSize}`}}>Orange</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Settings;