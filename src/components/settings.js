import React from 'react';
import { motion } from 'framer-motion';

// import components
import Navbar from './Navbar';

import themedStyles from '../styles/themes.module.css';
import styles from '../styles/settings.module.css';

const Settings = ( {fontSize, setFontSize,
    theme, setTheme,
    animations, setAnimations, 
    unreadMessages}) => {

    // modify sizes of fonts based on device width
    const DEVICE_WIDTH = document.documentElement.clientWidth;

    const changeFontSize = (val) => {
        if (DEVICE_WIDTH < 320) {
            let screenModifier = 0.5;
            setFontSize([`${val*screenModifier-0.8}rem`, `${val*screenModifier}rem`, 
            `${val*screenModifier+0.2}rem`,`${val*screenModifier+0.3}rem`])
        } else if (DEVICE_WIDTH >= 320 && DEVICE_WIDTH < 640) {
            let screenModifier = 0.7;
            setFontSize([`${val*screenModifier-0.2}rem`, `${val*screenModifier}rem`, 
            `${val*screenModifier+0.1}rem`,`${val*screenModifier+0.3}rem`])
        } else {
            let screenModifier = 1.0;
            setFontSize([`${val*screenModifier-0.2}rem`, `${val*screenModifier}rem`, 
            `${val*screenModifier+0.2}rem`,`${val*screenModifier+0.8}rem`])
        }
    };
    
    const changeTheme = (val) => {
        setTheme([`${val}0`, `${val}1`, `${val}2`, `${val}3`])
    };

    const toggleAnimations = (val) => {
        val === 'on' ? setAnimations(true) : setAnimations(false)
    };


    // font sizes used in this component
    const fontSizeMed = {fontSize: `${fontSize[1]}`};
    const fontSizeLge = {fontSize: `${fontSize[2]}`};
    const fontSizeXL = {fontSize: `${fontSize[3]}`};
    
    return (
        <>
            <Navbar
                theme={theme}
                fontSize={fontSize}
                animations={animations ? true : false}
                unreadMessages={unreadMessages}
                currentPage={"settings-page"}/>
            <div className={`${styles.background} ${themedStyles[theme[0]]} ${themedStyles[theme[3]]}`}>
                <div className={`${styles.settingsBox} ${themedStyles[theme[1]]}`}>
                    <div style={fontSizeXL}
                            className={`${styles.heading} ${themedStyles[theme[2]]}`}>Settings</div>
                    <motion.div
                        initial={animations ? {opacity: 0} : {opacity: 1}}
                        animate={{opacity: 1}}
                        transition={{ duration: 0.5}} >
                        <div className={styles.fontSizeContainer}>
                            <div className={styles.optionBoxTitle}>
                                <h4 style={fontSizeLge}>Font Size:</h4>
                            </div>
                            <div className={styles.optionBox}>
                                <button type="button" onClick={() => changeFontSize(0.8)}
                                    className={styles.optionButton}
                                    style={fontSize[1] === '0.8rem' || fontSize[1] === '0.5599999999999999rem' || fontSize[1] === '0.4rem'
                                    ? {opacity: 1, fontWeight: "bold", fontSize: `${fontSizeMed.fontSize}`} 
                                    : {opacity: 0.7, fontSize: `${fontSizeMed.fontSize}`}}>Small</button>
                            </div>
                            <div className={styles.optionBox}>
                                <button type="button" onClick={() => changeFontSize(1)}
                                    className={styles.optionButton}
                                    style={fontSize[1] === '1rem' || fontSize[1] === '0.7rem' || fontSize[1] === '0.5rem' 
                                    ? {opacity: 1, fontWeight: "bold", fontSize: `${fontSizeMed.fontSize}`} 
                                    : {opacity: 0.7, fontSize: `${fontSizeMed.fontSize}`}}>Medium</button>
                            </div>
                            <div className={styles.optionBox}>
                                <button type="button" onClick={() => changeFontSize(1.2)}
                                    className={styles.optionButton}
                                    style={fontSize[1] === '1.2rem' || fontSize[1] === '0.84rem' || fontSize[1] === '0.6rem' 
                                    ? {opacity: 1, fontWeight: "bold", fontSize: `${fontSizeMed.fontSize}`} 
                                    : {opacity: 0.7,  fontSize: `${fontSizeMed.fontSize}`}}>Large</button>
                            </div>
                        </div>
                        <div className={styles.themeContainer}>
                            <div className={styles.optionBoxTitle}>
                                <h4 style={fontSizeLge}>Theme:</h4>
                            </div>
                            <div className={styles.optionBox}>
                                <button type="button" onClick={() => changeTheme('yellow')}
                                    className={styles.optionButton}
                                    style={theme[0] === 'yellow0' 
                                    ? {opacity: 1, fontWeight: "bold", fontSize: `${fontSizeMed.fontSize}`} 
                                    : {opacity: 0.7, fontSize: `${fontSizeMed.fontSize}`}}>Yellow</button>
                            </div>
                            <div className={styles.optionBox}>
                                <button type="button" onClick={() => changeTheme('blue')}
                                    className={styles.optionButton}
                                    style={theme[0] === 'blue0' 
                                    ? {opacity: 1, fontWeight: "bold", fontSize: `${fontSizeMed.fontSize}`} 
                                    : {opacity: 0.7, fontSize: `${fontSizeMed.fontSize}`}}>Blue</button>
                            </div>
                            <div className={styles.optionBox}>
                                <button type="button" onClick={() => changeTheme('orange')}
                                    className={styles.optionButton}
                                    style={theme[0] === 'orange0' 
                                    ? {opacity: 1, fontWeight: "bold", fontSize: `${fontSizeMed.fontSize}`} 
                                    : {opacity: 0.7, fontSize: `${fontSizeMed.fontSize}`}}>Orange</button>
                            </div>
                        </div>
                        <div className={styles.animationsContainer}>
                            <div className={styles.optionBoxTitle}>
                                <h4 style={fontSizeLge}>Animations:</h4>
                            </div>
                            <div className={styles.optionBox}>
                                <button type="button" onClick={() => toggleAnimations('on')}
                                    className={styles.optionButton}
                                    style={animations
                                    ? {opacity: 1, fontWeight: "bold", fontSize: `${fontSizeMed.fontSize}`} 
                                    : {opacity: 0.7, fontSize: `${fontSizeMed.fontSize}`}}>On</button>
                            </div>
                            <div className={styles.optionBox}>
                                <button type="button" onClick={() => toggleAnimations('off')}
                                    className={styles.optionButton}
                                    style={!animations 
                                    ? {opacity: 1, fontWeight: "bold", fontSize: `${fontSizeMed.fontSize}`} 
                                    : {opacity: 0.7, fontSize: `${fontSizeMed.fontSize}`}}>Off</button>
                            </div>
                            <div className={styles.optionBox}></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
};

export default Settings;