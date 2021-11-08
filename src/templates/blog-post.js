import React, { } from 'react'
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import * as styles from "../styles/blogPost.module.css";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function BlogPost({ data }) {
  console.log(data.markdownRemark.html);
  const { html } = data.markdownRemark;
  const { title, date, category } = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <Link to="/blogs">
        <p className={styles.goBack}>Go Back</p></Link>
      <div className={styles.wrapper}>
        <span className={styles.category}>{category}</span>
        <h1 className={styles.title}>{title}</h1>
        <div style={{ width: 'fit-content', display: "block", margin: "0 auto" }}>
          <GatsbyImage image={getImage(data.markdownRemark.frontmatter.thumb)} />
        </div>
        <p className={styles.date}>{date}</p>
        <div dangerouslySetInnerHTML={{ __html: html }} className={styles.content} />
      </div>
    </Layout >
  )
}
export const query = graphql`
query blogsQuery($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    frontmatter {
      title
      id
      description
      date
      category
      thumb {
        childImageSharp {
          gatsbyImageData(width: 400, quality: 100)
        }
      }
    }
    html
  }
}

  
`
