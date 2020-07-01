import React from 'react';

import Header from '../components/Header';
import Aux from '../hoc/Auxiliray';
import Container from 'react-bootstrap/Container';

const Layout = (props) => {
    return (
        <Aux>
            <Header />
            <main style={{ marginTop: "56px", display:"flex" }}>
                <Container className="my-5">
                    {props.children}
                </Container>
            </main>
        </Aux>
    )
}

export default Layout;