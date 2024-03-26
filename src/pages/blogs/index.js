import { graphql } from 'gatsby';
import React from 'react'
import BlogCard from '../../components/BlogCard';
import Layout from '../../components/Layout';
import * as styles from '../../styles/blogs.module.css';

export default function BlogIndex({ data }) {

    const [active, setActive] = React.useState(0);
    const blogData = data.allMarkdownRemark.nodes;
    const [blogs, setBlogs] = React.useState(blogData);
    const activeItem = {
        backgroundColor: '#96d6ff',
        borderBottom: '1px solid #e5e5e5',
        fontWeight: 'bold',
    }

    const handleFilter = (cat) => {
        switch (parseInt(cat)) {
            case 1:
                setActive(1);
                setBlogs(blogData.filter(blog => blog.frontmatter.category === 'Web dev'));

                break;
            case 2:
                setActive(2);
                setBlogs(blogData.filter(blog => blog.frontmatter.category === 'Technical'));
                break;
            case 3:
                setActive(3);
                setBlogs(blogData.filter(blog => blog.frontmatter.category === 'Life'));
                break;
            case 4:
                setActive(4);
                break;
            case "date":
                let sortedBlogs = blogs;
                for (let i = 0; i < sortedBlogs.length; i++) {
                    for (let j = i; j < sortedBlogs.length; j++) {
                        if (sortedBlogs[i].frontmatter.id < sortedBlogs[j].frontmatter.id) {
                            let temp = sortedBlogs[j];
                            sortedBlogs[j] = sortedBlogs[i];
                            sortedBlogs[i] = temp;
                        }
                    }
                }
                setBlogs(sortedBlogs);
                setBlogs(blogs.filter(blog => blog.frontmatter.category));
                break;
            default:
                setBlogs(blogData);

        }
    }

    return (
        <Layout>
            <div className={styles.container}>
                <section className={styles.upperNav}>
                    <div className={styles.navHeading}>
                        Browse by Category
                    </div>
                    <div className={`${styles.navItem} ${styles.navItemBlock}`} aria-hidden="true" style={active === 1 ? activeItem : null} onClick={() => handleFilter(1)}>
                        Web Dev
                    </div>
                    <div className={`${styles.navItem} ${styles.navItemBlock}`} aria-hidden="true" style={active === 2 ? activeItem : null} onClick={() => handleFilter(2)}>
                        Technical
                    </div>
                    <div className={`${styles.navItem} ${styles.navItemBlock}`} aria-hidden="true" style={active === 3 ? activeItem : null} onClick={() => handleFilter(3)}>
                        Life
                    </div>
                    <div className={`${styles.navItem} ${styles.navItemBlock}`} aria-hidden="true" style={active === 4 ? activeItem : null} onClick={() => handleFilter(4)}>
                        My Journey
                    </div>
                    <select className={`${styles.navItem} ${styles.select}`} onChange={e => handleFilter(e.target.value)}>
                        <option value="" disabled selected>Sort by</option>
                        <option value="date">Date Modified</option>
                        <option value={1} className={styles.responsiveOptions}>Web Dev</option>
                        <option value={2} className={styles.responsiveOptions} >Technical</option>
                        <option value={3} className={styles.responsiveOptions}>Life</option>
                        <option value={4} className={styles.responsiveOptions}>My Journey</option>
                    </select>
                </section>
                <section className={styles.blogWrapper}>

                    {blogs.map(blog =>
                        <BlogCard title={blog.frontmatter.title}
                            date={blog.frontmatter.date}
                            category={blog.frontmatter.category}
                            description={blog.frontmatter.description}
                            id={blog.frontmatter.id}
                            slug={blog.frontmatter.slug}
                            key={blog.frontmatter.id}
                            image={blog.frontmatter.thumb} />
                    )}


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
          actualDate
          thumb {
            childImageSharp {
              gatsbyImageData(pngOptions: {quality: 10}, jpgOptions: {quality: 10}) 
            }
          }
        }
        html
      }
    }
  }
  
  `
