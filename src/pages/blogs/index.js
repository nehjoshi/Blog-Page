import { graphql } from 'gatsby';
import React from 'react'
import BlogCard from '../../components/BlogCard';
import Layout from '../../components/Layout';
import * as styles from '../../styles/blogs.module.css';

export default function BlogIndex({ data }) {

    const [active, setActive] = React.useState(0);
    const blogData = data.allMarkdownRemark.nodes;
    const activeItem = {
        backgroundColor: '#96d6ff',
        borderBottom: '1px solid #e5e5e5',
        fontWeight: 'bold',
    }

    return (
        <Layout>
            <div className={styles.container}>
                <section className={styles.upperNav}>
                    <div className={styles.navHeading}>
                        Browse by Category
                    </div>
                    <div className={styles.navItem} style={active === 1 ? activeItem : null} onClick={() => setActive(1)}>
                        Web Dev
                    </div>
                    <div className={styles.navItem} style={active === 2 ? activeItem : null} onClick={() => setActive(2)}>
                        Technical
                    </div>
                    <div className={styles.navItem} style={active === 3 ? activeItem : null} onClick={() => setActive(3)}>
                        Life
                    </div>
                    <div className={styles.navItem} style={active === 4 ? activeItem : null} onClick={() => setActive(4)}>
                        My Journey
                    </div>
                </section>
                <section className={styles.blogWrapper}>

                    {blogData.map(blog => 
                        <BlogCard title={blog.frontmatter.title} date={blog.frontmatter.date} category={blog.frontmatter.category} description={blog.frontmatter.description} id={blog.frontmatter.id} slug={blog.frontmatter.slug} />
                    )}

                    {/* <BlogCard title={"A guide to React"} date={"22nd March, 2021"} category={"Web Dev"} description={"An ultimate guide to learning the basics of react and react hooks"} />
                    <BlogCard title={"A guide to React"} date={"22nd March, 2021"} category={"Web Dev"} description={"An ultimate guide to learning the basics of react and react hooks"} />
                    <BlogCard title={"A guide to React"} date={"22nd March, 2021"} category={"Web Dev"} description={"An ultimate guide to learning the basics of react and react hooks"} />
                    <BlogCard title={"A guide to React"} date={"22nd March, 2021"} category={"Web Dev"} description={"An ultimate guide to learning the basics of react and react hooks"} />
                    <BlogCard title={"A guide to React"} date={"22nd March, 2021"} category={"Web Dev"} description={"An ultimate guide to learning the basics of react and react hooks"} />
                    <BlogCard title={"A guide to React"} date={"22nd March, 2021"} category={"Web Dev"} description={"An ultimate guide to learning the basics of react and react hooks"} /> */}
                </section>
            </div>
        </Layout>
    )
}
export const query = graphql`
query MyQuery {
    allMarkdownRemark(sort: {fields: frontmatter___id, order: ASC}) {
      nodes {
        frontmatter {
          category
          date
          description
          id
          title
          slug
        }
        html
      }
    }
  }
  
  
`