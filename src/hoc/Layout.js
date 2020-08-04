import React from 'react';
import Header from '../components/Header';
import Container from 'react-bootstrap/Container';

const Layout = (props) => {
    return (
        <>
            <Header />
            <main style={{ marginTop: "56px", display:"flex"}}>
                <Container className="my-5">
                    {props.children}
                </Container>
            </main>
        </>
    )
}

export default Layout;