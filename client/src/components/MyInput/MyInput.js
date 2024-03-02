import classNames from 'classnames'
import styles from './MyInput.module.css'

export const MyInput = ({isDisabled, type = 'primary', text = 'Text'}) => {
    const className = classNames(styles['input-style'], {[styles['checked']]: type === 'checked', [styles['error']]: type === 'error', [styles['disabled']]: isDisabled})
    return (<>
    <input className={className} disabled={isDisabled}></input>
    </>)

}