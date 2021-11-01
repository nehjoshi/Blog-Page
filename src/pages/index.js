import React from 'react'
import Layout from '../components/Layout';
import * as styles from '../styles/landing.module.css';
export default function App() {
  return (
    <Layout>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <h1>Neh's Blogs</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </div>
      </div>
    </Layout>
  )
}
