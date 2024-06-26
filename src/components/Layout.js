import React, { Fragment } from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <div>
                {children}
            </div>
            <Footer />  
        </>
    )
}
