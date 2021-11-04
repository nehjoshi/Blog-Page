import React, { } from 'react'
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import * as styles from "../styles/blogPost.module.css";

export default function BlogPost({ data }) {
    console.log(data.markdownRemark.html);
    const { html } = data.markdownRemark;
    const {title, date, category} = data.markdownRemark.frontmatter;
    return (
        <Layout>
            <div className={styles.wrapper}>
                <span className={styles.category}>{category}</span>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.date}>{date}</p>
                <div dangerouslySetInnerHTML={{ __html: html }} className={styles.content} />
            </div>
        </Layout >
    )
}
export const query = graphql`
query blogsQuery ($slug: String) {
    markdownRemark (frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        title
        id
        description
        date
        category
      }
      html
    }
  }
  
`
