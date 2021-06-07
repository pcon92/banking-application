import React from 'react';

// import components
import Navbar from './Navbar';

import themedStyles from '../styles/themes.module.css';
import styles from '../styles/settings.module.css';

const Settings = ( {fontSize, setFontSize, theme, setTheme}) => {

    const onChangeFontSize = (e) => {
        setFontSize([`${e.target.value*0.8}rem`, 
            `${e.target.value}rem`, 
            `${e.target.value*1.2}rem`,
            `${e.target.value*1.8}rem`])
    };
    
    const onChangeTheme = (e) => {
        setTheme([`${e.target.value}0`, `${e.target.value}1`, `${e.target.value}2`])
    };

    // font sizes used in this component
    const fontSizeMed = {fontSize: `${fontSize[1]}`};
    const fontSizeLge = {fontSize: `${fontSize[2]}`};
    
    return (
        <>
            <Navbar
            theme={theme}
            fontSize={fontSize}/>
            <div className={`${styles.background} ${themedStyles[theme[0]]}`}>
                <div className={`${styles.settingsBox} ${themedStyles[theme[2]]}`}>
                    <div className={styles.fontSizeContainer}
                    onChange={onChangeFontSize}>
                        <h4 style={fontSizeLge}>Font Size:</h4>
                        <label for="small" style={fontSizeMed}> Small </label>
                        <input type="radio" id="small" value="0.8" name="fontSize" 
                        defaultChecked={fontSize[1] === '0.8rem' ? true : false} />
                        <label for="medium" style={fontSizeMed}> Medium </label>
                        <input type="radio" id="medium" value="1" name="fontSize" 
                        defaultChecked={fontSize[1] === '1rem' ? true : false} />
                        <label for="large" style={fontSizeMed}> Large </label>
                        <input type="radio" id="large" value="1.2" name="fontSize"
                        defaultChecked={fontSize[1] === '1.2rem' ? true : false} />
                    </div>
                    <div className={styles.themeContainer}
                    onChange={onChangeTheme}>
                        <h4 style={fontSizeLge}>Theme:</h4>
                        <label for="yellow" style={fontSizeMed}> Yellow </label>
                        <input type="radio" id="yellow" value="yellow" name="theme" 
                        defaultChecked={theme[0] === 'yellow0' ? true : false} />
                        <label for="blue" style={fontSizeMed}> Blue </label>
                        <input type="radio" id="blue" value="blue" name="theme" 
                        defaultChecked={theme[0] === 'blue0' ? true : false}/>
                        <label for="orange" style={fontSizeMed}> Orange </label>
                        <input type="radio" id="orange" value="orange" name="theme" 
                        defaultChecked={theme[0] === 'orange0' ? true : false}/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Settings;