import { Link } from 'gatsby';
import React from 'react'
import * as styles from '../styles/landing.module.css';
export default function App() {
  return (
    <>
      <nav className={styles.nav}>
        <h2>Neh Joshi</h2>
        <ul className={styles.navLinks}>
          <li>Home</li>
          <li>Portfolio</li>
        </ul>
      </nav>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <h1>Neh's Blogs</h1>
          <p>Fresh blogs by yours truely! Technical, non-technical, philosophical, and hopefully relatable! Come join me in my journey of life.</p>
          <Link to='/blogs'><div className={styles.button}>Start Reading</div></Link>
        </div>
      </div>
    </>
  )
}
