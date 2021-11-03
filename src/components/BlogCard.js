import React from 'react'
import * as styles from '../styles/blogs.module.css';
import bg from '../images/bg404.jpg';

export default function Blog( props ) {
    return (
        <div className={styles.blogContainer}>
            <img src={bg} alt="" />
            <span>{props.category}</span>
            <p>{props.date}</p>
            <h1>{props.title}</h1>
            <small>{props.description}</small>
        </div>
    )
}
