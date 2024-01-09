import styles from "./Navbar.module.css";

export default function Navbar(props){
    return (
        <div className={styles.nav}>
            <div className={styles.title}>Movie App</div>
            <div className={styles.cartIconContainer}>
                <img className = {styles.cartImage} src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png" alt="icon"/>
                <span className = {styles.cartCount}>{props.cartCount}</span>
            </div>
        </div>
    )
}