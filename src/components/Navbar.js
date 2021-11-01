import React from 'react'
import * as styles from "../styles/globalStyles.module.css";

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <h2>Neh Joshi</h2>
            <ul className={styles.navLinks}>
                <li>Home</li>
                <li>Portfolio</li>
            </ul>
        </nav>
    )
}
