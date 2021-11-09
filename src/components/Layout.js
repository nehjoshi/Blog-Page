import React, { Fragment } from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
export default function Layout({ children }) {
    return (
        <Fragment style={{position: "relative"}}>
            <Navbar />
            <div>
                {children}
            </div>
            <Footer />
        </Fragment>
    )
}
