import React from 'react';
import Header from './Header'
import Footer from './Footer'




function Layout(props) {
    console.log(props)
    return (
        <>
            <Header />
            <main>
                <div> {props.children}</div>
            </main>
            <Footer />
        </>
    );
}

export default Layout;
