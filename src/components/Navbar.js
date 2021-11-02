import React from 'react'
import { Link } from 'gatsby';
import * as styles from "../styles/globalStyles.module.css";

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <h2>Neh Joshi</h2>
            <ul className={styles.navLinks}>
                <Link to="/"><li>Home</li></Link>
                <li>Portfolio</li>
            </ul>
        </nav>
    )
}
