import React from 'react';

// import components
import Navbar from './Navbar';
import colors from '../config/defaultStyles';

import styles from '../styles/settings.module.css';

const Settings = ( {theme, setTheme}) => {

    const onChangeFontSize = (e) => {
        console.log('changed font size', e.target.value)
    };
    
    const onChangeTheme = (e) => {
        console.log('changed theme', e.target.value)
        setTheme(e.target.value)
    };

    return (
        <>
            <Navbar/>
            <div className={`${styles.background} ${styles[theme]}`}>
                <div className={styles.settingsBox}>
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

export default Settings;