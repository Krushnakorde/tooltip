
import styles from "./tooltip.module.css"

export default function Tooltip() {

    return (
        <div className={styles.hoverElement}>
            <div className={styles.rect}></div>
            <p>Thanks for hovering! I'm a tooltip</p>
        </div>
    )



}  