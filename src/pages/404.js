import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/globalStyles.module.css'
import bg404 from '../images/bg404.jpg'

export default function NotFound() {
  return (
    <Layout>
      <div className={styles.notFoundWrapper}>
        <img src = {bg404} style={{height: '500px'}} alt="404"/>
      </div>
    </Layout>
  )
}
