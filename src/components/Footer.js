import { Link } from 'gatsby';
import React from 'react'
import { BsInstagram, BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs';
import * as styles from "../styles/globalStyles.module.css";
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Neh Joshi Blogs | <Link to="/blogs">Back to browse | </Link></p>
            <div className={styles.social}>
                <a href="https://www.instagram.com/neh.joshi.98/" role="button"
                    aria-label="Instagram Link" target="_blank" rel="noopener noreferrer"><BsInstagram className={styles.links} /></a>
                <a href="https://www.facebook.com/neh.joshi.98/" role="button"
                    aria-label="Facebook Link" target="_blank" rel="noopener noreferrer"><BsFacebook className={styles.links} /></a>
                <a href="https://www.linkedin.com/in/nehjoshi/" role="button"
                    aria-label="LinkedIn Link" target="_blank" rel="noopener noreferrer"><BsLinkedin className={styles.links} /></a>
                <a href="https://github.com/nehjoshi" role="button"
                    aria-label="GitHub Link" target="_blank" rel="noopener noreferrer"><BsGithub className={styles.links} /></a>
            </div>
        </footer>
    )
}
