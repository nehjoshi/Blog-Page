import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from '../styles/blogs.module.css';
import { Link } from 'gatsby';

export default function Blog( props ) {
    console.log(props.image);
    return (
        <div className={styles.blogContainer}>
            <GatsbyImage image={getImage(props.image)} alt="Node-js logo" />
            <span>{props.category}</span>
            <p>{props.date}</p>
            <Link to={`/blog/${props.slug}`}><h1>{props.title}</h1></Link>
            <small>{props.description}</small>
        </div>
    )
}
