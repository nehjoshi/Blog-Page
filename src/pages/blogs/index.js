import React from 'react'
import Layout from '../../components/Layout';
import * as styles from '../../styles/blogs.module.css';

export default function BlogIndex() {

    const [active, setActive] = React.useState(1);

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
                    
                </section>
            </div>
        </Layout>
    )
}
