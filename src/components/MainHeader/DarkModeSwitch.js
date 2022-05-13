import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './DarkModeSwitch.module.css'

function DarkModeSwitch({ label }) {
    const contextData = useContext(AuthContext)
    return (
        <div className={classes.container}>
            {label}{" "}
            <div className={classes["toggle-switch"]}>
                <input
                    type="checkbox"
                    className={classes.checkbox}
                    name={label}
                    id={label}
                    checked={contextData.darkMode}
                    readOnly />
                <label
                    className={classes.label}
                    htmlFor={label}
                    onClick={contextData.themeChangeHandler}>
                    <span className={classes.inner} />
                    <span className={classes.switch} />
                </label>
            </div>
        </div>
    );
};

export default DarkModeSwitch;