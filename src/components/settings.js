import React from 'react';

// import components
import Navbar from './Navbar';

import themedStyles from '../styles/themes.module.css';
import styles from '../styles/settings.module.css';

const Settings = ( {theme, setTheme}) => {

    const onChangeFontSize = (e) => {
        console.log('changed font size', e.target.value)
    };
    
    const onChangeTheme = (e) => {
        setTheme([`${e.target.value}0`, `${e.target.value}1`, `${e.target.value}2`])
    };

    return (
        <>
            <Navbar/>
            <div className={`${styles.background} ${themedStyles[theme[0]]}`}>
                <div className={`${styles.settingsBox} ${themedStyles[theme[2]]}`}>
                    <div className={styles.fontSizeContainer}
                    onChange={onChangeFontSize}>
                        <h4>Font Size:</h4>
                        <label for="small"> Small </label>
                        <input type="radio" id="small" value="small" name="fontSize" />
                        <label for="medium"> Medium </label>
                        <input type="radio" id="medium" value="medium" name="fontSize" defaultChecked />
                        <label for="large"> Large </label>
                        <input type="radio" id="large" value="large" name="fontSize" />
                    </div>
                    <div className={styles.themeContainer}
                    onChange={onChangeTheme}>
                    <h4>Theme:</h4>
                        <label for="yellow"> Yellow </label>
                        <input type="radio" id="yellow" value="yellow" name="theme" 
                        defaultChecked={theme[0] === 'yellow0' ? true : false} />
                        <label for="blue"> Blue </label>
                        <input type="radio" id="blue" value="blue" name="theme" 
                        defaultChecked={theme[0] === 'blue0' ? true : false}/>
                        <label for="orange"> Orange </label>
                        <input type="radio" id="orange" value="orange" name="theme" 
                        defaultChecked={theme[0] === 'orange0' ? true : false}/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Settings;