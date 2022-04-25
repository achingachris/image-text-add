import styles from '../styles/Overlay.module.css'

function Overlay ({display, imgUrl, adText}) {
    return (
        display &&
        <div  className={styles.overlay}>
            <img className={styles.overlayImg} src={imgUrl}></img>
            <p className={styles.overlayText}>{adText}</p>
        </div>
    )
}

export default Overlay;